# Podkreślenie frazy w wynikach (2026-11-17)

## Podsumowanie

W FAQ i w regulaminie wpisana fraza jest podkreślona w znalezionym tekście. Robi to `Highlight` (`client/src/components/search/Highlight.tsx`): szuka fragmentu bez względu na wielkość liter (`toLocaleLowerCase("pl")`) i owija trafienie w `mark.search-hit`. Styl w `client/src/styles/pages.css` to czerwone podkreślenie i jasne tło w kolorze akcentu. W tekście zostaje oryginalny zapis, także gdy fraza jest tylko początkiem słowa.

FAQ podkreśla tytuł kategorii, pytanie, odpowiedź i punkty listy. Regulamin podkreśla nagłówki, akapity i punkty list. Puste pole nie wstawia żadnych znaczników.

## Sprawdzenie

`http://localhost:5173/#/regulamin`, hasło „amodit”: 12 znaczników z tekstem „AMODIT”, `text-decoration: underline`, kolor linii `rgb(200, 16, 46)`, żadne wystąpienie w akapicie ani liście nie zostało bez znacznika. `#/faq`, hasło „podpis”: 11 podkreśleń (m.in. „Podpis” i „podpis”) w tytule „Dokumenty i podpisy”, w pytaniu i w odpowiedzi; po wyczyszczeniu pola zostaje 24 pytań i zero znaczników.

Na FTP nic nie wysłano. Nie było commita.
