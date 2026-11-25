# Stopka z nawigacją, krój numeru i województwa (2026-11-25)

## Podsumowanie

Nazwy w `voivodeshipHelplines` (`client/src/content/contact.ts`) zaczynają się wielką literą: Dolnośląskie, Kujawsko-pomorskie, Łódzkie, Śląskie, Warmińsko-mazurskie i pozostałe. Ta sama lista jest na stronie głównej i na `#/kontakt`.

Numer w `#home-contact-title` (`.sample-display`) ma `font-family: var(--font-body)` (Segoe UI), grubość 700 i lekki odstęp liter. Georgia z nagłówków już go nie obejmuje.

W `site-footer__inner` między znakiem a infolinią jest `nav.site-footer__nav`: Start (`#`), Aktualności (`#/aktualnosci`), FAQ (`#/faq`) i czerwony przycisk Kontakt (`btn btn--primary`, `#/kontakt`). Teksty biorą istniejące klucze `nav.home`, `nav.news`, `nav.faq` i `contact.title`. Etykieta nawigacji to `footer.nav`.

## Sprawdzenie

`http://localhost:5173/#/`, okno 1191 px. Krój numeru: `"Segoe UI", system-ui, sans-serif`, waga 700. Żadna nazwa województwa nie zaczyna się małą literą. Stopka: znak left 76, nawigacja left 389 (Start, Aktualności, FAQ białe, Kontakt tło `rgb(200, 16, 46)`), infolinia left 824. Klik Kontakt otwiera `#/kontakt`, Aktualności `#/aktualnosci`, FAQ `#/faq`, Start wraca na `#`.

Przy 390 px stopka jest kolumną (znak, potem linki, potem infolinia), wszystkie left 20. Rząd linków ma width 325 i mieści się w oknie; przycisk Kontakt left 238, width 107, prawa krawędź 345.

Na FTP nic nie wysłano. Nie było commita.
