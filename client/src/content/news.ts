import { site } from "@/config/site";

export type NewsPost = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  paragraphs: string[];
  attachment?: { label: string; href: string };
};

export type NewsListing = {
  slug: string;
  date: string;
  title: string;
};

export const newsPosts: NewsPost[] = [
  {
    slug: "wyniki-naboru-wnioskow-w-ramach-rzadowego-programu-klub-edycja-2026",
    date: "2026-04-29",
    title: "WYNIKI naboru wniosków w ramach Rządowego Programu „KLUB” – edycja 2026",
    excerpt: "Pozytywnie oceniono 7 751 wniosków na łączną kwotę 102 432 000,00 zł.",
    paragraphs: [
      "Zakończyliśmy proces oceny wniosków złożonych w ramach Rządowego Programu „KLUB”. Pozytywnie oceniono 7 751 wniosków i zakwalifikowano do otrzymania dofinansowania na łączną kwotę 102 432 000,00 zł.",
      "Dziękujemy wszystkim klubom za udział w programie i zaangażowanie w rozwój sportu lokalnego.",
      "Gdyby chcieli Państwo uzyskać uzasadnienie decyzji o nieprzyznaniu dofinansowania, prosimy o kontakt poprzez infolinię odpowiedniego Wojewódzkiego Operatora Programu „KLUB”.",
    ],
    attachment: {
      label: "Lista wniosków zakwalifikowanych z uwzględnieniem listy rezerwowej (PDF)",
      href: `${site.uploads}/2026/07/Lista_wnioskow_zakwalifikowanych_z_uwzglednieniem_listy_rezerwowej.pdf`,
    },
  },
  {
    slug: "mamy-rekord-w-ramach-rzadowego-programu-klub-edycja-2026-zlozono-az-9032-wnioski",
    date: "2026-04-07",
    title: "MAMY REKORD! W ramach Rządowego Programu „Klub” – Edycja 2026 złożono aż 9032 wnioski!",
    excerpt: "30 marca 2026 o 23:59 zamknięto nabór — wpłynęło 9032 wniosków.",
    paragraphs: [
      "Dokładnie 30 marca 2026 roku o godzinie 23.59 Operator Krajowy Rządowego Programu KLUB — Krajowe Zrzeszenie LZS — zamknął proces przyjmowania wniosków. Wpłynęło ich aż 9032. Po raz kolejny, od kiedy Krajowe Zrzeszenie LZS jest Operatorem Krajowym tego programu (czyli od 2022 roku), pobiliśmy rekord zgłoszeń.",
      "To niewątpliwie zasługa sprawnie działającego zespołu pracującego przy programie oraz aktywności promocyjnej w mediach społecznościowych. W promocję programu zaangażowały się wszystkie wojewódzkie zrzeszenia i wiele osób, w tym Jakub Rutnicki, minister sportu i turystyki, oraz prezes RG KZ LZS poseł Jarosław Rzepa.",
      "Ogromne zainteresowanie programem jeszcze raz potwierdza, jak ważne jest to wsparcie dla małych i średnich klubów sportowych w całej Polsce. Teraz mamy czas do końca kwietnia 2026 roku na ogłoszenie wyników naboru.",
    ],
  },
  {
    slug: "wazna-informacja-operatora-krajowego-rzadowego-programu-klub",
    date: "2026-03-20",
    title: "WAŻNA INFORMACJA Operatora Krajowego Rządowego Programu „KLUB”",
    excerpt: "Oświadczenia trzeba podpisać elektronicznie — sam skan nie wystarcza.",
    paragraphs: [
      "Przypominamy, że oświadczenia w Programie KLUB muszą być podpisane elektronicznie przez osoby upoważnione do reprezentowania klubu.",
      "Prosimy pamiętać, aby załączyć prawidłowo podpisany plik PDF, a nie jedynie skan podpisów elektronicznych. Tylko plik podpisany elektronicznie pozwala na poprawną weryfikację podpisu.",
      "W ostatnim czasie pojawia się wiele wniosków z nieprawidłowo załączonymi podpisami, dlatego prosimy o zwrócenie na to szczególnej uwagi przed wysłaniem dokumentów. Podpisanie dokumentów ręcznie zamiast elektronicznie skutkuje odrzuceniem wniosku ze względów formalnych.",
      "W razie pytań zapraszamy do kontaktu — tel. 667 099 565.",
    ],
  },
  {
    slug: "wazny-komunikat-krajowego-zrzeszenia-lzs-2",
    date: "2026-03-03",
    title: "WAŻNY Komunikat Krajowego Zrzeszenia LZS",
    excerpt: "Ostrzeżenie przed firmami „pomagającymi w dotacjach”.",
    paragraphs: [
      "W związku z pojawiającymi się informacjami, anonsami i ogłoszeniami autorstwa różnych podmiotów, oferujących pomoc w uzyskaniu dotacji w ramach Rządowego Programu „KLUB” — edycja 2026 informujemy, że podmioty te nie działają w imieniu Ministerstwa Sportu i Turystyki, jak również nie działają w imieniu Krajowego Zrzeszenia Ludowe Zespoły Sportowe występującego jako wyłączny Operator Rządowego Programu „KLUB” — edycja 2026.",
      "Podmioty te nie łączy z Ministerstwem Sportu i Turystyki ani z Krajowym Zrzeszeniem LZS jakikolwiek stosunek prawny uprawniający je do powoływania się na związki z organizatorem lub Operatorem Programu.",
      "Tym samym osoby decydujące się na skorzystanie z usług tych podmiotów muszą mieć pełną świadomość ryzyka towarzyszącego powierzeniu przygotowania wniosku o dotacje podmiotowi trzeciemu, działającemu wyłącznie we własnym imieniu.",
    ],
  },
  {
    slug: "dzisiaj-rusza-nabor-wnioskow-do-rzadowego-programu-klub",
    date: "2026-03-02",
    title: "Dzisiaj rusza nabór wniosków do Rządowego Programu „KLUB”",
    excerpt: "Nabór od 2 marca 2026, godz. 12:00, do 30 marca 2026, godz. 23:59:59.",
    paragraphs: [
      "W poniedziałek, 2 marca 2026 r., o godz. 12:00:00 rozpocznie się elektroniczny nabór ofert/wniosków do tegorocznej edycji Rządowego Programu „KLUB”. Wnioski będzie można składać do 30 marca 2026 do godz. 23:59:59.",
      "Wyniki naboru zostaną ogłoszone do 30 kwietnia 2026. Operatorem programu na lata 2026–2028 zostało ponownie Krajowe Zrzeszenie Ludowe Zespoły Sportowe (KZ LZS), a platformą obsługującą składanie dokumentów i realizację zadania jest niezmiennie system AMODIT.",
      "Program to realne wsparcie finansowe i szansa na rozwój lokalnych klubów sportowych. Dotację można przeznaczyć na wynagrodzenie szkoleniowców, zakup sprzętu czy organizację obozu sportowego — to często jedyne wsparcie dla klubów o ograniczonych budżetach, które w 60% trafia do stowarzyszeń z gmin wiejskich i miejsko-wiejskich.",
      "Od tego roku wymagane są podpisy elektroniczne osób uprawnionych również na składanych wraz z wnioskiem oświadczeniach. W przypadku wniosków z taką samą punktacją decydująca o pozycji w rankingu będzie data złożenia wniosku.",
    ],
  },
  {
    slug: "nabor-wnioskow-program-klub-2026",
    date: "2026-02-18",
    title: "Nabór wniosków – Program KLUB 2026",
    excerpt: "Oficjalny termin naboru: 2–30 marca 2026. Operator: KZ LZS.",
    paragraphs: [
      "Możemy już oficjalnie ogłosić termin uruchomienia elektronicznego naboru ofert/wniosków do udziału w tegorocznej edycji Rządowego Programu „KLUB”.",
      "Na podstawie decyzji Ministra Sportu i Turystyki z dnia 13 lutego 2026 Operatorem Programu na lata 2026–2028 zostało ponownie Krajowe Zrzeszenie Ludowe Zespoły Sportowe (KZ LZS).",
      "Tegoroczny nabór rozpocznie się 2 marca 2026 r. o godz. 12:00:00 i potrwa do 30 marca 2026 r. do godz. 23:59:59. Przewidywany termin ogłoszenia wyników naboru — do 30 kwietnia 2026 r.",
      "Niezmiennie elektroniczną platformą, na której będzie funkcjonował Program, jest system AMODIT.",
      "Podstawowym obowiązkiem każdego wnioskodawcy jest zapoznanie się z obowiązującym Regulaminem zadania. Na załączanych obowiązkowo oświadczeniach (§ 5 ust. 3 i 4 Regulaminu) wymagane są podpisy elektroniczne osób uprawnionych do reprezentowania wnioskodawcy.",
    ],
  },
];

export const newsArchive: NewsListing[] = [
  { slug: "podsumowanie-rzadowego-programu-klub-2025-warszawa", date: "2025-12-19", title: "Podsumowanie Rządowego Programu KLUB 2025 – Warszawa" },
  { slug: "podsumowanie-rzadowego-programu-klub-2025-nasi-najwazniejsi-goscie", date: "2025-12-19", title: "Podsumowanie Rządowego Programu Klub 2025 – nasi najważniejsi goście" },
  { slug: "list-ministra-start-strategii-rozwoju-polskiego-sportu-do-roku-2040", date: "2025-12-12", title: "List Ministra – start „Strategii Rozwoju Polskiego Sportu do roku 2040”" },
  { slug: "komunikat-operatora-krajowego-rzadowego-programu-klub-edycja-2025-dot-testow-sprawnosciowych", date: "2025-10-07", title: "Brak wymogu testów sprawnościowych w Rządowym Programie „KLUB” 2025" },
  { slug: "komunikat-operatora-krajowego-rzadowego-programu-klub-edycja-2025", date: "2025-05-21", title: "KOMUNIKAT Operatora Krajowego Rządowego Programu „KLUB” – edycja 2025" },
  { slug: "wszystkie-kluby-z-listy-rezerwowej-dostana-dofinansowanie", date: "2025-04-30", title: "Wszystkie kluby z listy rezerwowej dostaną dofinansowanie!" },
  { slug: "wyniki-naboru-wnioskoww-ramach-rzadowego-programu-klub-edycja-2025", date: "2025-04-14", title: "WYNIKI naboru wniosków w ramach Rządowego Programu „KLUB” – edycja 2025" },
  { slug: "rzadowy-program-klub-2025-wplynelo-8548-wnioskow-ogloszenie-wyniku-naboru-do-28-kwietnia", date: "2025-04-02", title: "Rządowy Program Klub 2025 – wpłynęło 8548 wniosków" },
  { slug: "wazny-komunikat-krajowego-zrzeszenia-lzs", date: "2025-03-05", title: "WAŻNY Komunikat Krajowego Zrzeszenia LZS" },
  { slug: "instrukcja-dotyczaca-wypelniania-wniosku-2", date: "2025-02-21", title: "Instrukcja dotycząca wypełniania wniosku" },
  { slug: "nabor-wnioskow-do-edycji-2025", date: "2025-02-14", title: "Nabór wniosków do edycji 2025" },
  { slug: "ankieta-dla-beneficjentow-rzadowego-programu-klub", date: "2024-11-08", title: "Ankieta dla beneficjentów Rządowego Programu „KLUB”" },
  { slug: "testy-sprawnosciowe-dla-uczestnikow-rzadowego-programu-klub", date: "2024-10-10", title: "TESTY sprawnościowe dla uczestników Rządowego Programu „KLUB”" },
  { slug: "wyniki-naboru-rzadowego-programu-klub-2024-6797-klubow-z-dofinansowaniem", date: "2024-05-24", title: "Wyniki naboru Rządowego Programu Klub 2024 – 6806 klubów z dofinansowaniem!" },
  { slug: "ogloszenie-wynikow-2024", date: "2024-05-20", title: "Informacja dotycząca ogłoszenia wyników naboru Rządowego Programu Klub 2024" },
  { slug: "instrukcja-dotyczaca-wypelniania-wniosku", date: "2024-04-08", title: "Instrukcja dotycząca wypełniania wniosku" },
  { slug: "nabor-wnioskow-2024", date: "2024-03-20", title: "Nabór wniosków 2024" },
  { slug: "rzadowy-program-klub-2024", date: "2024-01-31", title: "Rządowy Program Klub 2024" },
  { slug: "dodatkowe-srodki", date: "2023-08-30", title: "Dodatkowe środki" },
  { slug: "uwaga-zmiana-regulaminu-zadania-rzadowy-program-klub-edycja-2023", date: "2023-07-27", title: "UWAGA – zmiana regulaminu zadania – edycja 2023" },
  { slug: "testy-sprawnosciowe-w-ramach-programu-klub-2023", date: "2023-06-05", title: "Testy sprawnościowe w ramach Programu „KLUB” 2023" },
  { slug: "wnioski-odrzucone-2023", date: "2023-05-15", title: "Wnioski niezakwalifikowane 2023" },
  { slug: "wyniki-edycja-2023", date: "2023-05-10", title: "Wyniki – edycja 2023" },
  { slug: "prezentacja-instrukcja-jak-wypelnic-i-zlozyc-wniosek", date: "2023-03-14", title: "Prezentacja – instrukcja „Jak wypełnić i złożyć wniosek”" },
  { slug: "ruszyl-nabor-wnioskow-2023", date: "2023-03-01", title: "Ruszył nabór wniosków 2023" },
  { slug: "nabor-wnioskow-edycja-2023", date: "2023-02-22", title: "Nabór wniosków – edycja 2023" },
  { slug: "lzs-operatorem-programu-w-latach-2023-2025", date: "2023-01-25", title: "LZS operatorem programu w latach 2023–2025" },
  { slug: "kontrole-wizytacje-filmy", date: "2022-11-30", title: "Kontrole – wizytacje – filmy" },
  { slug: "drugi-etap", date: "2022-07-07", title: "Drugi etap" },
  { slug: "lista-klubow-niezakwalifikowanych-do-dofinansowania-2022", date: "2022-07-01", title: "Lista klubów niezakwalifikowanych do dofinansowania 2022" },
  { slug: "wyniki-rzadowy-program-klub-edycja-2022", date: "2022-06-28", title: "Wyniki Rządowy Program Klub – edycja 2022" },
  { slug: "zmiana-terminu-rozstrzygniecia", date: "2022-06-27", title: "Zmiana terminu rozstrzygnięcia" },
  { slug: "wyniki-27-czerwca", date: "2022-06-13", title: "Wyniki 27 czerwca!" },
  { slug: "6882-wnioski-w-edycji-2022", date: "2022-06-10", title: "6882 wnioski w edycji 2022" },
  { slug: "nabor-wnioskow-zakonczony", date: "2022-06-07", title: "Nabór wniosków zakończony" },
  { slug: "aplikujcie-czekamy-do-6-czerwca", date: "2022-04-26", title: "Aplikujcie! Czekamy do 6 czerwca!" },
  { slug: "goraco-zachecamy-aplikujcie", date: "2022-04-19", title: "Gorąco zachęcamy! Aplikujcie!" },
  { slug: "zdjecie-z-konferencji-w-pkol", date: "2022-04-09", title: "Zdjęcia z konferencji w PKOL" },
  { slug: "ruszyl-nabor-wnioskow-edycja-2022", date: "2022-04-07", title: "Ruszył nabór wniosków – edycja 2022" },
  { slug: "konferencja-programu-klub-edycja-2022", date: "2022-04-07", title: "Konferencja Programu Klub – edycja 2022" },
  { slug: "nasz-zespol-gotowy-do-startu-programu-klub", date: "2022-04-05", title: "Nasz zespół gotowy do startu Programu Klub" },
  { slug: "rozpoczynamy-cykl-szkolen-dla-koordynatorow-i-konsultantow-wojewodzkich", date: "2022-03-28", title: "Rozpoczynamy cykl szkoleń dla koordynatorów i konsultantów wojewódzkich" },
  { slug: "ruszylismy-z-przygotowaniami-do-rozpoczecia-naboru-programu-klub-edycja-2022", date: "2022-03-12", title: "Ruszyliśmy z przygotowaniami do naboru Programu Klub — edycja 2022" },
  { slug: "krajowe-zrzeszenie-lzs-operatorem-krajowym-programu-klub-edycja-2022", date: "2022-03-10", title: "Krajowe Zrzeszenie LZS operatorem krajowym Programu Klub — edycja 2022" },
];

export function findNewsPost(slug: string | undefined): NewsPost | undefined {
  if (!slug) return undefined;
  return newsPosts.find((post) => post.slug === slug);
}

export function newsYear(date: string): string {
  return date.slice(0, 4);
}
