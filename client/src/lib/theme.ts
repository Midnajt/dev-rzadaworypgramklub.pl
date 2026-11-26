import { theme } from "@/config/theme";

export const THEME_STORAGE_KEY = "rpk-theme";

export type ThemeName = "white" | "black";

/** Stored "dark" is the previous name of the black theme. */
export function readTheme(): ThemeName {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return stored === "black" || stored === "dark" ? "black" : "white";
  } catch {
    return "white";
  }
}

export function applyTheme(name: ThemeName): void {
  const root = document.documentElement;
  root.dataset.theme = name;
  const scheme = name === "black" ? "dark" : "only light";
  document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", scheme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    name === "black" ? theme.black.themeColor : theme.colors.themeColor,
  );
  try {
    localStorage.setItem(THEME_STORAGE_KEY, name);
  } catch {
    /* Private mode can block storage; the choice still applies for this view. */
  }
}
