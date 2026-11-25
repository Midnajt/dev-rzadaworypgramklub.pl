import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { newsArchiveAnchor } from "@/content/news";
import { mobileDestinations, NAV_ITEMS, type MobileEntry, type NavItem } from "@/config/nav";
import { site } from "@/config/site";
import { useHashView, viewHref } from "@/lib/hash-view";
import { cn } from "@/lib/utils";
import { HashLink } from "./HashLink";

function Chevron({ direction }: { direction: "left" | "right" }) {
  const path = direction === "right" ? "M7 4.5 11.5 9 7 13.5" : "M11 4.5 6.5 9 11 13.5";
  return (
    <svg className="mnav__chevron" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d={path} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function entriesFor(
  item: NavItem,
  labels: { homePage: string; allPosts: string; archive: string; faqPage: string },
): MobileEntry[] {
  if (item.id === "home") {
    return [{ id: "home-root", label: labels.homePage, href: "#" }, ...mobileDestinations(item)];
  }
  if (item.id === "news") {
    return [
      { id: "all-posts", label: labels.allPosts, href: "#/aktualnosci" },
      { id: "archive", label: labels.archive, href: `#/aktualnosci/${newsArchiveAnchor}` },
      ...mobileDestinations(item),
    ];
  }
  if (item.id === "faq") {
    return [{ id: "faq-page", label: labels.faqPage, href: "#/faq" }, ...mobileDestinations(item)];
  }
  return mobileDestinations(item);
}

export function MobileMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const { t } = useTranslation();
  const { view } = useHashView();
  const [sectionId, setSectionId] = useState<NavItem["id"] | null>(null);
  const backRef = useRef<HTMLButtonElement>(null);
  const firstRef = useRef<HTMLButtonElement>(null);
  const branchRefs = useRef<Partial<Record<NavItem["id"], HTMLButtonElement | null>>>({});
  const opened = useRef(false);
  const section = NAV_ITEMS.find((item) => item.id === sectionId) ?? null;
  const here = viewHref(view);

  useEffect(() => {
    if (!open) {
      setSectionId(null);
      opened.current = false;
      return;
    }
    if (sectionId) {
      backRef.current?.focus();
      return;
    }
    if (!opened.current) {
      opened.current = true;
      firstRef.current?.focus();
    }
  }, [open, sectionId]);

  const goBack = () => {
    const id = sectionId;
    setSectionId(null);
    window.requestAnimationFrame(() => {
      if (id) branchRefs.current[id]?.focus();
    });
  };

  if (section) {
    const entries = entriesFor(section, {
      homePage: t("nav.homePage"),
      allPosts: t("nav.allPosts"),
      archive: t("news.archiveTitle"),
      faqPage: t("nav.faqPage"),
    });
    return (
      <div className="mnav__pane">
        <button ref={backRef} type="button" className="mnav__back" onClick={goBack}>
          <Chevron direction="left" />
          <span>{t("nav.back")}</span>
        </button>
        <h2 className="mnav__heading">{t(section.labelKey)}</h2>
        <ul className="mnav__list">
          {entries.map((entry) => {
            const current = entry.href === here;
            return (
              <li key={entry.id}>
                <HashLink
                  className={cn("mnav__link", current && "is-current")}
                  to={entry.href}
                  aria-current={current ? "page" : undefined}
                  onClick={onNavigate}
                >
                  {entry.label}
                </HashLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="mnav__pane">
      <ul className="mnav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              ref={(node) => {
                branchRefs.current[item.id] = node;
                if (item.id === NAV_ITEMS[0]?.id) firstRef.current = node;
              }}
              type="button"
              className={cn("mnav__branch", item.views.includes(view.name) && "is-current")}
              onClick={() => setSectionId(item.id)}
            >
              <span>{t(item.labelKey)}</span>
              <Chevron direction="right" />
            </button>
          </li>
        ))}
      </ul>
      <a className="mnav__login btn btn--primary" href={site.amodit} rel="noopener noreferrer" target="_blank">
        {t("nav.login")}
      </a>
    </div>
  );
}
