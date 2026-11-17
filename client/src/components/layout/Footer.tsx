import { useTranslation } from "react-i18next";
import { assets } from "@/config/assets";
import { site } from "@/config/site";
import { HashLink } from "./HashLink";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <HashLink className="logo" to="#" aria-label={t("nav.logo")}>
            <img className="logo__img" src={assets.programLogo} alt={t("nav.logoAlt")} width={490} height={433} />
          </HashLink>
          <p className="site-footer__copy">{t("footer.copy", { year, name: site.name })}</p>
          <p className="site-footer__copy">
            <a href={`tel:${site.phoneNational}`}>{t("footer.helpline", { phone: site.phoneNationalDisplay })}</a>
            {" · "}
            <a href={`mailto:${site.emailOffice}`}>{site.emailOffice}</a>
          </p>
        </div>
        <div className="footer-credit">
          <a
            className="footer-credit__logo"
            href={site.addPattern}
            rel="noopener noreferrer"
            target="_blank"
            aria-label={t("footer.addPatternLabel")}
          >
            <img src={assets.addPatternLogo} alt="" width={40} height={40} loading="lazy" decoding="async" />
          </a>
          <div>
            <p>
              {t("footer.credits")}{" "}
              <a href={site.addPattern} rel="noopener noreferrer" target="_blank">
                {t("footer.addPattern")}
              </a>
            </p>
            <p>
              {t("footer.stock")}{" "}
              <a href={site.pixabay} rel="noopener noreferrer" target="_blank">
                pixabay.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
