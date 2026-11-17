// Source images live in client/assets/ and are imported with ?url, e.g.:
// import logoUrl from "../../assets/logo.png?url";
// Register every file in client/assets/ASSETS.md.
import addPatternLogoUrl from "../../assets/addpattern-logo.png?url";
import bannerBasicsUrl from "../../assets/banners/basics.jpg?url";
import bannerDownloadsUrl from "../../assets/banners/do-pobrania.jpg?url";
import bannerFaqUrl from "../../assets/banners/faq.jpg?url";
import bannerNewsNoticeUrl from "../../assets/banners/informacja-operatora.jpg?url";
import bannerNewsStatementUrl from "../../assets/banners/komunikat-lzs.jpg?url";
import bannerContactUrl from "../../assets/banners/kontakt.jpg?url";
import bannerNewsCallUrl from "../../assets/banners/nabor-2026.jpg?url";
import bannerNotFoundUrl from "../../assets/banners/nie-znaleziono.jpg?url";
import bannerNewsUrl from "../../assets/banners/aktualnosci.jpg?url";
import bannerRegulationsUrl from "../../assets/banners/regulamin.jpg?url";
import bannerNewsRecordUrl from "../../assets/banners/rekord-wnioskow.jpg?url";
import bannerNewsOpeningUrl from "../../assets/banners/start-naboru.jpg?url";
import bannerNewsResultsUrl from "../../assets/banners/wyniki-naboru.jpg?url";
import logoUrl from "../../assets/logo-min.png?url";

const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const assets = {
  logo: logoUrl,
  addPatternLogo: addPatternLogoUrl,
  heroVideo: publicUrl("assets/video/hero.mp4"),
  heroPoster: publicUrl("assets/images/hero-poster.jpg"),
  banners: {
    basics: bannerBasicsUrl,
    regulations: bannerRegulationsUrl,
    downloads: bannerDownloadsUrl,
    contact: bannerContactUrl,
    faq: bannerFaqUrl,
    news: bannerNewsUrl,
    newsResults: bannerNewsResultsUrl,
    newsRecord: bannerNewsRecordUrl,
    newsNotice: bannerNewsNoticeUrl,
    newsStatement: bannerNewsStatementUrl,
    newsOpening: bannerNewsOpeningUrl,
    newsCall: bannerNewsCallUrl,
    notFound: bannerNotFoundUrl,
  },
} as const;

export type BannerId = keyof typeof assets.banners;
