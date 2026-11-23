import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "@/components/motion/Reveal";
import { sampleSteps } from "@/content/home-samples";
import { cn } from "@/lib/utils";

const BULLETS = ["a", "b", "c"] as const;

/** The step whose middle sits nearest the reading line stays bright. */
function activeIndex(steps: Array<HTMLLIElement | null>) {
  const target = window.innerHeight * 0.46;
  let best = 0;
  let bestDistance = Number.POSITIVE_INFINITY;
  steps.forEach((step, index) => {
    if (!step) return;
    const rect = step.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - target);
    if (distance < bestDistance) {
      bestDistance = distance;
      best = index;
    }
  });
  return best;
}

export function StepScroll() {
  const { t } = useTranslation();
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const next = activeIndex(itemRefs.current);
      setActive((current) => (current === next ? current : next));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="section step-scroll" aria-labelledby="sample-steps-title">
      <div className="container">
        <Reveal as="h2" id="sample-steps-title" rootMargin="0px 0px -18% 0px" threshold={0.2}>
          {t("home.samples.steps.title")}
        </Reveal>
        <div className="step-scroll__grid">
          <ol className="step-scroll__steps">
            {sampleSteps.map((step, index) => (
              <li
                key={step.id}
                ref={(node) => {
                  itemRefs.current[index] = node;
                }}
                className={cn("step-scroll__step", index === active && "is-active")}
                aria-current={index === active ? "step" : undefined}
              >
                <p className="step-scroll__index" aria-hidden="true" />
                <h3>{t(`home.samples.steps.items.${step.id}.title`)}</h3>
                <p>{t(`home.samples.steps.items.${step.id}.lead`)}</p>
                <ul>
                  {BULLETS.map((key) => (
                    <li key={key}>{t(`home.samples.steps.items.${step.id}.bullets.${key}`)}</li>
                  ))}
                </ul>
                <img
                  className="step-scroll__photo"
                  src={step.image}
                  alt={t(`home.samples.steps.items.${step.id}.alt`)}
                  style={{ objectPosition: step.position }}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              </li>
            ))}
          </ol>
          <div className="step-scroll__stage">
            <div className="step-scroll__sticky">
              {sampleSteps.map((step, index) => (
                <img
                  key={step.id}
                  src={step.image}
                  alt=""
                  aria-hidden="true"
                  className={cn(index === active && "is-active")}
                  style={{ objectPosition: step.position }}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
