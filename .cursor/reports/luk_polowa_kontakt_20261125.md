# Płytszy łuk banera i kontakt na `#/kontakt` (2026-11-25)

## Podsumowanie

Biały łuk pod zdjęciem banera (`page-banner` + `page-hero` w `client/src/styles/pages.css`) ma `--banner-curve: clamp(1.375rem, 3.5vw, 2.75rem)`, czyli połowę poprzedniego `clamp(2.75rem, 7vw, 5.5rem)`. Promień pionowy `border-radius` schodzi razem z tym tokenem; dodatkowe 0,4 rem w `margin-top` zostaje, żeby róg nie odsłaniał szwu. Film na stronie głównej nie ma tego banera.

Sekcja `section--surface` na `#/kontakt` bierze ten sam blok co strona główna: numer 667 099 565, lead z godzinami, dwie karty (adres i e-maile) oraz zwiniętą listę operatorów. Wspólny komponent to `ContactPanel` w `HomeSamples.tsx`. Nagłówek strony zostaje w `page-hero` (eyebrow i `h1`), a `id="godziny"` siedzi na leadzie w panelu, żeby `#/kontakt/godziny` zjeżdżało do zdania o infolinii. Osobna siatka „Adres i e-mail” i zawsze otwarta lista województw zeszły. Na FTP nic nie poszło i nie było commita.

## Weryfikacja

`http://localhost:5173/#/kontakt`, okno 1191 px (baner 1176×524). Promień `50% 41.685px`, `margin-top: -48.085px`, nachodzenie bieli na zdjęcie 48 px. Karty obok siebie: left 76 i 596, obie width 504 i height 196. `details` startuje zamknięty; po kliknięciu `open` jest true, 16 pozycji, pierwsza „Dolnośląskie”. `#/kontakt/godziny`: lead ma top 100 px przy belce 76 px, `scrollY` 895.

Przy szerokości 390 px promień to 22 px (`1.375rem`), nachodzenie 28 px, baner 288 px. Karty spadają jedna pod drugą (left 20, width 350). Strona główna nadal ma ten sam blok kontaktu nad stopką.
