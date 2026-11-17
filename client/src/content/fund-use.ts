import { assets } from "@/config/assets";

export type FundUseCard = {
  id: string;
  image: string;
};

export const fundUseCards: FundUseCard[] = [
  { id: "football", image: assets.gallery.football },
  { id: "basketball", image: assets.gallery.basketball },
  { id: "tennis", image: assets.gallery.tennis },
  { id: "acrobatics", image: assets.gallery.acrobatics },
  { id: "boxing", image: assets.gallery.boxing },
  { id: "taekwondo", image: assets.gallery.taekwondo },
  { id: "sailing", image: assets.gallery.sailing },
  { id: "skiing", image: assets.gallery.skiing },
  { id: "bmx", image: assets.gallery.bmx },
  { id: "futsal", image: assets.gallery.futsal },
];
