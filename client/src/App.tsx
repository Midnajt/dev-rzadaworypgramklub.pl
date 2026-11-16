import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { DocumentMeta } from "@/components/layout/DocumentMeta";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { IntroFade } from "@/components/motion/IntroFade";
import { FaqPage } from "@/components/pages/FaqPage";
import { HomePage } from "@/components/pages/HomePage";
import { NewsPage } from "@/components/pages/NewsPage";
import { NotFoundPage } from "@/components/pages/NotFoundPage";
import { RegulationsPage } from "@/components/pages/RegulationsPage";
import { useHashView } from "@/lib/hash-view";

function CurrentView() {
  const { view } = useHashView();
  switch (view.name) {
    case "home":
      return <HomePage />;
    case "news":
      return <NewsPage />;
    case "faq":
      return <FaqPage />;
    case "regulations":
      return <RegulationsPage />;
    default:
      return <NotFoundPage />;
  }
}

export default function App() {
  const { view, scrollTick } = useHashView();
  const { t } = useTranslation();

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
      <DocumentMeta view={view} />
      <Navbar />
      <CurrentView />
      <Footer />
    </>
  );
}
