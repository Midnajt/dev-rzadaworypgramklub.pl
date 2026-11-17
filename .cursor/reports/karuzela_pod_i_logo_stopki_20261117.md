# Karuzela: pasek pod kartami i logo w stopce (2026-11-17)

## Podsumowanie

Pasek nawigacji karuzeli „W jaki sposób kluby wykorzystują nasze środki” (`div.container.fund-use__toolbar`) jest pod rzędem kart. Kolejność w sekcji: wstęp, `fund-use__viewport` z `fund-use__track`, potem pasek. Kropki zostają na środku paska, strzałki po prawej.

W stopce, w kolumnie marki, jest ten sam znak co w nagłówku (`assets.programLogo`, klasa `logo__img`). Link prowadzi na stronę główną. Na granatowym tle znak ma białą płytkę i lekko zaokrąglone rogi, wysokość 4,75 rem.

## Sprawdzenie

`http://localhost:5173/#`. Kolejność dzieci sekcji: intro, viewport, toolbar. Odstęp paska od dołu kart to 32 px. „Następne” przesuwa rząd z −624 px na −936 px; kropki zostają 4, 5, 32, 5 i 4 px. Przy 390 px zostaje jedna karta z podglądem kolejnej, pasek jest pod spodem, a logo stopki mieści się w szerokości (86×76 px).

Na FTP nic nie wysłano. Nie było commita.
