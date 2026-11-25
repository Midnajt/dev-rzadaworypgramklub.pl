# Wygląd panelu dostępności (2026-11-25)

## Podsumowanie

Przycisk 52×52 px przy prawej krawędzi jest w granacie strony (`#0f2341`, `rgb(15, 35, 65)`), z zaokrągleniem po lewej i czerwoną kreską `#c8102e` u dołu. Po otwarciu ten sam granatowy pas z czerwoną kreską jest nagłówkiem okienka (280 px). Zamiast listy z punktorami są trzy grupy: regulator „Wielkość tekstu” (minus, procent, plus), „Wygląd strony” (szarość, kontrast, jasne tło) i „Czytanie” (podkreślenie, Verdana). Włączona pozycja ma jasne tło, granatową ikonę i czerwoną kreskę z lewej. Reset jest osobnym przyciskiem na dole.

Działanie bez zmian: skala 100–200% co 10%, trzy tryby wyglądu wykluczają się, podkreślenie i czytelna czcionka działają osobno, wybór zostaje w `localStorage` (`a11y-tools`). Pasek jest wyłączony z trybów, więc w wysokim kontraście zostaje granatowy i biały, a link w stopce schodzi na żółty na czarnym.

## Weryfikacja

`http://localhost:5173/` przy oknie 1191 px (`clientWidth` 1176). Zamknięty przycisk ma left 1124, right 1176, top 200, a panel zaczyna się na 1176 i nie poszerza strony (`scrollWidth` 1176). Otwarty panel ma left 896 i width 280. Escape zamyka panel i wraca fokus na przycisk; zamknięty panel ma `inert`. Klik w logo zamyka panel.

Skala z zapisanego 110% po „Powiększ tekst” pokazuje 120%, a `body` ma 20,4 px. „Wysoki kontrast” i „Podkreśl linki” są włączone razem; „Odcienie szarości” zdejmuje kontrast i zostawia podkreślenie. „Resetuj” wraca do 100%, zdejmuje klasy z `html` i kasuje `a11y-tools`; `body` ma wtedy 17 px. W kontraście stopka jest czarna, link `rgb(255, 255, 64)`, a przycisk paska zostaje `rgb(15, 35, 65)`.

Przy szerokości 390 px hamburger zajmuje y 16–60, a przycisk paska y 200–252. Prostokąty się nie przecinają. Otwarty panel ma left 110, right 390 i height 484; etykiety kończą się na 378 px, `scrollWidth` zostaje 390. Na FTP nic nie poszło i nie było commita.
