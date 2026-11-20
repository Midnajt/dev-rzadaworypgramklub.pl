import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Wait before the fade, so a title can lead the line under it. */
  delay?: number;
  /** How much of the node must be in view. Defaults keep the intro unchanged. */
  threshold?: number;
  rootMargin?: string;
} & Record<string, unknown>;

export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  threshold = 0,
  rootMargin = "0px 0px -5% 0px",
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    );
  });

  useEffect(() => {
    if (visible) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, threshold, rootMargin]);

  const style = {
    ...(delay > 0 ? { "--reveal-delay": `${delay}ms` } : null),
  } as CSSProperties;

  return (
    <Tag ref={ref} className={cn("reveal", visible && "is-visible", className)} style={style} {...rest}>
      {children}
    </Tag>
  );
}
