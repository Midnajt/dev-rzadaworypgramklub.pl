import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { assets } from "@/config/assets";
import { useHashView, type ViewName } from "@/lib/hash-view";
import { cn } from "@/lib/utils";
import { HashLink } from "./HashLink";

const NAV: { to: string; key: string; views: ViewName[] }[] = [
  { to: "#", key: "home", views: ["home"] },
  { to: "#/aktualnosci", key: "news", views: ["news"] },
  { to: "#/faq", key: "faq", views: ["faq"] },
];

const CTA = { to: "#/regulamin", key: "regulations", views: ["regulations"] as ViewName[] };

export function Navbar() {
  const { t } = useTranslation();
  const { view } = useHashView();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setOpen(false);
      document.body.style.overflow = "";
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const overlay = view.name === "home" && !scrolled && !open;

  return (
    <header className={cn("site-header", scrolled && "is-scrolled", overlay && "site-header--overlay")}>
      <div className="site-header__inner">
        <HashLink className="logo" to="#" aria-label={t("nav.logo")} onClick={close}>
          <img className="logo__img" src={assets.logo} alt={t("nav.logoAlt")} width={56} height={56} />
        </HashLink>
        <nav className={`nav${open ? " is-open" : ""}`} id="site-nav" aria-label={t("nav.main")}>
          <ul className="nav__list">
            {NAV.map((item) => (
              <li key={item.key}>
                <HashLink
                  to={item.to}
                  aria-current={item.views.includes(view.name) ? "page" : undefined}
                  onClick={close}
                >
                  {t(`nav.${item.key}`)}
                </HashLink>
              </li>
            ))}
            <li className="nav__item--mobile">
              <HashLink
                to={CTA.to}
                aria-current={CTA.views.includes(view.name) ? "page" : undefined}
                onClick={close}
              >
                {t(`nav.${CTA.key}`)}
              </HashLink>
            </li>
          </ul>
        </nav>
        <HashLink
          className="btn btn--primary btn--sm nav-cta"
          to={CTA.to}
          aria-current={CTA.views.includes(view.name) ? "page" : undefined}
          onClick={close}
        >
          {t(`nav.${CTA.key}`)}
        </HashLink>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={t("nav.openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
