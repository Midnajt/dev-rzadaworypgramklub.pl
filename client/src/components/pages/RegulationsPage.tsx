import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { Highlight } from "@/components/search/Highlight";
import regulaminText from "@/content/regulamin.txt?raw";

type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "p"; text: string };

type Section = { id: string; blocks: Block[] };

function matches(query: string, text: string): boolean {
  return text.toLocaleLowerCase("pl").includes(query);
}

function paragraphs(source: string): string[] {
  return source
    .split(/\n{2,}/)
    .map((block) => block.replace(/\s+\n/g, "\n").trim())
    .filter(Boolean);
}

function isHeading(block: string): boolean {
  return /^§\s*\d+/.test(block) || block === "UWAGA:" || block === "WAŻNA INFORMACJA:";
}

function isSubheading(block: string): boolean {
  return (
    block === "Postanowienia ogólne" ||
    block.startsWith("Założenia") ||
    block.startsWith("Zasady") ||
    block.startsWith("Obowiązki") ||
    block.startsWith("Postanowienia końcowe") ||
    block.startsWith("Kryteria") ||
    block.startsWith("Przyczyny") ||
    block.startsWith("Ogłoszenie") ||
    block.startsWith("Dokumenty")
  );
}

function toBlock(raw: string): Block {
  if (isHeading(raw)) return { kind: "h2", text: raw };
  if (isSubheading(raw)) return { kind: "h3", text: raw };
  if (raw.includes("\n- ") || raw.startsWith("- ")) {
    return {
      kind: "list",
      items: raw
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => line.replace(/^- /, "")),
    };
  }
  return { kind: "p", text: raw };
}

function haystack(block: Block): string {
  return block.kind === "list" ? block.items.join("\n") : block.text;
}

function sectionsOf(source: string): Section[] {
  const sections: Section[] = [];
  let blocks: Block[] = [];
  let id = "wstep";

  const flush = () => {
    if (!blocks.length) return;
    sections.push({ id, blocks });
    blocks = [];
  };

  paragraphs(source).forEach((raw, index) => {
    const block = toBlock(raw);
    const starts = block.kind === "h2" || raw === "(*)";
    if (starts && blocks.length) flush();
    if (starts) id = block.kind === "h2" ? block.text : `przypis-${index}`;
    blocks.push(block);
  });
  flush();
  return sections;
}

function filterSection(section: Section, needle: string): Section | null {
  const [first, ...rest] = section.blocks;
  const h2 = first?.kind === "h2" ? first : null;
  const body = h2 ? rest : section.blocks;
  if (h2 && matches(needle, h2.text)) return section;

  const chunks: Block[][] = [];
  let current: Block[] = [];
  for (const block of body) {
    if (block.kind === "h3" && current.length) {
      chunks.push(current);
      current = [block];
    } else {
      current.push(block);
    }
  }
  if (current.length) chunks.push(current);

  const kept: Block[] = [];
  for (const chunk of chunks) {
    const sub = chunk[0]?.kind === "h3" ? chunk[0] : null;
    const content = sub ? chunk.slice(1) : chunk;
    if (sub && matches(needle, sub.text)) {
      kept.push(...chunk);
      continue;
    }
    const hits = content.filter((block) => matches(needle, haystack(block)));
    if (!hits.length) continue;
    if (sub) kept.push(sub);
    kept.push(...hits);
  }

  if (!kept.length) return null;
  return { id: section.id, blocks: h2 ? [h2, ...kept] : kept };
}

function BlockView({ block, needle }: { block: Block; needle: string }) {
  if (block.kind === "h2") {
    return (
      <h2 className="legal__heading">
        <Highlight text={block.text} needle={needle} />
      </h2>
    );
  }
  if (block.kind === "h3") {
    return (
      <h3>
        <Highlight text={block.text} needle={needle} />
      </h3>
    );
  }
  if (block.kind === "list") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>
            <Highlight text={item} needle={needle} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p>
      <Highlight text={block.text} needle={needle} />
    </p>
  );
}

export function RegulationsPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase("pl");
  const sections = useMemo(() => sectionsOf(regulaminText), []);

  const visible = useMemo(() => {
    if (!needle) return sections;
    return sections.flatMap((section) => {
      const filtered = filterSection(section, needle);
      return filtered ? [filtered] : [];
    });
  }, [needle, sections]);

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("regulations.eyebrow")}</p>
          <h1>{t("regulations.title")}</h1>
          <p>{t("regulations.lead")}</p>
          <label className="faq-search">
            <span className="visually-hidden">{t("regulations.searchLabel")}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("regulations.searchPlaceholder")}
            />
          </label>
        </Reveal>
      </section>
      <section className="section">
        <article className="container prose-wide legal">
          {visible.length === 0 ? <p>{t("regulations.empty")}</p> : null}
          {visible.flatMap((section) =>
            section.blocks.map((block, index) => (
              <BlockView key={`${section.id}-${index}`} block={block} needle={needle} />
            )),
          )}
        </article>
      </section>
    </PageFrame>
  );
}
