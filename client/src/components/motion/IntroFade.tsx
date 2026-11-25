import { useState } from "react";

function shouldShowIntro() {
  if (typeof window === "undefined") return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  return true;
}

export function IntroFade() {
  const [visible, setVisible] = useState(shouldShowIntro);

  if (!visible) return null;

  return <div className="intro-fade" aria-hidden="true" onAnimationEnd={() => setVisible(false)} />;
}
