import { useEffect, useState } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

export function useReducedMotion() {
  const [matches, setMatches] = useState(() => window.matchMedia(REDUCED_MOTION).matches);

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return matches;
}

/** Same cutoff as the header rules in components.css. */
const NARROW_HEADER = "(max-width: 760px)";

export function useNarrowHeader() {
  const [matches, setMatches] = useState(() => window.matchMedia(NARROW_HEADER).matches);

  useEffect(() => {
    const media = window.matchMedia(NARROW_HEADER);
    const onChange = () => setMatches(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return matches;
}
