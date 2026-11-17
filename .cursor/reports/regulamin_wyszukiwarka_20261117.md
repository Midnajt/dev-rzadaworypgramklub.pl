# Wyszukiwarka w regulaminie (2026-11-17)

## Podsumowanie

Na `#/regulamin` pod leadem jest pole takie jak na FAQ: `type="search"`, klasa `faq-search`, etykieta tylko dla czytników. Teksty są w `client/src/i18n/locales/pl.json` (`regulations.searchLabel`, `searchPlaceholder`, `empty`). Lead mówi, że słowo zawęża tekst.

Filtr jest w `client/src/components/pages/RegulationsPage.tsx`. Puste pole pokazuje cały regulamin. Hasło (bez względu na wielkość liter, `pl`) zostawia paragrafy i listy, które je zawierają, razem z nagłówkiem § i śródtytułem tego fragmentu. Gdy § sam pasuje do hasła, zostaje cały paragraf. Brak trafień pokazuje „Nie znaleziono fragmentów dla tego hasła.” Czerwona linia nad `h2.legal__heading` zostaje od drugiego nagłówka, bo nagłówki są bezpośrednimi dziećmi `article.legal`.

## Sprawdzenie

`http://localhost:5173/#/regulamin`. „udział własny” zostawia § 4 i punkt 18. „AMODIT” zostawia § 1, § 4, § 5, § 8, § 9 i § 10; § 1 bez linii, kolejne z `border-top` 1 px. „qqqq-brak” pokazuje sam komunikat, wyczyszczenie pola wraca do pełnego tekstu (11 nagłówków §). Telefon 390 px: pole ma 350 px szerokości, filtr „AMODIT” nadal pokazuje sześć paragrafów.

Na FTP nic nie wysłano. Nie było commita.
