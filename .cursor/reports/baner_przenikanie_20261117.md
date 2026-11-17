# Przenikanie banera podstrony (2026-11-17)

## Podsumowanie

Przy zmianie widoku zdjęcie w `.page-banner` nie podmienia się od razu. Poprzedni kadr zostaje pod spodem, a nowe zdjęcie rozjaśnia się w 0,85 s (`ease-in-out`) i lekko przybliża (`scale(1.04)` → `1`). Animacja nazywa się `banner-crossfade` w `client/src/styles/pages.css`. Po jej końcu zostaje jeden `img`.

Każda podstrona montuje `PageBanner` od nowa (własny `PageFrame`), więc ostatni kadr jest pamiętany poza komponentem. Wejście na stronę główną, która ma tylko film, kasuje tę pamięć — kolejna podstrona nie przenika ze zdjęcia, którego już nie widać. Zdjęcie czeka z kryciem 0, aż plik będzie gotowy, i dopiero wtedy startuje animacja. Przy `prefers-reduced-motion: reduce` nowe zdjęcie jest od razu nieprzezroczyste, bez animacji. Biały łuk `page-hero` bez zmian. Bez FTP i bez commita.

## Weryfikacja

Dev server już działał (`npm run dev`, port 5173). Przejścia odpalane kliknięciem w menu albo zmianą hasha, próbki `getAnimations()` i `opacity`.

| Przejście | Co widać |
| --- | --- |
| FAQ → regulamin (klik „Czytaj regulamin”) | Dwa obrazy. Nowy: opacity 0,17 (96 ms) → 0,60 (186 ms) → 0,94 (373 ms) → 1, skala 1,033 → 1. Od 845 ms zostaje jeden obraz. |
| Aktualności → wpis o wynikach naboru | Ten sam mechanizm przy zmianie kadru bez odmontowania listy: 0,06 (161 ms) → 0,54 (461 ms) → 0,97 (761 ms) → jeden obraz (911 ms). Kadrowanie schodzi z `center 42%` na `center 48%`. |
| Strona główna → kontakt | Brak `.page-banner` na home. Na kontakcie od pierwszej klatki jeden obraz, `center 70%`, zero animacji. |
| `prefers-reduced-motion: reduce` | FAQ → regulamin: oba obrazy od razu z opacity 1, bez `banner-crossfade`. Od 105 ms zostaje jeden. |
| Szerokość 390 px | Baner 288×390 px, łuk nachodzi 50 px, `scrollWidth` 390. Przenikanie na kontakt też startuje (opacity 0,06 przy 200 ms). |
