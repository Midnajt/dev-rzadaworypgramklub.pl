# Stara strona rzadowyprogramklub.pl — inwentaryzacja treści do migracji

Stan na **16.11.2026**. Źródła: strona publiczna, `wp-sitemap.xml` i WordPress REST API (`/wp-json/wp/v2/pages`, `/posts`, `/media`).

Pełną treść 1:1 (np. Regulaminu i FAQ) można w każdej chwili pobrać ponownie z API:

- strony: `https://rzadowyprogramklub.pl/wp-json/wp/v2/pages?per_page=100`
- wpisy (aktualności): `https://rzadowyprogramklub.pl/wp-json/wp/v2/posts?per_page=100`
- media (191 plików): `https://rzadowyprogramklub.pl/wp-json/wp/v2/media?per_page=100&page=1` i `&page=2`

---

## 1. Czym jest strona

- **Nazwa:** Rządowy Program „KLUB” — hasło „Witaj w Klubie”.
- **Tytuł strony (`<title>`):** `Rządowy Program "Klub" | Witaj w Klubie`
- **Hasło ze strony głównej:** „Rządowy Program Klub – jest platformą wniosków prowadzoną przez Krajowe Zrzeszenie LZS”.
- **Dla kogo:** kluby sportowe działające jako stowarzyszenia, w tym uczniowskie kluby sportowe (UKS), prowadzące zajęcia dla dzieci i młodzieży do 18 lat.
- **Organizator programu:** Minister Sportu i Turystyki (MSiT). Program jest finansowany z Funduszu Rozwoju Kultury Fizycznej (FRKF).
- **Operator Krajowy:** Krajowe Zrzeszenie Ludowe Zespoły Sportowe (KZ LZS). Jest operatorem od 2022 roku, a na lata 2026–2028 został wybrany ponownie decyzją MSiT z 13.02.2026.
- **System do wniosków:** AMODIT pod adresem `https://wnioski.rzadowyprogramklub.pl` (w menu jako „Logowanie”). Przez AMODIT przechodzi składanie wniosku, ocena, umowa i rozliczenie.
- **Historia:** program istnieje od 2016 roku (MSiT). Nakłady wzrosły z około 24 mln zł w 2016 roku do 110,47 mln zł w 2025 roku.

### Technologia starej strony (do wiadomości)

- WordPress 7.1.4 z motywem Divi (Divi Child v4.27.6).
- Na stronie głównej nie widać kodu analityki (GA, GTM ani piksela Facebooka).
- Kolory motywu: czerwony `#e02b20` i niebieski `#2ea3f2` (domyślny akcent Divi). Według notatek ze spotkania nowe kolory to **czerwony, biały i granatowy**.

---

## 2. Dane kontaktowe (do przeniesienia 1:1)

### Adres

**Krajowe Zrzeszenie LZS**
ul. S. Krzyżanowskiego 46a
01-220 Warszawa

### Infolinie — pon.–pt. 10:00–15:00

| Operator | Telefon |
|---|---|
| **Operator Krajowy — KZ LZS Warszawa** | **667 099 565** (w Regulaminie: +48 667 099 565) |
| dolnośląskie | +48 605 060 348 |
| kujawsko-pomorskie | +48 690 515 907 |
| lubelskie | +48 695 735 077 |
| lubuskie | +48 721 639 291 |
| łódzkie | +48 605 230 423 |
| małopolskie | +48 797 874 783 |
| mazowieckie | +48 608 056 865 |
| opolskie | +48 694 443 002 |
| podlaskie | +48 502 408 487 |
| podkarpackie | +48 888 636 021 |
| pomorskie | +48 797 942 900 |
| śląskie | +48 513 806 932 |
| świętokrzyskie | +48 881 126 515 |
| wielkopolskie | +48 530 598 533 |
| warmińsko-mazurskie | +48 691 485 927 |
| zachodniopomorskie | +48 697 994 181 |

Godziny infolinii („pon - pt 10.00 - 15.00”) są tylko w stopce. Podstrona Kontakt ich nie podaje.

### E-mail

- **Pomoc merytoryczna:** biuro@rzadowyprogramklub.pl
- **Pomoc techniczna dotycząca systemu AMODIT:** pomoc@rzadowyprogramklub.pl

### Linki zewnętrzne

- Facebook: https://www.facebook.com/rzadowyprogramklub/ (w stopce „Bądźmy w kontakcie / Obserwuj”)
- KZ LZS („O nas”): https://lzs.pl/
- System wniosków AMODIT: https://wnioski.rzadowyprogramklub.pl
- Klasyfikacja SSM (link w Regulaminie): https://ssm.insp.waw.pl/klasyfikacja-klubow

---

## 3. Struktura i menu

Kolejność w menu głównym:

1. **Start** — `/`
2. **Aktualności** — `/aktualnosci/`
3. **Podstawowe informacje** — `/podstawowe-informacje/`
4. **FAQ – pytania i odpowiedzi** — `/faq/`
5. **Regulamin** — `/regulamin/`
6. **Logowanie** — zewnętrzny link `https://wnioski.rzadowyprogramklub.pl` (AMODIT)
7. **Do pobrania** — `/do-pobrania/`
8. **Kontakt** — `/kontakt/`

Stopka na każdej stronie zawiera adres KZ LZS, wszystkie infolinie, oba e-maile i link do Facebooka.

### Strony WordPressa (9)

| Strona | URL | Ostatnia zmiana | Decyzja |
|---|---|---|---|
| Start | `/` | 13.07.2026 | przenieść (nowy układ) |
| Aktualności | `/aktualnosci/` | 29.03.2026 | przenieść |
| Podstawowe informacje | `/podstawowe-informacje/` | 30.03.2026 | przenieść (do przejrzenia przez Oskara) |
| FAQ | `/faq/` | 29.03.2026 | przenieść **1:1** |
| Regulamin | `/regulamin/` | 30.03.2026 | przenieść **1:1** |
| Kontakt | `/kontakt/` | 01.04.2026 | przenieść |
| Do pobrania | `/do-pobrania/` | 29.03.2026 | przenieść |
| Sample Page | `/sample-page/` | 2022 | **pominąć** (domyślna strona WP) |
| Start-test3 | `/start-test3/` | 02.04.2026 | **pominąć** (pusta strona testowa) |

Jest jedna kategoria wpisów: `/category/aktualnosci/`.

---

## 4. Treść podstron

### 4.1. Strona główna (Start)

Elementy w kolejności:

1. Pasek logotypów: Ministerstwo Sportu i Turystyki, „Witaj w Klubie”, KZ LZS.
2. Mapa z rozkładem dofinansowania w województwach na 2026 rok: `wp-content/uploads/2026/07/Mapka_Programu_Klub_2026_rozklad_dofinansowania_w_woj_22-06-2026_akt_kwot_z_MSiT.jpg`.
3. Cztery kafelki-skróty: **Podstawowe informacje**, **Logowanie** (AMODIT), **Regulamin**, **FAQ – pytania i odpowiedzi**.
4. Sekcja „Aktualności” z trzema najnowszymi wpisami i przyciskiem „więcej”.
5. Sekcja „FAQ — najczęściej zadawane pytania” z linkiem „więcej”. Na starej stronie jest pusta, bez pytań.
6. Hasło „Rządowy Program Klub – jest platformą wniosków prowadzoną przez Krajowe Zrzeszenie LZS” z przyciskiem „O nas”, który prowadzi do lzs.pl.
7. W tle strony jest wideo `wp-content/uploads/2022/03/tlo.webm`.

### 4.2. Podstawowe informacje — edycja 2026

Treść jest skrótem Regulaminu, ułożonym w pary „nagłówek — opis”:

- **Cele Programu:** upowszechnianie aktywności fizycznej dzieci i młodzieży, wyrównywanie szans w dostępie do systematycznej aktywności, wsparcie instytucjonalne klubów-stowarzyszeń, inwestycja w kapitał ludzki w sporcie oraz lepsze wykorzystanie infrastruktury samorządów.
- **Finansowanie:** FRKF, którego dysponentem jest MSiT. Środki przekazuje Operator Krajowy, czyli KZ LZS.
- **Operator Krajowy:** KZ LZS, na zlecenie MSiT.
- **Uczestnicy Programu:** kluby sportowe, w tym UKS, działające w formie stowarzyszenia.
- **Podstawowe wymogi:**
  - co najmniej 3 lata zarejestrowanej działalności, potwierdzone wypisem z KRS lub ewidencji starosty wystawionym nie wcześniej niż 3 miesiące przed złożeniem wniosku;
  - dotacje publiczne na szkolenie sportowe w 2025 roku łącznie do 250 tys. zł, potwierdzone „Oświadczeniem o dotacjach ze środków publicznych”.
- **Bezpośredni uczestnicy:** wyłącznie dzieci i młodzież do 18 lat.
- **Termin realizacji:** od 1.01 do 30.11.2026. Ostatnie wydatki najpóźniej 30.11.2026.
- **Przeznaczenie środków:** wynagrodzenia szkoleniowców, zakup sprzętu sportowego i/lub obozy sportowe.
- **Komponent obowiązkowy:** systematyczne zajęcia sportowe, sportowo-rekreacyjne lub rekreacyjne przez cały okres zadania.
- **Kwoty dofinansowania:** klub jednosekcyjny 12 tys. zł, klub wielosekcyjny 17 tys. zł (co najmniej 2 szkoleniowców z 2 różnych sekcji).
- **Wydatkowanie:** tylko w okresie obowiązywania umowy, najpóźniej do 30.11.2026.
- **Środki własne:** co najmniej 5%. Mogą pochodzić m.in. od samorządu (pieniądze lub udostępniona infrastruktura), z UE, od sponsorów lub z pracy wolontariuszy. Nie mogą to być środki z MSiT.
- **UWAGA:** szczegóły są w Regulaminie, opartym na ogłoszeniu MSiT z 29.01.2026 („Program KLUB – edycja na lata 2026–2028”).

Z notatek ze spotkania: w tej sekcji ma powstać segment **„krok po kroku”**, zbudowany na podstawie Regulaminu i FAQ.

### 4.3. Regulamin — „REGULAMIN ZADANIA RZĄDOWY PROGRAM „KLUB” – EDYCJA 2026”

Według notatek **musi zostać przeniesiony 1:1**. Pełny tekst jest w API (`/wp-json/wp/v2/pages`, slug `regulamin`). Struktura i najważniejsze fakty:

| § | Tytuł | Najważniejsze punkty |
|---|---|---|
| 1 | Postanowienia ogólne | Podstawą jest ogłoszenie MSiT z 29.01.2026. Finansowanie z FRKF. Realizacja tylko na terenie RP. Uczestnicy do 18 lat. Okres realizacji 1.01–30.11.2026, minimum 2 miesiące zajęć. Wnioski tylko w AMODIT, jeden wniosek na klub. **Nabór od 2.03.2026, 12:00:00, do 30.03.2026, 23:59:59.** Forma: konkurs ofert. |
| 2 | Założenia Programu | 5 celów programu. Komponent obowiązkowy to systematyczne zajęcia. |
| 3 | Zasady działania Operatora Krajowego | 10 zadań operatora, m.in. wizytacje 2500 klubów, sprawozdawczość, raporty miesięczne, prowadzenie strony WWW i profilu w social mediach. |
| 4 | Zasady uczestnictwa klubów | 26 punktów: kwoty 12 tys. / 17 tys. zł, co najmniej 20% na wynagrodzenia szkoleniowców, wymogi dla klubów wielosekcyjnych, uprawnienia szkoleniowców, obozy co najmniej 5 dni i wyjazdowe, wkład własny co najmniej 5% (600 zł lub 850 zł), limit dotacji publicznych 250 tys. zł w 2025 roku, co najmniej 3 lata działalności, dane SSM, sprzęt z atestami, faktury. |
| 5 | Dokumenty niezbędne jako załączniki | KRS lub ewidencja (nie starsze niż 3 miesiące), statut, oświadczenie o dotacjach za 2025 rok, oświadczenie o zgodności z oryginałem. Wszystkie w PDF, każdy jako osobny plik, oświadczenia podpisane elektronicznie. Upoważnienie pełnomocnika, jeśli dotyczy. |
| 6 | Kryteria oceny wniosków | Dotacje publiczne 0–30 pkt, szczegółowość informacji 0–25, liczba uczestników 0–20, zgodność z programem 0–20, racjonalność kosztów 0–5. Spóźnione rozliczenie za 2025 rok to −20 pkt. Maksimum 100 pkt. Przy remisie decyduje data złożenia wniosku. |
| 7 | Przyczyny odrzucenia wniosków | 12 przyczyn formalnych. |
| 8 | Ogłoszenie wyników i umowa | Wyniki na stronie najpóźniej 30.04.2026. Umowę trzeba podpisać elektronicznie w ciągu 21 dni. Istnieje lista rezerwowa. Od decyzji nie przysługuje odwołanie (to nie jest decyzja w trybie KPA). |
| 9 | Obowiązki beneficjenta | Realizacja i rozliczenie zadania, poddanie się kontroli. Rozliczenie w AMODIT na załącznikach nr 1, 1a, 2, 3 i 4. |
| 10 | Postanowienia końcowe | Operator może zmieniać Regulamin. Aktualna wersja jest na stronie. |

Pod paragrafami jest blok **UWAGA / WAŻNA INFORMACJA**. Mówi, że wniosku nie da się poprawić po kliknięciu „WYŚLIJ”, podaje infolinie i e-maile, pokazuje grafikę `wp-content/uploads/2026/02/Witaj_w_Klubie_2026.jpg` i zawiera przypis (*) o dopuszczalnych formach prawnych:

- **Dopuszczone:** stowarzyszenie w KRS, stowarzyszenie w ewidencji starosty (w tym stowarzyszenie zwykłe), UKS w KRS, UKS w rejestrze starosty.
- **Wykluczone:** fundacje, polskie związki sportowe i inne związki, spółki (sp. z o.o., SA, SSA), przedsiębiorstwa.

### 4.4. FAQ — „najczęściej zadawane pytania” — edycja 2026

Według notatek **ma zostać przeniesione 1:1**. Dodatkowo potrzebna jest **wyszukiwarka** i **podział na kategorie**. Na starej stronie jest 24 pytań. Poniżej podział na kategorie, który proponuję:

**Kto może wziąć udział**
1. Kto jest uprawniony do uzyskania dofinansowania?
2. Jaką formę organizacyjną powinien mieć klub ubiegający się o dofinansowanie?
3. Czy nowopowstały klub może złożyć wniosek o dofinansowanie w ramach Programu „KLUB”? — **NIE**
4. Kto może być bezpośrednim uczestnikiem Programu?
5. Czy jeśli klub nie rozliczył dotacji w ubiegłym roku, może uzyskać wsparcie w roku bieżącym? — **NIE**

**Na co i ile pieniędzy**
6. Na jakie działania może zostać przeznaczone dofinansowanie przyznane w ramach Programu „KLUB”?
7. Czy w ramach zadań Programu można finansować uczestnictwo w zawodach, turniejach lub ich organizację? — **NIE**
8. W jakiej wysokości można uzyskać dofinansowanie na realizację zadań w ramach Programu „KLUB”?
9. Jakie podstawowe wymogi i kryteria przyjęto w Programie „KLUB” dla klubów „wielosekcyjnych”?
10. Czy można przeznaczyć pełną kwotę przyznanej dotacji na wynagrodzenie szkoleniowca lub szkoleniowców? — **TAK**

**Dotacje z innych środków publicznych**
11. Czy każdy klub sportowy może uzyskać dofinansowanie, niezależnie od kwoty dotacji pozyskanych z innych środków publicznych? — **NIE** (limit 250 tys. zł)
12. Dotacja ze środków publicznych? — definicja i przykłady programów z 2025 roku
13. Jak należy interpretować sformułowanie „otrzymane dotacje ze środków publicznych, z przeznaczeniem na prowadzenie szkolenia sportowego”?

**Termin i miejsce realizacji**
14. W jakim terminie może być realizowany Program?
15. Czy Program (zajęcia sportowe) musi być obowiązkowo realizowany w czasie letnich wakacji? — **NIE**
16. Czy zadania Programu (zajęcia, obozy) można realizować za granicą? — **NIE**

**Szkoleniowcy**
17. Kto może być zgłoszony w Programie jako szkoleniowiec?

**Sprzęt i obozy**
18. Jaki sprzęt sportowy można zakupić w ramach programu?
19. Jak należy dokumentować zakup sprzętu?
20. Czy można nabyć sprzęt za granicą?
21. Czy jest określona liczba dni obozu sportowego i forma organizacji? — **TAK** (co najmniej 5 dni, poza siedzibą klubu)

**Ocena wniosku**
22. Jakie kryteria stosowane są przy ocenie wniosków?
23. Jak należy rozumieć zawarte we wniosku pytanie (pkt VI) „Czy są uczestnicy o niższym statusie ekonomicznym?”

**Dokumenty i podpisy**
24. Podpis elektroniczny — czy „oświadczenie o zgodności danych” i „oświadczenie o dotacjach” muszą być podpisane elektronicznie? Jakiego rodzaju podpisu mogę użyć? — **TAK**. Wymagany jest podpis zaawansowany (w tym przez profil zaufany) albo kwalifikowany.

Uwaga: większość pytań w starym FAQ linkuje do innej domeny, `programklub.pl/kb/...` (np. `https://programklub.pl/kb/kto-jest-uprawniony-do-uzyskania-dofinansowania/`). To pozostałość po poprzedniej bazie wiedzy. W nowej wersji te linki należy usunąć, a treść zostawić 1:1.

### 4.5. Do pobrania

Nagłówek: „LOGOTYPY do pobrania”.

| Plik | URL |
|---|---|
| MSiT_logotypy_2023 (katalog .zip) | `wp-content/uploads/2025/02/MSiT_logotypy_2023.zip` |
| LZS Operator KLUB — czarny napis | `wp-content/uploads/2025/02/LZS-Operator-KLUB-czarny-napis.png` |
| LZS Operator KLUB — z tłem | `wp-content/uploads/2025/02/LZS-Operator-KLUB-z-tlem.png` |
| Rządowy Program KLUB — logo „Witaj w Klubie” | `wp-content/uploads/2025/02/Rzadowy-Program-KLUB-logo-Witaj-W-Klubie.png` |

Pod plikami jest zastrzeżenie: „Załączone logotypy mogą być wykorzystywane wyłącznie przez beneficjentów Rządowego Programu Klub, do celów promocji i informacji.”

Warto rozważyć przeniesienie tutaj także instrukcji, które dziś są rozproszone po wpisach (punkt 6.2).

### 4.6. Kontakt

Ta sama lista infolinii co w stopce (punkt 2) oraz logo „Witaj w Klubie”. Strona nie ma formularza kontaktowego, adresu ani e-maili, bo te są tylko w stopce.

---

## 5. Aktualności (51 wpisów na starym WordPressie)

**Decyzja z 17.11.2026:** na nową stronę wchodzą tylko wpisy z datą **od 1 stycznia 2025**. W `client/src/content/news.ts` są pełne wpisy 2026 (`newsPosts`) i tytuły z 2025 (`newsArchive`). Wpisy z lat **2022, 2023 i 2024 nie trafiają** ani do listy, ani do archiwum, ani jako pełne artykuły. Tabele tych lat zostają jako inwentaryzacja starego WordPressa — to nie jest lista do przeniesienia.

Każdy wpis jest podpisany: „Zespół Operatora Krajowego Rządowego Programu „KLUB” / Krajowe Zrzeszenie LZS”. Większość ma miniaturę z logo „Witaj w Klubie” (`Logo-Witaj-w-Klubie-RGB-na_bialym_pasku_*.jpg`).

### 2026 (edycja 2026) — priorytet

| Data | Tytuł | Slug | Załączniki i uwagi |
|---|---|---|---|
| 29.04.2026 | WYNIKI naboru wniosków w ramach Rządowego Programu „KLUB” – edycja 2026 | `wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026` | Pozytywnie oceniono 7 751 wniosków na łączną kwotę 102 432 000,00 zł. PDF `2026/07/Lista_wnioskow_zakwalifikowanych_z_uwzglednieniem_listy_rezerwowej.pdf` |
| 07.04.2026 | MAMY REKORD! W ramach Rządowego Programu „Klub” – Edycja 2026 złożono aż 9032 wnioski! | `mamy-rekord-w-ramach-rzadowego-programu-klub-edycja-2026-zlozono-az-9032-wnioski` | grafika `2026/04/Program-KLUB-2026-mapka-z-rekordem-nowa99.png` |
| 20.03.2026 | WAŻNA INFORMACJA Operatora Krajowego Rządowego Programu „KLUB” | `wazna-informacja-operatora-krajowego-rzadowego-programu-klub` | oświadczenia trzeba podpisać elektronicznie, sam skan nie wystarcza |
| 03.03.2026 | WAŻNY Komunikat Krajowego Zrzeszenia LZS | `wazny-komunikat-krajowego-zrzeszenia-lzs-2` | ostrzeżenie przed firmami „pomagającymi w dotacjach” |
| 02.03.2026 | Dzisiaj rusza nabór wniosków do Rządowego Programu „KLUB” | `dzisiaj-rusza-nabor-wnioskow-do-rzadowego-programu-klub` | „Dlaczego warto aplikować?” — 60% wsparcia trafia do gmin wiejskich i miejsko-wiejskich |
| 18.02.2026 | Nabór wniosków – Program KLUB 2026 | `nabor-wnioskow-program-klub-2026` | ogłoszenie terminów naboru |

### 2025

| Data | Tytuł | Slug | Załączniki |
|---|---|---|---|
| 19.12.2025 | Podsumowanie Rządowego Programu KLUB 2025 – Warszawa | `podsumowanie-rzadowego-programu-klub-2025-warszawa` | 16 zdjęć, długi tekst (około 1700 słów) |
| 19.12.2025 | Podsumowanie Rządowego Programu Klub 2025 – nasi najważniejsi goście | `podsumowanie-rzadowego-programu-klub-2025-nasi-najwazniejsi-goscie` | wizytówki 16 klubów, po jednym z każdego województwa, ze zdjęciami (punkt 7) |
| 12.12.2025 | List Ministra – start „Strategii Rozwoju Polskiego Sportu do roku 2040” | `list-ministra-start-strategii-rozwoju-polskiego-sportu-do-roku-2040` | PDF `2025/12/List_otwarty_zaproszenie_do_udzialu_w_konsultacjach_Strategii_Rozwoju_Sportu.pdf` i link do strategiasportu.pl |
| 07.10.2025 | Brak wymogu testów sprawnościowych w Rządowym Programie „KLUB” 2025 | `komunikat-operatora-krajowego-rzadowego-programu-klub-edycja-2025-dot-testow-sprawnosciowych` | — |
| 21.05.2025 | KOMUNIKAT Operatora Krajowego Rządowego Programu „KLUB” – edycja 2025 | `komunikat-operatora-krajowego-rzadowego-programu-klub-edycja-2025` | budżet zwiększony do 110 470 000 zł, 7 727 klubów |
| 30.04.2025 | Wszystkie kluby z listy rezerwowej dostaną dofinansowanie! | `wszystkie-kluby-z-listy-rezerwowej-dostana-dofinansowanie` | 196 klubów z listy rezerwowej |
| 14.04.2025 | WYNIKI naboru wniosków w ramach Rządowego Programu „KLUB” – edycja 2025 | `wyniki-naboru-wnioskoww-ramach-rzadowego-programu-klub-edycja-2025` | 4 PDF-y: prezentacja, lista dofinansowanych, lista rezerwowa, lista niezakwalifikowanych |
| 02.04.2025 | Rządowy Program Klub 2025 – wpłynęło 8548 wniosków… | `rzadowy-program-klub-2025-wplynelo-8548-wnioskow-ogloszenie-wyniku-naboru-do-28-kwietnia` | w tytule jest 8548, w treści 8584 |
| 05.03.2025 | WAŻNY Komunikat Krajowego Zrzeszenia LZS | `wazny-komunikat-krajowego-zrzeszenia-lzs` | treść jest duplikatem instrukcji z 21.02.2025 |
| 21.02.2025 | Instrukcja dotycząca wypełniania wniosku | `instrukcja-dotyczaca-wypelniania-wniosku-2` | PDF-y: prezentacja 2025 i instrukcja podpisywania dokumentów |
| 14.02.2025 | Nabór wniosków do edycji 2025 | `nabor-wnioskow-do-edycji-2025` | — |

### 2024 — nie przenosić

| Data | Tytuł | Slug | Załączniki |
|---|---|---|---|
| 08.11.2024 | Ankieta dla beneficjentów Rządowego Programu „KLUB” | `ankieta-dla-beneficjentow-rzadowego-programu-klub` | — |
| 10.10.2024 | TESTY sprawnościowe dla uczestników Rządowego Programu „KLUB” | `testy-sprawnosciowe-dla-uczestnikow-rzadowego-programu-klub` | — |
| 24.05.2024 | Wyniki naboru Rządowego Programu Klub 2024 – 6806 klubów z dofinansowaniem! | `wyniki-naboru-rzadowego-programu-klub-2024-6797-klubow-z-dofinansowaniem` | PDF-y `2024/07/WYNIKI_2024.pdf` i `WYNIKI-NIEZAKWALIFIKOWANE.pdf` |
| 20.05.2024 | Informacja dotycząca ogłoszenia wyników naboru Rządowego Programu Klub 2024 | `ogloszenie-wynikow-2024` | — |
| 08.04.2024 | Instrukcja dotycząca wypełniania wniosku | `instrukcja-dotyczaca-wypelniania-wniosku` | PDF-y: prezentacja 2024 i „Jak podpisać dokument elektronicznie profilem zaufanym” |
| 20.03.2024 | Nabór wniosków 2024 | `nabor-wnioskow-2024` | — |
| 31.01.2024 | Rządowy Program Klub 2024 | `rzadowy-program-klub-2024` | — |

### 2023 — nie przenosić

| Data | Tytuł | Slug | Załączniki |
|---|---|---|---|
| 30.08.2023 | Dodatkowe środki | `dodatkowe-srodki` | 360 klubów z listy rezerwowej. PDF z listą rezerwową według województw |
| 27.07.2023 | UWAGA – ZMIANA REGULAMINU ZADANIA … – EDYCJA 2023 | `uwaga-zmiana-regulaminu-zadania-rzadowy-program-klub-edycja-2023` | — |
| 05.06.2023 | Testy sprawnościowe w ramach Programu „KLUB” 2023 | `testy-sprawnosciowe-w-ramach-programu-klub-2023` | — |
| 15.05.2023 | Wnioski niezakwalifikowane 2023 | `wnioski-odrzucone-2023` | PDF `Odrzucone-PK2023.pdf` |
| 10.05.2023 | Wyniki – edycja 2023 | `wyniki-edycja-2023` | 16 plików XLSX według województw, lista rezerwowa XLSX i PDF |
| 14.03.2023 | Prezentacja – instrukcja „JAK WYPEŁNIĆ I ZŁOŻYĆ WNIOSEK” | `prezentacja-instrukcja-jak-wypelnic-i-zlozyc-wniosek` | PDF prezentacji 2023 |
| 01.03.2023 | Ruszył nabór wniosków 2023 | `ruszyl-nabor-wnioskow-2023` | — |
| 22.02.2023 | Nabór wniosków – edycja 2023 | `nabor-wnioskow-edycja-2023` | — |
| 25.01.2023 | LZS operatorem programu w latach 2023 – 2025 | `lzs-operatorem-programu-w-latach-2023-2025` | historia liczby klubów od 2016 roku |

### 2022 — nie przenosić

| Data | Tytuł | Slug | Załączniki i uwagi |
|---|---|---|---|
| 30.11.2022 | Kontrole – wizytacje – filmy | `kontrole-wizytacje-filmy` | link do materiału TVP Poznań „Witaj w Klubie” |
| 07.07.2022 | drugi etap | `drugi-etap` | grafika |
| 01.07.2022 | Lista Klubów niezakwalifikowanych do dofinansowania 2022 | `lista-klubow-niezakwalifikowanych-do-dofinansowania-2022` | XLS |
| 28.06.2022 | Wyniki Rządowy Program Klub – edycja 2022 | `wyniki-rzadowy-program-klub-edycja-2022` | 17 PDF-ów (lista zbiorcza i 16 województw) |
| 27.06.2022 | Zmiana terminu rozstrzygnięcia | `zmiana-terminu-rozstrzygniecia` | — |
| 13.06.2022 | Wyniki 27 czerwca! | `wyniki-27-czerwca` | — |
| 10.06.2022 | 6882 wnioski w edycji 2022 | `6882-wnioski-w-edycji-2022` | — |
| 07.06.2022 | Nabór wniosków zakończony | `nabor-wnioskow-zakonczony` | — |
| 26.05.2022 | Przepraszamy za chwilową awarię | `przepraszamy-za-chwilowa-awarie` | do pominięcia |
| 26.04.2022 | Aplikujcie! Czekamy do 6 czerwca! | `aplikujcie-czekamy-do-6-czerwca` | — |
| 19.04.2022 | Gorąco zachęcamy! Aplikujcie! | `goraco-zachecamy-aplikujcie` | YouTube `_SrsFXhGHAg` |
| 09.04.2022 | Zdjęcia z konferencji w PKOL | `zdjecie-z-konferencji-w-pkol` | link do galerii na Facebooku |
| 07.04.2022 | Ruszył nabór wniosków – edycja 2022 | `ruszyl-nabor-wnioskow-edycja-2022` | — |
| 07.04.2022 | Konferencja Programu Klub – edycja 2022 | `konferencja-programu-klub-edycja-2022` | YouTube `GDJI8BHNsWQ` i transmisja na Facebooku |
| 05.04.2022 | Nasz zespół gotowy do startu Programu Klub | `nasz-zespol-gotowy-do-startu-programu-klub` | — |
| 28.03.2022 | Rozpoczynamy cykl szkoleń dla koordynatorów i konsultantów wojewódzkich | `rozpoczynamy-cykl-szkolen-dla-koordynatorow-i-konsultantow-wojewodzkich` | osadzony post z Facebooka (ZZ LZS Szczecin) |
| 12.03.2022 | Ruszyliśmy z przygotowaniami do rozpoczęcia naboru Programu Klub — edycja 2022 | `ruszylismy-z-przygotowaniami-do-rozpoczecia-naboru-programu-klub-edycja-2022` | — |
| 10.03.2022 | Krajowe Zrzeszenie LZS operatorem krajowym Programu Klub — edycja 2022! | `krajowe-zrzeszenie-lzs-operatorem-krajowym-programu-klub-edycja-2022` | — |

---

## 6. Pliki i media

Biblioteka mediów WordPressa ma **191 plików**: 90 JPG, 33 PNG, 46 PDF, 17 XLSX, 3 XLS, 1 ZIP i 1 WEBM (wideo tła). Wszystkie leżą w `https://rzadowyprogramklub.pl/wp-content/uploads/RRRR/MM/...`.

### 6.1. Logotypy i grafiki identyfikacji

- `2022/03/Rzadowy-Program-KLUB-logo-Witaj-W-Klubie.png` — główne logo programu
- `2025/02/Rzadowy-Program-KLUB-logo-Witaj-W-Klubie.png` — to samo logo w sekcji „Do pobrania”
- `2022/03/logo-kz-lzs.png` — logo KZ LZS
- `2023/09/logo_ministsportu.jpg` — logo MSiT
- `2025/02/LZS-Operator-KLUB-czarny-napis.png` i `LZS-Operator-KLUB-z-tlem.png`
- `2025/02/MSiT_logotypy_2023.zip`
- `2026/02/Witaj_w_Klubie_2026.jpg` — grafika edycji 2026
- `2022/03/cropped-Rzadowy-Program-KLUB-logo-Witaj-W-Klubie-*.png` — favicony (32, 180 i 192 px)
- `2022/03/virtual-assistant-icon-5-light.png` i `-6-dark.png` — ikony kafelków na stronie głównej

### 6.2. Dokumenty-instrukcje dla wnioskodawców (kandydaci do „Do pobrania”)

- `2025/02/Instrukcja-podpisywania-dokumentow.pdf`
- `2024/04/Jak_podpisac_dokument_elektronicznie_profilem_zaufanym.pdf`
- `2025/03/Prezentacja_Rzadowy_Program_Klub_2025_akt.-05.03.2025.pdf` — najnowsza prezentacja „jak wypełnić wniosek”. Starsze wersje: `2025/03/...04.03.2025.pdf`, `2025/02/...19.02.2025_pdf.pdf`, `2024/04/Prezentacja_rzadowy_program_klub_2024.pdf`, `2023/03/prezentacja_rzadowy_program_klub_2023.pdf`

Na stronie nie ma prezentacji ani instrukcji dla edycji 2026. Warto zapytać klienta, czy taka powstała.

### 6.3. Listy wyników (archiwum edycji)

- **2026:** `2026/07/Lista_wnioskow_zakwalifikowanych_z_uwzglednieniem_listy_rezerwowej.pdf`
- **2025:** `2025/04/Lista_dofinansowanych_wnioskow_KLUB_2025.pdf`, `Lista_rezerwowa.pdf`, `Lista_Podmiotow_niezakwalifikowanych_do_dofinansowania_KLUB_2025.pdf`
- **2024:** `2024/07/WYNIKI_2024.pdf`, `WYNIKI-NIEZAKWALIFIKOWANE.pdf`
- **2023:** 16 plików `2023/05/Wyniki-2023-PK-{WOJ}.pdf` i 16 plików `2023/06/KLUB-2023_{WOJ}_powiaty_15.06.2023_*.xlsx`; listy rezerwowe `2023/05/Wyniki-2023-PK-LISTA-REZERWOWA.pdf`, `2023/08/Wyniki_2023_LISTA-REZERWOWA.xlsx`, `2023/08/Lista-Rezerwowa_KLUB-2023_29.08.2023_wg.woj_.pdf`; odrzucone `2023/05/Odrzucone-PK2023.pdf`
- **2022:** `2022/06/Klub22_wyniki_dofinansowane.pdf` i 16 plików `2022/06/{wojewodztwo}_dotacja22.pdf`; trzy pliki XLS z klubami niezakwalifikowanymi w `2022/07/`

### 6.4. Zdjęcia

- Mapy programu: `2026/07/Mapka_Programu_Klub_2026_rozklad_dofinansowania_w_woj_22-06-2026_akt_kwot_z_MSiT.jpg`, `2026/04/Program-KLUB-2026-mapka-z-rekordem-nowa99.png`
- Około 32 zdjęć z podsumowania programu 2025 w Warszawie (`2025/12/...`) — najlepszy materiał do **galerii**
- Według notatek ze spotkania klient ma zdjęcia na **Dysku Google**. W banerze mają być zdjęcia, a nie grafiki.

### 6.5. Filmy

- YouTube: `https://youtu.be/GDJI8BHNsWQ` (konferencja 2022) i `https://www.youtube.com/watch?v=_SrsFXhGHAg` („Aplikujcie” 2022)
- TVP Poznań, „Witaj w Klubie”: `https://poznan.tvp.pl/64528045/14112022`
- Facebook: transmisje live i galeria z konferencji w PKOL

---

## 7. Treści do nowych sekcji, ustalonych na spotkaniu

- **„W jaki sposób kluby wykorzystują nasze środki”** — gotowy materiał to wpis „Podsumowanie Rządowego Programu Klub 2025 – nasi najważniejsi goście”. Zawiera 16 wizytówek klubów ze zdjęciami, każda to inne województwo i inny sport:
  - dolnośląskie: Olimpijski Club Tennis And Sports, Wrocław (tenis ziemny)
  - kujawsko-pomorskie: UKS „Rakieta” Orłowo (tenis stołowy)
  - lubelskie: UKS Judo Team Modliborzyce (judo)
  - lubuskie: MAX BOXING Klub Nowe Miasteczko (kickboxing)
  - łódzkie: Ozorkowski Klub Karate (karate)
  - małopolskie: KS Hardzi Jaroszowiec (zapasy)
  - mazowieckie: Akademia Siatkówki Setball, Warszawa (siatkówka)
  - opolskie: Klub Pływacki Otmuchów & Nysa (pływanie)
  - podkarpackie: UKS Jagiellonka w Medyce (badminton)
  - podlaskie: UKS „50” Białystok (piłka ręczna)
  - pomorskie: Akademia Sportu Młode Lwy Gdańskie (koszykówka)
  - śląskie: KS Młode Talenty, Jaworzno (szachy)
  - świętokrzyskie: Świętokrzyskie Stowarzyszenie Sportów Gimnastycznych Tempo, Kielce (akrobatyka sportowa)
  - warmińsko-mazurskie: UKS Przyjaźń Bartoszyce (kolarstwo)
  - wielkopolskie: LZS „Sokół” Wroniawy (piłka nożna)
  - zachodniopomorskie: MKL Szczecinek (lekkoatletyka)
- **Liczby do sekcji „program w liczbach”:**

| Edycja | Wnioski | Kluby z dofinansowaniem | Budżet |
|---|---|---|---|
| 2016–2021 | — | 2151 / 3352 / 3616 / 3885 / 4902 / 5172 | od około 24 mln zł (2016) |
| 2022 | 6 882 (na 77,6 mln zł) | 5 776 | — |
| 2023 | 7 546 | 5 900, plus 360 z listy rezerwowej | 75 mln zł, plus 4,085 mln zł |
| 2024 | 7 913 | 6 806 | — |
| 2025 | 8 584 | 7 727 (7 530 plus 196 z listy rezerwowej) | 110,47 mln zł |
| 2026 | **9 032** (rekord) | **7 751** | **102 432 000 zł** |

  W 2025 roku wsparcie otrzymało prawie 15 tys. trenerów. Zorganizowano blisko 700 obozów, prawie 5 500 klubów kupiło sprzęt, a z programu skorzystało ponad 360 tys. dzieci i młodzieży. 60% wsparcia trafia do gmin wiejskich i miejsko-wiejskich.
- **Galeria, zdjęcia, filmy** — źródła wymienione w punktach 6.4 i 6.5.
- **Panel dostępności cyfrowej** — na starej stronie go nie ma.

---

## 8. Braki i niespójności do wyjaśnienia z klientem

1. **Nie ma polityki prywatności, polityki cookies ani deklaracji dostępności.** Strona programu finansowanego ze środków publicznych powinna mieć deklarację dostępności. Ustawa z 4.04.2019 o dostępności cyfrowej wymaga jej od podmiotów publicznych, a KZ LZS realizuje zadanie publiczne. Dane do deklaracji (osoba kontaktowa, data publikacji) muszą przyjść od klienta.
2. **Wkład własny:** „Podstawowe informacje” podają „nie mniej niż 5% całości kosztów zadania”, a Regulamin (§ 4 ust. 18) — „5% wnioskowanych kosztów dofinansowania”, czyli 600 lub 850 zł. Brzmienie trzeba ujednolicić, a tekst powinien zatwierdzić Oskar.
3. **Regulamin** mówi o logowaniu przez zakładkę „złóż wniosek”, a w menu jest „Logowanie”.
4. **Regulamin, § 1 ust. 5:** „ustawy z dnia 19 listopada 2009r. o grach hazardowych (Dz. U. z 2005r. poz. 595)” — rok Dz. U. wygląda na literówkę. Ponieważ obowiązuje zasada 1:1, poprawki wymagają zgody klienta.
5. **Numeracja w Regulaminie** jest miejscami rozjechana: § 4 i § 5 zaczynają się od punktora zamiast od „1.”, a w § 9 są same punktory.
6. **Kryteria oceny** w FAQ (9 punktów opisowych) różnią się od punktacji w § 6 Regulaminu. FAQ samo odsyła do § 6.
7. **Sekcja FAQ na stronie głównej jest pusta.** W nowej wersji warto pokazać tam kilka najczęstszych pytań.
8. Godziny infolinii są tylko w stopce, a nie ma ich na podstronie Kontakt.
9. W tytule wpisu z 2.04.2025 jest „8548 wniosków”, a w treści 8584. Slug wpisu z 24.05.2024 mówi o 6797 klubach, a tytuł o 6806.
10. Wpisy „Instrukcja dotycząca wypełniania wniosku” (21.02.2025) i „WAŻNY Komunikat KZ LZS” (5.03.2025) mają tę samą treść.
11. Do usunięcia: „Sample Page”, „Start-test3” i wpis „Przepraszamy za chwilową awarię”.
12. Brak instrukcji i prezentacji wniosku dla edycji 2026 (punkt 6.2).

---

## 9. Stare adresy URL — konieczne przekierowania

Obecny `client/public/.htaccess` przekierowuje **każdą nieznaną ścieżkę na `/#/404`**. Po podmianie strony przestałyby więc działać:

- stare podstrony (`/regulamin/`, `/faq/`, `/kontakt/` itd.), do których prowadzą linki z Google, Facebooka, maili i z samego Regulaminu;
- **pliki z `/wp-content/uploads/...`**, czyli PDF-y z wynikami, logotypy i instrukcje, linkowane m.in. z gov.pl, z wpisów na Facebooku i prawdopodobnie z systemu AMODIT;
- 51 adresów aktualności (`/{slug}/`). Slugi z lat 2022–2024 kieruj na listę `#/aktualnosci`. Tych wpisów nie odtwarzaj.

Proponowany plan (do decyzji przy budowie):

| Stary URL | Nowy cel (301) |
|---|---|
| `/aktualnosci/`, `/category/aktualnosci/` | sekcja lub widok aktualności |
| `/podstawowe-informacje/` | widok „Podstawowe informacje” |
| `/faq/`, `/index.php/faq/` | widok FAQ |
| `/regulamin/` | widok Regulaminu |
| `/kontakt/` | sekcja Kontakt |
| `/do-pobrania/` | widok „Do pobrania” |
| `/{slug-wpisu}/` | wpis 2025–2026 albo lista `#/aktualnosci` (slugi sprzed 2025 tylko na listę, bez nowego wpisu) |
| `/wp-content/uploads/...` | **zostawić pliki pod tymi samymi ścieżkami** (skopiować do `client/public/wp-content/uploads/...`) albo przekierować każdy plik 301 na jego nową lokalizację |
| `/sample-page/`, `/start-test3/`, `/wp-admin/`, `/wp-login.php` | `/` albo 410 |

Pliki z `wp-content/uploads` trzeba **pobrać z FTP lub z serwera przed wyłączeniem WordPressa**. Bez zgody klienta niczego nie zmieniamy na FTP.
