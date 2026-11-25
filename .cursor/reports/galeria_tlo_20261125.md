# Zamknięcie powiększenia kliknięciem w tło (2026-11-25)

## Podsumowanie

`yet-another-react-lightbox` ma przełącznik `controller.closeOnBackdropClick`. Domyślnie jest wyłączony, więc klik w granat wokół zdjęcia nic nie robił. W `GalleryPage.tsx` jest teraz włączony. Klik w sam kadr nie zamyka podglądu. Krzyżyk i Escape zostają.

## Weryfikacja

`http://localhost:5173/#/galeria`. Otwarte zdjęcie BMX. Klik w środek kadru zostawia okno (przycisk „Zamknij” jest). Klik w granatowe tło obok kadru trafia w `yarl__slide` i po zaniku okna portalu nie ma. Na FTP nic nie poszło i nie było commita.
