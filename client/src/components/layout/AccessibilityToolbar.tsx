import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/** Same key and shape as the boot script in `client/index.html`. */
export const A11Y_STORAGE_KEY = "a11y-tools";

const FONT_MIN = 100;
const FONT_MAX = 200;
const FONT_STEP = 10;

type Schema = "grayscale" | "contrast" | "light";

type A11yState = {
  font: number;
  schema: Schema | null;
  underline: boolean;
  readable: boolean;
};

const INITIAL: A11yState = { font: FONT_MIN, schema: null, underline: false, readable: false };

const SCHEMAS: Schema[] = ["grayscale", "contrast", "light"];

function snapFont(value: unknown): number {
  if (typeof value !== "number" || !Number.isFinite(value)) return FONT_MIN;
  const snapped = Math.round(value / FONT_STEP) * FONT_STEP;
  return Math.min(FONT_MAX, Math.max(FONT_MIN, snapped));
}

export function readA11yState(): A11yState {
  try {
    const raw = localStorage.getItem(A11Y_STORAGE_KEY);
    if (!raw) return INITIAL;
    const parsed = JSON.parse(raw) as Partial<A11yState>;
    const schema = SCHEMAS.find((item) => item === parsed.schema) ?? null;
    return {
      font: snapFont(parsed.font),
      schema,
      underline: parsed.underline === true,
      readable: parsed.readable === true,
    };
  } catch {
    return INITIAL;
  }
}

function applyA11yState(state: A11yState) {
  const root = document.documentElement;
  const scaled = state.font > FONT_MIN;
  root.classList.toggle("a11y-scaled", scaled);
  if (scaled) root.style.setProperty("--a11y-scale", String(state.font / 100));
  else root.style.removeProperty("--a11y-scale");
  for (const schema of SCHEMAS) root.classList.toggle(`a11y-${schema}`, state.schema === schema);
  root.classList.toggle("a11y-underline", state.underline);
  root.classList.toggle("a11y-readable", state.readable);

  const untouched =
    state.font === FONT_MIN && state.schema === null && !state.underline && !state.readable;
  if (untouched) localStorage.removeItem(A11Y_STORAGE_KEY);
  else localStorage.setItem(A11Y_STORAGE_KEY, JSON.stringify(state));
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

function PersonIcon() {
  return (
    <Icon>
      <circle cx="12" cy="4.2" r="2.3" fill="currentColor" />
      <path
        fill="currentColor"
        d="M2.2 9.1a1.2 1.2 0 0 1 1.2-1.2h17.2a1.2 1.2 0 1 1 0 2.4H15v4.2l2.6 7.2a1.2 1.2 0 0 1-2.2.8L12.8 16h-1.6l-2.6 6.5a1.2 1.2 0 1 1-2.2-.8L9 14.5V10.3H3.4a1.2 1.2 0 0 1-1.2-1.2z"
      />
    </Icon>
  );
}

function ZoomIcon({ sign }: { sign: "plus" | "minus" }) {
  return (
    <Icon>
      <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M14.6 14.6 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d={sign === "plus" ? "M10 7.2v5.6M7.2 10h5.6" : "M7.2 10h5.6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Icon>
  );
}

function BarsIcon() {
  return (
    <Icon>
      <path fill="currentColor" d="M3 4h1.6v16H3zM6.4 4h1.2v16H6.4zM9.4 4h2.4v16H9.4zM13.6 4h1.3v16h-1.3zM16.6 4h4.4v16h-4.4z" />
    </Icon>
  );
}

function ContrastIcon() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <path fill="currentColor" d="M12 4a8 8 0 0 1 0 16z" />
    </Icon>
  );
}

function BulbIcon() {
  return (
    <Icon>
      <path
        fill="currentColor"
        d="M12 2.2a6.2 6.2 0 0 0-3.4 11.3c.5.4.8 1 .9 1.6V17h5v-1.9c.1-.6.4-1.2.9-1.6A6.2 6.2 0 0 0 12 2.2zM9.6 18.4h4.8V20a2.4 2.4 0 0 1-4.8 0v-1.6z"
      />
    </Icon>
  );
}

function LinkIcon() {
  return (
    <Icon>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M10.2 13.2a3.6 3.6 0 0 0 5.1.3l1.8-1.8a3.6 3.6 0 0 0-5.1-5.1L10.8 7.8M13.8 10.8a3.6 3.6 0 0 0-5.1-.3l-1.8 1.8a3.6 3.6 0 0 0 5.1 5.1l1.2-1.2"
      />
    </Icon>
  );
}

function FontIcon() {
  return (
    <Icon>
      <path fill="currentColor" d="M12 3.5 4.5 21h2.5l1.6-4h6.8l1.6 4H19.5L12 3.5zm0 5.4 2.3 5.7H9.7L12 8.9z" />
    </Icon>
  );
}

function ResetIcon() {
  return (
    <Icon>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12a7 7 0 1 0 2-4.9"
      />
      <path fill="currentColor" d="M4 4.2h5.2v5.2H7.4V6.4H4z" />
    </Icon>
  );
}

const ICONS: Record<string, ReactNode> = {
  increase: <ZoomIcon sign="plus" />,
  decrease: <ZoomIcon sign="minus" />,
  grayscale: <BarsIcon />,
  contrast: <ContrastIcon />,
  light: <BulbIcon />,
  underline: <LinkIcon />,
  readable: <FontIcon />,
  reset: <ResetIcon />,
};

const LOOK = ["grayscale", "contrast", "light"] as const;
const READING = ["underline", "readable"] as const;

function ToolButton({
  id,
  label,
  open,
  pressed,
  onPress,
}: {
  id: string;
  label: string;
  open: boolean;
  pressed: boolean;
  onPress: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        className={cn("a11y-toolbar__tool", pressed && "is-active")}
        tabIndex={open ? 0 : -1}
        aria-pressed={pressed}
        onClick={onPress}
      >
        <span className="a11y-toolbar__glyph">{ICONS[id]}</span>
        <span>{label}</span>
      </button>
    </li>
  );
}

export function AccessibilityToolbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [state, setState] = useState(readA11yState);
  const rootRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    applyA11yState(state);
  }, [state]);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggleRef.current?.focus();
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const setSchema = (schema: Schema) => {
    setState((current) => ({ ...current, schema: current.schema === schema ? null : schema }));
  };

  const bumpFont = (delta: number) => {
    setState((current) => ({
      ...current,
      font: Math.min(FONT_MAX, Math.max(FONT_MIN, current.font + delta)),
    }));
  };

  const toolProps = (id: string) => {
    const pressed =
      id === "increase"
        ? state.font > FONT_MIN
        : id === "grayscale" || id === "contrast" || id === "light"
          ? state.schema === id
          : id === "underline"
            ? state.underline
            : id === "readable"
              ? state.readable
              : undefined;
    const disabled =
      id === "increase" ? state.font === FONT_MAX : id === "decrease" ? state.font === FONT_MIN : false;
    return { pressed, disabled };
  };

  const onTool = (id: string) => {
    if (id === "increase") bumpFont(FONT_STEP);
    else if (id === "decrease") bumpFont(-FONT_STEP);
    else if (id === "grayscale" || id === "contrast" || id === "light") setSchema(id);
    else if (id === "underline") setState((current) => ({ ...current, underline: !current.underline }));
    else if (id === "readable") setState((current) => ({ ...current, readable: !current.readable }));
    else setState(INITIAL);
  };

  const pristine =
    state.font === FONT_MIN && state.schema === null && !state.underline && !state.readable;

  return (
    <nav
      ref={rootRef}
      className={cn("a11y-toolbar", open && "is-open")}
      aria-label={t("a11y.toolbar")}
    >
      <button
        ref={toggleRef}
        type="button"
        className="a11y-toolbar__toggle"
        aria-expanded={open}
        aria-controls="a11y-panel"
        onClick={() => setOpen((value) => !value)}
      >
        <span className="sr-only">{open ? t("a11y.close") : t("a11y.open")}</span>
        <PersonIcon />
      </button>
      <div id="a11y-panel" className="a11y-toolbar__panel" inert={open ? undefined : true}>
        <p className="a11y-toolbar__title">{t("a11y.title")}</p>
        <div className="a11y-toolbar__body">
          <div className="a11y-toolbar__group">
            <p className="a11y-toolbar__label" id="a11y-text-size">
              {t("a11y.textSize")}
            </p>
            <div className="a11y-toolbar__stepper" role="group" aria-labelledby="a11y-text-size">
              <button
                type="button"
                className="a11y-toolbar__step"
                tabIndex={open ? 0 : -1}
                aria-label={t("a11y.decrease")}
                aria-disabled={toolProps("decrease").disabled || undefined}
                onClick={() => bumpFont(-FONT_STEP)}
              >
                <ZoomIcon sign="minus" />
              </button>
              <span className="a11y-toolbar__scale" aria-live="polite" aria-atomic="true">
                {t("a11y.scale", { value: state.font })}
              </span>
              <button
                type="button"
                className="a11y-toolbar__step"
                tabIndex={open ? 0 : -1}
                aria-label={t("a11y.increase")}
                aria-disabled={toolProps("increase").disabled || undefined}
                onClick={() => bumpFont(FONT_STEP)}
              >
                <ZoomIcon sign="plus" />
              </button>
            </div>
          </div>
          <div className="a11y-toolbar__group">
            <p className="a11y-toolbar__label" id="a11y-look">
              {t("a11y.look")}
            </p>
            <ul className="a11y-toolbar__list" aria-labelledby="a11y-look">
              {LOOK.map((id) => (
                <ToolButton
                  key={id}
                  id={id}
                  label={t(`a11y.${id}`)}
                  open={open}
                  pressed={toolProps(id).pressed === true}
                  onPress={() => onTool(id)}
                />
              ))}
            </ul>
          </div>
          <div className="a11y-toolbar__group">
            <p className="a11y-toolbar__label" id="a11y-reading">
              {t("a11y.reading")}
            </p>
            <ul className="a11y-toolbar__list" aria-labelledby="a11y-reading">
              {READING.map((id) => (
                <ToolButton
                  key={id}
                  id={id}
                  label={t(`a11y.${id}`)}
                  open={open}
                  pressed={toolProps(id).pressed === true}
                  onPress={() => onTool(id)}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            className="a11y-toolbar__reset"
            tabIndex={open ? 0 : -1}
            aria-disabled={pristine || undefined}
            onClick={() => onTool("reset")}
          >
            <ResetIcon />
            <span>{t("a11y.reset")}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
