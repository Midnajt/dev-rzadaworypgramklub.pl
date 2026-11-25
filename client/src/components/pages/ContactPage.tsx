import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { ContactPanel } from "@/components/sections/HomeSamples";

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("contact.eyebrow")}</p>
          <h1>{t("contact.title")}</h1>
        </Reveal>
      </section>
      <section className="section section--surface">
        <ContactPanel leadId="godziny" showEyebrow={false} />
      </section>
    </PageFrame>
  );
}
