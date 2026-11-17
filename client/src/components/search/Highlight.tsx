import { Fragment } from "react";

type HighlightProps = {
  text: string;
  needle: string;
};

export function Highlight({ text, needle }: HighlightProps) {
  const query = needle.trim().toLocaleLowerCase("pl");
  if (!query) return text;

  const lower = text.toLocaleLowerCase("pl");
  const parts: Array<string | { hit: string }> = [];
  let cursor = 0;

  while (cursor < lower.length) {
    const index = lower.indexOf(query, cursor);
    if (index === -1) {
      parts.push(text.slice(cursor));
      break;
    }
    if (index > cursor) parts.push(text.slice(cursor, index));
    parts.push({ hit: text.slice(index, index + query.length) });
    cursor = index + query.length;
  }

  return parts.map((part, index) =>
    typeof part === "string" ? (
      <Fragment key={index}>{part}</Fragment>
    ) : (
      <mark key={index} className="search-hit">
        {part.hit}
      </mark>
    ),
  );
}
