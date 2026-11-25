# Kolumny mega-menu Aktualności

Desktopowe mega-menu Aktualności (`MegaPanel` dla `id: "news"`) ma po lewej dwie pozycje: „Wszystkie wpisy” (`nav.allPosts` → `#/aktualnosci`) i „Archiwum” (`news.archiveTitle` → `#/aktualnosci/archiwum`). Po prawej zostają cztery najnowsze wpisy 2026 (`newsPosts.slice(0, 4)`), każdy linkiem `#/aktualnosci/{slug}`. Najechanie lub strzałka podświetla lewą pozycję, ale nie zamienia prawej listy na lead jednego wpisu — ta lista jest w `detailLinks` i nie zależy od aktywnego tematu.

Sekcja archiwum nie miała kotwicy. Nagłówek w `NewsPage` dostał `id="archiwum"` (`newsArchiveAnchor`), a `parseHash` dla samego segmentu `archiwum` zwraca `{ name: "news", anchor: "archiwum" }` zamiast sluga, który kończyłby się stroną 404. Nagłówek ma `scroll-margin-top` równy wysokości belki plus 1 rem. Lat 2022–2024 nie dopisywano. Start i FAQ nadal pokazują lead i linki aktywnego tematu.

Szuflada mobilna zostaje listą wpisów. Na górze, zamiast „Wszystkie aktualności”, są „Wszystkie wpisy” i „Archiwum”, potem te same cztery tytuły.

Sprawdzone na localhost:5173, okno 1191 px. Lewa kolumna to dokładnie te dwie pozycje, prawa to cztery tytuły. „Wszystkie wpisy” otwiera `#/aktualnosci` i zamyka panel. „Archiwum” otwiera `#/aktualnosci/archiwum`: nagłówek ma top 168 px, belka kończy się na 76 px, pod spodem jest rok 2025. Klik „MAMY REKORD” otwiera ten artykuł. Start ma Podstawowe informacje, Regulamin i Do pobrania z leadem po prawej; FAQ ma kategorie i Kontakt. Przy 390 px szuflada Aktualności zaczyna się od „Wszystkie wpisy” i „Archiwum”. Na FTP nic nie poszło i nie było commita.
