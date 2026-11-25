# Wpis z mega-menu: zjazd do nagłówka (2026-11-25)

## Podsumowanie

Cztery najnowsze wpisy w prawej kolumnie mega-menu Aktualności (`detailLinks` w `client/src/config/nav.ts`, ta sama ścieżka w szufladzie) prowadzą na `#/aktualnosci/{slug}/wpis`. `parseHash` bierze pierwszy segment jako slug artykułu, a drugi jako `HashView.anchor` — tak jak nabór, kroki czy archiwum. Nagłówek artykułu (`article.page-hero h1` w `NewsPage`) ma `id="wpis"` (`newsPostAnchor`).

Przewija ten sam `scrollToHashTarget` w `App.tsx`: `scrollIntoView({ block: "start" })`, `smooth`, a przy `prefers-reduced-motion: reduce` `instant`. Osobnego scrollerа nie ma. `scroll-padding-top` belki zostaje; na h1 doszedł `scroll-margin-top: 1.5rem`, bo wejście Reveal (`translateY(1.5rem)`) po zakończeniu podnosi nagłówek i bez tego marginesu chował się pod belką (top 52 px przy belce 76 px).

„Wszystkie wpisy” zostaje `#/aktualnosci` (bez kotwicy), „Archiwum” zostaje `#/aktualnosci/archiwum`. Karty na liście aktualności nadal otwierają `#/aktualnosci/{slug}` bez wymuszania zjazdu do h1.

## Sprawdzenie

`http://localhost:5173/`, okno 1191×598.

Ze strony głównej (scroll 0): Aktualności → „WYNIKI naboru…”. Hash: `#/aktualnosci/wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026/wpis`. W trakcie animacji `scrollY` szło 0 → 29 → 230 → 435 → 522 → 569 → 596 → 612 → 615 (odczyty co ~50 ms, między 1611 a 1962 ms od startu próbnika). Po zatrzymaniu `h1#wpis` ma top 76 px, dół belki też 76 px.

„Wszystkie wpisy”: hash `#/aktualnosci`, `scrollY` 0, brak `#wpis`, h1 listy „Aktualności” na top 641 px (pod banerem).

Z listy, klik „MAMY REKORD…”: hash `#/aktualnosci/mamy-rekord-w-ramach-rzadowego-programu-klub-edycja-2026-zlozono-az-9032-wnioski/wpis`, `h1#wpis` top 76 px (belka 76 px). Układ banera jest taki sam jak przy wynikach, więc `scrollY` został przy 615.

Na FTP nic nie wysłano. Nie było commita.
