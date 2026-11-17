# Łuk banera (2026-11-17)

## Podsumowanie

Każdy `page-hero` stojący tuż za `div.page-banner` ma górną krawędź w kształcie białego łuku, który nachodzi na dół zdjęcia. Dotyczy to `section.page-hero` i `article.page-hero` (wpis aktualności). Strona główna nie ma `page-banner` — film hero zostaje prostokątny, na całą wysokość okna.

Łuk jest jednym mechanizmem w `client/src/styles/pages.css`, selektor `.page-banner + .page-hero`. Sekcja dostaje białe tło (`var(--color-white)`), ujemny `margin-top` i `border-radius: 50% 50% 0 0 / var(--banner-curve) var(--banner-curve) 0 0`. Poziomy promień 50% składa obie ćwiartki w jeden łuk na całą szerokość: środek białej krawędzi jest wyżej i wchodzi w zdjęcie, boki schodzą niżej. `--banner-curve` to `clamp(5rem, 14vw, 11rem)`. Dodatkowe 0,4 rem w ujemnym marginesie zakrywa szew przy rogach. Tekst zostaje w normalnym paddingu (`--space-2xl`); łuk nie obcina nagłówka, bo `overflow` sekcji zostaje `visible`.

Wysokość banera: `clamp(18rem, 44vw, 35rem)` zamiast `clamp(12rem, 34vw, 24rem)`. `object-fit: cover` i `object-position` z `PageBanner.tsx` bez zmian.

Nie ruszano `.legal__heading`, treści i18n, FTP ani gita.

## Weryfikacja

Dev server już działał (`npm run dev`, port 5173). Pomiary `getBoundingClientRect` po `scrollY = 0`.

| Widok | URL | Szerokość | Wysokość banera | Nachodzenie (dół banera − góra page-hero) | `object-position` |
| --- | --- | --- | --- | --- | --- |
| Regulamin, desktop | `http://localhost:5173/#/regulamin` | 1309 px (baner 1294 px, pasek przewijania) | 560 px | 182 px (`margin-top: -182.4px`, promień 176 px) | 50% 42% |
| FAQ, desktop | `http://localhost:5173/#/faq` | 1309 px | 560 px | 182 px | 50% 45% |
| Aktualności, desktop | `http://localhost:5173/?luk=1#/aktualnosci` | 1309 px | 560 px | 182,4 px | 50% 42% |
| Wpis „wyniki naboru”, desktop | `http://localhost:5173/#/aktualnosci/wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026` | 1440 px | 560 px | 182,4 px | 50% 48% (`article.page-hero`) |
| Regulamin, wąski | `#/regulamin` | 390 px (baner) | 288 px | 86,4 px (promień 80 px) | 50% 42% |
| FAQ, wąski | `#/faq` | 390 × 844 | 288 px | 86,4 px | 50% 45% |

Na wąskim FAQ `scrollWidth` równa się szerokości okna (brak poziomego przewijania). Nagłówek i lead są pod łukiem, na białym, bez ucięcia. Strona główna (`#/`): brak `.page-banner` i `.page-hero`, jest `video.hero__video` (`/assets/video/hero.mp4`), wysokość hero 900 px przy oknie 1309×900.
