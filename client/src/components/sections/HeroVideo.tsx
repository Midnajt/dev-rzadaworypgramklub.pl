import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { assets } from "@/config/assets";

export function HeroVideo() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (query.matches) {
        video.pause();
      } else {
        video.muted = true;
        void video.play().catch(() => {});
      }
    };
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        ref={videoRef}
        className="hero__video"
        src={assets.heroVideo}
        poster={assets.heroPoster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero__shade" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__eyebrow">{t("hero.eyebrow")}</p>
        <h1 id="hero-title" className="hero__title">
          {t("hero.title")}
        </h1>
        <p className="hero__lead">{t("hero.lead")}</p>
      </div>
    </section>
  );
}
