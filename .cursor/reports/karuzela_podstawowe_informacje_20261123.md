# Karuzela kart na „Podstawowych informacjach” — 2026-11-23

## Co zmieniono

- Sekcja kroków na stronie głównej nie ma już nadtytułu „Kroki i zdjęcie” ani notatki „Pasuje do ścieżki wniosku…” (`StepScroll.tsx`, klucze usunięte z `pl.json`). Zostaje tytuł „Jak dołączyć do Programu KLUB”.
- Wzór „Karuzela kart” zszedł ze strony głównej (`HomeSamples.tsx`), a `sampleCards` i `home.samples.cards` usunięto. Zdanie `home.samples.intro` mówi teraz o jednym wzorze i krokach.
- `TextCardCarousel.tsx` dostaje w propsach `id`, `title`, `cards`, `prevLabel`, `nextLabel` i opcjonalny `className`. Karta z `href` jest linkiem (`HashLink`), bez `href` jest `article`. Czerwona ramka po najechaniu działa tylko na linkach (`a.text-carousel__card:hover`).
- `#/podstawowe-informacje`: pod nagłówkiem strony jest „Program w skrócie” z siedmioma kartami: Uczestnicy Programu, Bezpośredni uczestnicy, Wysokości dofinansowania, Przeznaczenie środków, Termin realizacji, Udział środków własnych, Finansowanie. Kolejność jest w `basicsHighlights` (`basics.ts`), a teksty w `basics.highlights` (`pl.json`). Pełne bloki niżej bez zmian.

Karty nie są linkami, bo nawigacja hash nie ma kotwic wewnątrz widoku.

## Sprawdzenie

`npm run build` bez błędów, ESLint czysty dla `sections`, `pages` i `content`. Na localhost:5173: strona główna bez karuzeli kart i bez usuniętych tekstów; na podstronie przy 1280 px widać trzy karty, „Następne” przesuwa o kartę, po siedmiu kliknięciach rząd wraca na start; przy 390 px jedna karta i brak poziomego przewijania; konsola bez błędów po świeżym wczytaniu.

Na FTP nic nie poszło.
