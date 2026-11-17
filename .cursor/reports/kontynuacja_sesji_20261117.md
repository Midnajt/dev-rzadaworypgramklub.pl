# Kontynuacja sesji — 2026-11-17

Weryfikacja mega-menu, poprawki fokusu, usunięcie `custom-assets/_wp-dump/` i raport `.cursor/reports/migracja_podstron_20261117.md` są zrobione (sesja wieczorna). Nie commituj bez prośby. Nic na FTP. Przed produkcją skopiować `wp-content/uploads/`.

Wklej do kolejnego promptu:

```text
Kontynuuj pracę według @.cursor/reports/kontynuacja_sesji_20261117.md
Nie commituj i nie pushuj, dopóki nie poproszę. Nic na FTP.
Zacznij od dokończenia weryfikacji mega-menu i podstron w przeglądarce, potem posprzątaj custom-assets/_wp-dump i dopisz raport migracji.
```

Komunikacja z człowiekiem po polsku. Identyfikatory w kodzie po angielsku. Lokalnie: `npm run dev` → http://localhost:5173 (Node 22).

---

## Stan projektu (krótko)

Jednostronicowe SPA bez backendu i bazy. Vite 8 (`root` = `client/`), React 19, TypeScript strict, Tailwind v4, shadcn New York, i18next tylko PL, nawigacja hashem. Publikacja uzgodniona: `npm run build` → zawartość `dist/` na FTP `public_html`. Podgląd: GitHub Pages.

Repo GitHub: https://github.com/Midnajt/dev-rzadaworypgramklub.pl  
Pages: https://midnajt.github.io/dev-rzadaworypgramklub.pl/  
Produkcja docelowa: https://rzadowyprogramklub.pl (stary WordPress + Divi, jeszcze żywy).

Lokalny git: branch `main`, remote `origin` ustawiony. Był merge commitu startowego z GitHuba. Część zmian **niezacommitowana**. `custom-assets/` (zdjęcia źródłowe) weszły do pierwszego commita.

---

## Co już jest zrobione

### GitHub Pages i film hero
- Workflow: [`.github/workflows/deploy-pages.yml`](../.github/workflows/deploy-pages.yml) — Node 22, `VITE_BASE=/dev-rzadaworypgramklub.pl/`.
- Film hero: 29,7 s / 3,4 MB (`client/public/assets/video/hero.mp4`).
- 404 filmu i postera na Pages: twarde `/assets/...` omijały podkatalog. Poprawka lokalna:
  - [`client/src/config/assets.ts`](../../client/src/config/assets.ts) — `publicUrl()` + `import.meta.env.BASE_URL`
  - [`client/index.html`](../../client/index.html) — favicony `%BASE_URL%`
- **Nie wiadomo, czy ta poprawka jest na `main` na GitHubie.** Jeśli film na Pages nadal 404, wypchnąć te dwa pliki i poczekać na Actions.
- Instrukcja: [`.cursor/reports/github_pages_instrukcja_20261116.md`](github_pages_instrukcja_20261116.md)

### README
[`README.md`](../../README.md) — zlecenie AddPattern, tech stack, UX, komendy, FTP + Pages.

### Zdjęcia źródłowe
[`custom-assets/MAPA.md`](../../custom-assets/MAPA.md) — 36 zdjęć po treści (`pilka-nozna-1`, `boks-1`, `koszykowka-3` itd.). Notatki i `pixa_movie.mp4` bez zmiany nazwy. Raport: [`.cursor/reports/custom_assets_mapa_20261117.md`](custom_assets_mapa_20261117.md).

### Mega-menu + migracja podstron (kod jest, weryfikacja urwana)

Plan: użytkownik kazał **zostawić trzy przyciski** (Start, Aktualności, FAQ). Reszta starych pozycji w panelu na hover jak Squarespace. Czerwony Regulamin zniknął; po prawej **Zaloguj się** → `https://wnioski.rzadowyprogramklub.pl`.

| Przycisk | Panel |
| --- | --- |
| Start | Podstawowe informacje, Regulamin, Do pobrania |
| Aktualności | 4 najnowsze wpisy 2026 + link do listy |
| FAQ | kategorie FAQ + Kontakt |

Kluczowe pliki:
- [`client/src/components/layout/Navbar.tsx`](../../client/src/components/layout/Navbar.tsx)
- [`client/src/components/layout/MegaMenu.tsx`](../../client/src/components/layout/MegaMenu.tsx)
- [`client/src/config/nav.ts`](../../client/src/config/nav.ts)
- [`client/src/styles/components.css`](../../client/src/styles/components.css) — caret, panel, `nav-login`
- [`client/src/lib/hash-view.tsx`](../../client/src/lib/hash-view.tsx) — widoki: `home`, `news` (+ `slug`), `faq`, `regulations`, `basics`, `downloads`, `contact`, `notFound`
- [`client/src/App.tsx`](../../client/src/App.tsx), [`DocumentMeta.tsx`](../../client/src/components/layout/DocumentMeta.tsx)
- [`vite.config.ts`](../../vite.config.ts) `HASH_PAGES`
- [`client/public/.htaccess`](../../client/public/.htaccess) — 301 ze starych URL-i WP na hashe

Treść (nie w `pl.json`):
- [`client/src/content/faq.ts`](../../client/src/content/faq.ts) — 24 pytania, 8 kategorii, wyszukiwarka w `FaqPage`
- [`client/src/content/regulamin.txt`](../../client/src/content/regulamin.txt) — pełny tekst, import `?raw`
- [`client/src/content/basics.ts`](../../client/src/content/basics.ts) + krok po kroku
- [`client/src/content/downloads.ts`](../../client/src/content/downloads.ts) — linki do `wp-content/uploads` na starej domenie
- [`client/src/content/contact.ts`](../../client/src/content/contact.ts) — infolinie
- [`client/src/content/news.ts`](../../client/src/content/news.ts) — 6 pełnych wpisów 2026; lata 2022–2025 tylko tytuł+data (bez ciała)

Strony: `BasicsPage`, `DownloadsPage`, `ContactPage`, `FaqPage`, `RegulationsPage`, `NewsPage` (`#/aktualnosci/{slug}`).

`npm run build` przechodził po tej zmianie.

W przeglądarce zdążono sprawdzić: home, hover Start (panel widać), `#/podstawowe-informacje` (krok po kroku + bloki), `#/faq` (24 pytania, 8 kategorii). **Nie dokończono:** klik w link z panelu, wyszukiwarka FAQ, `#/regulamin`, `#/do-pobrania`, `#/kontakt`, lista i slug aktualności, Escape, Tab, 390 px, `Zaloguj się`.

Wzór UX: [`docs/ux_squarespace_wzor_promptow_20261117.md`](../../docs/ux_squarespace_wzor_promptow_20261117.md). Inwentaryzacja WP: [`docs/old-website-info.md`](../../docs/old-website-info.md).

---

## Co zrobić dalej (kolejność)

1. **Dokończyć weryfikację w przeglądarce** (`npm run dev`, Chrome DevTools MCP):
   - hover/fokus/Escape/Tab na trzech przyciskach, jeden otwarty panel
   - 390 px: hamburger, jeden dział naraz
   - `#/regulamin`, `#/do-pobrania`, `#/kontakt`, `#/aktualnosci`, `#/aktualnosci/wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026`
   - FAQ: wpisać np. „obóz”, lista ma się zawęzić
   - `Zaloguj się` → AMODIT (`target=_blank`)
   - `prefers-reduced-motion`: panel bez zjazdu
2. **Poprawki**, jeśli coś nie działa (klik z panelu przy hoverze timeoutował — panel mógł się zamknąć zanim link złapał klik).
3. **Usunąć dump** `custom-assets/_wp-dump/` (json/txt/strip.mjs) — to śmieć po zrzucie WP, nie mapa zdjęć.
4. **Raport** `.cursor/reports/migracja_podstron_20261117.md` + trzy zdania pod `Ostatnie zadania:` w [`.cursor/rules/shared.mdc`](../rules/shared.mdc).
5. **Git** — tylko na prośbę użytkownika. Nie pushować bez zgody. `custom-assets/` już jest w historii; nowa `MAPA.md` i rename mogą wisieć jako uncommitted.
6. **Pages:** jeśli film nadal 404, commit+push poprawki `BASE_URL` na `main`.
7. **Nie w tej iteracji (świadomie):**
   - pełne treści aktualności 2022–2025 (ok. 45 ciał) — data archiwum nieustalona z klientem
   - kopiowanie PDF/`wp-content/uploads` na FTP (linki idą na starą domenę)
   - galeria ze zdjęć `custom-assets/`, analityka, formularz kontaktowy, panel dostępności
   - zmiana nazwy repo `dev-rzadaworypgramklub.pl` (literówka)

---

## Pułapki

- Nie zgaduj sekretów. Nie commituj `.env`. Nie wrzucaj na FTP bez zgody.
- Pliki z `client/public/` w JS tylko przez `BASE_URL` / `publicUrl`, w HTML `%BASE_URL%`.
- Długa treść w `client/src/content/`, UI w `pl.json`.
- Nowa strona: checklista w [`.cursor/rules/frontend.mdc`](../rules/frontend.mdc).
- FFmpeg: `C:\Users\Marcin\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0.2-full_build\bin\ffmpeg.exe` (często nie ma w PATH).
- PowerShell psuje `curl -sS` (to alias Invoke-WebRequest) i heredoc Node — używać `curl.exe` i plików `.mjs`.
