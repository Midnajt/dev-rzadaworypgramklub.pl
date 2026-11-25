# Mega-menu: zjazd do nagłówków (2026-11-25)

## Podsumowanie

„Czytaj regulamin” w `client/src/config/nav.ts` prowadzi na `#/regulamin/naglowek`, „Logotypy do pobrania” na `#/do-pobrania/naglowek`. `parseHash` bierze segment po `do-pobrania` jako kotwicę, tak jak przy regulaminie. Nagłówki `h1` w `RegulationsPage` i `DownloadsPage` mają `id="naglowek"`. `.page-hero h1` ma `scroll-margin-top: 1.5rem`, ten sam zapas co przy wpisie aktualności, żeby po wejściu Reveal nagłówek usiadł na dole belki.

„Terminy naboru” zostaje `#/regulamin/nabor`. Kotwica była na elemencie listy, a zdanie o terminie jest akapitem, więc `getElementById` nic nie znajdował i strona wracała na górę banera. `id="nabor"` jest teraz na akapicie „15. Operator Krajowy ustala termin naboru wniosków…” (`scroll-anchor`).

## Sprawdzenie

`http://localhost:5173/#/`, okno 1191 px. Klik tematu Regulamin w mega-menu Start: hash `#/regulamin/naglowek`, `h1` „Regulamin Programu KLUB 2026” top 76 px, dół belki 76 px, `scrollY` 565.

Ze strony głównej, po przełączeniu tematu na Regulamin, klik „Terminy naboru”: hash `#/regulamin/nabor`, akapit z datami 2–30 marca 2026 top 100 px (belka 76 px plus 1,5 rem), `scrollY` 3453.

Klik „Do pobrania” (ten sam adres co „Logotypy do pobrania”): hash `#/do-pobrania/naglowek`, `h1` „Do pobrania” top 76 px, belka 76 px, `scrollY` 565.

Na FTP nic nie wysłano. Nie było commita.
