import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { HeroVideo } from "@/components/sections/HeroVideo";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <main id="main" tabIndex={-1}>
      <HeroVideo />
      <section className="section section--surface">
        <Reveal className="container prose">
          <h2>{t("home.sectionTitle")}</h2>
          <p>{t("home.sectionBody")}</p>
        </Reveal>
      </section>
    </main>
  );
}
