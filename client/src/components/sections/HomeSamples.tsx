import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { nationalHelpline, voivodeshipHelplines } from "@/content/contact";
import { site } from "@/config/site";

/** Contact block on the homepage, in the old reveal-and-cards frame. */
export function HomeContact() {
  const { t } = useTranslation();

  return (
    <section className="section section--surface" aria-labelledby="home-contact-title">
      <div className="container">
        <p className="section__eyebrow">{t("contact.eyebrow")}</p>
        <Reveal
          as="h2"
          id="home-contact-title"
          className="sample-display"
          delay={0}
          rootMargin="0px 0px -18% 0px"
          threshold={0.2}
        >
          <a href={`tel:${site.phoneNational}`}>{site.phoneNationalDisplay}</a>
        </Reveal>
        <Reveal as="p" className="sample-lead" delay={120} rootMargin="0px 0px -18% 0px" threshold={0.2}>
          {nationalHelpline.region}
          {". "}
          {t("contact.lead", { hours: site.helplineHours })}
        </Reveal>
        <div className="sample-pair">
          <Reveal className="sample-entry-wrap" delay={240} rootMargin="0px 0px -12% 0px" threshold={0.15}>
            <article className="sample-entry">
              <h3>{site.address.org}</h3>
              <p>
                {site.address.street}
                <br />
                {site.address.city}
              </p>
            </article>
          </Reveal>
          <Reveal className="sample-entry-wrap" delay={360} rootMargin="0px 0px -12% 0px" threshold={0.15}>
            <article className="sample-entry">
              <h3>{t("contact.emailOffice")}</h3>
              <p>
                <a href={`mailto:${site.emailOffice}`}>{site.emailOffice}</a>
              </p>
              <h3>{t("contact.emailHelp")}</h3>
              <p>
                <a href={`mailto:${site.emailHelp}`}>{site.emailHelp}</a>
              </p>
            </article>
          </Reveal>
        </div>
        <details className="home-operators">
          <summary>{t("contact.voivodeshipTitle")}</summary>
          <ul className="helpline-list">
            {voivodeshipHelplines.map((line) => (
              <li key={line.id}>
                <span>{line.region}</span>
                <a href={`tel:${line.phone}`}>{line.display}</a>
              </li>
            ))}
          </ul>
        </details>
      </div>
    </section>
  );
}
