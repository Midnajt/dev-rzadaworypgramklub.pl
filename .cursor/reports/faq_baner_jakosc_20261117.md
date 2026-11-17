# Baner FAQ — ostrzejsze zdjęcie (2026-11-17)

## Podsumowanie

Pas na `#/faq` pokazywał grupowe zdjęcie taekwondo (`custom-assets/taekwondo-1.jpg`, 2048×1536, eksport 1600×1200). Na szerokości 1309 px i wysokości 560 px kadr był miękki. Produkcyjny plik `client/assets/banners/faq.jpg` pochodzi teraz z `custom-assets/pilka-nozna-8.jpg` (4722×3142): chłopiec w czerwonej koszulce biegnie po murawie, w tle grupa i trener.

Eksport: `ffmpeg -y -i custom-assets/pilka-nozna-8.jpg -vf "scale=3200:-2" -q:v 2 client/assets/banners/faq.jpg`. Wynik 3200×2130, około 1,6 MB. Kadr w `PageBanner.tsx` dla `faq` to `center 32%`, żeby twarz została w pasie, a biały łuk zasłaniał dolną trawę. Przypisanie jest w `client/assets/ASSETS.md`.

## Sprawdzenie

`http://localhost:5173/#/faq`. Desktop: baner 1309×560, `naturalWidth` 3200, `object-position: 50% 32%`, DPR 1 — twarz i tors w kadrze, łuk nachodzi na dół. Telefon (390×844): baner 390×288, chłopiec nadal w kadrze, nagłówek i wyszukiwarka pod łukiem. Inne podstrony bez zmian.

Na FTP nic nie wysłano. Nie było commita.
