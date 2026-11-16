# Inwentaryzacja starej strony rzadowyprogramklub.pl — 16.11.2026

## Co zrobiono

- Przejrzano stronę https://rzadowyprogramklub.pl (WordPress 7.1.4, motyw Divi), `wp-sitemap.xml` i WordPress REST API.
- Utworzono `docs/old-website-info.md`, który zawiera:
  - menu i listę 9 stron z decyzją przenieść lub pominąć;
  - wszystkie dane kontaktowe: adres KZ LZS, infolinię krajową i 16 wojewódzkich, godziny pracy, e-maile, Facebook i link do AMODIT;
  - streszczenie każdej podstrony (Start, Podstawowe informacje, Regulamin 2026 według paragrafów, FAQ, Do pobrania, Kontakt);
  - 24 pytania FAQ pogrupowane w proponowane kategorie (pod wyszukiwarkę z notatek ze spotkania);
  - tabelę 51 aktualności według lat, ze slugami i załącznikami;
  - listę mediów: logotypy, instrukcje PDF, listy wyników 2022–2026, zdjęcia i filmy;
  - materiał do sekcji „W jaki sposób kluby wykorzystują nasze środki” (16 wizytówek klubów z podsumowania 2025) i statystyki „program w liczbach”;
  - listę niespójności i braków do wyjaśnienia z klientem;
  - plan przekierowań 301 ze starych URL-i.

## Ważne na kolejną sesję

- Pełny tekst 1:1 można pobrać przez `https://rzadowyprogramklub.pl/wp-json/wp/v2/pages?per_page=100` oraz `/posts?per_page=100` (pole `content.rendered`).
- Obecny `.htaccess` kieruje każdą nieznaną ścieżkę na `/#/404`. Przed podmianą strony trzeba dodać przekierowania 301 i zachować pliki `/wp-content/uploads/...`. Linkują do nich zewnętrzne serwisy, m.in. PDF-y z wynikami.
- Pliki z `wp-content/uploads` trzeba pobrać z serwera, zanim WordPress zostanie wyłączony. Bez zgody klienta nic nie zmieniamy na FTP.

## Otwarte pytania do klienta

- Od której daty przenosimy aktualności?
- Czy jest prezentacja lub instrukcja wniosku dla edycji 2026?
- Czy można ujednolicić opis wkładu własnego (5% kosztów zadania czy 5% kwoty dofinansowania) i poprawić oczywiste literówki w Regulaminie, skoro ma być przeniesiony 1:1?
- Kto przygotuje dane do deklaracji dostępności i polityki prywatności?
