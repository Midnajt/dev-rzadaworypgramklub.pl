import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import regulaminText from "@/content/regulamin.txt?raw";

function paragraphs(source: string): string[] {
  return source
    .split(/\n{2,}/)
    .map((block) => block.replace(/\s+\n/g, "\n").trim())
    .filter(Boolean);
}

export function RegulationsPage() {
  const { t } = useTranslation();
  const blocks = paragraphs(regulaminText);

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("regulations.eyebrow")}</p>
          <h1>{t("regulations.title")}</h1>
          <p>{t("regulations.lead")}</p>
        </Reveal>
      </section>
      <section className="section">
        <article className="container prose-wide legal">
          {blocks.map((block) => {
            if (/^§\s*\d+/.test(block) || block === "UWAGA:" || block === "WAŻNA INFORMACJA:") {
              return (
                <h2 key={block} className="legal__heading">
                  {block}
                </h2>
              );
            }
            if (
              block === "Postanowienia ogólne" ||
              block.startsWith("Założenia") ||
              block.startsWith("Zasady") ||
              block.startsWith("Obowiązki") ||
              block.startsWith("Postanowienia końcowe") ||
              block.startsWith("Kryteria") ||
              block.startsWith("Przyczyny") ||
              block.startsWith("Ogłoszenie") ||
              block.startsWith("Dokumenty")
            ) {
              return <h3 key={block}>{block}</h3>;
            }
            if (block.includes("\n- ") || block.startsWith("- ")) {
              const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
              return (
                <ul key={block}>
                  {lines.map((line) => (
                    <li key={line}>{line.replace(/^- /, "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={block}>{block}</p>;
          })}
        </article>
      </section>
    </PageFrame>
  );
}
