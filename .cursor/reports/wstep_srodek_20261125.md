# Wstęp na środku kontenera — 2026-11-25

## Co zmieniono

Blok „Program dla klubów” (nagłówek i akapit) siedzi na środku `.program-intro`. W `client/src/styles/pages.css` reguła `.program-intro .prose` ma `margin-inline: auto` i `text-align: center` przy dotychczasowym `max-width: 36rem`. Treść w `pl.json` bez zmian.

Na wąskim widoku kontener jest węższy niż 36 rem, więc blok zostaje na pełną szerokość, a tekst w środku też jest wyśrodkowany.

## Sprawdzenie

Na localhost:5173 przy 1280 px kontener ma left 72,5 i width 1120, a `.prose` ma left 344,5 i width 576. Odstęp z lewej i z prawej wynosi po 272 px. Nagłówek i akapit mają `text-align: center`; napis „Program dla klubów” ma środek zgodny ze środkiem bloku.

Przy 390 px kontener i `.prose` mają left 20 i width 350. Tekst nagłówka i akapitu jest wyśrodkowany, nic się nie ucina i nie ma poziomego przewijania.

Na FTP nic nie poszło i nie było commita.
