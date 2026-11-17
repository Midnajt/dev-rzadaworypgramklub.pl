import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { NAV_ITEMS } from "@/config/nav";
import { assets } from "@/config/assets";
import { site } from "@/config/site";
import { useHashView } from "@/lib/hash-view";
import { cn } from "@/lib/utils";
import { HashLink } from "./HashLink";
import { MegaPanel, MegaPointer, MegaTrigger } from "./MegaMenu";

export function Navbar() {
  const { t } = useTranslation();
  const { view } = useHashView();
  const rootRef = useRef<HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaId, setMegaId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setMobileOpen(false);
      setMegaId(null);
      document.body.style.overflow = "";
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMegaId(null);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setMegaId(null);
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const onFocusOut = (event: FocusEvent) => {
      const next = event.relatedTarget;
      if (!(next instanceof Node) || !root.contains(next)) setMegaId(null);
    };
    root.addEventListener("focusout", onFocusOut);
    return () => root.removeEventListener("focusout", onFocusOut);
  }, []);

  const closeAll = () => {
    setMegaId(null);
    setMobileOpen(false);
  };

  const openMega = (id: string) => {
    window.clearTimeout(closeTimer.current);
    setMegaId(id);
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMegaId(null), 120);
  };

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !megaId) return;

    const measure = () => {
      const label = root.querySelector<HTMLElement>(".nav__item.is-open .nav-trigger > span");
      if (!label) return;
      const labelRect = label.getBoundingClientRect();
      const headerRect = root.getBoundingClientRect();
      const center = labelRect.left + labelRect.width / 2 - headerRect.left;
      root.style.setProperty("--mega-caret-x", `${center}px`);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);
    return () => observer.disconnect();
  }, [megaId]);

  const overlay = view.name === "home" && !scrolled && !mobileOpen && !megaId;

  return (
    <header
      ref={rootRef}
      className={cn("site-header", scrolled && "is-scrolled", overlay && "site-header--overlay", megaId && "has-mega")}
      onMouseLeave={scheduleClose}
      onMouseEnter={() => window.clearTimeout(closeTimer.current)}
    >
      {megaId ? <MegaPointer /> : null}
      <div className="site-header__inner">
        <HashLink className="logo" to="#" aria-label={t("nav.logo")} onClick={closeAll}>
          <img className="logo__img" src={assets.programLogo} alt={t("nav.logoAlt")} width={490} height={433} />
        </HashLink>
        <nav className={cn("nav", mobileOpen && "is-open")} id="site-nav" aria-label={t("nav.main")}>
          <ul className="nav__list">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className={cn("nav__item", megaId === item.id && "is-open")}
                onMouseEnter={() => openMega(item.id)}
              >
                <MegaTrigger
                  item={item}
                  open={megaId === item.id}
                  current={item.views.includes(view.name)}
                  onOpen={() => openMega(item.id)}
                />
                {megaId === item.id ? (
                  <div className="mega-slot">
                    <MegaPanel item={item} open onNavigate={closeAll} />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <a
          className="nav-login"
          href={site.amodit}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t("nav.login")}
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="site-nav"
          aria-label={t(mobileOpen ? "nav.closeMenu" : "nav.openMenu")}
          onClick={() => {
            setMegaId(null);
            setMobileOpen((v) => !v);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
