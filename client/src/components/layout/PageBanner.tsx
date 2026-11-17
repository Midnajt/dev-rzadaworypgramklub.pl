import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type AnimationEvent,
  type ReactNode,
} from "react";
import { assets, type BannerId } from "@/config/assets";
import { useHashView, type HashView } from "@/lib/hash-view";

type Shot = { src: string; position: string };

// Each view remounts PageBanner with its own PageFrame. The last frame stays
// here so the next mount can fade in over it. The timeout drops that memory
// when the banner actually leaves the screen (the home view has none).
let remembered: Shot | null = null;
let epoch = 0;

const position: Record<BannerId, string> = {
  basics: "center 35%",
  regulations: "center 42%",
  downloads: "center 40%",
  contact: "center 70%",
  faq: "center 32%",
  news: "center 42%",
  newsResults: "center 48%",
  newsRecord: "center 28%",
  newsNotice: "center 40%",
  newsStatement: "center 42%",
  newsOpening: "center 45%",
  newsCall: "center 50%",
  notFound: "center 40%",
};

const newsBanner: Record<string, BannerId> = {
  "wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026": "newsResults",
  "mamy-rekord-w-ramach-rzadowego-programu-klub-edycja-2026-zlozono-az-9032-wnioski": "newsRecord",
  "wazna-informacja-operatora-krajowego-rzadowego-programu-klub": "newsNotice",
  "wazny-komunikat-krajowego-zrzeszenia-lzs-2": "newsStatement",
  "dzisiaj-rusza-nabor-wnioskow-do-rzadowego-programu-klub": "newsOpening",
  "nabor-wnioskow-program-klub-2026": "newsCall",
};

function bannerId(view: HashView): BannerId {
  if (view.name === "news") {
    if (!view.slug) return "news";
    return newsBanner[view.slug] ?? "notFound";
  }
  if (view.name === "home") return "news";
  return view.name;
}

function BannerPhoto({
  shot,
  incoming,
  onSettled,
}: {
  shot: Shot;
  incoming: boolean;
  onSettled: () => void;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!incoming) return;
    const img = ref.current;
    if (!img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onSettled();
      return;
    }

    const start = () => setPlaying(true);
    if (img.complete && img.naturalWidth > 0) {
      start();
      return;
    }
    img.addEventListener("load", start);
    img.addEventListener("error", start);
    return () => {
      img.removeEventListener("load", start);
      img.removeEventListener("error", start);
    };
  }, [incoming, onSettled, shot.src]);

  useEffect(() => {
    if (!playing || !incoming) return;
    const timer = window.setTimeout(onSettled, 1200);
    return () => window.clearTimeout(timer);
  }, [playing, incoming, onSettled]);

  const className = incoming
    ? playing
      ? "page-banner__photo page-banner__photo--in is-playing"
      : "page-banner__photo page-banner__photo--in"
    : "page-banner__photo";

  return (
    <img
      ref={ref}
      className={className}
      src={shot.src}
      alt=""
      style={{ objectPosition: shot.position }}
      onAnimationEnd={(event: AnimationEvent<HTMLImageElement>) => {
        if (!incoming || event.target !== event.currentTarget) return;
        if (event.animationName !== "banner-crossfade") return;
        onSettled();
      }}
    />
  );
}

export function PageBanner() {
  const { view } = useHashView();
  const id = bannerId(view);
  const src = assets.banners[id];
  const objectPosition = position[id];

  const [stack, setStack] = useState<Shot[]>(() => {
    const current = { src, position: objectPosition };
    if (remembered && remembered.src !== src) return [remembered, current];
    return [current];
  });

  const top = stack[stack.length - 1];
  if (top.src !== src) {
    setStack([
      { src: top.src, position: top.position },
      { src, position: objectPosition },
    ]);
  } else if (top.position !== objectPosition) {
    setStack([{ src, position: objectPosition }]);
  }

  const settle = useCallback(() => {
    setStack((items) => (items.length > 1 ? items.slice(-1) : items));
  }, []);

  useEffect(() => {
    remembered = { src, position: objectPosition };
    const mine = ++epoch;
    return () => {
      window.setTimeout(() => {
        if (epoch === mine) remembered = null;
      }, 0);
    };
  }, [src, objectPosition]);

  return (
    <div className="page-banner">
      {stack.map((shot, index) => (
        <BannerPhoto
          key={shot.src}
          shot={shot}
          incoming={index === stack.length - 1 && stack.length > 1}
          onSettled={settle}
        />
      ))}
    </div>
  );
}

export function PageFrame({ children }: { children: ReactNode }) {
  return (
    <main id="main" className="page" tabIndex={-1}>
      <PageBanner />
      {children}
    </main>
  );
}
