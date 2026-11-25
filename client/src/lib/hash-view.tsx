import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { newsArchiveAnchor } from "@/content/news";

// New view: extend ViewName, add a case in parseHash and viewHref,
// a branch in App.tsx, meta keys in DocumentMeta and the hash in HASH_PAGES (vite.config.ts).
export type ViewName =
  | "home"
  | "news"
  | "faq"
  | "regulations"
  | "basics"
  | "downloads"
  | "contact"
  | "notFound";

export type HashView = {
  name: ViewName;
  slug?: string;
  /** In-page target, the segment after a known view: `#/regulamin/nabor`. */
  anchor?: string;
};

export function parseHash(raw: string): HashView {
  const trimmed = raw.replace(/^#/, "").replace(/^\//, "");
  if (!trimmed) return { name: "home" };

  const [head, ...rest] = trimmed.split("/");

  switch (head) {
    case "aktualnosci": {
      const segment = rest[0];
      if (!segment) return { name: "news" };
      if (segment === newsArchiveAnchor && rest.length === 1) {
        return { name: "news", anchor: segment };
      }
      const anchor = rest[1];
      return anchor ? { name: "news", slug: segment, anchor } : { name: "news", slug: segment };
    }
    case "faq":
      return { name: "faq", anchor: rest[0] };
    case "regulamin":
      return { name: "regulations", anchor: rest[0] };
    case "podstawowe-informacje":
      return { name: "basics", anchor: rest[0] };
    case "do-pobrania":
      return { name: "downloads", anchor: rest[0] };
    case "kontakt":
      return { name: "contact", anchor: rest[0] };
    case "404":
      return { name: "notFound" };
    default:
      return { name: "notFound" };
  }
}

export function viewHref(view: HashView): string {
  switch (view.name) {
    case "home":
      return "#";
    case "news":
      if (view.slug && view.anchor) return `#/aktualnosci/${view.slug}/${view.anchor}`;
      if (view.slug) return `#/aktualnosci/${view.slug}`;
      if (view.anchor) return `#/aktualnosci/${view.anchor}`;
      return "#/aktualnosci";
    case "faq":
      return "#/faq";
    case "regulations":
      return view.anchor ? `#/regulamin/${view.anchor}` : "#/regulamin";
    case "basics":
      return "#/podstawowe-informacje";
    case "downloads":
      return view.anchor ? `#/do-pobrania/${view.anchor}` : "#/do-pobrania";
    case "contact":
      return "#/kontakt";
    case "notFound":
      return "#/404";
  }
}

export function hashPath(view: HashView): string {
  const href = viewHref(view);
  return href === "#" ? "/" : `/${href}`;
}

export function normalizeHash(raw: string): string {
  return raw.replace(/^#/, "").replace(/^\//, "").replace(/\/$/, "");
}

type HashViewContextValue = {
  view: HashView;
  goTo: (next: HashView | string) => void;
  scrollTick: number;
};

const HashViewContext = createContext<HashViewContextValue | null>(null);

export function HashViewProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<HashView>(() =>
    typeof window === "undefined" ? { name: "home" } : parseHash(window.location.hash),
  );
  const [scrollTick, setScrollTick] = useState(0);

  useEffect(() => {
    const onHash = () => setView(parseHash(window.location.hash));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const goTo = useCallback((next: HashView | string) => {
    const href = typeof next === "string" ? (next.startsWith("#") ? next : `#${next}`) : viewHref(next);
    const current = normalizeHash(window.location.hash);
    const target = normalizeHash(href);

    if (href === "#" || href === "") {
      if (window.location.hash) {
        window.location.hash = "";
      } else {
        setView({ name: "home" });
        setScrollTick((n) => n + 1);
      }
      return;
    }

    if (current === target) {
      setScrollTick((n) => n + 1);
      return;
    }

    window.location.hash = href.replace(/^#/, "");
  }, []);

  const value = useMemo(() => ({ view, goTo, scrollTick }), [view, goTo, scrollTick]);

  return <HashViewContext.Provider value={value}>{children}</HashViewContext.Provider>;
}

export function useHashView() {
  const ctx = useContext(HashViewContext);
  if (!ctx) throw new Error("useHashView must be used within HashViewProvider");
  return ctx;
}
