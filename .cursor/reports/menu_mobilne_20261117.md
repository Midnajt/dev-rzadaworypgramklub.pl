# Menu mobilne — szuflada zamiast mega-panelu

## Co zmieniono

Poniżej 761 px nagłówek nie dokleja już desktopowego mega-menu pod przyciski Start / Aktualności / FAQ. Otwiera się szuflada na całą wysokość pod belką, w dwóch krokach.

- Pierwszy poziom: trzy działy i na dole czerwony „Zaloguj się”. W belce zostaje logo i hamburger (po otwarciu krzyżyk). Napis „Zaloguj się” schodzi z belki, żeby nie spychał ikony poza ekran.
- Drugi poziom: „Wróć”, tytuł działu i same linki do stron. Start prowadzi do strony głównej, podstawowych informacji, regulaminu i plików. Aktualności do listy i czterech wpisów 2026. FAQ do pytań i kontaktu. Dotknięcie linku zamyka szufladę.
- Szuflada się przewija, tło strony jest zablokowane (`inert` na `main` i `footer`). Escape wraca fokus na hamburger. Desktopowy panel ze strzałką (luka 12 px) bez zmian.

Pliki: `MobileMenu.tsx`, `Navbar.tsx`, `use-media.ts`, `nav.ts` (`mobileDestinations`), `components.css`, klucze `nav.back`, `nav.homePage`, `nav.allNews`, `nav.faqPage` w `pl.json`.

## Weryfikacja

Lokalnie `http://localhost:5173` (dev server już działał), szerokość ok. 390–407 px:

- Regulamin: hamburger 44×44 px w belce, granatowy na białym, „Zaloguj się” ukryte w belce.
- Aktualności → wpis o wynikach naboru, menu się zamyka. Wejście z powrotem zaznacza ten wpis. „Wróć” ustawia fokus na Aktualności.
- FAQ: „Pytania i odpowiedzi” i „Kontakt” (przejście na `#/kontakt`). Start: cztery linki, Regulamin wraca na `#/regulamin`.
- Escape zamyka szufladę i fokus wraca na „Otwórz menu”. Na stronie głównej belka nad filmem jest przezroczysta (kreski białe), po otwarciu menu bieleje.
- Desktop 1280 px: hamburger ukryty, „Zaloguj się” w belce, panel Start jest absolutny, luka pod belką 12 px, strzałka widoczna.

Na żywo `https://midnajt.github.io/dev-rzadaworypgramklub.pl/` nadal jest stare menu — Pages odświeża się po scaleniu do `main`. Na FTP nic nie poszło i nie było commita.
