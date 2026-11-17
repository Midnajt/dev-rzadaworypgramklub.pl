# Płytszy łuk page-hero (2026-11-17)

## Podsumowanie

Łuk rysuje jeden selektor: `.page-banner + .page-hero` w `client/src/styles/pages.css`. Białe tło sekcji nachodzi na dół zdjęcia przez ujemny `margin-top` i eliptyczny `border-radius: 50% 50% 0 0 / var(--banner-curve) var(--banner-curve) 0 0`. Nie ma tu `clip-path`, SVG ani pseudo-elementu.

Stara głębokość: `--banner-curve: clamp(5rem, 14vw, 11rem)` (przy oknie 1073 px promień pionowy około 150 px i nachodzenie około 157 px; przy 390 px promień 80 px i nachodzenie 86 px). Nowa: `clamp(2.75rem, 7vw, 5.5rem)` — składnik `vw` i sufit są o połowę mniejsze, podłoga z 5 rem na 2,75 rem. Dodatkowe 0,4 rem w marginesie, które zakrywa szew przy rogach, zostało.

Zmiana jest wspólna dla każdego `page-hero` stojącego za `page-banner` (FAQ, regulamin, kontakt, aktualności, wpis). Strona główna nie ma tego banera, więc film hero zostaje prostokątny. Kolory, i18n i treść bez zmian. Bez FTP i bez commita.

## Weryfikacja

Dev server już działał (`npm run dev`, port 5173). Pomiary `getBoundingClientRect` po `scrollY = 0`.

| Widok | Szerokość | Promień pionowy | Nachodzenie | Uwagi |
| --- | --- | --- | --- | --- |
| FAQ | 1073 px (baner 1058 px) | 75,11 px | 81,5 px (`margin-top: -81.51px`) | Nagłówek 130 px pod górą sekcji, lead i pole szukania w kolumnie |
| Regulamin | 1073 px | 75,11 px | 81,5 px | Ten sam łuk, tytuł pod białą krawędzią |
| FAQ | 390 px | 44 px (`2.75rem`) | 50,4 px | Baner 288×390 px, `scrollWidth` = 390 |
| Regulamin | 390 px | 44 px | 50,4 px | Baner 288 px, tekst w 20–370 px |

Wyszukiwarka: „podpis” na desktopie zostawia pytanie o podpis elektroniczny; „obóz” przy 390 px zostawia pytanie o liczbę dni obozu. Poziomego przewijania nie ma.
