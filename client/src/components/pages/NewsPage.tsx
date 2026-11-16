import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";

export function NewsPage() {
  const { t } = useTranslation();

  return (
    <main id="main" className="page" tabIndex={-1}>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("news.eyebrow")}</p>
          <h1>{t("news.title")}</h1>
          <p>{t("news.lead")}</p>
        </Reveal>
      </section>
    </main>
  );
}
