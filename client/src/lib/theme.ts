import { theme } from "@/config/theme";

export const THEME_STORAGE_KEY = "rpk-theme";

export type ThemeName = "light" | "dark";

export function readTheme(): ThemeName {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

export function applyTheme(name: ThemeName): void {
  const root = document.documentElement;
  root.dataset.theme = name;
  const scheme = name === "dark" ? "dark" : "only light";
  document.querySelector('meta[name="color-scheme"]')?.setAttribute("content", scheme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute(
    "content",
    name === "dark" ? theme.dark.themeColor : theme.colors.themeColor,
  );
  try {
    localStorage.setItem(THEME_STORAGE_KEY, name);
  } catch {
    /* Private mode can block storage; the choice still applies for this view. */
  }
}
