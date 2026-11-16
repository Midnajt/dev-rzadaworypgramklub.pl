# rzadowyprogramklub.pl

Komercyjne zlecenie: nowa strona [Rządowego Programu KLUB](https://rzadowyprogramklub.pl) przygotowana przez [AddPattern](https://addpattern.pl) (Marcin Krzysztoszek).

Zastępuje dotychczasowy WordPress. Jedno miejsce na regulamin, FAQ i aktualności — bez zbędnych warstw, z czytelną hierarchią i szybszym dostępem do tego, czego kluby naprawdę szukają.

**Produkcja:** [rzadowyprogramklub.pl](https://rzadowyprogramklub.pl)  
**Podgląd deweloperski:** [GitHub Pages](https://midnajt.github.io/dev-rzadaworypgramklub.pl/)

## Cel strony

Program KLUB to wsparcie finansowe dla małych klubów sportowych. Strona ma to komunikować wprost: kto może składać wniosek, jakie są zasady, co się zmieniło.

- **Przejrzystość** — regulamin i FAQ 1:1 ze źródła, bez parafraz „na skróty”. Ścieżka do informacji jest krótka: Start, Aktualności, FAQ, Regulamin.
- **Nowoczesny UX** — pełnoekranowe wejście z filmem, stały nagłówek, który nie zasłania treści, czytelne stany po przewinięciu i na telefonie.
- **Nowoczesny UI** — paleta LZS (czerwony, granat, biel), duże zdjęcia zamiast ozdobnych grafik, typografia i odstępy dobrane pod skanowanie wzrokiem, nie pod długie bloki WordPressa.
- **Lekki front** — statyczna aplikacja SPA, bez backendu i bez bazy. Mniej powierzchni do awarii, prostszy hosting, szybsze wczytywanie.

## Tech stack

| Warstwa | Technologia |
| --- | --- |
| Runtime UI | React 19, TypeScript (strict, `tsc -b` przed bundlem) |
| Bundler | Vite 8 (`root` = `client/`, `outDir` = `dist/` w korzeniu) |
| Style | Tailwind CSS v4, tokeny w `index.css` `:root` + lustro `theme.ts` |
| UI kit | shadcn/ui (New York), Radix Slot, Lucide |
| i18n | i18next / react-i18next — tylko PL |
| Ruch | Framer Motion, komponent `Reveal` |
| Nawigacja | hash (`#/aktualnosci`, `#/faq`, `#/regulamin`) — bez React Router |
| Hosting | pliki statyczne na FTP (Apache, `public_html`); podgląd na GitHub Pages |
| Narzędzia | npm + `package-lock.json`, ESLint, vite-imagetools |
| Env | wyłącznie `import.meta.env.VITE_*` (patrz `.env.example`) |

## Komendy

Z korzenia repo (Node 22):

```bash
npm ci
npm run dev
npm run build
npm run preview
npm run lint
```

`npm run build` = `tsc -b && vite build`. Wynik ląduje w `dist/` razem z `.htaccess`, `sitemap.xml` i `robots.txt`.

## Publikacja

Wgraj **zawartość** `dist/` (w tym `.htaccess`) do `public_html`. Nie wrzucaj `node_modules/`, `client/`, `.cursor/` ani `.env`.

Podgląd na GitHub Pages buduje się z `main` przez `.github/workflows/deploy-pages.yml`.
