import { useTranslation } from "react-i18next";
import { HashLink } from "@/components/layout/HashLink";
import { PageFrame } from "@/components/layout/PageBanner";
import { Reveal } from "@/components/motion/Reveal";

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("notFound.eyebrow")}</p>
          <h1>{t("notFound.title")}</h1>
          <p>{t("notFound.lead")}</p>
          <p className="page-hero__actions">
            <HashLink className="btn btn--primary" to="#">
              {t("notFound.backHome")}
            </HashLink>
          </p>
        </Reveal>
      </section>
    </PageFrame>
  );
}
