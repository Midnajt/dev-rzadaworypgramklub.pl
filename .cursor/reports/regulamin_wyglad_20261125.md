# Regulamin: większy tekst i jedna linia między paragrafami (2026-11-25)

## Kontekst

Sekcja treści na `#/regulamin` (`main#main > section.section`, artykuł `.legal`) czytała się jak ściana tekstu. Czerwona kreska nad kolejnymi nagłówkami § już była (`border-top` na `.legal > h2.legal__heading:not(:first-of-type)`), ale miała 1 px i token `--color-link`. Dodatkowo `regulamin.txt` jest zapisany z końcami CRLF, a `paragraphs()` dzielił tylko po `\n\n`, więc cały dokument wpadał w jedną listę: nie było `h2`, linii ani filtrowania paragrafów.

Treści regulaminu nie ruszano. Na FTP nic nie wysłano i nie było commita.

## Co zmieniono

`client/src/styles/pages.css` — tylko klasy artykułu `.legal`:

- Akapit i lista: `font-size: 1.25rem` (20 px), `line-height: 1.8` (36 px). Odstęp pod `p` i `ul`: `1.75rem` (28 px). Między punktami listy: `0.85rem` (13,6 px) przez `.legal li + li`.
- Nagłówek § (`.legal__heading`): wyśrodkowany, `clamp(2.15rem, 4vw, 3rem)`, `font-weight: 700`, `letter-spacing: 0.04em`. Na 1191 px to 47,6 px, na 390 px 34,4 px.
- Śródtytuł (`.legal h3`): `clamp(1.4rem, 2.4vw, 1.75rem)`, waga 700, `letter-spacing: 0.015em`, wyrównanie do lewej. Na desktopie 28 px, czyli mniej niż § i więcej niż akapit.
- Jedna kreska: `.legal > h2.legal__heading:not(:first-of-type)` ma `border-top: 2px solid var(--color-accent)` (`#c8102e`), `margin-top: 2.5rem` nad linią i `padding-top: var(--space-xl)` (3,5 rem) pod nią. Pierwszy `h2` (§ 1) nie ma obramowania. Drugiej linii nie ma.

`client/src/components/pages/RegulationsPage.tsx` — `paragraphs()` zamienia `\r\n` na `\n` przed podziałem na bloki. Dzięki temu wracają `h2` / `h3` / `p` / `ul`, na których stoją styl i filtr. Samych zdań regulaminu nie przepisywano.

## Weryfikacja

`http://localhost:5173/#/regulamin`.

Desktop (okno 1191 px): § 1 jest wyśrodkowany, bez linii nad sobą (po tytule „REGULAMIN ZADANIA…”). Przed § 2 jest jedna czerwona linia na szerokość kolumny, potem „Założenia Programu” mniejsze od §. Czerwoną kreskę mają tylko § 2–§ 10 i „UWAGA:” (10 linii, kolor `rgb(200, 16, 46)`, 2 px). Akapit 20 px / 36 px, punkt listy od drugiego ma 13,6 px odstępu.

Wyszukiwarka: „AMODIT” zostawia § 1, § 4, § 5, § 8, § 9 i § 10 oraz 12 razy `mark.search-hit` z czerwonym podkreśleniem. Puste pole przywraca 11 nagłówków i 90 akapitów, bez podświetleń. „qqqq-brak” zostawia jeden akapit: „Nie znaleziono fragmentów dla tego hasła.”

Telefon 390 px: kolumna 350 px, tekst się zawija (zero elementów szerszych niż kolumna), § 1 bez linii, linia przed § 2 ma 350 px i nie wychodzi poza artykuł, nagłówki zostają czytelne.

Na FTP nic nie poszło. Nie było commita.
