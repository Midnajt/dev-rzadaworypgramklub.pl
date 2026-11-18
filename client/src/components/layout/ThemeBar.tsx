import { useLayoutEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { applyTheme, readTheme, type ThemeName } from "@/lib/theme";

export function ThemeBar() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<ThemeName>(() => readTheme());

  useLayoutEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <div className="theme-bar">
      <div className="theme-bar__group" role="group" aria-label={t("theme.label")}>
        <button
          type="button"
          className="theme-bar__btn"
          aria-pressed={theme === "light"}
          onClick={() => setTheme("light")}
        >
          <FiSun aria-hidden="true" />
          <span className="visually-hidden">{t("theme.light")}</span>
        </button>
        <button
          type="button"
          className="theme-bar__btn"
          aria-pressed={theme === "dark"}
          onClick={() => setTheme("dark")}
        >
          <FiMoon aria-hidden="true" />
          <span className="visually-hidden">{t("theme.dark")}</span>
        </button>
      </div>
    </div>
  );
}
