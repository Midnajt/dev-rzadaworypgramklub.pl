# Stopka: padding logo i mniejszy podpis AddPattern (2026-11-17)

## Podsumowanie

Znak „Witaj w Klubie” w stopce ma padding 1 rem (16 px) wokół grafiki. Płytka urosła z 86×76 px do 118×108 px; wysokość samego rysunku zostaje 4,75 rem, bo padding jest liczony poza nią (`box-sizing: content-box`).

Blok `.footer-credit` jest mniejszy: krój 0,75 rem, znak AddPattern 1,75 rem, całość 330×36 px (wcześniej 480×66 px). Zdanie brzmi „Strona w trakcie przygotowania przez firmę AddPattern”. Imienia i nazwiska nie ma. Link „AddPattern” prowadzi na https://addpattern.pl/. Zdanie o stocku i pixabay.com zostaje.

## Sprawdzenie

`http://localhost:5173/#/faq`, stopka. Computed: padding obrazka 16 px, brak „Krzysztoszek” w tekście bloku. Przy 390 px blok ma 330 px szerokości i mieści się w kolumnie, logo 118 px też.

Na FTP nic nie wysłano. Nie było commita.
