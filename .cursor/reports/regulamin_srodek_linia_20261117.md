# Regulamin: środek nagłówków i czerwona linia (2026-11-17)

## Podsumowanie

Nagłówki paragrafów w artykule regulaminu (`h2.legal__heading`) są wyśrodkowane. Dotyczy to wszystkich jedenastu nagłówków: § 1–§ 10 oraz „UWAGA:”. Podtytuły `h3` (np. „Postanowienia ogólne”) zostają wyrównane do lewej.

Między kolejnymi paragrafami jest czerwona linia w kolorze akcentu. Selektor nie rysuje jej przed pierwszym `h2` w `article.legal` (§ 1, poprzedzony tylko akapitem tytułu). Linia jest `border-top` nagłówka, więc nie dubluje znaczników w treści.

## Selektory

Plik: `client/src/styles/pages.css`.

```css
.legal__heading {
  margin-top: var(--space-xl);
  text-align: center;
}

.legal > h2.legal__heading:not(:first-of-type) {
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-accent);
}
```

`--color-accent` w `client/src/index.css` to `#c8102e`. `:first-of-type` działa, bo nagłówki § są bezpośrednimi dziećmi `article.container.prose-wide.legal`, a pierwszym `h2` jest § 1.

## Sprawdzenie

`http://localhost:5173/#/regulamin` (dev server już działał). Computed style: wszystkie 11 nagłówków ma `text-align: center`. § 1 ma `border-top-width: 0px`. § 2–§ 10 i „UWAGA:” mają `border-top: 1px solid rgb(200, 16, 46)`. W kadrze widać linię po akapicie „16. Nabór wniosków…” i przed § 2 oraz przed § 3; nad § 1 linii nie ma.

Na FTP nic nie wysłano. Nie było commita.
