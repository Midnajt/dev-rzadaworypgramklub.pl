import { FundUseCarousel } from "@/components/sections/FundUseCarousel";
import { HeroVideo } from "@/components/sections/HeroVideo";
import { HomeContact } from "@/components/sections/HomeSamples";
import { StepScroll } from "@/components/sections/StepScroll";

export function HomePage() {
  return (
    <main id="main" tabIndex={-1}>
      <HeroVideo />
      <StepScroll />
      <FundUseCarousel />
      <HomeContact />
    </main>
  );
}
