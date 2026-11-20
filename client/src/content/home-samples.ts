import { assets } from "@/config/assets";

/** Copy lives in pl.json under home.samples. These records only point at pictures and routes. */
export const sampleSteps = [
  { id: "one", image: assets.gallery.football, position: "center 28%" },
  { id: "two", image: assets.gallery.basketball, position: "center 32%" },
  { id: "three", image: assets.gallery.boxing, position: "center 22%" },
  { id: "four", image: assets.gallery.sailing, position: "center 42%" },
] as const;

export const sampleCards = [
  { id: "regulations", href: "#/regulamin" },
  { id: "faq", href: "#/faq" },
  { id: "news", href: "#/aktualnosci" },
  { id: "basics", href: "#/podstawowe-informacje" },
  { id: "contact", href: "#/kontakt" },
  { id: "downloads", href: "#/do-pobrania" },
] as const;

export type SampleStepId = (typeof sampleSteps)[number]["id"];
export type SampleCardId = (typeof sampleCards)[number]["id"];
