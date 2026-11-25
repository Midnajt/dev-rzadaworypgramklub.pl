import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { HashLink } from "@/components/layout/HashLink";
import { PageFrame } from "@/components/layout/PageBanner";
import { TextCardCarousel } from "@/components/sections/TextCardCarousel";
import { basicsBlocks, basicsHighlights, basicsIntro, basicsNote, basicsSteps } from "@/content/basics";

export function BasicsPage() {
  const { t } = useTranslation();
  const highlights = useMemo(
    () =>
      basicsHighlights.map((id) => ({
        id,
        title: t(`basics.highlights.items.${id}.title`),
        body: t(`basics.highlights.items.${id}.body`),
      })),
    [t],
  );

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("basics.eyebrow")}</p>
          <h1>{t("basics.title")}</h1>
          <p>{t("basics.lead")}</p>
          <p>{basicsIntro}</p>
        </Reveal>
      </section>
      <TextCardCarousel
        id="basics-highlights-title"
        title={t("basics.highlights.title")}
        cards={highlights}
        prevLabel={t("basics.highlights.prev")}
        nextLabel={t("basics.highlights.next")}
      />
      <section className="section section--surface" id="kroki">
        <Reveal className="container">
          <h2>{t("basics.stepsTitle")}</h2>
          <ol className="step-list">
            {basicsSteps.map((step, index) => (
              <li key={step.id} className="step-list__item">
                <span className="step-list__num">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
      <section className="section">
        <div className="container prose-wide">
          {basicsBlocks.map((block) => (
            <article key={block.id} id={block.id} className="info-block">
              <Reveal>
                <h2>{block.title}</h2>
                {block.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {block.bullets ? (
                  <ul>
                    {block.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            </article>
          ))}
          <p className="note">{basicsNote}</p>
          <p>
            <HashLink to="#/regulamin">{t("basics.toRegulations")}</HashLink>
          </p>
        </div>
      </section>
    </PageFrame>
  );
}
