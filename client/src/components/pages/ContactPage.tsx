import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { site } from "@/config/site";
import { nationalHelpline, voivodeshipHelplines } from "@/content/contact";

export function ContactPage() {
  const { t } = useTranslation();

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("contact.eyebrow")}</p>
          <h1>{t("contact.title")}</h1>
          <p id="godziny" className="scroll-anchor">{t("contact.lead", { hours: site.helplineHours })}</p>
        </Reveal>
      </section>
      <section className="section section--surface">
        <div className="container contact-grid">
          <Reveal as="article">
            <h2>{t("contact.addressTitle")}</h2>
            <p>
              {site.address.org}
              <br />
              {site.address.street}
              <br />
              {site.address.city}
            </p>
            <p>
              <a href={`mailto:${site.emailOffice}`}>{site.emailOffice}</a>
              <br />
              <span>{t("contact.emailOffice")}</span>
            </p>
            <p>
              <a href={`mailto:${site.emailHelp}`}>{site.emailHelp}</a>
              <br />
              <span>{t("contact.emailHelp")}</span>
            </p>
          </Reveal>
          <Reveal as="article">
            <h2>{t("contact.nationalTitle")}</h2>
            <p>
              {nationalHelpline.region}
              <br />
              <a href={`tel:${nationalHelpline.phone}`}>{nationalHelpline.display}</a>
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <Reveal className="container">
          <h2>{t("contact.voivodeshipTitle")}</h2>
          <ul className="helpline-list">
            {voivodeshipHelplines.map((line) => (
              <li key={line.id}>
                <span>{line.region}</span>
                <a href={`tel:${line.phone}`}>{line.display}</a>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>
    </PageFrame>
  );
}
