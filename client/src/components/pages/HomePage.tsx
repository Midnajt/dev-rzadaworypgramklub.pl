import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { FundUseCarousel } from "@/components/sections/FundUseCarousel";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { HomeSamples } from "@/components/sections/HomeSamples";
import { site } from "@/config/site";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <main id="main" tabIndex={-1}>
      <HeroVideo />
      <section className="section section--surface">
        <Reveal className="container program-intro">
          <div className="prose">
            <h2>{t("home.sectionTitle")}</h2>
            <p>{t("home.sectionBody", { org: site.address.org })}</p>
          </div>
        </Reveal>
      </section>
      <FundUseCarousel />
      <HomeSamples />
    </main>
  );
}
