# Wstęp bez znaku, z platformą wniosków — 2026-11-25

## Co zmieniono

- Z bloku „Program dla klubów” na stronie głównej zszedł znak „Witaj w Klubie” (`program-intro__logo` w `HomePage.tsx`). Znak zostaje w nagłówku i w stopce.
- Akapit (`home.sectionBody`) zaczyna się od zdania „Rządowy Program KLUB jest platformą wniosków prowadzoną przez {{org}}.” Nazwa organizacji jest w `site.address.org`. Dalsze zdanie o zajęciach do 18. roku życia i o menu zostaje.
- Szerokość tekstu to 36 rem, w lewej kolumnie kontenera (`.program-intro .prose`). Biała płytka ciemnego motywu nie obejmuje już tego bloku, bo nie ma w nim grafiki.

## Sprawdzenie

`tsc -b` bez błędów. Na localhost:5173 przy 1280 px nagłówek i akapit zaczynają się z lewej krawędzi kontenera (1120 px), akapit ma 576 px, w sekcji nie ma obrazka, a logo w nagłówku ma 59×52 px. Przy 390 px tekst zawija się w 335 px, bez poziomego przewijania, hamburger i znak w belce zostają. W ciemnym motywie tekst jest jasny (`#e8eef7` na `#1b2433`), a płytka znaku w nagłówku zostaje biała. Konsola bez błędów.

Na FTP nic nie poszło.
