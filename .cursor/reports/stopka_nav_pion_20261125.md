# Pionowa nawigacja w stopce (2026-11-25)

## Podsumowanie

`nav.site-footer__nav` jest kolumną (`flex-direction: column`, `align-items: flex-start`, odstęp 0,65 rem). Kolejność: Start, Aktualności, FAQ, Regulamin (`nav.regulations`, `#/regulamin`), Zaloguj się (ten sam adres AMODIT co w belce, `target="_blank"`) i na dole czerwony przycisk Kontakt z dodatkowym `margin-top: 0.35rem`.

## Sprawdzenie

`http://localhost:5173/#/`, okno 1191 px. Sześć pozycji ma wspólne left 498 i rośnie w dół: Start 4407, Aktualności 4445, FAQ 4483, Regulamin 4522, Zaloguj się 4560, Kontakt 4604 (height 49, tło czerwone). Kolumna ma width 107 i height 247. Znak zostaje left 76, infolinia left 824. Klik „Regulamin” otwiera `#/regulamin`. „Zaloguj się” ma `href` `https://wnioski.rzadowyprogramklub.pl` i `target="_blank"`.

Przy 390 px belka jest kolumną: znak, potem ta sama lista (left 20, bez wychodzenia poza okno), potem infolinia.

Na FTP nic nie wysłano. Nie było commita.
