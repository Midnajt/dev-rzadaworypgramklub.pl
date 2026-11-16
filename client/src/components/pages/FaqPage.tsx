import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";

export function FaqPage() {
  const { t } = useTranslation();

  return (
    <main id="main" className="page" tabIndex={-1}>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("faq.eyebrow")}</p>
          <h1>{t("faq.title")}</h1>
          <p>{t("faq.lead")}</p>
        </Reveal>
      </section>
    </main>
  );
}
