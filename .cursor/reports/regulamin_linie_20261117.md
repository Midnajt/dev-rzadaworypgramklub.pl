# Regulamin — wyśrodkowane paragrafy i linia między nimi

## Co zmieniono

W `client/src/styles/pages.css` dopisano wyrównanie i separator nad kolejnymi nagłówkami paragrafów. Treść regulaminu bez zmian. FTP i git bez zmian.

```css
.legal__heading {
  margin-top: var(--space-xl); /* 3.5rem, już było */
  text-align: center;
}

.legal > h2.legal__heading:not(:first-of-type) {
  padding-top: var(--space-lg); /* 2rem */
  border-top: 1px solid var(--color-accent); /* #c8102e */
}
```

Selektor łapie tylko `h2` będące bezpośrednim dzieckiem `article.legal`, z pominięciem pierwszego (`§ 1`). Między `h2` są `p`, `h3` i `ul`, więc `:not(:first-of-type)` stawia linię nad każdym następnym nagłówkiem, a nie między akapitami tego samego paragrafu. Odstęp nad linią daje istniejący `margin-top`, pod linią `padding-top`.

## Weryfikacja

Dev server już działał (`npm run dev`, port 5173). Widok: `http://localhost:5173/#/regulamin`.

W computed style wszystkich 11 nagłówków (`§ 1`–`§ 10` oraz `UWAGA:`) `text-align` to `center`. Pierwszy (`§ 1`) ma `border-top-width: 0`. Pozostałe mają `1px solid rgb(200, 16, 46)` i `padding-top: 32px`. Akapity, listy i `h3` wewnątrz artykułu nie mają górnej krawędzi.

Zrzuty: przed `§ 1` nie ma linii; czerwona linia jest między punktem 16 a `§ 2`, przed `§ 9` i przed `§ 10`. Między zwykłymi akapitami linii nie ma.
