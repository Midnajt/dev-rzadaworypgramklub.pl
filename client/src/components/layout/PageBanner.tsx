import type { ReactNode } from "react";
import { assets, type BannerId } from "@/config/assets";
import { useHashView, type HashView } from "@/lib/hash-view";

const position: Record<BannerId, string> = {
  basics: "center 35%",
  regulations: "center 42%",
  downloads: "center 40%",
  contact: "center 70%",
  faq: "center 45%",
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

export function PageBanner() {
  const { view } = useHashView();
  const id = bannerId(view);

  return (
    <div className="page-banner">
      <img src={assets.banners[id]} alt="" style={{ objectPosition: position[id] }} />
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
