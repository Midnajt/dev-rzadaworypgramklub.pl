import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RowsPhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import { Reveal } from "@/components/motion/Reveal";
import { PageFrame } from "@/components/layout/PageBanner";
import { galleryPhotos } from "@/content/gallery";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";

export function GalleryPage() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <PageFrame>
      <section className="page-hero">
        <Reveal className="container">
          <p className="section__eyebrow">{t("gallery.eyebrow")}</p>
          <h1 id="naglowek">{t("gallery.title")}</h1>
          <p>{t("gallery.lead")}</p>
        </Reveal>
      </section>
      <section className="section">
        <div className="container gallery-album">
          <RowsPhotoAlbum
            photos={galleryPhotos}
            targetRowHeight={240}
            spacing={(width) => (width < 600 ? 8 : 12)}
            componentsProps={{ container: { "aria-label": t("gallery.lightbox") } }}
            onClick={({ index: photoIndex }) => {
              setIndex(photoIndex);
              setOpen(true);
            }}
          />
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={galleryPhotos}
        className="gallery-lightbox"
        controller={{ closeOnBackdropClick: true }}
        carousel={{ imageFit: "contain" }}
        animation={reduce ? { fade: 0, swipe: 0 } : { easing: { fade: "var(--ease)", swipe: "var(--ease)" } }}
        labels={{
          Close: t("gallery.close"),
          Previous: t("gallery.previous"),
          Next: t("gallery.next"),
          Slide: t("gallery.slide"),
          Lightbox: t("gallery.title"),
          "Photo gallery": t("gallery.lightbox"),
          "{index} of {total}": t("gallery.counter"),
        }}
        on={{ view: ({ index: current }) => setIndex(current) }}
      />
    </PageFrame>
  );
}
