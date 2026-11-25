# Kontakt na dole strony i nowa stopka (2026-11-25)

## Podsumowanie

Na stronie głównej (`HomePage`) kolejność to film, `StepScroll` („Jak dołączyć do Programu KLUB”), karuzela środków i na końcu kontakt. Wstęp „Program dla klubów” zszedł razem z klasą `.program-intro` i kluczami `home.sectionTitle` / `home.sectionBody`. Teksty zastępcze „Wzory do oceny” i lorem (`home.samples.eyebrow`, `title`, `intro`, `reveal`) też zeszły. Kroki zostają w `home.samples.steps`.

Kontakt jest w `HomeContact` (`client/src/components/sections/HomeSamples.tsx`), w dawnym szkielecie `section--surface` z `Reveal` i dwiema kartami. Eyebrow „Kontakt”, nagłówek to link `tel:+48667099565` (667 099 565), lead bierze operatora krajowego i `contact.lead`. Karta adresu: Krajowe Zrzeszenie LZS, ulica, kod. Karta e-maili: pomoc merytoryczna i techniczna AMODIT. Pod spodem zwinięty `details` „Operatorzy wojewódzcy” z 16 numerami z `voivodeshipHelplines`. Sekcja nie ma `id` widoku. Strona `#/kontakt` bez zmian w treści.

Stopka (`Footer.tsx`) jest rzędem: po lewej znak programu na białej płytce i copyright, po prawej infolinia krojem Georgia (biały link `tel:`) i `biuro@rzadowyprogramklub.pl`. Poniżej 760 px kolumny spadają jedna pod drugą, tekst do lewej. `.footer-credit` ma `background: var(--color-black)`, bez górnej kreski. Logo AddPattern zostaje.

## Sprawdzenie

`http://localhost:5173/#/`, okno 1191 px.

Sekcje w `main`: `hero`, `section step-scroll`, `section fund-use`, `section section--surface` (nagłówek „667 099 565”). Brak „Program dla klubów” i „Lorem ipsum”. Lead: „Operator Krajowy — KZ LZS Warszawa. Infolinie czynne pon.–pt. 10:00–15:00. Pomoc merytoryczna i techniczna — e-maile poniżej.” Karty obok siebie: left 76 i 596, obie width 504 i height 196. `mailto:` na biuro@ i pomoc@. `details` startuje zamknięty (16 pozycji w DOM); po kliknięciu `open` jest true, pierwsza pozycja „dolnośląskie”, znak w `summary` zmienia się na minus.

Stopka: logo left 76, width 202, height płytki 140 (obraz 4,75 rem plus padding 1 rem, bez zmiany rozmiaru). Kolumna kontaktu left 824, width 276, po prawej od znaku. Numer biały, Georgia, 26,2 px. Pasek kredytu left 0, width 1176, height 50, tło `rgb(0, 0, 0)`, kolor tekstu biały 75%, `border-top` 0.

Przy szerokości 390 px karty spadają jedna pod drugą (left 20, width 350). Stopka jest kolumną: znak top 6293, infolinia top 6452, oba left 20, `text-align: start`. Pasek kredytu width 390, tło czarne. Numer warmińsko-mazurski w liście zostaje w jednej linii (126×28 px, `white-space: nowrap`).

`#/kontakt` przy 390 px nadal ma adres, oba e-maile, infolinię krajową i 16 operatorów. Na FTP nic nie wysłano. Nie było commita.
