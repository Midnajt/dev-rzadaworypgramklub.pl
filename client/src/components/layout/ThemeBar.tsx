import { useLayoutEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { applyTheme, readTheme, type ThemeName } from "@/lib/theme";

const HINT_KEY = "rpk-browser-hint";

function showsForcedDarkHint(): boolean {
  // Samsung Internet repaints colors after CSS and ignores color-scheme.
  if (!/SamsungBrowser/i.test(navigator.userAgent)) return false;
  try {
    return localStorage.getItem(HINT_KEY) !== "off";
  } catch {
    return true;
  }
}

export function ThemeBar() {
  const { t } = useTranslation();
  const barRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeName>(() => readTheme());
  const [hint, setHint] = useState(showsForcedDarkHint);

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useLayoutEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const apply = () => {
      document.documentElement.style.setProperty("--theme-stack", `${bar.offsetHeight}px`);
    };
    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [hint]);

  return (
    <div className="theme-bar" ref={barRef}>
      <div className="theme-bar__group" role="group" aria-label={t("theme.label")}>
        <button
          type="button"
          className="theme-bar__btn"
          aria-pressed={theme === "white"}
          onClick={() => setTheme("white")}
        >
          <span className="theme-bar__swatch theme-bar__swatch--white" aria-hidden="true" />
          {t("theme.white")}
        </button>
        <button
          type="button"
          className="theme-bar__btn"
          aria-pressed={theme === "black"}
          onClick={() => setTheme("black")}
        >
          <span className="theme-bar__swatch theme-bar__swatch--black" aria-hidden="true" />
          {t("theme.black")}
        </button>
      </div>
      {hint ? (
        <p className="theme-bar__hint">
          <span>{t("theme.forced")}</span>
          <button
            type="button"
            onClick={() => {
              try {
                localStorage.setItem(HINT_KEY, "off");
              } catch {
                /* The note still closes for this view. */
              }
              setHint(false);
            }}
          >
            {t("theme.forcedDismiss")}
          </button>
        </p>
      ) : null}
    </div>
  );
}
