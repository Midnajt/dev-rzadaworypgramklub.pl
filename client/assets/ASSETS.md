# Grafiki rzadowyprogramklub.pl

Czytaj ten plik przed dodaniem zdjęcia.

- Oryginały importowane przez Vite: `client/assets/` → eksport w `client/src/config/assets.ts` (import `?url`, zdjęcia treści opcjonalnie `?as=picture` przez vite-imagetools).
- Pliki ze stałym publicznym URL-em (favicon, `og-image.jpg`, pliki weryfikacyjne Google): `client/public/` — Vite kopiuje je 1:1 do `dist/`.
- `og:image` w `client/index.html` wskazuje na `/assets/images/og-image.jpg` (1200×630, JPG poniżej 300 KB, żeby WhatsApp pokazywał podgląd). Po publikacji nie zmieniaj tego URL-a.

| Plik | Użycie |
| --- | --- |
| `public/favicon.ico` | Favicon 48×48 z `custom-assets/logo-lzs-min.png` (dawniej `logo-min.png`) |
| `public/assets/images/favicon-32.png` | Favicon 32×32 z `custom-assets/logo-lzs-min.png` |
| `public/assets/images/icon-192.png` | Ikona 192×192 (Android) z `custom-assets/logo-lzs-min.png` |
| `public/assets/images/apple-touch-icon.png` | Ikona iOS 180×180: logo 152 px na białym tle |
| `public/assets/images/og-image.jpg` | Podgląd linku (Messenger, WhatsApp, Facebook): `custom-assets/murawa-1.jpg` (dawniej `example1.jpg`) przycięte do 1200×630, `-q:v 4` (około 100 KB) |
| `logo-min.png` | Logo LZS w nagłówku (`assets.logo`), zmniejszone do 192×192. Źródło `custom-assets/logo-lzs-min.png` |
| `addpattern-logo.png` | Logo AddPattern w stopce (`assets.addPatternLogo`). Źródło `custom-assets/logo-addpattern.png` (dawniej `logo_icon.png`, paleta pal8), zmniejszone do 96×96 z `-vf "format=rgba,scale=96:96" -pix_fmt rgba`, bo bez tego ffmpeg gubi przezroczystość |
| `public/assets/video/hero.mp4` | Film w tle hero. Źródło `custom-assets/pixa_movie.mp4` (4K, 59 s, 395 MB) → 1920 px, 25 fps, H.264, CRF 32, bez audio, potem przycięte do pierwszej połowy (`-t 29.72`). Wynik: 29,7 s, około 3,4 MB. Komenda przycięcia z gotowego `hero.mp4`: `ffmpeg -y -i hero.mp4 -t 29.72 -an -c:v libx264 -preset slow -crf 32 -pix_fmt yuv420p -movflags +faststart hero.mp4` |
| `public/assets/images/hero-poster.jpg` | Obraz zastępczy filmu. Źródło `custom-assets/murawa-1.jpg`, 1920 px, `-q:v 5` (około 200 KB) |
| `banners/*.jpg` | Pas zdjęcia pod nagłówkiem na podstronach (nie na stronie głównej). Źródła z `custom-assets/`, dłuższy bok do 1600 px, `-q:v 4`. Przypisanie: `basics` → `pilka-nozna-1`, `regulamin` → `murawa-1`, `do-pobrania` → `gimnastyka-1`, `kontakt` → `zeglarstwo-2`, `faq` → `taekwondo-1`, `aktualnosci` → `pilka-nozna-7`, `wyniki-naboru` → `pilka-nozna-6`, `rekord-wnioskow` → `pilka-nozna-2`, `informacja-operatora` → `narty-1`, `komunikat-lzs` → `taekwondo-2`, `start-naboru` → `bmx-1`, `nabor-2026` → `gokart-1`, `nie-znaleziono` → `pilka-nozna-12` |
