# Znak „Witaj w Klubie” (2026-11-17)

## Podsumowanie

Plik `custom-assets/rzadowy-program-klub-logo.png` (490×433, przezroczyste tło, 30 KB) jest skopiowany do `client/assets/program-logo.png` i wystawiony jako `assets.programLogo`. W nagłówku zastępuje logo LZS: `img.logo__img` ma wysokość 3,25 rem i szerokość z proporcji. Na stronie głównej stoi po lewej stronie nagłówka „Program dla klubów” i akapitu (`program-intro` w `HomePage.tsx`). Poniżej 641 px znak schodzi nad tekst. Favicony zostają przy logo LZS. Opis jest w `client/assets/ASSETS.md`.

## Sprawdzenie

`http://localhost:5173/`. Nagłówek: obraz 59×52 px, góra na 12 px, mieści się w belce 76 px; po przewinięciu na białym tle widać cały znak. Sekcja: znak 208×184 px, tekst zaczyna się na prawo od niego. Telefon 390 px: znak 176 px nad akapitem, menu nie nachodzi na logo.

Na FTP nic nie wysłano. Nie było commita.
