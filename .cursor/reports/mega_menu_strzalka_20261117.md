# Mega-menu — odstęp i strzałka jak na Squarespace

## Co zmieniono

Na desktopie (od 761 px) panel mega-menu nie dotyka belki. Między nimi jest luka 0,75 rem (12 px), a w niej mała strzałka w górę, w kolorze tła okienka.

- `client/src/components/layout/MegaMenu.tsx` — komponent `MegaPointer` (SVG, `aria-hidden`).
- `client/src/components/layout/Navbar.tsx` — strzałka w nagłówku, gdy menu jest otwarte. Środek liczony z etykiety aktywnego przycisku (`--mega-caret-x`), aktualizowany przy zmianie pozycji i przy zmianie szerokości nagłówka.
- `client/src/styles/components.css` — `padding-top: var(--mega-gap)` na `.mega-slot` (luka jest nadal w obszarze nagłówka, więc zjechanie kursorem w szczelinę nie zamyka menu). Strzałka: `color: var(--color-white)`, ta sama biel co `.mega-panel`. Widoczny czubek wystaje nad panel, podstawa nachodzi na okienko i zlewa się z nim. Poniżej 761 px strzałka ma `display: none`, a slot zostaje w zwykłym układzie.

Teksty UI bez zmian. Analityki, formularza i backendu nie dodawano. FTP i git bez zmian.

## Jak to wygląda

Wzorzec ze [squarespace.com](https://www.squarespace.com/): belka 80 px, panel od 92 px (luka 12 px), wskaźnik `.global-navigation__header-link-item-indicator` (SVG 20×13, czarny, bo panel jest czarny), środek na napisie pozycji, nie na ikonie chevrona.

U nas belka ma 76 px (`--header-h: 4.75rem`). Panel zaczyna się 12 px niżej. Strzałka jest biała, bo panel jest biały. Środek pokrywa się ze środkiem napisu (Start, Aktualności, FAQ) z dokładnością do ułamka piksela. Przy zmianie pozycji `left` przechodzi w 0,28 s.

## Weryfikacja

Dev server już działał (`npm run dev`, port 5173).

Desktop (ok. 1440 px i 1324 px):

- Start, Aktualności i FAQ: luka panelu 12 px, różnica środka strzałki i etykiety ok. 0 px. Zrzuty: strona główna (trawa, strzałka pod START) i FAQ (zdjęcie, strzałka pod AKTUALNOŚCI).
- Strzałka w dół w panelu FAQ przeniosła fokus z „Kto może wziąć udział” na „Na co i ile pieniędzy”; strzałka nad belką została na FAQ.
- Escape zamyka panel i usuwa strzałkę. Klik w wyszukiwarkę poza nagłówkiem też zamyka menu.

Wąski widok 390 px: po „Otwórz menu” i FAQ panel jest w kolumnie (szerokość 326 px w oknie 390 px), `padding-top` slotu 0, strzałka `display: none`.

Na FTP nic nie poszło i nie było commita.
