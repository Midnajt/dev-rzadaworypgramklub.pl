# Banery podstron (2026-11-17)

## Podsumowanie

Każda podstrona ma pełnej szerokości zdjęcie między stałym nagłówkiem a blokiem `page-hero`. Strona główna zostaje przy filmie. Kadr zależy od widoku: inne zdjęcie na Podstawowych informacjach, Regulaminie, Do pobrania, Kontakt, FAQ, liście aktualności, stronie 404 i na każdym z sześciu wpisów 2026.

Zdjęcia produkcyjne są w `client/assets/banners/`. Źródła wzięto z `custom-assets/` i zmniejszono (dłuższy bok do 1600 px, `-q:v 4`). Przypisanie i kadr (`object-position`) są w `client/src/config/assets.ts` oraz `client/src/components/layout/PageBanner.tsx`. Lista plików jest w `client/assets/ASSETS.md`.

## Sprawdzenie

Lokalnie, desktop 1280 px i telefon 390 px. Na wpisie o wynikach naboru baner zaczyna się na 76 px (dół nagłówka) i kończy się tam, gdzie zaczyna się `article.page-hero`. Na telefonie pas ma 192 px. Kontakt (żaglówki), FAQ (taekwondo), lista aktualności, podstawowe informacje, do pobrania, regulamin, narty i gokart mają czytelny kadr. Strona główna nie ma tego pasa.

Na FTP nic nie wysłano. Nie było commita.
