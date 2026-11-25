# Karuzela: autoprzewijanie co 5 s (2026-11-25)

## Podsumowanie

Karuzela „W jaki sposób kluby wykorzystują nasze środki” (`client/src/components/sections/FundUseCarousel.tsx`) sama jedzie do przodu co 5 sekund. Stała `AUTO_MS = 5000` woła istniejące `step(1)`, więc zostaje krzywa `cubic-bezier(0.22, 0.61, 0.36, 1)` przez 0,8 s, pętla i kropki.

Klik „Następne” albo „Poprzednie” oraz koniec przeciągnięcia kasują bieżący licznik i odliczają pełne 5 s od nowa. Przy `prefers-reduced-motion: reduce` autoprzewijania nie ma. Gdy sekcja jest poza ekranem albo `document.hidden`, timeout jest zdejmowany i po powrocie startuje od nowa.

## Sprawdzenie

`http://localhost:5173/`.

„Następne”: przed kliknięciem `translateX(-624px)` (Piłka nożna), po 50 ms `−936px`, po 2 s nadal `−936px` (Koszykówka), po 5,2 s `−1248px` (Tenis ziemny). Aktywna kropka zostaje jedną pigułką 32×6 px.

„Poprzednie” z Piłki nożnej: przed `−624px`, po 40 ms `−312px`, po 2 s `−3432px` (Futsal, istniejące dociągnięcie pętli z klona), po 5,2 s `−3744px` (auto o jedną kartę do przodu, w stronę Piłki nożnej).

Poza ekranem przez 6 s nie wystartował nowy tick. Po powrocie, po 5,2 s, tor zszedł z `−624px` na `−936px`. Przy `prefers-reduced-motion: reduce` przez 5,5 s zostało `−624px`, a strzałka nadal przesuwa kartę (czas przejścia 0 s).

Na FTP nic nie wysłano. Nie było commita.
