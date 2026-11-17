# Migracja podstron i mega-menu (2026-11-17)

## Podsumowanie

Zostają trzy przyciski w nagłówku: Start, Aktualności, FAQ. Po najechaniu i po fokusie otwiera się jeden panel. Po prawej jest „Zaloguj się” (`https://wnioski.rzadowyprogramklub.pl`, `target="_blank"`, `rel="noopener noreferrer"`). Czerwony przycisk Regulamin zszedł z nagłówka.

Treści podstron są w `client/src/content/`, nie w `pl.json`. Widoki hash: `#/podstawowe-informacje`, `#/regulamin`, `#/do-pobrania`, `#/kontakt`, `#/aktualnosci` i `#/aktualnosci/{slug}`. Na FTP nic nie wysłano. Nie było commita.

## Weryfikacja w przeglądarce

Lokalnie `http://localhost:5173`, Chrome DevTools. Desktop (1280 px) i telefon (390×844, touch).

- Hover Start / Aktualności / FAQ: najwyżej jeden panel. Zajawka po prawej zmienia się po najechaniu pozycji i po strzałkach góra/dół.
- Klik „Czytaj podstawowe informacje” w panelu przechodzi na `#/podstawowe-informacje` i zamyka panel.
- Tab z przycisku wchodzi w pozycje jego panelu. Fokus poza nagłówkiem zamyka panel. Escape zamyka panel i menu mobilne.
- 390 px: hamburger, jeden dział naraz, panel w strumieniu (bez animacji zjazdu), po kliknięciu linku menu się zamyka. Etykieta przycisku: „Otwórz menu” / „Zamknij menu”.
- Regulamin: § 1–§ 10, blok UWAGA, tytuł „Regulamin — Rządowy Program KLUB”.
- Do pobrania: 4 pliki (zip MSiT + 3 logotypy) i zastrzeżenie dla beneficjentów.
- Kontakt: adres KZ LZS, `biuro@` i `pomoc@`, infolinia krajowa i 16 numerów wojewódzkich.
- Aktualności: 6 wpisów 2026 z pełną treścią. Archiwum 2022–2025: 44 pozycje (data i tytuł, bez linku do ciała). Wpis wyników naboru ma PDF na starej domenie.
- FAQ: 24 pytania, 8 kategorii. Hasło „obóz” zostawia jedno pytanie w „Sprzęt i obozy”. Hasło bez trafień daje „Nie znaleziono pytań dla tego hasła.”
- `prefers-reduced-motion: reduce` jest w CSS strony: `.mega-panel` ma `animation: none`, karetka bez przejścia. Na wąskim ekranie panel i tak nie zjeżdża.

## Poprawki po teście

Klik w przycisk działu najpierw otwierał panel fokusem, a potem ten sam klik go zamykał. Klik i fokus teraz tylko otwierają. Zamknięcie: zejście kursorem, fokus poza nagłówkiem, Escape, drugi przycisk, zmiana hash.

Panel był w DOM za linkiem „Zaloguj się”, więc Tab nie wchodził w linki otwartego działu. Panel jest teraz w elemencie listy tego przycisku. Na szerokim ekranie nadal wisi wyśrodkowany pod nagłówkiem.

Strzałka w dół i w górę przenosi fokus na kolejną pozycję, nie tylko podmienia prawą kolumnę.

## Przed wrzutką na FTP

Linki do PDF-ów, zipa logotypów i listy wyników wskazują `https://rzadowyprogramklub.pl/wp-content/uploads/...`. Pliki leżą na starym serwerze. Zanim w `.htaccess` wejdą przekierowania 301, które zdejmą WordPressa, te pliki trzeba skopiować na nowy hosting (albo zostawić katalog `wp-content/uploads/` w `public_html`). Inaczej załączniki znikną razem ze starym CMS. Tej kopii w tej sesji nie robiono.

Archiwum aktualności 2022–2025 nie ma pełnych treści (data archiwum nieustalona z klientem). Galeria, analityka, formularz i panel dostępności też nie wchodziły w tę iterację.

Aktualizacja 17.11.2026: wpisy sprzed 2025 usunięto z `newsArchive`. Lat 2022–2024 nie uzupełniać. Szczegóły w `.cursor/reports/archiwum_aktualnosci_2025_20261117.md`.

## Sprzątanie

Usunięto `custom-assets/_wp-dump/` (json, txt, `strip.mjs`). To był roboczy zrzut REST, nie mapa zdjęć. `custom-assets/MAPA.md` i zdjęcia zostają.

`npx tsc -b` przechodzi. GitHub Pages: poprawka `BASE_URL` filmu hero nadal czeka na commit i push, jeśli na Pages film daje 404.
