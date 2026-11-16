// Source images live in client/assets/ and are imported with ?url, e.g.:
// import logoUrl from "../../assets/logo.png?url";
// Register every file in client/assets/ASSETS.md.
import addPatternLogoUrl from "../../assets/addpattern-logo.png?url";
import logoUrl from "../../assets/logo-min.png?url";

const publicUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const assets = {
  logo: logoUrl,
  addPatternLogo: addPatternLogoUrl,
  heroVideo: publicUrl("assets/video/hero.mp4"),
  heroPoster: publicUrl("assets/images/hero-poster.jpg"),
} as const;
