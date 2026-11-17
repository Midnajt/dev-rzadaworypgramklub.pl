import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { FundUseCarousel } from "@/components/sections/FundUseCarousel";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { assets } from "@/config/assets";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <main id="main" tabIndex={-1}>
      <HeroVideo />
      <section className="section section--surface">
        <Reveal className="container program-intro">
          <img
            className="program-intro__logo"
            src={assets.programLogo}
            alt={t("home.programLogoAlt")}
            width={490}
            height={433}
          />
          <div className="prose">
            <h2>{t("home.sectionTitle")}</h2>
            <p>{t("home.sectionBody")}</p>
          </div>
        </Reveal>
      </section>
      <FundUseCarousel />
    </main>
  );
}
