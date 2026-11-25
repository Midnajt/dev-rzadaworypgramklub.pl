import { newsArchiveAnchor, newsPostAnchor, newsPosts } from "@/content/news";
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
  /** Visible text. Omit when `labelKey` is set. */
  label?: string;
  labelKey?: string;
  lead: string;
  links: MegaLink[];
};

export type NavItem = {
  id: "home" | "news" | "faq";
  labelKey: string;
  views: ViewName[];
  panelId: string;
  topics: MegaTopic[];
  /** Right column that stays put while the left topic only highlights. */
  detailLinks?: MegaLink[];
};

export type MobileEntry = {
  id: string;
  label: string;
  href: string;
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
          { id: "basics-steps", label: "Krok po kroku", href: "#/podstawowe-informacje/kroki" },
          { id: "basics-kwoty", label: "Kwoty dofinansowania", href: "#/podstawowe-informacje/kwoty" },
        ],
      },
      {
        id: "regulations",
        label: "Regulamin",
        lead: "Pełny Regulamin zadania Rządowy Program „KLUB” — edycja 2026. Nabór, załączniki, ocena wniosków i obowiązki beneficjenta.",
        links: [
          { id: "reg-page", label: "Czytaj regulamin", href: "#/regulamin/naglowek" },
          { id: "reg-nabor", label: "Terminy naboru", href: "#/regulamin/nabor" },
        ],
      },
      {
        id: "downloads",
        label: "Do pobrania",
        lead: "Logotypy MSiT, LZS Operator KLUB i „Witaj w Klubie” — wyłącznie dla beneficjentów, do celów promocji i informacji.",
        links: [{ id: "dl-page", label: "Logotypy do pobrania", href: "#/do-pobrania/naglowek" }],
      },
    ],
  },
  {
    id: "news",
    labelKey: "nav.news",
    views: ["news"],
    panelId: "mega-news",
    topics: [
      {
        id: "all-posts",
        labelKey: "nav.allPosts",
        lead: "",
        links: [{ id: "all-posts", label: "", href: "#/aktualnosci" }],
      },
      {
        id: "archive",
        labelKey: "news.archiveTitle",
        lead: "",
        links: [{ id: "archive", label: "", href: `#/aktualnosci/${newsArchiveAnchor}` }],
      },
    ],
    detailLinks: latestNews.map((post) => ({
      id: post.slug,
      label: post.title,
      href: `#/aktualnosci/${post.slug}/${newsPostAnchor}`,
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
          { id: `${category.id}-faq`, label: "Przejdź do FAQ", href: `#/faq/${category.id}` },
          ...category.items.slice(0, 2).map((item) => ({
            id: item.id,
            label: item.question,
            href: `#/faq/${item.id}`,
          })),
        ],
      })),
      {
        id: "contact",
        label: "Kontakt",
        lead: "Infolinia krajowa 667 099 565 oraz 16 infolinii wojewódzkich. Pomoc merytoryczna i techniczna AMODIT.",
        links: [
          { id: "contact-page", label: "Infolinie i adres", href: "#/kontakt" },
          { id: "contact-hours", label: "Godziny: pon.–pt. 10:00–15:00", href: "#/kontakt/godziny" },
        ],
      },
    ],
  },
];

/** Phone drawer: each row opens a page. Desktop still uses the two-column topics above. */
export function mobileDestinations(item: NavItem): MobileEntry[] {
  if (item.id === "news") {
    return latestNews.map((post) => ({
      id: post.slug,
      label: post.title,
      href: `#/aktualnosci/${post.slug}/${newsPostAnchor}`,
    }));
  }

  if (item.id === "faq") {
    const contact = item.topics.find((topic) => topic.id === "contact");
    const link = contact?.links[0];
    if (!contact || !link) return [];
    return [{ id: contact.id, label: contact.label, href: link.href }];
  }

  const seen = new Set<string>();
  const entries: MobileEntry[] = [];
  for (const topic of item.topics) {
    const href = topic.links[0]?.href;
    if (!href || seen.has(href)) continue;
    seen.add(href);
    entries.push({ id: topic.id, label: topic.label, href });
  }
  return entries;
}
