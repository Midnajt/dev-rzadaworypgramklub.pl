# Wstęp po prawej stronie kontenera — 2026-11-25

## Co zmieniono

Blok „Program dla klubów” (nagłówek i akapit) siedzi po prawej stronie `.program-intro`. W `client/src/styles/pages.css` reguła `.program-intro .prose` dostała `margin-left: auto` przy dotychczasowym `max-width: 36rem`. Tekst w środku bloku zostaje wyrównany do lewej. Treść w `pl.json` bez zmian.

Na wąskim widoku kontener jest węższy niż 36 rem, więc blok wraca na pełną szerokość, a lewy margines schodzi do zera. Pusta kolumna zostaje tylko tam, gdzie kontener jest szerszy niż tekst.

## Sprawdzenie

Na localhost:5173 przy 1280 px kontener ma left 73 i width 1120, a nagłówek i akapit mają left 617 i width 576 (prawa krawędź 1193, równo z kontenerem). Przy 390 px nagłówek ma left 20 i width 350, tyle samo co kontener; tekst się nie ucina i nie ma poziomego przewijania.

Na FTP nic nie poszło i nie było commita.
