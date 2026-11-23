export type InfoBlock = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const basicsIntro =
  "Szczegółowe informacje znajdują się w Regulaminie zamieszczonym na tej stronie.";

export const basicsBlocks: InfoBlock[] = [
  {
    id: "cele",
    title: "Cele Programu",
    paragraphs: [],
    bullets: [
      "upowszechnianie aktywności fizycznej wśród dzieci i młodzieży,",
      "wyrównywanie szans dzieci i młodzieży w dostępie do usystematyzowanej aktywności fizycznej,",
      "wsparcie instytucjonalne działalności podstawowych jednostek struktury organizacyjnej polskiego sportu — klubów sportowych działających w formie stowarzyszenia, w zakresie aktywizacji sportowej dzieci i młodzieży,",
      "inwestycja w kapitał ludzki w sporcie dzieci i młodzieży,",
      "stworzenie możliwości do optymalnego wykorzystania przez samorządy lokalne potencjału infrastrukturalnego w zakresie upowszechniania kultury fizycznej wśród dzieci i młodzieży.",
    ],
  },
  {
    id: "finansowanie",
    title: "Finansowanie",
    paragraphs: [
      "Program jest dofinansowany ze środków Funduszu Rozwoju Kultury Fizycznej (FRKF), których dysponentem jest Minister Sportu i Turystyki; środki są przekazywane przez wybranego w formule konkursowej Operatora Krajowego Programu, którym jest Krajowe Zrzeszenie Ludowe Zespoły Sportowe (KZ LZS).",
    ],
  },
  {
    id: "operator",
    title: "Operator Krajowy Programu",
    paragraphs: [
      "Na zlecenie Ministerstwa Sportu i Turystyki — Krajowe Zrzeszenie Ludowe Zespoły Sportowe (KZ LZS).",
    ],
  },
  {
    id: "uczestnicy",
    title: "Uczestnicy Programu",
    paragraphs: [
      "Kluby sportowe, w tym uczniowskie kluby sportowe (UKS) działające w formie stowarzyszenia, realizujące zadania z zakresu upowszechniania kultury fizycznej i sportu wśród dzieci i młodzieży.",
    ],
  },
  {
    id: "wymogi",
    title: "Podstawowe wymogi dla klubów",
    paragraphs: [],
    bullets: [
      "prowadzenie zarejestrowanej działalności przez min. 3 lata przed datą składania wniosku o dofinansowanie — wymagany wypis/wydruk z KRS lub ewidencji prowadzonej przez starostę właściwego ze względu na siedzibę klubu, wystawiony nie wcześniej niż 3 miesiące przed datą składania wniosku,",
      "łączna wysokość dotacji ze środków publicznych pozyskanych przez klub na zadania statutowe — z przeznaczeniem na prowadzenie szkolenia sportowego w roku poprzednim (2025) nie wyższa niż 250 tys. złotych — należy załączyć „Oświadczenie o dotacjach ze środków publicznych” za 2025 rok.",
    ],
  },
  {
    id: "bezposredni",
    title: "Bezpośredni uczestnicy Programu",
    paragraphs: [
      "Wyłącznie dzieci i młodzież w wieku do 18. roku życia, biorący udział w systematycznych zajęciach sportowych/szkoleniu sportowym i w obozach sportowych realizowanych przez klub sportowy.",
    ],
  },
  {
    id: "termin",
    title: "Termin realizacji",
    paragraphs: [
      "Kluby mogą realizować zadania w ramach Programu w terminie od 1 stycznia do 30 listopada 2026, z zastrzeżeniem, że ostatnie wydatki ze środków przyznanej dotacji mogą być dokonane najpóźniej do 30 listopada 2026.",
    ],
  },
  {
    id: "przeznaczenie",
    title: "Przeznaczenie środków",
    paragraphs: [],
    bullets: [
      "wynagrodzenia szkoleniowców prowadzących zajęcia sportowe,",
      "zakup sprzętu sportowego i/lub organizacja obozów sportowych.",
    ],
  },
  {
    id: "komponent",
    title: "Komponent obowiązkowy Programu",
    paragraphs: [
      "Prowadzenie systematycznych zajęć sportowych/sportowo-rekreacyjnych/rekreacyjnych dla dzieci i młodzieży; klub jest zobowiązany do realizacji systematycznych zajęć przez cały — deklarowany we wniosku — okres realizacji zadania.",
    ],
  },
  {
    id: "kwoty",
    title: "Wysokości dofinansowania",
    paragraphs: [],
    bullets: [
      "kluby jednosekcyjne — 12 tys. złotych,",
      "kluby wielosekcyjne — 17 tys. złotych (wymóg: min. 2 różnych szkoleniowców z 2 różnych zgłoszonych sekcji).",
    ],
  },
  {
    id: "wydatkowanie",
    title: "Wydatkowanie środków dotacji",
    paragraphs: [
      "Kluby są zobowiązane do wykorzystania przyznanych środków dotacji, tj. do udokumentowanego wydatkowania, wyłącznie w okresie obowiązywania umowy, jednak nie później niż do dnia 30 listopada 2026 roku.",
    ],
  },
  {
    id: "wklad",
    title: "Udział w zadaniu „środków własnych”",
    paragraphs: [],
    bullets: [
      "wymagany udział środków własnych lub środków pochodzących z innych źródeł — nie mniej niż 5% całości kosztów zadania,",
      "udział własny może być pokryty np. ze środków jednostek samorządu terytorialnego (w formie pieniężnej bądź udostępnianej infrastruktury na podstawie stosownej umowy z określeniem wartości finansowej usługi), ze środków Unii Europejskiej, sponsorów lub własnych klubu/stowarzyszenia, w tym w postaci pracy wolontariuszy — na podstawie stosownej umowy z wyceną świadczenia,",
      "udziału własnego nie można finansować ze środków przekazanych przez Ministerstwo Sportu i Turystyki, np. otrzymanych w ramach innych naborów i konkursów.",
    ],
  },
];

/** Card copy lives in pl.json under basics.highlights.items. */
export const basicsHighlights = [
  "uczestnicy",
  "bezposredni",
  "kwoty",
  "przeznaczenie",
  "termin",
  "wklad",
  "finansowanie",
] as const;

export const basicsSteps = [
  {
    id: "step-1",
    title: "Sprawdź, czy klub spełnia wymogi",
    body: "Forma stowarzyszenia, co najmniej 3 lata działalności, uczestnicy do 18. roku życia i limit 250 tys. zł dotacji publicznych na szkolenie w 2025 roku.",
  },
  {
    id: "step-2",
    title: "Przeczytaj Regulamin i FAQ",
    body: "Szczegóły naboru, załączników i oceny wniosku są w Regulaminie 2026. FAQ odpowiada na najczęstsze wątpliwości 1:1.",
  },
  {
    id: "step-3",
    title: "Przygotuj dokumenty w PDF",
    body: "KRS lub ewidencja (nie starsze niż 3 miesiące), statut oraz oświadczenia podpisane elektronicznie (profil zaufany albo podpis kwalifikowany).",
  },
  {
    id: "step-4",
    title: "Złóż wniosek w AMODIT",
    body: "Jeden wniosek na klub. Po kliknięciu „WYŚLIJ” nie da się go poprawić — sprawdź wszystko przed wysłaniem.",
  },
];

export const basicsNote =
  "Szczegółowe warunki i kryteria udziału w Rządowym Programie „KLUB” — edycja 2026 zostały zawarte w Regulaminie, opracowanym na podstawie naboru na Operatora Programu Klub ogłoszonego przez Ministra Sportu i Turystyki w dniu 29 stycznia 2026 roku (Program „KLUB” — edycja na lata 2026–2028).";
