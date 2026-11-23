import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type TransitionEvent,
} from "react";
import { HashLink } from "@/components/layout/HashLink";
import { Reveal } from "@/components/motion/Reveal";
import { useReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";

const CLONES = 3;
const DRAG_THRESHOLD = 48;
const LOCK_MS = 800;

export type TextCard = {
  id: string;
  title: string;
  body: string;
  /** Without a link the card is plain text. */
  href?: string;
};

type Slide = TextCard & {
  key: string;
  clone: boolean;
};

type Metrics = {
  stride: number;
  visible: number;
  fits: boolean;
};

type TextCardCarouselProps = {
  id: string;
  title: string;
  cards: readonly TextCard[];
  prevLabel: string;
  nextLabel: string;
  className?: string;
};

function buildSlides(cards: readonly TextCard[]): Slide[] {
  const head = cards.slice(-CLONES).map((card) => ({ ...card, key: `prev-${card.id}`, clone: true }));
  const body = cards.map((card) => ({ ...card, key: card.id, clone: false }));
  const tail = cards.slice(0, CLONES).map((card) => ({ ...card, key: `next-${card.id}`, clone: true }));
  return [...head, ...body, ...tail];
}

function wrapIndex(index: number, count: number) {
  if (index < CLONES) return index + count;
  if (index >= CLONES + count) return index - count;
  return index;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  const path = direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5";
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path d={path} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TextCardCarousel({ id, title, cards, prevLabel, nextLabel, className }: TextCardCarouselProps) {
  const slides = useMemo(() => buildSlides(cards), [cards]);
  const count = cards.length;
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const suppressClick = useRef(false);
  const dragRef = useRef({ pointerId: -1, startX: 0, startY: 0, dx: 0, tracking: false });
  const [index, setIndex] = useState(CLONES);
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const [metrics, setMetrics] = useState<Metrics>({ stride: 0, visible: 1, fits: false });

  const releaseLock = useCallback(() => {
    lockRef.current = false;
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("[data-text-card]");
    if (!viewport || !track || !card) return;
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const stride = card.getBoundingClientRect().width + gap;
    const width = viewport.clientWidth;
    const total = count * stride - gap;
    const visible = stride > 0 ? Math.max(1, Math.min(count, Math.round((width + gap) / stride))) : 1;
    const fits = total <= width + 1;
    setMetrics((current) =>
      current.stride === stride && current.visible === visible && current.fits === fits
        ? current
        : { stride, visible, fits },
    );
  }, [count]);

  useLayoutEffect(() => {
    measure();
    const viewport = viewportRef.current;
    if (!viewport) return;
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [measure]);

  useEffect(() => {
    if (animate) return;
    const frame = window.requestAnimationFrame(() => {
      setAnimate(true);
      releaseLock();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [animate, releaseLock]);

  const step = useCallback(
    (direction: 1 | -1) => {
      if (lockRef.current || metrics.fits) return;
      if (reduced) {
        setAnimate(false);
        setIndex((current) => wrapIndex(current + direction, count));
        return;
      }
      lockRef.current = true;
      timerRef.current = window.setTimeout(releaseLock, LOCK_MS);
      setAnimate(true);
      setIndex((current) => current + direction);
    },
    [count, metrics.fits, reduced, releaseLock],
  );

  const onTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    const next = wrapIndex(index, count);
    if (next !== index) {
      setAnimate(false);
      setIndex(next);
      return;
    }
    releaseLock();
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (metrics.fits || lockRef.current || event.button !== 0) return;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      dx: 0,
      tracking: true,
    };
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.tracking || event.pointerId !== drag.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    const captured = event.currentTarget.hasPointerCapture(event.pointerId);
    if (!captured) {
      if (Math.abs(dx) < 8 || Math.abs(dx) <= Math.abs(dy)) return;
      event.currentTarget.setPointerCapture(event.pointerId);
    }
    drag.dx = dx;
    setOffset(dx);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag.tracking || event.pointerId !== drag.pointerId) return;
    const dx = drag.dx;
    dragRef.current = { ...drag, tracking: false, dx: 0 };
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(dx) > 8) suppressClick.current = true;
    setOffset(0);
    if (Math.abs(dx) >= DRAG_THRESHOLD) step(dx < 0 ? 1 : -1);
  };

  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!suppressClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClick.current = false;
  };

  const origin = metrics.fits ? CLONES : index;
  const translate = metrics.stride === 0 ? 0 : -origin * metrics.stride + (metrics.fits ? 0 : offset);
  const instant = !animate || reduced || offset !== 0;

  return (
    <section className={cn("section text-carousel", className)} aria-labelledby={id}>
      <div className="container">
        <Reveal as="h2" id={id} rootMargin="0px 0px -18% 0px" threshold={0.2}>
          {title}
        </Reveal>
        <div
          ref={viewportRef}
          className={cn("text-carousel__viewport", offset !== 0 && "is-dragging")}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
        >
          <div
            ref={trackRef}
            className={cn("text-carousel__track", instant && "is-instant")}
            style={{ transform: `translateX(${translate}px)` }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((slide, trackIndex) => {
              const inView = metrics.stride === 0 ? !slide.clone : trackIndex >= origin && trackIndex < origin + metrics.visible;
              const content = (
                <>
                  <h3>{slide.title}</h3>
                  <p>{slide.body}</p>
                </>
              );
              const hidden = {
                "aria-hidden": inView ? undefined : true,
                inert: inView ? undefined : true,
              } as const;
              return slide.href ? (
                <HashLink
                  key={slide.key}
                  to={slide.href}
                  className="text-carousel__card"
                  data-text-card=""
                  {...hidden}
                  tabIndex={inView ? undefined : -1}
                  draggable={false}
                >
                  {content}
                </HashLink>
              ) : (
                <article key={slide.key} className="text-carousel__card" data-text-card="" {...hidden}>
                  {content}
                </article>
              );
            })}
          </div>
        </div>
        <div className="text-carousel__toolbar">
          <div className="text-carousel__nav">
            <button type="button" onClick={() => step(-1)} disabled={metrics.fits} aria-label={prevLabel}>
              <Chevron direction="left" />
            </button>
            <button type="button" onClick={() => step(1)} disabled={metrics.fits} aria-label={nextLabel}>
              <Chevron direction="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
