import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { HashLink } from "@/components/layout/HashLink";
import { PageFrame } from "@/components/layout/PageBanner";
import { findNewsPost, newsArchive, newsPosts, newsYear } from "@/content/news";
import { formatDate } from "@/lib/format-date";
import { useHashView } from "@/lib/hash-view";
import { NotFoundPage } from "./NotFoundPage";

export function NewsPage() {
  const { t } = useTranslation();
  const { view } = useHashView();

  if (view.slug) {
    const post = findNewsPost(view.slug);
    if (!post) return <NotFoundPage />;

    return (
      <PageFrame>
        <article className="page-hero">
          <Reveal className="container prose">
            <p className="section__eyebrow">{t("news.eyebrow")}</p>
            <p className="news-date">{formatDate(post.date)}</p>
            <h1>{post.title}</h1>
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {post.attachment ? (
              <p>
                <a href={post.attachment.href} rel="noopener noreferrer" target="_blank">
                  {post.attachment.label}
                </a>
              </p>
            ) : null}
            <p>
              <HashLink to="#/aktualnosci">{t("news.back")}</HashLink>
            </p>
          </Reveal>
        </article>
      </PageFrame>
    );
  }

  const archiveByYear = newsArchive.reduce<Record<string, typeof newsArchive>>((acc, item) => {
    const year = newsYear(item.date);
    acc[year] ??= [];
    acc[year].push(item);
    return acc;
  }, {});

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("news.eyebrow")}</p>
          <h1>{t("news.title")}</h1>
          <p>{t("news.lead")}</p>
        </Reveal>
      </section>
      <section className="section">
        <div className="container">
          <ul className="news-list">
            {newsPosts.map((post) => (
              <li key={post.slug}>
                <HashLink to={`#/aktualnosci/${post.slug}`} className="news-card">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <strong>{post.title}</strong>
                  <span>{post.excerpt}</span>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section section--surface">
        <div className="container">
          <h2>{t("news.archiveTitle")}</h2>
          <p>{t("news.archiveLead")}</p>
          {Object.keys(archiveByYear)
            .sort((a, b) => Number(b) - Number(a))
            .map((year) => (
              <Reveal key={year} className="news-year">
                <h3>{year}</h3>
                <ul className="news-archive">
                  {archiveByYear[year].map((item) => (
                    <li key={item.slug}>
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                      <span>{item.title}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
        </div>
      </section>
    </PageFrame>
  );
}
