# Instrukcja dołączenia w sekcji „Kroki i zdjęcie” — 2026-11-23

## Co zmieniono

W `client/src/i18n/locales/pl.json` (`home.samples.steps`) lorem ipsum ustąpił instrukcji „Jak dołączyć do Programu KLUB” w czterech krokach:

1. Sprawdź, czy klub może złożyć wniosek (stowarzyszenie, dzieci do 18 lat, 3 lata działalności, limit 250 tys. zł dotacji w 2025 r., jeden wniosek na klub).
2. Wybierz kwotę i zaplanuj zadanie (12 / 17 tys. zł, wynagrodzenia, sprzęt, obozy, min. 2 miesiące zajęć w okresie 1.01–30.11.2026, wkład własny 5%: 600 / 850 zł).
3. Przygotuj załączniki w PDF (KRS lub ewidencja do 3 miesięcy, statut, oświadczenia z AMODIT z podpisem elektronicznym).
4. Złóż wniosek w AMODIT (nabór 2.03.2026 12:00 – 30.03.2026 23:59, bez poprawek po „WYŚLIJ”, ranking punktowy, wydatki do 30.11.2026).

`eyebrow`, `note`, opisy zdjęć (`alt`), komponent `StepScroll.tsx` i `home-samples.ts` bez zmian.

## Źródła

Regulamin 2026 (`client/src/content/regulamin.txt`: § 1 ust. 13–15, § 4 ust. 1, 4, 18–20, załączniki, kryteria) oraz `client/src/content/basics.ts`.

## Do wyjaśnienia

Kwota wkładu własnego (600 / 850 zł) idzie za Regulaminem § 4 ust. 18. „Podstawowe informacje” mówią „5% całości kosztów zadania” — niespójność opisana w `docs/old-website-info.md`, sekcja 8, punkt 2.

## Sprawdzenie

`npm run build` bez błędów. Na `http://127.0.0.1:5173/` przy 1280 px i 390 px sekcja pokazuje nowy tekst, bez lorem i bez poziomego przewijania. ESLint ma 5 wcześniejszych błędów w `MegaMenu.tsx`, `MobileMenu.tsx` i `Navbar.tsx`, niezwiązanych z tą zmianą.

Na FTP nic nie poszło.
