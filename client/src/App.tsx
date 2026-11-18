import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DocumentMeta } from "@/components/layout/DocumentMeta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ThemeBar } from "@/components/layout/ThemeBar";
import { IntroFade } from "@/components/motion/IntroFade";
import { BasicsPage } from "@/components/pages/BasicsPage";
import { ContactPage } from "@/components/pages/ContactPage";
import { DownloadsPage } from "@/components/pages/DownloadsPage";
import { FaqPage } from "@/components/pages/FaqPage";
import { HomePage } from "@/components/pages/HomePage";
import { NewsPage } from "@/components/pages/NewsPage";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { RegulationsPage } from "@/components/pages/RegulationsPage";
import { findNewsPost } from "@/content/news";
import { useHashView } from "@/lib/hash-view";

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
    window.scrollTo(0, 0);
  }, [view.name, view.slug, scrollTick]);

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
      <ThemeBar />
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
