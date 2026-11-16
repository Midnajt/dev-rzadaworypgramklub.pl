import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import pl from "./locales/pl.json";

void i18n.use(initReactI18next).init({
  resources: {
    pl: { translation: pl },
  },
  lng: "pl",
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
});

if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language;
}

export default i18n;
