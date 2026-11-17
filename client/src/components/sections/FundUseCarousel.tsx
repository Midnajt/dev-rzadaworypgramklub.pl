import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent,
  type TransitionEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { fundUseCards } from "@/content/fund-use";
import { cn } from "@/lib/utils";

const CLONES = 2;
const DRAG_THRESHOLD = 48;
const LOCK_MS = 1000;
const PAGER_OFFSETS = [-2, -1, 0, 1, 2] as const;

type Slide = {
  key: string;
  id: string;
  image: string;
  clone: boolean;
};

function buildSlides(): Slide[] {
  const head = fundUseCards.slice(-CLONES).map((card) => ({
    key: `prev-${card.id}`,
    id: card.id,
    image: card.image,
    clone: true,
  }));
  const body = fundUseCards.map((card) => ({
    key: card.id,
    id: card.id,
    image: card.image,
    clone: false,
  }));
  const tail = fundUseCards.slice(0, CLONES).map((card) => ({
    key: `next-${card.id}`,
    id: card.id,
    image: card.image,
    clone: true,
  }));
  return [...head, ...body, ...tail];
}

const slides = buildSlides();

function wrapIndex(index: number) {
  const count = fundUseCards.length;
  if (index < CLONES) return index + count;
  if (index >= CLONES + count) return index - count;
  return index;
}

function pageOf(index: number) {
  const count = fundUseCards.length;
  return ((index - CLONES) % count + count) % count;
}

function dotBox(offset: number) {
  if (offset === 0) return { width: 32, height: 6 };
  if (Math.abs(offset) === 1) return { width: 5, height: 5 };
  return { width: 4, height: 4 };
}

function slotLeft(offset: number) {
  let x = 0;
  for (let cursor = -2; cursor < offset; cursor += 1) {
    x += dotBox(cursor).width + 8;
  }
  return x;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useLayoutEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  const path = direction === "left" ? "M14.5 5.5 8 12l6.5 6.5" : "M9.5 5.5 16 12l-6.5 6.5";
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FundUseCarousel() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lockRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const dragRef = useRef({
    pointerId: -1,
    startX: 0,
    startY: 0,
    dx: 0,
    tracking: false,
  });
  const [index, setIndex] = useState(CLONES);
  const [animate, setAnimate] = useState(true);
  const [offset, setOffset] = useState(0);
  const [stride, setStride] = useState(0);
  const [fits, setFits] = useState(false);

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
    const card = track?.querySelector<HTMLElement>("[data-fund-card]");
    if (!viewport || !track || !card) return;
    const styles = getComputedStyle(track);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
    const nextStride = card.getBoundingClientRect().width + gap;
    const count = fundUseCards.length;
    const total = count * nextStride - gap;
    setStride(nextStride);
    setFits(total <= viewport.clientWidth + 1);
  }, []);

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
      if (lockRef.current || fits) return;
      if (reduced) {
        setAnimate(false);
        setIndex((current) => wrapIndex(current + direction));
        return;
      }
      lockRef.current = true;
      timerRef.current = window.setTimeout(releaseLock, LOCK_MS);
      setAnimate(true);
      setIndex((current) => current + direction);
    },
    [fits, reduced, releaseLock],
  );

  const onTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    const next = wrapIndex(index);
    if (next !== index) {
      setAnimate(false);
      setIndex(next);
      return;
    }
    releaseLock();
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (fits || lockRef.current || event.button !== 0) return;
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
    setOffset(0);
    if (Math.abs(dx) >= DRAG_THRESHOLD) step(dx < 0 ? 1 : -1);
  };

  const translate = stride === 0 ? 0 : -index * stride + offset;
  const page = pageOf(index);
  const count = fundUseCards.length;
  const instant = !animate || reduced;

  return (
    <section className="section fund-use" aria-labelledby="fund-use-title">
      <div className="container fund-use__intro">
        <h2 id="fund-use-title">{t("home.fundUse.title")}</h2>
        <p className="fund-use__lead">{t("home.fundUse.lead")}</p>
      </div>
      <div
        ref={viewportRef}
        className={cn("fund-use__viewport", offset !== 0 && "is-dragging")}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          ref={trackRef}
          className={cn("fund-use__track", (!animate || reduced || offset !== 0) && "is-instant")}
          style={{ transform: `translateX(${translate}px)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((slide) => (
            <article
              key={slide.key}
              className="fund-card"
              data-fund-card=""
              aria-hidden={slide.clone || undefined}
            >
              <img
                className="fund-card__image"
                src={slide.image}
                alt={slide.clone ? "" : t(`home.fundUse.cards.${slide.id}.alt`)}
                width={1200}
                height={800}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <div className="fund-card__scrim" />
              <div className="fund-card__content">
                <p className="fund-card__title">{t(`home.fundUse.cards.${slide.id}.title`)}</p>
                <p className="fund-card__body">{t(`home.fundUse.cards.${slide.id}.body`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="container fund-use__toolbar">
        {fits ? null : (
          <div className={cn("fund-use__pager", instant && "is-instant")} aria-hidden="true">
            {PAGER_OFFSETS.map((offset) => {
              const cardIndex = (page + offset + count) % count;
              const box = dotBox(offset);
              return (
                <span
                  key={fundUseCards[cardIndex].id}
                  className={cn("fund-use__dot", offset === 0 && "is-active")}
                  style={{ left: slotLeft(offset), width: box.width, height: box.height }}
                />
              );
            })}
          </div>
        )}
        <div className="fund-use__nav">
          <button type="button" onClick={() => step(-1)} disabled={fits} aria-label={t("home.fundUse.prev")}>
            <Chevron direction="left" />
          </button>
          <button type="button" onClick={() => step(1)} disabled={fits} aria-label={t("home.fundUse.next")}>
            <Chevron direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
