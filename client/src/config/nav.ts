import { newsPosts } from "@/content/news";
import { faqCategories } from "@/content/faq";
import type { ViewName } from "@/lib/hash-view";

export type MegaLink = {
  id: string;
  label: string;
  href: string;
  note?: string;
};

export type MegaTopic = {
  id: string;
  label: string;
  lead: string;
  links: MegaLink[];
};

export type NavItem = {
  id: "home" | "news" | "faq";
  labelKey: string;
  views: ViewName[];
  panelId: string;
  topics: MegaTopic[];
};

const latestNews = newsPosts.slice(0, 4);

export const NAV_ITEMS: NavItem[] = [
  {
    id: "home",
    labelKey: "nav.home",
    views: ["home", "basics", "regulations", "downloads"],
    panelId: "mega-home",
    topics: [
      {
        id: "basics",
        label: "Podstawowe informacje",
        lead: "Cele, kwoty 12 i 17 tys. zł, wymogi dla klubów i wkład własny 5%. Skrót Regulaminu edycji 2026 plus krok po kroku.",
        links: [
          { id: "basics-page", label: "Czytaj podstawowe informacje", href: "#/podstawowe-informacje" },
          { id: "basics-steps", label: "Krok po kroku", href: "#/podstawowe-informacje" },
          { id: "basics-kwoty", label: "Kwoty dofinansowania", href: "#/podstawowe-informacje" },
        ],
      },
      {
        id: "regulations",
        label: "Regulamin",
        lead: "Pełny Regulamin zadania Rządowy Program „KLUB” — edycja 2026. Nabór, załączniki, ocena wniosków i obowiązki beneficjenta.",
        links: [
          { id: "reg-page", label: "Czytaj regulamin", href: "#/regulamin" },
          { id: "reg-nabor", label: "Terminy naboru", href: "#/regulamin" },
        ],
      },
      {
        id: "downloads",
        label: "Do pobrania",
        lead: "Logotypy MSiT, LZS Operator KLUB i „Witaj w Klubie” — wyłącznie dla beneficjentów, do celów promocji i informacji.",
        links: [{ id: "dl-page", label: "Logotypy do pobrania", href: "#/do-pobrania" }],
      },
    ],
  },
  {
    id: "news",
    labelKey: "nav.news",
    views: ["news"],
    panelId: "mega-news",
    topics: latestNews.map((post) => ({
      id: post.slug,
      label: post.title.length > 52 ? `${post.title.slice(0, 49)}…` : post.title,
      lead: post.excerpt,
      links: [
        { id: `${post.slug}-read`, label: "Czytaj wpis", href: `#/aktualnosci/${post.slug}` },
        { id: "all-news", label: "Wszystkie aktualności", href: "#/aktualnosci" },
      ],
    })),
  },
  {
    id: "faq",
    labelKey: "nav.faq",
    views: ["faq", "contact"],
    panelId: "mega-faq",
    topics: [
      ...faqCategories.slice(0, 4).map((category) => ({
        id: category.id,
        label: category.title,
        lead: category.items[0]?.question ?? "",
        links: [
          { id: `${category.id}-faq`, label: "Przejdź do FAQ", href: "#/faq" },
          ...category.items.slice(0, 2).map((item) => ({
            id: item.id,
            label: item.question,
            href: "#/faq",
          })),
        ],
      })),
      {
        id: "contact",
        label: "Kontakt",
        lead: "Infolinia krajowa 667 099 565 oraz 16 infolinii wojewódzkich. Pomoc merytoryczna i techniczna AMODIT.",
        links: [
          { id: "contact-page", label: "Infolinie i adres", href: "#/kontakt" },
          { id: "contact-hours", label: "Godziny: pon.–pt. 10:00–15:00", href: "#/kontakt" },
        ],
      },
    ],
  },
];
