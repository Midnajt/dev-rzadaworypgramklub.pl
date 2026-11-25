import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/config/site";

export function PlatformBanner() {
  const { t } = useTranslation();

  return (
    <section className="platform-banner section" aria-labelledby="platform-banner-title">
      <Reveal className="container platform-banner__inner">
        <h2 id="platform-banner-title" className="platform-banner__title">
          <span className="platform-banner__line">{t("home.platform.line1")}</span>
          <span className="platform-banner__line">{t("home.platform.line2")}</span>
        </h2>
        <a
          className="btn platform-banner__cta"
          href={site.lzs}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("home.platform.cta")}
        </a>
      </Reveal>
    </section>
  );
}