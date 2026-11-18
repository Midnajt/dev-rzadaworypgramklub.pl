# Wzory UX na stronie głównej

Dokument `docs/ux_squarespace_wzor_promptow_20261117.md` opisuje cztery zachowania. Mega-menu (dwie kolumny, podmiana działu, Escape, szuflada poniżej 761 px) jest już w nagłówku i zostało na miejscu. Na stronie głównej, pod karuzelą „W jaki sposób kluby wykorzystują nasze środki”, doszły trzy bloki z tekstem zastępczym, żeby dało się zobaczyć rytm i zdecydować, gdzie je wstawić na stałe.

Wejście tekstu używa istniejącego `Reveal` (`client/src/components/motion/Reveal.tsx`). Nagłówek, lead i dwie karty startują z opacity 0 i zjazdem 1,5 rem, wchodzą po kolei (opóźnienie 0 / 120 / 240 ms) i zostają. Przy `prefers-reduced-motion` reguła w `base.css` w ogóle nie chowa tekstu. Sekcja: `HomeSamples`.

Kroki są w `StepScroll`. Cztery rekordy w `content/home-samples.ts` (piłka nożna, koszykówka, boks, żeglarstwo). Na szerokim ekranie tekst siedzi na środku swojego odcinka, aktywny jest krok najbliżej linii czytania, reszta ma opacity 0,3, a zdjęcie jest `sticky` pod `--chrome-h` i przenika w 0,5 s. Poniżej 761 px oraz przy reduced motion zdjęcie schodzi pod tekst, bez przyklejania; reduced motion dodatkowo zostawia wszystkie kroki w pełnej czytelności.

Karuzela kart jest w `TextCardCarousel`. Sześć linków hash (regulamin, FAQ, aktualności, podstawowe informacje, kontakt, do pobrania), na szerokim ekranie trzy karty, między 761 a 900 px dwie, na telefonie jedna. Strzałki „Poprzednie” i „Następne” oraz przeciągnięcie przesuwają rząd o jedną kartę przez `translateX`. Skrajne karty są dublowane, a po animacji indeks wraca bez drugiego ruchu. Bez autoplay. Karty poza kadrem mają `inert`.

Mapa reszty strony Squarespace (wyszukiwarka domen, accordion, logotypy, wideo z sekcji conversion) nie weszła: dokument oznacza ją jako poza wzorem.

Sprawdzone na `http://localhost:5173`: przed kadrem nagłówek ma opacity 0 i `translateY(24px)`, po dojechaniu zostaje; scroll w górę go nie chowa. Cztery kroki rozjaśniają się razem ze zdjęciem, sticky `top` około 137 px. Karuzela: następna z −1136 px na −1515 px, osiem kroków dalej pętla bez pustego kadru, przeciągnięcie i Enter na przycisku działają, klik karty otwiera `#/regulamin`. Przy 390 px baner kroków ma zdjęcie pod tekstem, karta ma szerokość viewportu. Reduced motion: tekst od razu, kroki opacity 1, zdjęcia przy tekście, przejście karuzeli 0 s. `tsc -b` i eslint bez błędów. Na FTP nic nie poszło.
