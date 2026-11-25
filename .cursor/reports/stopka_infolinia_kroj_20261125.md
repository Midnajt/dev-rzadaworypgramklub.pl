# Krój infolinii w stopce (2026-11-25)

## Podsumowanie

Link „Infolinia 667 099 565” w stopce używał Georgii (`--font-display`). Numer w sekcji kontaktu (`h2.sample-display`) jest zapisany Segoe UI. `.site-footer__phone` bierze teraz `--font-body`, grubość 700, `letter-spacing: 0.04em` i `font-variant-numeric: tabular-nums`. Rozmiar stopki bez zmian.

## Weryfikacja

`http://localhost:5173/#/`. Przy oknie desktopowym link ma rodzinę `"Segoe UI", system-ui, sans-serif`, grubość 700 i cyfry tabelaryczne, tak jak `#home-contact-title` (ten ma 41,6 px, stopka 26,2 px). Przy 390 px link ma left 20, width 232, a `scrollWidth` strony zostaje 390. Na FTP nic nie poszło i nie było commita.
