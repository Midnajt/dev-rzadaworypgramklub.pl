import { useEffect, useState, type KeyboardEvent } from "react";
import { useTranslation } from "react-i18next";
import type { MegaTopic, NavItem } from "@/config/nav";
import { cn } from "@/lib/utils";
import { HashLink } from "./HashLink";

/** Upward notch in the gap under the active header item. Same fill as the panel. */
export function MegaPointer() {
  return (
    <span className="mega-caret" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" fill="none">
        <path
          d="M8.036 1.701C9.163.725 10.837.725 11.964 1.701l6.243 5.406c2.1 1.819.814 5.268-1.964 5.268H3.757C.98 12.375-.306 8.926 1.793 7.107L8.036 1.701Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("nav-caret", open && "is-open")}
    >
      <path d="M3.5 6.25 8 10.75l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type MegaMenuProps = {
  item: NavItem;
  open: boolean;
  onOpen: () => void;
  onNavigate: () => void;
};

export function MegaTrigger({ item, open, onOpen, current }: Omit<MegaMenuProps, "onNavigate"> & { current?: boolean }) {
  const { t } = useTranslation();

  return (
    <button
      type="button"
      className="nav-trigger"
      aria-expanded={open}
      aria-controls={item.panelId}
      aria-current={current ? "true" : undefined}
      onClick={onOpen}
      onFocus={onOpen}
    >
      <span>{t(item.labelKey)}</span>
      <Caret open={open} />
    </button>
  );
}

function topicLabel(topic: MegaTopic, translate: (key: string) => string) {
  if (topic.labelKey) return translate(topic.labelKey);
  return topic.label ?? "";
}

export function MegaPanel({ item, open, onNavigate }: Pick<MegaMenuProps, "item" | "open" | "onNavigate">) {
  const { t } = useTranslation();
  const [activeId, setActiveId] = useState(item.topics[0]?.id);

  useEffect(() => {
    if (open) setActiveId(item.topics[0]?.id);
  }, [open, item.topics]);

  const active: MegaTopic | undefined = item.topics.find((topic) => topic.id === activeId) ?? item.topics[0];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const index = item.topics.findIndex((topic) => topic.id === active?.id);
    let nextId: string | null = null;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      nextId = item.topics[(index + 1) % item.topics.length].id;
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      nextId = item.topics[(index - 1 + item.topics.length) % item.topics.length].id;
    }
    if (!nextId) return;
    setActiveId(nextId);
    event.currentTarget.querySelector<HTMLAnchorElement>(`[data-topic="${nextId}"]`)?.focus();
  };

  if (!active) return null;

  return (
    <div
      className={cn("mega-panel", open && "is-open")}
      id={item.panelId}
      role="region"
      aria-label={t(item.labelKey)}
      hidden={!open}
      onKeyDown={onKeyDown}
    >
      <div className="mega-panel__grid">
        <ul className="mega-panel__topics">
          {item.topics.map((topic) => {
            const href = topic.links[0]?.href;
            if (!href) return null;
            return (
              <li key={topic.id}>
                <HashLink
                  to={href}
                  className={cn("mega-topic", topic.id === active.id && "is-active")}
                  data-topic={topic.id}
                  onMouseEnter={() => setActiveId(topic.id)}
                  onFocus={() => setActiveId(topic.id)}
                  onClick={onNavigate}
                >
                  {topicLabel(topic, t)}
                </HashLink>
              </li>
            );
          })}
        </ul>
        <div className="mega-panel__detail">
          {item.detailLinks ? (
            <ul className="mega-panel__links">
              {item.detailLinks.map((link) => (
                <li key={link.id}>
                  <HashLink to={link.href} onClick={onNavigate}>
                    {link.label}
                  </HashLink>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="mega-panel__lead">{active.lead}</p>
              <ul className="mega-panel__links">
                {active.links.map((link) => (
                  <li key={link.id}>
                    <HashLink to={link.href} onClick={onNavigate}>
                      {link.label}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
