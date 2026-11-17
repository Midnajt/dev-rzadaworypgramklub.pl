# Strona główna: hero z filmem, nagłówek, stopka, favicon i podgląd linku (2026-11-16)

## Podsumowanie

Strona główna odwzorowuje wejście ze squarespace.com: czarna plansza znika i odsłania pełnoekranowy film z tekstem, logo LZS i menu. Po przewinięciu nagłówek zmienia się w biały pasek z granatowym tekstem. Dodano paletę czerwony, biały i granatowy, trzy podstrony z treścią tymczasową (Aktualności, FAQ, Regulamin), stopkę z informacją o AddPattern, favicon z logo LZS i obraz podglądu linku dla Messengera i WhatsAppa. Nic nie trafiło na FTP.

## Ustalenia z użytkownikiem

| Temat | Decyzja |
| --- | --- |
| Menu | Start, Aktualności i FAQ na środku paska; Regulamin jako czerwony przycisk po prawej |
| Podstrony | Osobne widoki hash: `#/aktualnosci`, `#/faq`, `#/regulamin` |
| Pasek po przewinięciu | Biały, granatowy tekst, czerwone podkreślenie aktywnej pozycji |
| Intro | Przy każdym wczytaniu strony głównej, około 1,2 s; wyłączone przy `prefers-reduced-motion` |
| Logo w nagłówku | Samo logo LZS, bez napisu |
| Kolory | Dobrane do logo LZS: czerwony #c8102e, granat #0f2341, biały |
| Film na telefonach | Odtwarzany wszędzie, poster z `custom-assets/murawa-1.jpg` (dawniej `example1.jpg`) |
| Hero | Bez przycisku (usunięty w drugiej iteracji); tekst to propozycja do akceptacji |

## Zmiany w kodzie

### Hero i intro
- `components/sections/HeroVideo.tsx`: sekcja `100svh`, `<video muted loop playsInline preload="metadata" poster>` z `object-fit: cover`. Odtwarzanie startuje przez `video.play()` w efekcie, a przy reduced motion film jest wstrzymany i widać sam poster. Gradient jest czarny u góry (kontrast menu) i granatowy u dołu (kontrast tekstu). Tekst (eyebrow, `h1`, lead) w lewym dolnym rogu wjeżdża animacją `hero-in` z opóźnieniem 0,7 s.
- `components/motion/IntroFade.tsx`: czarna nakładka `fixed`, `z-index: 1001`, animacja `intro-fade` (1,2 s, opóźnienie 0,2 s). Renderuje się tylko, gdy pierwszy widok to home i nie ma reduced motion; po `animationend` się odmontowuje.

### Nagłówek
- `components/layout/Navbar.tsx`: logo LZS jako `<img>` (`assets.logo`), tablica `NAV` (Start, Aktualności, FAQ) i osobny `CTA` (Regulamin, `.btn--primary .btn--sm .nav-cta`). Klasa `site-header--overlay` działa, gdy widok to home, `scrollY <= 24` i menu mobilne jest zamknięte.
- `styles/components.css`: `.site-header` z `position: fixed` i przejściami tła, koloru i cienia. Na desktopie `.site-header__inner` to siatka `1fr auto 1fr`. Pod aktywnym linkiem jest podkreślenie (`::after`), czerwone na białym pasku i białe nad filmem.
- Mobile (do 760 px): przycisk Regulamin jest ukryty, a Regulamin pojawia się jako ostatnia pozycja białego panelu menu (`.nav__item--mobile`). Hamburger używa `currentColor`, więc jest biały nad filmem i granatowy na pasku.

### Widoki
- `lib/hash-view.tsx`: `ViewName` rozszerzony o `news`, `faq` i `regulations`, razem z wpisami w `parseHash` i `viewHref`.
- Nowe `components/pages/NewsPage.tsx`, `FaqPage.tsx` i `RegulationsPage.tsx` z treścią tymczasową, gałęzie w `App.tsx`, klucze `meta.*` w `DocumentMeta.tsx`.
- `vite.config.ts`: `HASH_PAGES = ["", "#/aktualnosci", "#/faq", "#/regulamin"]` (sitemap).
- Strony bez hero mają klasę `.page` (`padding-top: var(--header-h)`), żeby treść nie chowała się pod paskiem.

### Stopka
- `components/layout/Footer.tsx`: po lewej nazwa i copyright, po prawej blok `.footer-credit` z logo AddPattern i dwoma zdaniami: „Strona stworzona przez AddPattern Marcin Krzysztoszek — addpattern.pl” oraz „Część zdjęć i filmów pochodzi ze stocku pixabay.com”. Linki są w `site.addPattern` i `site.pixabay` (`config/site.ts`).
- Drugie zdanie zmieniono z „Część zdjęć z oferty…” (wersja ze strony gabinetu) na „Część zdjęć i filmów…”, bo film w hero też pochodzi z Pixabay.

### Kolory (`index.css` i lustro `theme.ts`)
- `accent` #c8102e, `accentDark` #a00d24, `navy` #0f2341, `navySoft` #2b4170, `text` #0f2341, `textMuted` #5a6478, `surface` #f5f6f8, `white`, `black`, `header` #ffffff, `footer` #0f2341, `border` rgba(15, 35, 65, 0.12).
- Usunięto `accent-soft`; jego użycia w `base.css` zastąpiono `accent-dark`, `accent` i `navy`.

### Teksty (`pl.json`)
- `nav.*` (news, faq, regulations, logoAlt), `hero.*`, `news.*`, `faq.*`, `regulations.*`, `footer.credits`, `footer.stock`, `footer.addPatternLabel` i nowe `meta.*`.

### SEO i podgląd linku (`client/index.html`)
- Uzupełnione tytuł i opis (wcześniej TODO), `og:title`, `og:description`, `og:image:alt` i `theme-color` #0f2341.
- `og:image` i `twitter:image` wskazują na `/assets/images/og-image.jpg`. Zmieniono to z `.png`, bo zdjęcie w PNG przekroczyłoby limit podglądu WhatsAppa (około 300 KB). Zaktualizowano też `frontend.mdc` i `ASSETS.md`.
- Ikony: `favicon.ico`, `favicon-32.png`, `icon-192.png`, `apple-touch-icon.png`. Placeholder `favicon.svg` usunięto.

## Media

| Plik | Źródło i obróbka | Rozmiar |
| --- | --- | --- |
| `public/assets/video/hero.mp4` | `custom-assets/pixa_movie.mp4` (4K, 59 s, 395 MB) → 1920 px, 25 fps, H.264, CRF 32, bez audio, faststart, potem `-t 29.72` (pierwsza połowa) | 3,4 MB |
| `public/assets/images/hero-poster.jpg` | `custom-assets/murawa-1.jpg` (dawniej `example1.jpg`) → 1920 px, `-q:v 5` | 194 KB |
| `public/assets/images/og-image.jpg` | `custom-assets/murawa-1.jpg` → przycięte do 1200×630, `-q:v 4` | 101 KB |
| `public/favicon.ico` | `custom-assets/logo-lzs-min.png` (dawniej `logo-min.png`) → 48×48 | 9 KB |
| `public/assets/images/favicon-32.png` | `custom-assets/logo-lzs-min.png` → 32×32 | 3 KB |
| `public/assets/images/icon-192.png` | `custom-assets/logo-lzs-min.png` → 192×192 | 59 KB |
| `public/assets/images/apple-touch-icon.png` | `custom-assets/logo-lzs-min.png` 152 px na białym tle 180×180 | 38 KB |
| `client/assets/logo-min.png` | `custom-assets/logo-lzs-min.png` → 192×192 (nagłówek) | 49 KB |
| `client/assets/addpattern-logo.png` | `custom-assets/logo-addpattern.png` (dawniej `logo_icon.png`) → 96×96, wymuszone rgba | 11 KB |

- Narzędzie: ffmpeg 9.0.2 zainstalowany przez `winget install Gyan.FFmpeg` (nie jest w `package.json`). Pełne komendy są w `client/assets/ASSETS.md`.
- Pułapka: `custom-assets/logo-addpattern.png` (dawniej `logo_icon.png`) ma paletę (pal8) i bez `format=rgba` oraz `-pix_fmt rgba` ffmpeg gubi przezroczystość, co w stopce daje kolorowy kwadrat.
- `custom-assets/*.mp4` dopisano do `.gitignore`, żeby 395 MB nie trafiło do repozytorium (projekt nie jest jeszcze repozytorium git).

## Weryfikacja

- `npm run build` (tsc i vite) przechodzi, lint bez błędów.
- W przeglądarce sprawdzono: przezroczysty nagłówek nad filmem, biały pasek po przewinięciu, odtwarzanie filmu, układ menu (środek i przycisk po prawej), widok 390 px z panelem menu, podstrony z białym paskiem od początku, stopkę z przezroczystym logo oraz to, że `favicon.ico`, `favicon-32.png` i `og-image.jpg` zwracają 200 z poprawnym typem.
- Czarnej planszy nie udało się uchwycić na zrzucie (znika szybciej, niż wykonuje się zrzut); widać było tylko animację wejścia tekstu. Warto sprawdzić ją ręcznie przeładowaniem strony.

## Publikacja (instrukcja, niewykonana)

1. `npm run build`.
2. Wrzucić **zawartość** `dist/` do `public_html`, w tym nowe `favicon.ico`, `assets/video/hero.mp4` (około 7,3 MB) i `assets/images/`.
3. Usunąć z serwera stary `assets/images/favicon.svg`, jeśli tam był.
4. Po publikacji odświeżyć podgląd w [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) („Scrape Again”). WhatsApp trzyma stary podgląd w pamięci podręcznej przez kilka dni.

## Otwarte kwestie

- Tekst hero („Edycja 2026”, „Rządowy Program KLUB”, lead) do akceptacji klienta.
- Film przycięty do pierwszej połowy (29,7 s, 3,4 MB); pełne 59 s zostaje tylko w `custom-assets/pixa_movie.mp4`.
- Odcienie kolorów do potwierdzenia z klientem.
- Favicon z samym logo LZS; wariant z piłką nożną jest możliwy, jeśli będzie potrzebny.
- Treść podstron (Aktualności, FAQ 1:1, Regulamin 1:1) do przeniesienia ze starej strony według `docs/old-website-info.md`.
- Przed wdrożeniem: przekierowania 301 ze starych URL-i w `.htaccess` (z raportu inwentaryzacji).
