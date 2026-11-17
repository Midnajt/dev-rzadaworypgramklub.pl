# Wzór promptów UX — zachowania ze Squarespace

Data obserwacji: 2026-11-17.  
Źródła: [squarespace.com](https://www.squarespace.com/) oraz [squarespace.com/solutions/events/camps](https://www.squarespace.com/solutions/events/camps).

Ten plik opisuje **zachowanie interfejsu**, które można przenieść do innego projektu. Treści marketingowe Squarespace są tylko przykładem tego, co stoi w danym slocie. W promptach podmieniaj je na treść własnej strony.

Dokument powstał jako wzór pod repozytorium [dev-rzadaworypgramklub.pl](https://github.com/Midnajt/dev-rzadaworypgramklub.pl) (strona Rządowego Programu KLUB). Bloki „Wklej do promptu” zakładają stack z README tamtego repo.

## Ciekawie do sprawdzenia

- [https://www.squarespace.com/solutions/events/camps](https://www.squarespace.com/solutions/events/camps) — przy scrollu kolejne bloki tekstu rozjaśniają się i przygasają, a obraz danego kroku zostaje w kadrze. Na dole tej samej strony jest karuzela kart „One platform to streamline your camps”.

## Jak tego używać

1. Wklej do promptu sekcję [Wspólna ramka promptu](#wspólna-ramka-promptu).
2. Pod nią wklej jeden blok **Wklej do promptu** z komponentu, który akurat budujesz.
3. Dopisz własną treść: nagłówki, punkty, linki, zdjęcia. Zostaw zachowanie z tego pliku.

Wartości w pikselach i opacity to **punkt odniesienia** z żywego serwisu, zapisany po to, żeby agent złapał charakter ruchu. Celem jest ten sam rytm, a nie kopia piksel w piksel.

## Wspólna ramka promptu

Wklej to raz, na początku zadania. Potem doklej blok konkretnego komponentu.

```text
Budujesz fragment strony Rządowego Programu KLUB (repo dev-rzadaworypgramklub.pl).

Stack, którego masz się trzymać:
- React 19 i TypeScript (strict)
- Vite, style w Tailwind CSS v4 (tokeny już są w projekcie)
- shadcn/ui, tam gdzie pasuje gotowy prymityw
- ruch: Framer Motion i istniejący komponent Reveal; nowej biblioteki animacji nie dodawaj
- nawigacja hashem, bez React Routera
- język interfejsu: tylko polski
- treść bierz z tego zadania i z plików projektu; haseł i nazw ze Squarespace nie przenoś

Zasady ruchu:
- animuj konkretny tekst albo kartę, a nie cały ekran naraz
- przy prefers-reduced-motion treść jest od razu czytelna, bez przesunięcia
- fokus klawiatury ma robić to samo, co hover, tam gdzie hover coś przełącza
- po wdrożeniu sprawdź zachowanie w przeglądarce: wejście sekcji w kadr, zejście z kadru, klawiatura, wąski ekran
```

## Szablon opisu

Każdy komponent niżej ma te same pola. Dzięki temu prompt dostaje stany i trigger, a nie sam opis „ładnie się pojawia”.

- gdzie to widać
- co robi użytkownik i co się zmienia
- stany
- trigger
- model ruchu
- struktura
- dostępność
- blok do wklejenia

---

## 1. Mega-menu (wzór: Solutions)

### Gdzie to widać

Strona główna [squarespace.com](https://www.squarespace.com/), nagłówek. Przyciski **Products**, **Solutions** i **Resources** otwierają panel pod headerem. Poniżej rozpisany jest **Solutions**, bo ten panel ma dwie kolumny i podmianę treści bez przeładowania. Products i Resources korzystają z tego samego otwierania i zamykania; różnią się układem kolumn.

### Co robi użytkownik i co się zmienia

Użytkownik najecha albo fokusuje przycisk **Solutions**. Pod nagłówkiem wjeżdża panel na szerokość treści.

- Lewa kolumna ma etykietę „Solutions for” i listę branż.
- Prawa kolumna ma etykietę „Explore”, krótki opis aktywnej branży i linki podkategorii.
- Aktywna jest dokładnie jedna branża. Wejście na inną podmienia tylko prawą kolumnę.
- Zejście kursorem z nagłówka i panelu zamyka menu. Fokus przeniesiony poza nie też je zamyka.

Branże w lewej kolumnie, w tej kolejności:

1. Creative Services — opis o projektach, które zaczynają zarabiać; linki: Photographers, Graphic Designers, Artists, Interior Designers, Architects, Fashion & Apparel.
2. Professional Services — Consultants, Professional Coaches, Real Estate Agents, Legal Services, Marketing Agencies, Tech & IT Services.
3. Education & Training — Exam Prep Tutors, Music Teachers, Art Instruction, Dance Schools, Language Schools, Vocational Training.
4. Beauty — Hair Salons, Barbershops, Nail Studios, Tattoos & Piercings, Makeup Artists, Jewelry Makers.
5. Sports & Fitness — Sports Coaches, Sporting Goods, Fitness Centers, Sports Camps, Personal Trainers, Yoga Studios.
6. Health & Wellness — Massage Therapists, Acupuncturists, Wellness Retreats, Recovery Centers, Nutritionists, Medspas.
7. Home Services — Contractors, Home Decor, Landscapers, Cleaning Services, Pet Care, Auto Repair.
8. Events & Experiences — Travel Agencies, Camps, Activities, Festivals, Concerts & Shows, Restaurants & Bars.
9. Charities & Nonprofits — Faith Communities, Philanthropy & Advocacy, Community Groups, Environment & Conservation, Arts & Culture, Youth & Education.
10. Personal — Resumés & CVs, Portfolios, Weddings, Freelancers, Creators, Podcasts.

Na stronie klubu lewa kolumna to działy serwisu (na przykład Start, Aktualności, FAQ, Regulamin albo grupy tematów z regulaminu), a prawa kolumna to skrót i linki wewnętrzne tego działu. Nazwy ze Squarespace zostają tylko w tym opisie jako mapa oryginału.

### Stany

- **Zamknięte.** Panel jest poza interakcją. Przycisk w nagłówku wygląda jak reszta linków.
- **Otwarte, branża aktywna.** Jedna pozycja listy ma stan aktywny. Prawy panel pokazuje jej opis i linki. W DOM Squarespace widać to jako klasę w rodzaju `is-active` na pozycji i na szczegółach.
- **Podmiana.** Zmiana aktywnej branży nie zamyka panelu i nie przeładowuje strony. Prawa kolumna wymienia treść.
- **Wąski ekran.** W DOM są osobne linki desktop i mobile. Na wąskim ekranie dwie kolumny obok siebie zamieniają się w listę: wybór działu odkrywa jego opis i linki pod spodem, jeden dział naraz.

### Trigger

- otwarcie: hover albo fokus na przycisku nagłówka
- podmiana prawej kolumny: hover albo fokus na pozycji listy
- zamknięcie: kursor opuszcza wspólny obszar nagłówka i panelu, albo fokus wychodzi poza ten obszar, albo klawisz Escape

### Model ruchu

Panel pojawia się bezpośrednio pod nagłówkiem, na szerokość kolumny treści (w obserwacji rząd wielkości ok. 990 px szerokości i ok. 440 px wysokości, wyśrodkowany). Tło strony pod panelem zostaje widoczne. Prawa kolumna podmienia się od razu razem ze zmianą aktywnej pozycji; osobnej, długiej animacji slajdu tam nie ma. Ruch ma być krótki: panel wchodzi (lekki zjazd i pojawienie się), treść prawej kolumny przełącza się bez „przewijania” listy.

### Struktura

- `header` z przyciskiem, który steruje panelem (`aria-expanded`, `aria-controls`)
- panel `role="region"` z etykietą
- lista działów (przyciski, nie od razu linki wychodzące ze strony)
- panel szczegółów: krótki lead i lista linków

Jeden zestaw danych w kodzie: `{ id, label, lead, links[] }`. Aktywne `id` trzyma stan. Prawy panel czyta tylko aktywny rekord. Dzięki temu agent nie dubluje dziesięciu niezależnych widoków.

### Dostępność

- przycisk nagłówka jest prawdziwym `button`, nie `div` z kliknięciem
- strzałki góra/dół chodzą po liście działów i od razu ustawiają aktywny rekord
- Tab przechodzi do linków w prawej kolumnie aktywnego działu
- Escape zamyka panel i wraca fokus na przycisk, który go otworzył
- przy `prefers-reduced-motion` panel pojawia się bez zjazdu
- na wąskim ekranie jeden rozwinięty dział; reszta zwinięta

### Wklej do promptu

```text
Zrób mega-menu w nagłówku na wzór Solutions ze squarespace.com.

Zachowanie:
- przycisk w headerze otwiera panel tuż pod nagłówkiem; drugi taki przycisk zamyka poprzedni panel, otwarty jest najwyżej jeden
- lewa kolumna to lista działów strony; prawa pokazuje lead aktywnego działu i linki wewnętrzne (hash)
- hover i fokus na dziale podmieniają tylko prawą kolumnę, bez przeładowania i bez zamykania panelu
- zamknięcie: zejście kursorem z header+panel, fokus poza tym obszarem, Escape
- na wąskim ekranie układ to lista: dział rozwija lead i linki pod sobą, jeden dział naraz
- dane trzech kolumn (jeśli dodasz też odpowiedniki Products/Resources) trzymaj w jednej tablicy rekordów { id, label, lead, links }, a nie w skopiowanym JSX

Ruch: krótkie wejście panelu. Bez slajdu prawej kolumny. Przy prefers-reduced-motion panel jest od razu na miejscu.
Dostępność: button z aria-expanded, strzałki po liście, Tab do linków aktywnego działu, fokus wraca na przycisk po Escape.
Treść działów weź z informacji o Programie KLUB (start, aktualności, FAQ, regulamin). Nazw branż Squarespace nie używaj.
Sprawdź w przeglądarce: otwarcie, podmiana działu, Escape, Tab, szerokość telefonu.
```

---

## 2. Pojawianie się tekstu przy scrollu

### Gdzie to widać

Strona główna, trzy miejsca wskazane jako wzór:

- sekcja `one-platform`, nagłówek „Everything you need on one platform” i lead pod nim
- sekcja `get-started`, nagłówek „Getting started has never been easier with AI”; obok są karty „Blueprint AI Builder” i „Professional Templates”
- sekcja `your-domain`, tytuł „Find the perfect domain for your website”, pole wyszukiwania i link „Transfer your domain”

Wideo w `section#conversion` (pełna szerokość, `video.video-base__video`) jest **poza tym wzorem**. W prompcie go pomijaj.

### Co robi użytkownik i co się zmienia

Użytkownik scrolluje. Dopóki blok tekstu jest poza kadrem, tytuł (i często lead) jest niewidoczny. Gdy blok wjeżdża w viewport, tekst staje się czytelny i dosuwa się na docelowe miejsce. Animowany jest węzeł tekstu, nie cała sekcja: opakowanie `.headline` może mieć opacity 1, a `h2` i akapit wewnątrz opacity 0.

Zaobserwowane różnice między blokami, żeby agent nie zlał ich w jeden selektor:

- tytuł i lead w `one-platform` chowają się samą opacity (przesunięcie zostaje `none`)
- tytuł w `get-started` i tytuł w `your-domain` chowają się opacity oraz zjazdem ok. 25 px w dół (`translateY(25px)`), a w kadrze mają `transform: none` i opacity 1
- kropki przy nagłówku AI (`ai-dots`) były widoczne także wtedy, gdy tytuł był jeszcze schowany
- karty AI i formularz domeny wchodzą razem z sekcją; po wejściu w kadr formularz, input i link mają opacity 1

Gdy sekcja `one-platform` zjechała z kadru, jej tytuł wrócił do opacity 0. Tytuł domeny po pierwszym pokazaniu w jednej próbie został czytelny. Na stronie klubu przyjmij wariant spokojniejszy: **pokaż raz i zostaw**. Powtórne chowanie przy scrollu w górę na stronie informacyjnej rozprasza. W opisie dla agenta jest to świadoma decyzja, podpisana jako zalecenie pod KLUB, a nie jako jedyne zachowanie Squarespace.

### Stany

- **Przed kadrem.** Tytuł i lead: opacity 0. Tam, gdzie jest zjazd, ok. 25 px w dół. Sekcja jako kontener zostaje w układzie, żeby scroll nie skakał.
- **W kadrze.** Opacity 1, element na docelowej pozycji.
- **Po pierwszym pokazaniu (zalecenie dla KLUB).** Zostaje widoczny. Kolejne zjechanie z kadru nic już nie chowa.

### Trigger

Wejście bloku tekstu w viewport. Próg z obserwacji: ruch startuje, gdy sekcja jest realnie czytana, a nie gdy tylko musnęła dolną krawędź. W implementacji sensowny próg to okolice 20–30% wysokości bloku albo `whileInView` z `once`.

`transition` na tych węzłach w Squarespace jest ustawione na `all`. W projekcie klubu animuj jawnie opacity i przesunięcie Y. Animowanie `all` rusza też kolory i układ przy hoverze i potrafi mulić.

### Model ruchu

Tekst startuje niewidoczny, lekko niżej, i wjeżdża na miejsce w krótkim, miękkim ruchu (charakter: ease-out, ułamek sekundy, nie sprężyna). Kolejne linie mogą wejść z minimalnym opóźnieniem: najpierw tytuł, potem lead, potem karty albo formularz. Opóźnienie ma być wyczuwalne jako kolejność, nie jako czekanie.

Karty pod nagłówkiem „Getting started” (dwie duże pozycje: budowanie z AI i szablony) wjeżdżają tym samym ruchem, tuż po tytule. Pole domeny wjeżdża razem z tytułem tej sekcji: tytuł, potem rząd input + przycisk, potem linia z linkiem.

### Struktura

Osobny wrapper na każdą linię, która ma wejść (`h2`, akapit, karta, formularz). Wrapper sekcji tylko trzyma układ. Istniejący `Reveal` użyj do tego wejścia, jeśli już przyjmuje opacity i przesunięcie Y oraz tryb jednorazowy. Gdy `Reveal` umie tylko jeden wariant, rozszerz go propsem (`y`, `delay`, `once`) zamiast pisać drugi system animacji.

### Dostępność

- treść jest w normalnym HTML od pierwszego renderu; opacity chowa ją wizualnie, a nie przez `display: none` w momencie, gdy użytkownik już na niej stoi
- przy `prefers-reduced-motion` opacity 1 i brak przesunięcia od razu
- formularz domeny ma etykietę (placeholder sam jej nie zastępuje) i przycisk z nazwą

### Wklej do promptu

```text
Dodaj pojawianie się tekstu przy scrollu na wzór nagłówków ze strony głównej squarespace.com (sekcje one-platform, get-started i your-domain).

Zachowanie:
- animuj h2, lead i ewentualnie karty albo formularz, każdy osobno; kontener sekcji zostaje na miejscu, żeby layout nie skakał
- stan przed kadrem: opacity 0 i przesunięcie ok. 25px w dół
- po wejściu w viewport: opacity 1 i pozycja docelowa, krótkie ease-out
- tytuł, potem lead, potem karty lub formularz, z krótkim opóźnieniem między nimi
- pokaż raz i zostaw (whileInView once albo istniejący Reveal w trybie jednorazowym)
- animuj tylko opacity i translateY; nie ustawiaj transition: all

Przy prefers-reduced-motion tekst jest od razu czytelny, bez przesunięcia.
Treść nagłówków weź z Programu KLUB. Haseł Squarespace („Everything you need on one platform”, „Getting started”, „Find the perfect domain”) nie kopiuj.
Wideo z section#conversion pomiń.
Sprawdź w przeglądarce: sekcja pod foldem startuje niewidoczna, po dojechaniu wchodzi raz, scroll w górę jej nie chowa, reduced motion pokazuje tekst od razu.
```

---

## 3. Side-by-side scroll (tekst kroków + lepki obraz)

### Gdzie to widać

[squarespace.com/solutions/events/camps](https://www.squarespace.com/solutions/events/camps), sekcja `side-by-side`. To jest strona zapisana wyżej jako ciekawa do sprawdzenia.

Cztery kroki, jeden pod drugim:

1. Simple camp management — listingi sesji, formularze zapisów, dane uczestników.
2. Grow your community — mailing, automatyczne wiadomości, widoczność w wyszukiwarce.
3. A base for your brand — układ strony, strony harmonogramu i zasad, wygląd marki.
4. Flexible attendee payments — zaliczki, płatności, podgląd finansów.

Każdy krok ma nagłówek, lead i trzy punkty listy. Obok jest obraz tego kroku.

### Co robi użytkownik i co się zmienia

Sekcja jest wysoka (w obserwacji kontener `.side-by-side-scroll` miał ok. 2760 px). Użytkownik scrolluje ją jak zwykłą stronę, a nie jak wewnętrzny suwak.

- Aktywny krok ma tekst w pełnej czytelności (opacity 1).
- Pozostałe kroki mają klasę w rodzaju `side-by-side-scroll__copy--dimmed` i opacity ok. 0.3. Nadal da się je przeczytać, są tylko przygaszone.
- Obraz aktywnego kroku jest przyklejony (`position: sticky`, `top` ok. 80 px, czyli tuż pod nagłówkiem). Przy scrollu zostaje w kadrze, a gdy krok się kończy, ustępuje obrazowi następnego.
- Na starcie sekcji aktywny był krok 1, a kroki 2–4 były przygaszone.

Na stronie klubu cztery kroki mogą opowiadać ścieżkę: kto może złożyć wniosek, jakie są zasady, co przygotować, gdzie czytać regulamin. Tekst z camps zostaje w tym pliku jako mapa slotów.

### Stany

- **Aktywny.** Opacity tekstu 1, obraz tego kroku przyklejony w kolumnie wizualnej.
- **Przygaszony.** Opacity ok. 0.3. Obraz tego kroku czeka w swoim odcinku scrolla.
- **Wąski ekran.** Dwie kolumny składają się w jeden ciąg: tekst kroku, pod nim jego obraz, bez sticky, które zasłaniałoby treść. Przygaszenie może zostać, jeśli obraz i tekst i tak wchodzą razem w kadr; sticky na telefonie pomijasz, gdy header i obraz zjadają ekran.

### Trigger

Postęp scrolla względem odcinków sekcji. Każdy krok zajmuje podobną część wysokości. Aktywny jest ten, którego środek jest najbliżej środka kadru (albo którego odcinek zawiera linię tuż pod headerem). Zmiana kroku wynika ze scrolla, nie z kliknięcia w kropki.

### Model ruchu

Tekst nie wlatuje z boku. Zmienia się jego czytelność: z ok. 0.3 na 1, gdy krok staje się aktywny, i z powrotem na 0.3, gdy aktywny staje się inny. To jest ten efekt „tekst pojawia się w sekcjach podczas scrollowania”.

Obraz nie jedzie razem ze scrollem w swoim odcinku: zostaje przyklejony ok. 80 px od góry okna. Przejście między obrazami może być krótkim przenikaniem. Wysokość sekcji bierze się z czterech pełnych kroków, a nie ze sztucznego `100vh` na sztywno, jeśli treść kroku jest wyższa.

### Struktura

- sekcja z listą kroków `{ id, title, lead, bullets[], image }`
- na szerokim ekranie dwie kolumny: tekst (wszystkie kroki pod sobą) i kolumna obrazów
- obraz w wrapperze `sticky` z `top` równym wysokości nagłówka strony
- aktywny indeks liczony ze scrolla (Intersection Observer na każdym kroku albo postęp względem kontenera)

Indeks aktywny ustawia opacity tekstu i to, który obraz jest przyklejony na wierzchu. Jeden stan, dwa efekty.

### Dostępność

- treść kroków jest w dokumencie po kolei; przygaszenie jest wizualne (opacity), tekst zostaje w DOM i da się go zaznaczyć
- brak obowiązku „trafić” scrollem, żeby przeczytać: przygaszony tekst nadal ma sensowny kontrast albo, przy `prefers-reduced-motion`, wszystkie kroki mają opacity 1, a obrazy stoją przy swoich tekstach bez sticky
- obrazy mają `alt` opisujący krok

### Wklej do promptu

```text
Zrób sekcję side-by-side scroll na wzór https://www.squarespace.com/solutions/events/camps (blok side-by-side-scroll).

Zachowanie na szerokim ekranie:
- kilka kroków jeden pod drugim w lewej kolumnie; każdy ma nagłówek, lead i krótką listę
- sekcja jest wysoka, scrolluje się cała strona
- aktywny krok ma opacity tekstu 1; pozostałe ok. 0.3 (przygaszone, nadal w DOM)
- obraz aktywnego kroku jest sticky tuż pod nagłówkiem (top = wysokość headera, punkt odniesienia ze Squarespace to ok. 80px)
- aktywny krok wynika ze scrolla: ten, którego odcinek jest przy linii pod headerem
- zmiana obrazu to krótkie przenikanie, tekst tylko zmienia opacity

Na wąskim ekranie: tekst kroku i jego obraz jeden pod drugim, bez sticky.
Przy prefers-reduced-motion: wszystkie kroki czytelne od razu, obrazy przy swoich tekstach, bez przyklejania.
Dane kroków w jednej tablicy { title, lead, bullets, image }. Treść o Programie KLUB (kto składa wniosek, zasady, co przygotować, gdzie jest regulamin). Tekstów o camp management nie kopiuj.
Sprawdź w przeglądarce: przy scrollu rozjaśnia się kolejny krok i zostaje jego obraz, poprzedni przygasa; na telefonie nie ma nakładki sticky na treść.
```

---

## 4. Karuzela kart

### Gdzie to widać

Ten sam wzorzec w dwóch miejscach:

- camps, sekcja `card-carousel`, nagłówek „One platform to streamline your camps”
- strona główna, sekcja `one-platform`, pod nagłówkiem „Everything you need on one platform” (Extensions, Squarespace Payments, Analytics, Domains i kolejne)

Na camps widać rząd kart przesuwany strzałkami. W obserwacji karty miały pozycję `left` w procentach (`-400%`, `-300%`, … `0%`, `100%`, …). W kadrze jest kilka kart naraz, reszta czeka poza krawędzią. Skrajne karty są **zdublowane** (Email Campaigns i Search & AI Optimization występowały drugi raz), żeby pętla nie kończyła się pustką.

Przykładowe sloty kart z camps: Email Campaigns, Search & AI Optimization, Extensions, Analytics, Domains, Online Store. Każda karta to tytuł i jedno zdanie.

Na stronie głównej ta sama rodzina kart stoi pod dużym nagłówkiem i też jest karuzelą (`card-carousel--is-carousel`).

### Co robi użytkownik i co się zmienia

Użytkownik klika „następna” albo „poprzednia”. Rząd kart przesuwa się o jedną kartę. Karta, która wypada z jednej strony, wraca z drugiej dzięki kopiom na końcach. Po animacji indeks jest cicho poprawiany, żeby pętla była nieskończona i żeby skok korekty nie był widoczny.

Na stronie klubu karty mogą być skrótami: regulamin, FAQ, aktualności, kto może wnioskować. Jedna karuzela, treść z projektu.

### Stany

- **Spoczynek.** Widać kilka kart (na szerokim ekranie rząd wielkości trzech–czterech). Reszta jest poza `overflow`.
- **W ruchu.** Rząd jedzie o szerokość jednej karty plus odstęp. W Squarespace karty miały `transform: none`, a przesunięcie szło po `left` w procentach. W implementacji czytelniejszy jest `transform: translateX` na całym rzędzie. Efekt dla użytkownika jest ten sam: rząd sunie, karty nie skalują się i nie obracają.
- **Pętla.** Po dojściu do kopii skrajnej indeks wraca na prawdziwą kartę bez drugiej animacji.
- **Wąski ekran.** W kadrze zostaje jedna karta albo półtorej, strzałki zostają, przeciągnięcie palcem robi to samo, co strzałka.

### Trigger

- przycisk następna / poprzednia
- na dotyku: przeciągnięcie w osi X o wyraźny próg, inaczej rząd wraca na miejsce
- brak autoplay w tym wzorze; użytkownik sam przesuwa

### Model ruchu

Jedno przesunięcie rzędu, krótkie, ease-out. Karty mają stałą szerokość i odstęp. Nagłówek nad karuzelą może użyć wzorca z sekcji 2 (wejście przy scrollu). Same karty przy pierwszym wejściu sekcji mogą być od razu widoczne; ich ruch to przesuwanie rzędu, a nie reveal każdej karty osobno.

### Struktura

- nagłówek sekcji
- rząd w kontenerze z `overflow: hidden`
- przyciski poprzednia i następna, poza przewijanym rzędem
- dane `{ title, body, href }[]`
- do pętli dorysuj na końcach kopie skrajnych kart albo licz indeks modulo; po animacji ustaw indeks tak, żeby użytkownik nie widział skoku

Przyciski są poza linkiem karty. Karta, która ma cel, jest linkiem do hasha.

### Dostępność

- przyciski mają nazwy „Poprzednie” i „Następne”
- w danej chwili fokus da się postawić na kartach, które są w kadrze
- przy `prefers-reduced-motion` rząd przeskakuje od razu na następną kartę, bez sunięcia
- jeśli kart jest mniej niż mieści się w kadrze, strzałki są nieaktywne

### Wklej do promptu

```text
Zrób karuzelę kart na wzór card-carousel ze https://www.squarespace.com/solutions/events/camps (nagłówek nad rzędem, karty z tytułem i jednym zdaniem) oraz tej samej rodziny kart w sekcji one-platform na squarespace.com.

Zachowanie:
- na szerokim ekranie widać kilka kart naraz, reszta jest poza overflow
- strzałki przesuwają rząd o jedną kartę; na dotyku to samo robi przeciągnięcie
- pętla: skrajne karty są dublowane albo indeks idzie modulo, a korekta indeksu po animacji jest niewidoczna
- przesuwaj rząd przez transform translateX, stała szerokość karty i odstęp; bez skali i obrotu kart
- bez autoplay
- nagłówek sekcji może wejść przy scrollu tak, jak w osobnym wzorcu reveal (raz, opacity i ok. 25px)

Na wąskim ekranie w kadrze jest jedna karta. Przy prefers-reduced-motion zmiana karty jest natychmiastowa.
Przyciski mają nazwy „Poprzednie” i „Następne”. Karta z celem jest linkiem hash.
Treść kart weź z Programu KLUB (regulamin, FAQ, aktualności, kto może wnioskować). Nazw narzędzi Squarespace nie kopiuj.
Sprawdź w przeglądarce: następna, poprzednia, dojście do końca pętli bez pustego kadru, przeciągnięcie, wąski ekran, reduced motion.
```

---

## Mapa reszty strony głównej

Poniżej same sekcje, bez osobnego wzorca ruchu. Służą temu, żeby prompt wiedział, co na stronie jest, i nie mieszał tego z czterema komponentami powyżej.

| Sekcja | Rola | Co z tym zrobić w prompcie |
| --- | --- | --- |
| `homepage-hero` | Hasło „A website makes it real”, przycisk Get Started, wideo w tle | Osobny temat. To nie jest wideo z `conversion`. |
| `grow-your-business` | „Grow your business” i przełączane karty: Services, Online Store, Invoicing, Scheduling, Donations, Memberships, Blog, Portfolio | Przełącznik treści, nie karuzela z sekcji 4. Aktywna karta pokazuje nagłówek, lead i linię „Great for”. |
| `one-platform` | Nagłówek + karuzela kart narzędzi | Nagłówek: sekcja 2. Karty: sekcja 4. |
| `get-started` | Nagłówek AI i dwie karty wejścia | Sekcja 2. |
| szablony | „Start with a website template designed for your business”, strzałki previous/next | Karuzela wizualna szablonów. Osobny temat, jeśli nie budujesz szablonów. |
| `your-domain` | Tytuł, pole „Start your search here”, link transferu | Wejście tekstu: sekcja 2. Samej wyszukiwarki domen na stronie KLUB nie projektuj, chyba że zadanie o to prosi. |
| `customers-served` | „Trusted by 14 million entrepreneurs worldwide” | Liczby i logotypy. Poza tym wzorem. |
| `made-with-sqsp` | „Websites made with Squarespace”, lista przykładowych witryn | Poza tym wzorem. |
| `homepage-how-to` | Accordion „How to build a website” | Zwykły accordion. Poza tym wzorem. |
| `homepage-faq` | Accordion pytań | Na KLUB jest własne FAQ. Tego accordion nie opisujemy jako wzorca animacji. |
| `homepage-support` | „24/7 Support” | Poza tym wzorem. |
| `conversion` | Pełnoekranowe wideo `video-base__video` | Pominięte świadomie. Do promptów tego komponentu nie wklejaj. |
| stopka | Kolumny linków, język, waluta, dokumenty | Poza tym wzorem. |

## Czego ten wzór nie przenosi

- haseł, nazw branż i zrzutów ekranu Squarespace jako treści KLUB
- wideo z `section#conversion`
- piksela w piksel: szerokości panelu, czasu trwania i krzywej easingu
- nowego routera, nowej biblioteki animacji i języka innego niż polski
