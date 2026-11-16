# Instrukcja: repozytorium GitHub i GitHub Pages (2026-11-16)

## Podsumowanie

Lokalne `git init` i `git add .` są zrobione (branch `main`, bez commita). Workflow `.github/workflows/deploy-pages.yml` jest w projekcie. README opisuje komercyjne zlecenie AddPattern. Film hero przycięto do 29,7 s (3,4 MB). Strona pojawi się pod `https://midnajt.github.io/dev-rzadaworypgramklub.pl/` po poprawieniu ścieżek zasobów z `public/`, pierwszym pushu i włączeniu Pages (Source: GitHub Actions). Nic nie zostało wypchnięte. `git add .` wciągnął `custom-assets/` (zdjęcia źródłowe).

## Ustalenia

| Temat | Stan |
| --- | --- |
| Lokalny git | Brak `.git` |
| `gh` CLI | Niezainstalowany; Git 2.56 jest |
| Zdalne repo | Publiczne, HTTPS, commit startowy |
| Hash routing | Pasuje do Pages (`.htaccess` i Apache nie są potrzebne) |
| Film w `public/` | 7,3 MB — mieści się w limicie GitHuba (ostrzeżenie od 50 MB) |

Adres Pages zawiera nazwę repozytorium: `dev-rzadaworypgramklub.pl` (literówka względem `rzadowyprogramklub.pl`). Zmiana nazwy repo na GitHubie zmieni też URL Pages — lepiej zrobić to przed pierwszym wdrożeniem.

## Co musi być w kodzie, zanim strona zadziała na Pages

Vite już czyta `VITE_BASE` w `vite.config.ts`. Bundlowane JS/CSS dostaną prefiks automatycznie. **Nie** dostaną go twarde ścieżki z ukośnikiem na początku:

- `client/src/config/assets.ts`: `heroVideo` i `heroPoster` szły na sztywno jako `"/assets/..."` i dawały 404 na Pages (`https://midnajt.github.io/assets/...`). Jest już `publicUrl()` oparte o `import.meta.env.BASE_URL` (na FTP z `VITE_BASE=/` bez zmian):

```ts
heroVideo: `${import.meta.env.BASE_URL}assets/video/hero.mp4`,
heroPoster: `${import.meta.env.BASE_URL}assets/images/hero-poster.jpg`,
```

- `client/index.html`: favicony `/favicon.ico` i `/assets/images/...` też trzeba oprzeć o `%BASE_URL%`.

Workflow (plik `.github/workflows/deploy-pages.yml`) musi budować z:

```yaml
env:
  VITE_BASE: /dev-rzadaworypgramklub.pl/
  VITE_SITE_URL: https://midnajt.github.io/dev-rzadaworypgramklub.pl
```

oraz dodać puste `dist/.nojekyll` (Pages nie ma odpalać Jekylla). Źródło Pages w ustawieniach repo: **GitHub Actions**, nie branch.

Nie commituj `.env`. Nie commituj `custom-assets/` (oryginał filmu ~377 MB jest w `.gitignore` tylko jako `*.mp4`; zdjęcia źródłowe po 10–15 MB weszłyby do repo). Dopisz `custom-assets/` do `.gitignore` przed `git add`.

## Kroki (do wykonania ręcznie)

Pełna lista poleceń PowerShell i kliknięć w GitHubie jest w odpowiedzi dla użytkownika z tej sesji. Skrót:

1. Dopisać `custom-assets/` do `.gitignore`.
2. Poprawić `assets.ts` i favicony w `index.html` (`BASE_URL`).
3. Dodać workflow `deploy-pages.yml`.
4. `git init` → pierwszy commit → `remote add` → `pull --allow-unrelated-histories` (albo merge `origin/main`) → `git push -u origin main`.
5. GitHub → Settings → Pages → Source: GitHub Actions.
6. Poczekać na zielony workflow w zakładce Actions.

Produkcja FTP (`public_html`) zostaje bez zmian. Pages to podgląd deweloperski, nie wdrożenie produkcyjne.

## Otwarte kwestie

- Czy nazwa repozytorium ma zostać z literówką, czy zmienić ją przed Pages.
- Czy dodać workflow i poprawkę `BASE_URL` w kodzie (użytkownik prosił na razie o instrukcję).
- Konflikt `README.md` / `.gitignore` przy pierwszym merge z commitem startowym na GitHubie.
- Twarde `og:url` / `og:image` w `index.html` nadal wskazują na `https://rzadowyprogramklub.pl` — na podglądzie Pages to akceptowalne.
