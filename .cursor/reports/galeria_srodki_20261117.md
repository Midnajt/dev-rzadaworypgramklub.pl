# Galeria: jak kluby wykorzystują środki (2026-11-17)

## Podsumowanie

Pod wstępem strony głównej (`section.section--surface`) jest sekcja „W jaki sposób kluby wykorzystują nasze środki”. To karuzela dziesięciu kart, bez nowej biblioteki: rząd jedzie przez `translateX`, strzałki „Poprzednie” i „Następne” oraz przeciągnięcie w osi X. Pętla dokleja kopie skrajnych kart (`aria-hidden`) i po animacji cofa indeks bez skoku. Nie ma autoplay. Przy `prefers-reduced-motion` zmiana jest natychmiastowa (`transition: 0s`).

Każda karta to inny sport. Zdjęcie jest tłem, na dole granatowa wtapianka, jasny tytuł i jedno zdanie. Teksty są w `home.fundUse` w `client/src/i18n/locales/pl.json`, lista kart w `client/src/content/fund-use.ts`. Zdjęcia (dłuższy bok 1200 px) leżą w `client/assets/gallery/` i są wpisane w `client/src/config/assets.ts` oraz `client/assets/ASSETS.md`. Karty nie są linkami.

Cztery zdania nazywają kluby z podsumowania 2025 (Sokół Wroniawy, Młode Lwy Gdańskie, Olimpijski Club Tennis And Sports, Tempo Kielce). Zdjęcie jest ilustracją dyscypliny, nie portretem tego klubu. Pozostałe zdania biorą zasady z regulaminu i FAQ oraz liczby z podsumowania 2025 (blisko 700 obozów, prawie 5 500 klubów ze sprzętem, ponad 360 tys. dzieci).

## Sprawdzenie

Lokalnie na `http://localhost:5173/`. Desktop około 1309 px: pierwsza karta (piłka nożna) zaczyna się równo z nagłówkiem (lewa krawędź 95 px), w kadrze są cztery karty, ostatnia ucięta przy prawej krawędzi okna. Strzałka „Następne” przesuwa rząd o jedną kartę (312 px). Dziesięć kroków: piłka nożna, koszykówka, tenis, akrobatyka, boks, taekwondo, żeglarstwo, narciarstwo, BMX, futsal i z powrotem piłka nożna, bez pustego kadru. „Poprzednie” z piłki nożnej wraca na futsal.

Telefon 390×844: jedna karta 296×400 px i 58 px podglądu następnej, strzałki pod leadem. Przy `prefers-reduced-motion: reduce` rząd ma klasę `is-instant` i `transition-duration: 0s`; tytuł zmienia się w ciągu 40 ms.

Na FTP nic nie wysłano. Nie było commita.

## Korekta odstępu i krawędzi

Nad nagłówkiem sekcji jest `padding-top: clamp(8rem, 14vw, 12rem)`. Przy szerokości 1324 px od akapitu wstępu do nagłówka jest 253 px, przy 390 px odstęp ma 196 px (sam padding 128 px). Rząd kart ma `margin-left: 0`: pierwsza grafika zaczyna się na lewej krawędzi okna, nagłówek zostaje w kontenerze. Sprawdzone na desktopie i przy 390 px.

## Ruch i pasek kropek

Przesunięcie rzędu trwa 0,8 s (`cubic-bezier(0.22, 0.61, 0.36, 1)`). Nad kartami, na środku paska ze strzałkami, jest wskaźnik 82×6 px: aktywna kropka 32×6, sąsiednie 5×5 i 4×4, kolor granatu. Przy zmianie karty szerokość i pozycja kropek jadą tą samą krzywą. Sprawdzone: start −624 px (piłka nożna), po „Następne” w trakcie ruchu −700 / −836 / −900 px, po zatrzymaniu −936 px i koszykówka, kropki z powrotem 4, 5, 32, 5, 4.
