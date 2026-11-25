# Panel dostępności (2026-11-25)

## Podsumowanie

Przy prawej krawędzi jest niebieski przycisk 52×52 px (`#4054b2`, top 200 px) z białą postacią. Po kliknięciu panel 240 px wsuwa się z prawej, a przycisk zostaje po jego lewej stronie. Osiem pozycji jest po polsku: powiększanie i pomniejszanie tekstu (100–200% co 10%), odcienie szarości, wysoki kontrast, jasne tło, podkreślenie linków, czytelna czcionka (Verdana) i reset. Szarość, kontrast i jasne tło wykluczają się. Wybór zostaje w `localStorage` (`a11y-tools`); skrypt w `index.html` nakłada klasy przed startem Reacta.

## Weryfikacja

`http://localhost:5173/` przy oknie 1191 px. Zamknięty panel jest poza ekranem, przycisk ma prawą krawędź na 1176 px (przy `clientWidth` 1176) i nie poszerza strony. Otwarty panel ma lewą krawędź 936 px, obramowanie `#4054b2`, a etykiety mieszczą się w jednej linii. Escape zamyka panel i wraca fokus na przycisk; narzędzia mają wtedy `tabindex="-1"`. Klik w nagłówek strony zamyka panel.

Skala: dziesięć kliknięć „Powiększ tekst” daje `--a11y-scale` od 1.1 do 2, jedenasty zostaje przy 2 i `aria-disabled`. Pasek zostaje przy 16 px, a `body` przy skali 1.8 ma 30,6 px. „Pomniejsz tekst” schodzi do 100% i niżej nie idzie. Po „Wysoki kontrast” link w stopce ma `rgb(255, 255, 64)`, tło strony jest czarne, a przycisk paska zostaje `#4054b2`. „Jasne tło” maluje stopkę na biało, a link na czarno. Odświeżenie `?a11y=1#/regulamin` z zapisanym stanem (skala 1.3, kontrast, podkreślenie, Verdana) przywraca klasy: nagłówek regulaminu jest biały na czarnym, krój Verdana, pole szukania ma białą obwódkę.

Przy szerokości 390 px hamburger zajmuje y 21–78, a przycisk paska y 200–252. Prostokąty się nie przecinają, zamknięty panel jest poza oknem, `scrollWidth` zostaje 390. Na FTP nic nie poszło i nie było commita.
