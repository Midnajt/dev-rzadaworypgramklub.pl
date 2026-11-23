import { assets } from "@/config/assets";

/** Copy lives in pl.json under home.samples. These records only point at pictures. */
export const sampleSteps = [
  { id: "one", image: assets.gallery.football, position: "center 28%" },
  { id: "two", image: assets.gallery.basketball, position: "center 32%" },
  { id: "three", image: assets.gallery.boxing, position: "center 22%" },
  { id: "four", image: assets.gallery.sailing, position: "center 42%" },
] as const;
