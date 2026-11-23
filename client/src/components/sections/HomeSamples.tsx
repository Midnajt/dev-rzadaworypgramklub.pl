import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { StepScroll } from "@/components/sections/StepScroll";

const REVEAL_CARDS = ["one", "two"] as const;

/** Preview of the Squarespace-style blocks from docs/ux_squarespace_wzor_promptow_20261117.md. */
export function HomeSamples() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section section--surface" aria-labelledby="sample-reveal-title">
        <div className="container">
          <p className="section__eyebrow">{t("home.samples.eyebrow")}</p>
          <h2 className="sample-heading">{t("home.samples.title")}</h2>
          <p className="sample-note">{t("home.samples.intro")}</p>
          <p className="section__eyebrow sample-pattern">{t("home.samples.reveal.eyebrow")}</p>
          <p className="sample-note">{t("home.samples.reveal.note")}</p>
          <Reveal as="h2" id="sample-reveal-title" className="sample-display" delay={0} rootMargin="0px 0px -18% 0px" threshold={0.2}>
            {t("home.samples.reveal.title")}
          </Reveal>
          <Reveal as="p" className="sample-lead" delay={120} rootMargin="0px 0px -18% 0px" threshold={0.2}>
            {t("home.samples.reveal.lead")}
          </Reveal>
          <div className="sample-pair">
            {REVEAL_CARDS.map((id, index) => (
              <Reveal key={id} className="sample-entry-wrap" delay={240 + index * 120} rootMargin="0px 0px -12% 0px" threshold={0.15}>
                <article className="sample-entry">
                  <h3>{t(`home.samples.reveal.cards.${id}.title`)}</h3>
                  <p>{t(`home.samples.reveal.cards.${id}.body`)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <StepScroll />
    </>
  );
}
