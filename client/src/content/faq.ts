export type FaqItem = {
  id: string;
  question: string;
  answer: string[];
  bullets?: string[];
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    id: "kto",
    title: "Kto może wziąć udział",
    items: [
      {
        id: "uprawniony",
        question: "Kto jest uprawniony do uzyskania dofinansowania?",
        answer: [
          "Program „KLUB” skierowany jest do klubów sportowych działających w formie stowarzyszenia, których podstawowym celem działalności statutowej jest upowszechnianie sportu i aktywności fizycznej dzieci i młodzieży w środowiskach lokalnych (wymagany jest stosowny zapis w Statucie).",
          "Ponadto klub musi wykazać, że prowadził formalnie zarejestrowaną działalność statutową przez co najmniej 3 lata przed datą ubiegania się o dotację — decyduje data złożenia wniosku.",
        ],
      },
      {
        id: "forma",
        question: "Jaką formę organizacyjną powinien mieć klub ubiegający się o dofinansowanie?",
        answer: [
          "O dofinansowanie w Rządowym Programie „KLUB” może ubiegać się klub, który działa jako stowarzyszenie zarejestrowane w KRS albo stowarzyszenie wpisane do ewidencji starosty właściwego ze względu na siedzibę klubu.",
          "W punkcie V. formularza wniosku („Forma organizacyjna i okres działalności”) można wybrać jedną z 4 dopuszczalnych form organizacyjnych.",
        ],
        bullets: [
          "stowarzyszenie zarejestrowane w KRS,",
          "stowarzyszenie wpisane do ewidencji starosty (w tym również stowarzyszenie zwykłe),",
          "UKS zarejestrowany w KRS,",
          "UKS wpisany do rejestru starosty.",
        ],
      },
      {
        id: "nowy",
        question: "Czy nowopowstały klub może złożyć wniosek o dofinansowanie w ramach Programu „KLUB”?",
        answer: [
          "NIE.",
          "Wymagane jest, aby wnioskodawca (klub/stowarzyszenie) prowadził formalnie zarejestrowaną działalność statutową przez co najmniej 3 lata (rejestracja w KRS bądź w ewidencji prowadzonej przez starostę właściwego ze względu na siedzibę klubu) przed datą składania wniosku. Okres trzyletniego funkcjonowania klubu liczony jest do daty złożenia wniosku.",
        ],
      },
      {
        id: "uczestnicy",
        question: "Kto może być bezpośrednim uczestnikiem Programu?",
        answer: [
          "Bezpośrednimi uczestnikami systematycznych zajęć oraz obozów sportowych mogą być wyłącznie dzieci i/lub młodzież w wieku do 18. roku życia — decyduje rok urodzenia.",
        ],
      },
      {
        id: "rozliczenie",
        question: "Czy jeśli klub nie rozliczył dotacji w ubiegłym roku, może uzyskać wsparcie w roku bieżącym?",
        answer: [
          "NIE.",
          "O wsparcie finansowe mogą ubiegać się wyłącznie kluby, które prawidłowo rozliczyły dotacje w latach ubiegłych.",
        ],
      },
    ],
  },
  {
    id: "pieniadze",
    title: "Na co i ile pieniędzy",
    items: [
      {
        id: "dzialania",
        question: "Na jakie działania może zostać przeznaczone dofinansowanie przyznane w ramach Programu „KLUB”?",
        answer: [
          "W ramach wnioskowanego dofinansowania przyznane środki można przeznaczyć wyłącznie na wynagrodzenie szkoleniowców prowadzących systematyczne zajęcia sportowe/sportowo-rekreacyjne/rekreacyjne — komponent obowiązkowy Programu, min. 20% przyznanej dotacji — oraz na zakup sprzętu sportowego i/lub organizację obozu sportowego (komponenty fakultatywne).",
          "Kwota przyznanej dotacji może być rozdysponowana w dowolnych proporcjach na wskazane komponenty, przy założeniu że podstawowym obowiązkowym komponentem jest prowadzenie systematycznych zajęć dla dzieci i młodzieży.",
        ],
      },
      {
        id: "zawody",
        question:
          "Czy w ramach zadań Programu można finansować uczestnictwo w zawodach, turniejach, lub organizację zawodów, turniejów i podobnych wydarzeń?",
        answer: [
          "NIE.",
          "Prowadzenie systematycznych zajęć nie obejmuje finansowania uczestnictwa w zawodach, turniejach, a także organizacji zawodów, turniejów i podobnych wydarzeń.",
        ],
      },
      {
        id: "kwota",
        question: "W jakiej wysokości można uzyskać dofinansowanie na realizację zadań w ramach Programu „KLUB”?",
        answer: [
          "Kwota wnioskowanej dotacji w ramach Programu „KLUB” w przypadku klubu jednosekcyjnego wynosi 12 000 zł, w przypadku klubu wnioskującego o wsparcie więcej niż jednej sekcji („klub wielosekcyjny”) — 17 000 zł.",
        ],
      },
      {
        id: "wielosekcyjny",
        question: "Jakie podstawowe wymogi i kryteria przyjęto w Programie „KLUB” dla klubów „wielosekcyjnych”?",
        answer: [
          "Dla klubów wielosekcyjnych elementem obowiązkowym jest prowadzenie zajęć sportowych dla wszystkich sekcji, o których dofinansowanie wnioskuje klub. Należy zgłosić szkoleniowców co najmniej dwóch różnych sekcji, oddzielnie dla każdej zgłoszonej sekcji.",
          "Klub powinien we wniosku wykazać, że realizuje systematyczne zajęcia w co najmniej dwóch oddzielnych grupach szkoleniowych — inni zawodnicy, różne sporty.",
          "Przy zgłaszaniu klubu jako wielosekcyjnego klub musi wykazać sekcje już działające, a nie sekcje, które zamierza powołać po przyznaniu dotacji.",
        ],
      },
      {
        id: "pelna-kwota",
        question: "Czy można przeznaczyć pełną kwotę przyznanej dotacji na wynagrodzenie szkoleniowca lub szkoleniowców?",
        answer: [
          "TAK.",
          "Dla klubu jednosekcyjnego pełna kwota przyznanej dotacji może być przeznaczona na wynagrodzenie nawet dla jednego szkoleniowca.",
          "W przypadku klubu wielosekcyjnego pełna kwota może być przeznaczona na wynagrodzenie dla co najmniej dwóch zgłoszonych szkoleniowców, przy założeniu że każdy prowadzi zajęcia w innej sekcji i posiada stosowne kwalifikacje.",
        ],
      },
    ],
  },
  {
    id: "dotacje",
    title: "Dotacje z innych środków publicznych",
    items: [
      {
        id: "limit",
        question:
          "Czy każdy klub sportowy może uzyskać dofinansowanie, niezależnie od kwoty dotacji pozyskanych z innych środków publicznych?",
        answer: [
          "NIE.",
          "W programie „Klub” dofinansowanie mogą uzyskać jedynie te kluby, w których kwoty dotacji ze środków publicznych otrzymanych w roku poprzedzającym złożenie wniosku (2025), z przeznaczeniem na prowadzenie szkolenia sportowego, nie przekroczyły sumy 250 tys. zł.",
          "Podmioty ubiegające się o wsparcie muszą załączyć do wniosku oświadczenie na druku z systemu AMODIT, z wyszczególnieniem źródeł i kwot za 2025 rok. Kwota musi być zgodna z pkt. III wniosku oraz dokumentami finansowymi klubu.",
        ],
      },
      {
        id: "definicja",
        question: "Dotacja ze środków publicznych?",
        answer: [
          "Dotacje ze środków publicznych to środki z budżetu państwa (np. MSiT, MEN, MNiSW), budżetu jednostek samorządu terytorialnego (urzędy miast, gmin, powiatów, urzędy marszałkowskie) oraz z państwowych funduszy celowych (np. Funduszu Rozwoju Kultury Fizycznej, z którego finansowany jest m.in. Program „KLUB”) przeznaczone na podstawie ustawy o finansach publicznych, odrębnych ustaw — w szczególności ustawy o działalności pożytku publicznego i o wolontariacie — lub umów międzynarodowych, na finansowanie lub dofinansowanie realizacji zadań publicznych lub inwestycji związanych z realizacją tych zadań.",
          "Środkami publicznymi w 2025 roku były m.in. dotacje w ramach programów: Sportowe Wakacje (Fundacja LOTTO ze środków MSiT/FRKF), Program Certyfikacji PZPN dla Szkółek Piłkarskich (PZPN ze środków MSiT/FRKF) oraz Rządowy Program „KLUB” — edycja 2025 (KZ LZS ze środków MSiT/FRKF) — i wiele innych.",
        ],
      },
      {
        id: "szkolenie",
        question:
          "Jak należy interpretować sformułowanie „otrzymane dotacje ze środków publicznych, z przeznaczeniem na prowadzenie szkolenia sportowego”?",
        answer: [
          "Wymóg wykazania łącznej kwoty dotacji ze środków publicznych na „prowadzenie szkolenia sportowego” w roku poprzedzającym składanie wniosku odnosi się do finansowania podstawowej działalności statutowej klubu.",
          "Do tej kwoty nie wlicza się środków pozyskanych na inwestycje, remonty, modernizację obiektów sportowych itp. Wlicza się natomiast wszystkie dotacje ze środków publicznych z tytułu prowadzenia działalności w obszarze kultury fizycznej i sportu, bez względu na źródło finansowania.",
        ],
      },
    ],
  },
  {
    id: "termin",
    title: "Termin i miejsce realizacji",
    items: [
      {
        id: "okres",
        question: "W jakim terminie może być realizowany Program?",
        answer: [
          "Program może być realizowany wyłącznie w okresie od 1 stycznia do 30 listopada 2026 r., przy czym klub składając wniosek sam określa termin realizacji zadania, który musi się mieścić w tym przedziale. Klub jest zobowiązany do realizacji zajęć przez cały deklarowany okres, a minimalny okres prowadzenia zajęć nie może być krótszy niż 2 miesiące.",
        ],
      },
      {
        id: "wakacje",
        question: "Czy Program (zajęcia sportowe) musi być obowiązkowo realizowany w czasie letnich wakacji?",
        answer: [
          "NIE.",
          "Jeżeli klub/stowarzyszenie nie planuje realizacji zadania w okresie letnich wakacji (tzw. „przerwa wakacyjna”), należy to wyraźnie zaznaczyć w formularzu wniosku (pkt. VI).",
        ],
      },
      {
        id: "zagranica",
        question: "Czy zadania Programu (zajęcia, obozy) można realizować za granicą?",
        answer: ["NIE.", "Program może być realizowany wyłącznie na terenie kraju."],
      },
    ],
  },
  {
    id: "szkoleniowcy",
    title: "Szkoleniowcy",
    items: [
      {
        id: "uprawnienia",
        question: "Kto może być zgłoszony w Programie jako szkoleniowiec?",
        answer: [
          "Zgłoszeni do prowadzenia zajęć szkoleniowcy muszą posiadać stosowne uprawnienia: trenera lub instruktora sportu (zgodnie z art. 41 ustawy z dnia 26 czerwca 2010 r. o sporcie), instruktora rekreacji ruchowej lub nauczyciela wychowania fizycznego.",
          "Zatrudnianie oraz wypłata wynagrodzenia dla szkoleniowców w ramach Programu muszą odbywać się zgodnie z obowiązującymi w Polsce przepisami dotyczącymi zatrudnienia i wynagradzania.",
        ],
      },
    ],
  },
  {
    id: "sprzet",
    title: "Sprzęt i obozy",
    items: [
      {
        id: "jaki-sprzet",
        question: "Jaki sprzęt sportowy można zakupić w ramach programu?",
        answer: [
          "Sprzęt określony w pkt. 1 i 2 musi posiadać stosowne, wymagane przepisami atesty, dopuszczające do bezpiecznego użytkowania przez dzieci i młodzież szkolną.",
        ],
        bullets: [
          "sprzęt lub urządzenia sportowe niezbędne do prowadzenia szkolenia sportowego w zależności od specyfiki poszczególnych sportów (np. piłki, łuki, kajaki, rowery, narty) lub ich elementy,",
          "pomocniczy sprzęt sportowy potrzebny do prowadzenia szkolenia typowego dla danego sportu (materace, pachołki, siatki itp.),",
          "specjalistyczne stroje sportowe (w tym obuwie, dresy, koszulki, spodenki) niezbędne do prawidłowego przeprowadzenia treningów lub udziału w zawodach.",
        ],
      },
      {
        id: "dokumentacja",
        question: "Jak należy dokumentować zakup sprzętu?",
        answer: [
          "Zakup sprzętu musi być udokumentowany fakturą/rachunkiem z łączną kwotą zakupu oraz z podaniem ceny jednostkowej i ewentualnie liczby zakupionych kompletów, elementów itp.",
        ],
      },
      {
        id: "import",
        question: "Czy można nabyć sprzęt za granicą?",
        answer: [
          "W uzasadnionych przypadkach — za zgodą Operatora Krajowego Programu — dopuszcza się zakupy sprzętu od dostawców zagranicznych, z zastrzeżeniem że kwota zakupu będzie przeliczona na polskie złote (po aktualnym kursie NBP) i wykazana w rozliczeniu w PLN.",
        ],
      },
      {
        id: "oboz",
        question: "Czy jest określona liczba dni obozu sportowego i forma organizacji?",
        answer: [
          "TAK.",
          "Obóz sportowy nie może trwać krócej niż 5 dni kalendarzowych.",
          "Organizowane w ramach Programu obozy muszą być realizowane poza miejscem stałego funkcjonowania klubu jako obozy zamiejscowe. Liczba uczestników oraz zasady realizacji muszą być zgodne z przepisami, w szczególności ustawą z dnia 7 września 1991 r. o systemie oświaty w zakresie wypoczynku dzieci i młodzieży.",
        ],
      },
    ],
  },
  {
    id: "ocena",
    title: "Ocena wniosku",
    items: [
      {
        id: "kryteria",
        question: "Jakie kryteria stosowane są przy ocenie wniosków?",
        answer: [
          "Szczegółowe kryteria uwzględniane przy ocenie punktowej wniosków zawarto w § 6 Regulaminu.",
        ],
        bullets: [
          "spełnienie wymogów formalnych oraz zgodność wniosku z treścią programu,",
          "wysokość dofinansowania pozyskanego ze środków publicznych w 2025 r. z przeznaczeniem na statutową działalność szkoleniową,",
          "cele statutowe wnioskodawcy ukierunkowane na upowszechnianie kultury fizycznej,",
          "oszczędność i racjonalność kalkulacji kosztów, z uwzględnieniem środków własnych,",
          "wysokość ewentualnych opłat pobieranych od uczestników,",
          "udział wolontariuszy w realizacji zadania,",
          "promocja aktywności fizycznej dzieci i młodzieży oraz wychowawczych wartości sportu,",
          "udział uczestników o niższym statusie ekonomicznym, działania profilaktyczne,",
          "wykorzystanie dotacji zgodnie z umową (jeśli wnioskodawca korzystał wcześniej z Programu KLUB).",
        ],
      },
      {
        id: "status",
        question:
          "Jak należy rozumieć zawarte we wniosku pytanie (pkt. VI) „Czy są uczestnicy o niższym statusie ekonomicznym?”",
        answer: [
          "Termin „niski status ekonomiczny uczestników” to pojęcie wprowadzone do formularza wniosku przez Ministerstwo Sportu i Turystyki.",
          "Informacja, której oczekujemy we wniosku, sprowadza się do odpowiedzi TAK lub NIE i podania procentu takich osób wśród uczestników zadania.",
          "Mogą to być m.in. dzieci z domu dziecka, z rozbitych lub patologicznych rodzin, emigranci, dzieci z ubogich rodzin, od których klub nie pobiera składek lub funduje np. dożywianie albo pokrywa koszty zgrupowań. To element indywidualnej oceny wnioskującego klubu.",
        ],
      },
    ],
  },
  {
    id: "dokumenty",
    title: "Dokumenty i podpisy",
    items: [
      {
        id: "podpis",
        question:
          "Podpis elektroniczny — czy „oświadczenie o zgodności danych” i „oświadczenie o dotacjach” muszą być podpisane elektronicznie? Jakiego rodzaju podpisu mogę użyć?",
        answer: [
          "TAK. Wymagane są podpisy elektroniczne.",
          "Oświadczenia muszą bezwzględnie zostać podpisane w sposób elektroniczny przez osoby uprawnione do reprezentowania klubu, zgodnie z zapisami statutu.",
          "Na potrzeby realizacji zadania Rządowego Programu „KLUB” — edycja 2026 wymagane jest skorzystanie z zaawansowanego podpisu elektronicznego (w tym przez profil zaufany) albo kwalifikowanego podpisu elektronicznego. Podpisy muszą być wyraźnie widoczne graficznie i nie mogą się nakładać na siebie.",
          "Skan podpisu odręcznego nie zastępuje podpisu elektronicznego.",
        ],
      },
    ],
  },
];

export function allFaqItems(): FaqItem[] {
  return faqCategories.flatMap((category) => category.items);
}
