# Filtr ciemny przeglądarki telefonu

Na opublikowanej stronie słońce jest wciśnięte, a treść i tak jest ciemna: czarne tło, jasny tekst, film bez zmian. Tak wygląda filtr „force dark”. `color-scheme: only light` jest w meta i w CSS na GitHub Pages, ale Samsung Internet (dolny pasek: domek, gwiazdka, licznik kart) nakłada go po stylach i tego nie słucha. Ten sam filtr w Chrome z flagą `WebContentsForceDark` zostawia czarne tło także przy `color-scheme: only light` i `dark only`.

Pod przyciskami, tylko gdy w identyfikatorze przeglądarki jest `SamsungBrowser` i notatka nie została zamknięta, jest zdanie z `theme.forced`. „Zamknij” zapisuje `rpk-browser-hint=off`. Wysokość belki mierzy `ResizeObserver` i schodzi do `--theme-stack`, więc nagłówek i treść zjeżdżają pod wyższą belkę.

Wyłączenie filtra: Samsung Internet → menu → Ustawienia → Wygląd → Tryb ciemny. W Chrome: Ustawienia → Motyw → odznacz przyciemnianie stron. Na FTP nic nie poszło.
