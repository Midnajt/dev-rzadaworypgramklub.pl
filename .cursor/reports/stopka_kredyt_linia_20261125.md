# Stopka: kredyt w jednej linii pod paskiem (2026-11-25)

## Podsumowanie

`.footer-credit` zszedł z prawej kolumny `site-footer__inner` pod granatowy pasek. Zostaje w `footer`, jako osobny rząd na pełną szerokość, z cienką jasną linią od góry. Logo, rok, infolinia i e-mail zostają w bloku wyżej.

Oba zdania są w jednym akapicie, obok siebie, rozdzielone kropką środkową. Klucze `footer.credits`, `footer.addPattern` i `footer.stock` bez zmiany sensu. Zostają link do https://addpattern.pl/ i link do pixabay.com oraz znak AddPattern.

Na wąskim widoku ten sam akapit zawija się w całości (dwie linie przy 390 px). Krój schodzi z 0,75 rem do 0,6875 rem. To nie jest powrót do dwóch akapitów w kolumnie 330 px.

## Sprawdzenie

`http://localhost:5173/`, okno 1191×914. Gdy stopka jest na dole widoku, `.footer-credit` ma top 863, left 0, width 1176, height 51. Akapit ma 580×16 px, jedną linię. Wcześniej blok miał około left 770, width 330, height 36.

`#/regulamin` (ta sama stopka): top 863, left 0, width 1176, height 51, jedna linia.

Przy 390 px rząd jest pod paskiem: left 0, width 390, height 53, dwie linie jednego zdania. Linki „AddPattern” i „pixabay.com” łapią klik. Poziomego scrolla nie ma. To samo na `#/regulamin`.

Na FTP nic nie wysłano. Nie było commita.
