import { useState } from "react";
import { parseHash } from "@/lib/hash-view";

function shouldShowIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return parseHash(window.location.hash).name === "home";
}

export function IntroFade() {
  const [visible, setVisible] = useState(shouldShowIntro);

  if (!visible) return null;

  return <div className="intro-fade" aria-hidden="true" onAnimationEnd={() => setVisible(false)} />;
}
