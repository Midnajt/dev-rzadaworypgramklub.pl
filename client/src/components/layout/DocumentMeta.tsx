import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { site } from "@/config/site";
import { hashPath, type HashView, type ViewName } from "@/lib/hash-view";

const META: Record<ViewName, { title: string; desc: string }> = {
  home: { title: "meta.homeTitle", desc: "meta.homeDesc" },
  news: { title: "meta.newsTitle", desc: "meta.newsDesc" },
  faq: { title: "meta.faqTitle", desc: "meta.faqDesc" },
  regulations: { title: "meta.regulationsTitle", desc: "meta.regulationsDesc" },
  basics: { title: "meta.basicsTitle", desc: "meta.basicsDesc" },
  downloads: { title: "meta.downloadsTitle", desc: "meta.downloadsDesc" },
  gallery: { title: "meta.galleryTitle", desc: "meta.galleryDesc" },
  contact: { title: "meta.contactTitle", desc: "meta.contactDesc" },
  notFound: { title: "meta.notFoundTitle", desc: "meta.notFoundDesc" },
};

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let el = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function DocumentMeta({ view, pageTitle }: { view: HashView; pageTitle?: string }) {
  const { t } = useTranslation();
  const keys = META[view.name];
  const title = pageTitle ?? t(keys.title);
  const description = t(keys.desc);
  const url = `${site.url}${hashPath(view)}`;

  useEffect(() => {
    document.title = title;
    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (view.name === "notFound") {
      canonical?.remove();
      setMeta("robots", "noindex,follow");
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", url);
      document.head.querySelector('meta[name="robots"]')?.remove();
    }
  }, [title, description, url, view.name]);

  return null;
}
