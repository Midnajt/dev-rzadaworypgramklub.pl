# Jasny motyw i kotwice menu

Belka `theme-bar` (Jasny / Ciemny), skrypt `rpk-theme` w `index.html`, ciemne tokeny i paczka `react-icons` zeszły. Zostaje jasna paleta i `color-scheme: only light`, a `--chrome-h` to sama wysokość nagłówka, który jest `top: 0`.

Link w mega-menu, który nazywa fragment strony, ma adres z kotwicą: `#/podstawowe-informacje/kroki`, `#/podstawowe-informacje/kwoty`, `#/regulamin/nabor`, `#/faq/{id}` i `#/kontakt/godziny`. `parseHash` zapisuje ją w `HashView.anchor`, a po zmianie widoku strona robi `scrollIntoView`. Pytanie w FAQ otwiera się, gdy kotwica wskazuje to `details`. Zdanie o terminie naboru jest pozycją listy w § 1, więc `id="nabor"` siedzi na tym `li`.

Na `https://rzadowyprogramklub.pl/do-pobrania/` i na `#/do-pobrania` są te same cztery pliki: `MSiT_logotypy_2023.zip`, `LZS-Operator-KLUB-czarny-napis.png`, `LZS-Operator-KLUB-z-tlem.png` i `Rzadowy-Program-KLUB-logo-Witaj-W-Klubie.png`. Sprawdzone na localhost:5173 przy `prefers-color-scheme: dark` i starym `rpk-theme=dark` (białe tło, brak belki), klikami w menu (kroki, kwoty, nabór, pytanie FAQ, godziny) oraz przy 390 px. Na FTP nic nie poszło.
