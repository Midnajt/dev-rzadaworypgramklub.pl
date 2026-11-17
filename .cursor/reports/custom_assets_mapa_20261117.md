# Mapa i przemianowanie `custom-assets/` (2026-11-17)

## Podsumowanie

W `custom-assets/` było 36 zdjęć (jpg/jpeg/png/JPG), film `pixa_movie.mp4` i notatki ze spotkania. Każde zdjęcie obejrzano (duży `GKS TENIS2.jpg` przez podgląd ffmpeg), pogrupowano po sporcie/scenie i przemianowano na krótkie slugi ASCII. Ścieżka mapy: `custom-assets/MAPA.md`. Nic nie poszło na FTP, nie ma commita ani pusha.

## Co się zmieniło

- 36 plików graficznych: `git mv` na `{grupa}-{n}.{ext}` (logo: `logo-lzs.png`, `logo-lzs-min.png`, `logo-addpattern.png`).
- Grupy: pilka-nozna 13, logo 3, koszykowka 3, boks 2, taekwondo 2, zeglarstwo 2, bmx 2, gokart 2, oraz po 1: tenis, gimnastyka, narty, narty-wodne, deskorolka, futsal, murawa.
- `MAPA.md` ma tabele: nowa nazwa, co widać, stara nazwa. Stare nazwy bywały mylące (`Koniecznie.jpg` to koszykówka, nie konie; długie zdania o wydatkach to mecz i gokarty).
- Dokumentacja źródeł: `client/assets/ASSETS.md`, `.cursor/reports/hero_wideo_20261116.md`, wzmianka `example1.jpg` w `shared.mdc`. Produkcja (`client/assets/logo-min.png` itd.) bez zmian.

## Otwarte kwestie

- `pixa_movie.mp4` i `notatki_z_pierwszego_spotkania.md` zostawione; film nadal w `.gitignore`.
- Zmiany w git są niezacommitowane (`R`, nie delete+add).
- `GKS TENIS2.jpg` / `tenis-1.jpg` ma ok. 13 MB i 4672×7008 — przy kolejnej obróbce warto go zmniejszyć przed `Read`.
