import type { Photo } from "react-photo-album";

type Picture = {
  img: { src: string; w: number; h: number };
};

const pictures = import.meta.glob<Picture>("../../../custom-assets/galeria/*.{jpg,jpeg,png}", {
  query: { w: "1600", withoutEnlargement: "true", format: "webp", as: "picture" },
  import: "default",
  eager: true,
});

const sports: Record<string, string> = {
  "pilka-nozna": "Piłka nożna",
  zeglarstwo: "Żeglarstwo",
  taekwondo: "Taekwondo",
  tenis: "Tenis ziemny",
  koszykowka: "Koszykówka",
  boks: "Boks",
  gokart: "Gokart",
  futsal: "Futsal",
  gimnastyka: "Gimnastyka",
  "narty-wodne": "Narty wodne",
  narty: "Narciarstwo",
  bmx: "BMX",
  deskorolka: "Deskorolka",
};

function sportName(file: string): string {
  const stem = file.replace(/\.[^.]+$/, "").replace(/-\d+$/, "");
  return sports[stem] ?? stem;
}

/** Photos from custom-assets/galeria, resized by vite-imagetools. The program logo is not a photo. */
export const galleryPhotos: Photo[] = Object.entries(pictures)
  .filter(([path]) => !path.endsWith("rzadowy-program-klub-logo.png"))
  .sort(([a], [b]) => a.localeCompare(b, "pl"))
  .map(([path, picture]) => {
    const file = path.split("/").pop() ?? path;
    const alt = sportName(file);
    return {
      key: file,
      src: picture.img.src,
      width: picture.img.w,
      height: picture.img.h,
      alt,
      label: alt,
    };
  });
