# Georgia zeszła z krojów (2026-11-25)

## Podsumowanie

Nagłówki w szufladzie menu („Start”, „Aktualności”) brały Georgię z `--font-display`, tak samo jak pozostałe `h1`–`h4`. Token wskazuje teraz na `--font-body` (Segoe UI, system-ui, sans-serif). Ten sam zapis jest w `theme.ts`. Osobne reguły `.logo` i `.fund-card__title` dalej używają tokenu, więc też nie wracają do Georgii.

## Weryfikacja

`http://localhost:5173/#/` przy szerokości 513 px. Po otwarciu menu i wejściu w Start nagłówek `h2.mnav__heading` ma rodzinę `"Segoe UI", system-ui, sans-serif`, 23,2 px i grubość 600. Na stronie głównej żaden z `h1`–`h4`, tytułów kart ani `.logo` nie ma już Georgii. Na FTP nic nie poszło i nie było commita.
