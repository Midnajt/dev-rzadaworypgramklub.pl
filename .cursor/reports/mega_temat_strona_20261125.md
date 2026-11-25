# Klik w temat mega-menu otwiera stronę

Lewa kolumna desktopowego mega-menu (`MegaPanel` w `MegaMenu.tsx`) to linki, nie przyciski. Każdy temat idzie na pierwszy adres ze swojej listy: podstawowe informacje, regulamin, do pobrania, wpis aktualności, kategoria FAQ albo kontakt. Najechanie i fokus nadal przełączają opis i linki po prawej; klik zamyka panel.

Wygląd tematu zostaje zwykłym zdaniem: `.nav__list a.mega-topic` gasi wielkie litery, odstęp liter i kreskę pod spodem, które inaczej brałyby się ze stylu linków w belce.

Sprawdzone na localhost:5173. „Podstawowe informacje” otwiera `#/podstawowe-informacje`, „Regulamin” — `#/regulamin`, wpis „MAMY REKORD” — artykuł, „Dotacje z innych środków publicznych” — `#/faq/dotacje` z nagłówkiem tuż pod belką (76 px). Panel się zamyka. Na FTP nic nie poszło i nie było commita.
