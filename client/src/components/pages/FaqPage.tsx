import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { Highlight } from "@/components/search/Highlight";
import { faqCategories } from "@/content/faq";

function matches(query: string, text: string): boolean {
  return text.toLocaleLowerCase("pl").includes(query);
}

export function FaqPage() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase("pl");

  const filtered = useMemo(() => {
    if (!needle) return faqCategories;
    return faqCategories
      .map((category) => ({
        ...category,
        items: category.items.filter(
          (item) =>
            matches(needle, item.question) ||
            item.answer.some((paragraph) => matches(needle, paragraph)) ||
            item.bullets?.some((bullet) => matches(needle, bullet)),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [needle]);

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("faq.eyebrow")}</p>
          <h1>{t("faq.title")}</h1>
          <p>{t("faq.lead")}</p>
          <label className="faq-search">
            <span className="visually-hidden">{t("faq.searchLabel")}</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("faq.searchPlaceholder")}
            />
          </label>
        </Reveal>
      </section>
      <section className="section">
        <div className="container prose-wide">
          {filtered.length === 0 ? <p>{t("faq.empty")}</p> : null}
          {filtered.map((category) => (
            <Reveal key={category.id} className="faq-category" as="section">
              <h2>
                <Highlight text={category.title} needle={needle} />
              </h2>
              {category.items.map((item) => (
                <details key={item.id} className="faq-item" open={Boolean(needle)}>
                  <summary>
                    <Highlight text={item.question} needle={needle} />
                  </summary>
                  <div className="faq-item__body">
                    {item.answer.map((paragraph) => (
                      <p key={paragraph}>
                        <Highlight text={paragraph} needle={needle} />
                      </p>
                    ))}
                    {item.bullets ? (
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>
                            <Highlight text={bullet} needle={needle} />
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              ))}
            </Reveal>
          ))}
        </div>
      </section>
    </PageFrame>
  );
}
