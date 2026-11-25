import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AccessibilityToolbar } from "@/components/layout/AccessibilityToolbar";
import { DocumentMeta } from "@/components/layout/DocumentMeta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { IntroFade } from "@/components/motion/IntroFade";
import { BasicsPage } from "@/components/pages/BasicsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { DownloadsPage } from "@/components/pages/DownloadsPage";
import { GalleryPage } from "@/components/pages/GalleryPage";
import { FaqPage } from "@/components/pages/FaqPage";
import { HomePage } from "@/components/pages/HomePage";
import { NewsPage } from "@/components/pages/NewsPage";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { RegulationsPage } from "@/components/pages/RegulationsPage";
import { findNewsPost } from "@/content/news";
import { useHashView } from "@/lib/hash-view";

/** Same offset as today: `scroll-padding-top` on `html` and `scroll-margin` on the target. */
function scrollToHashTarget(anchor: string | undefined) {
  const behavior: ScrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "instant"
    : "smooth";
  const el = anchor ? document.getElementById(anchor) : null;
  if (!el) {
    window.scrollTo({ top: 0, left: 0, behavior });
    return;
  }
  el.scrollIntoView({ block: "start", behavior });
}

function CurrentView() {
  const { view } = useHashView();
  switch (view.name) {
    case "home":
      return <HomePage />;
    case "news":
      if (view.slug && !findNewsPost(view.slug)) return <NotFoundPage />;
      return <NewsPage />;
    case "faq":
      return <FaqPage />;
    case "regulations":
      return <RegulationsPage />;
    case "basics":
      return <BasicsPage />;
    case "downloads":
      return <DownloadsPage />;
    case "gallery":
      return <GalleryPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const { view, scrollTick } = useHashView();
  const { t } = useTranslation();
  const newsPost = view.name === "news" ? findNewsPost(view.slug) : undefined;
  const missingNews = view.name === "news" && Boolean(view.slug) && !newsPost;

  useEffect(() => {
    scrollToHashTarget(view.anchor);
  }, [view.name, view.slug, view.anchor, scrollTick]);

  return (
    <>
      <IntroFade />
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        {t("skip")}
      </a>
      <AccessibilityToolbar />
      <DocumentMeta
        view={missingNews ? { name: "notFound" } : view}
        pageTitle={newsPost?.title}
      />
      <Navbar />
      <CurrentView />
      <Footer />
    </>
  );
}
