# Archiwum aktualności od 2025 — 17.11.2026

## Co zrobiono

Z `newsArchive` w `client/src/content/news.ts` usunięto 33 wpisy z lat 2022, 2023 i 2024 (7 + 9 + 17). Zostało 11 tytułów z 2025. Sześć pełnych wpisów 2026 w `newsPosts` bez zmian. Nad tablicą jest komentarz z datą graniczną `2025-01-01`.

Teksty w `client/src/i18n/locales/pl.json`: lead mówi o edycji 2026 i archiwum tytułów z 2025, a `archiveLead` to „Wpisy z 2025 roku.” Z leadu zeszła obietnica, że pełne treści lat 2022–2025 dopiszemy później.

Żeby tych wpisów nie wkleić z powrotem z inwentaryzacji WordPressa:

- `docs/old-website-info.md`, sekcja 5: decyzja z 17.11.2026, nagłówki „2024 — nie przenosić”, „2023 — nie przenosić”, „2022 — nie przenosić”. Tabele zostają jako opis starej strony. W sekcji 9 slugi sprzed 2025 mają iść na listę `#/aktualnosci`, bez odtwarzania wpisu.
- Reguła stojąca w `.cursor/rules/shared.mdc` (sekcja „Aktualności”) i punkt w `.cursor/rules/frontend.mdc`.
- Zamknięte otwarte polecenie w `.cursor/reports/kontynuacja_sesji_20261117.md`, dopisek w `.cursor/reports/migracja_podstron_20261117.md` i odpowiedź przy pytaniu „od której daty” w `.cursor/reports/inwentaryzacja_starej_strony_20261116.md`.

## Weryfikacja

Lokalnie `http://localhost:5173/#/aktualnosci`. Lista 2026 ma sześć kart z linkami. Archiwum ma jeden rok, 2025, jedenaście tytułów, bez linków do ciał. Nagłówków 2024, 2023 i 2022 nie ma. Wejście w pierwszy wpis 2026 otwiera artykuł, „Wróć do listy aktualności” wraca na listę.

Na FTP nic nie poszło. Nie było commita.
