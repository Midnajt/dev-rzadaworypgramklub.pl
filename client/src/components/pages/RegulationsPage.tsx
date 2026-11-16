import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";

export function RegulationsPage() {
  const { t } = useTranslation();

  return (
    <main id="main" className="page" tabIndex={-1}>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("regulations.eyebrow")}</p>
          <h1>{t("regulations.title")}</h1>
          <p>{t("regulations.lead")}</p>
        </Reveal>
      </section>
    </main>
  );
}
