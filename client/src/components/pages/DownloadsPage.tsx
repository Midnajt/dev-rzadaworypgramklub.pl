import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { downloadFiles } from "@/content/downloads";

export function DownloadsPage() {
  const { t } = useTranslation();

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("downloads.eyebrow")}</p>
          <h1 id="naglowek">{t("downloads.title")}</h1>
          <p>{t("downloads.lead")}</p>
        </Reveal>
      </section>
      <section className="section">
        <Reveal className="container">
          <ul className="download-list">
            {downloadFiles.map((file) => (
              <li key={file.id}>
                <a href={file.href} rel="noopener noreferrer" target="_blank">
                  {file.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="note">{t("downloads.disclaimer")}</p>
        </Reveal>
      </section>
    </PageFrame>
  );
}
