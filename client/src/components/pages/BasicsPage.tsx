import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { HashLink } from "@/components/layout/HashLink";
import { PageFrame } from "@/components/layout/PageBanner";
import { basicsBlocks, basicsIntro, basicsNote, basicsSteps } from "@/content/basics";

export function BasicsPage() {
  const { t } = useTranslation();

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
      <section className="section section--surface">
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
            <Reveal key={block.id} className="info-block" as="article">
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
