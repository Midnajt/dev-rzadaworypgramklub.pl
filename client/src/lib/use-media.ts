import { useEffect, useState } from "react";

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
