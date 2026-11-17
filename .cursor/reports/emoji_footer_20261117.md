# Emotka w stopce (2026-11-17)

## Podsumowanie

W tekście stopki (`footer.copy` w `client/src/i18n/locales/pl.json`) dopisano 🛠️ za rokiem i nazwą strony. W JSX nic nie doszło: stopka i tak czyta ten klucz przez `t("footer.copy")`. Na FTP nic nie wysłano.

## Wdrożenie

GitHub Pages bierze build z gałęzi `main` (workflow `.github/workflows/deploy-pages.yml`). Emotka pojawi się pod `https://midnajt.github.io/dev-rzadaworypgramklub.pl/` po scaleniu pull requestu do `main` i zakończeniu joba Deploy to GitHub Pages.
