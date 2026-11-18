# Belka jasny / ciemny

Telefon z ciemnym systemem sam przyciemniał stronę (Chrome „auto dark”), bo dokument nie deklarował schematu kolorów. Efekt był inny niż lokalny podgląd: białe tło i łuk pod banerem schodziły w ciemny filtr przeglądarki.

Nad nagłówkiem jest belka `ThemeBar` (`client/src/components/layout/ThemeBar.tsx`). Dwa przyciski biorą `FiSun` i `FiMoon` z `react-icons/fi`. Słońce włącza jasny, księżyc ciemny; aktywny ma czerwone tło i `aria-pressed`. Etykiety są w `pl.json` (`theme.label`, `theme.light`, `theme.dark`).

Start jest zawsze jasny, także przy `prefers-color-scheme: dark`. Wybór odwiedzającego zostaje w `localStorage` pod kluczem `rpk-theme`. Skrypt w `client/index.html` ustawia `data-theme` i meta `color-scheme` zanim doładuje się CSS, żeby nie mignął filtr telefonu. Jasny dokument ma `color-scheme: only light`, ciemny `color-scheme: dark` — przeglądarka nie nakłada wtedy własnego przyciemnienia.

Ciemny motyw podmienia tokeny w `html[data-theme="dark"]` (`index.css`, lustro `theme.ts`): tło strony, nagłówek, tekst, linki (jaśniejsza czerwień, bo `#c8102e` na granacie ma za mały kontrast) i panel mega-menu. `--color-white` i `--color-navy` zostają kolorami dosłownymi, bo leżą na filmie, przyciskach i w stopce. Znak „Witaj w Klubie” ma przezroczyste tło i granatowy napis, więc w ciemnym motywie dostaje białą płytkę w nagłówku i przy „Program dla klubów”.

Belka ma 3 rem i jest `fixed`. Nagłówek schodzi pod nią (`top: var(--theme-bar-h)`), a treść i szuflada menu używają `--chrome-h` (belka + nagłówek).

Sprawdzone na `http://localhost:5173` przy emulacji `prefers-color-scheme: dark`: pierwszy widok jasny (białe tło, słońce wciśnięte), księżyc przełącza na ciemny i zostaje po przeładowaniu, wyczyszczenie `rpk-theme` wraca do jasnego. Telefon 390 px: strona główna, aktualności (biały i ciemny łuk), szuflada menu od 124 px. Desktop 1280 px: mega-menu, pole szukania na FAQ, sekcja „Program dla klubów”. `tsc -b` i eslint na nowych plikach bez błędów. Na FTP nic nie poszło.
