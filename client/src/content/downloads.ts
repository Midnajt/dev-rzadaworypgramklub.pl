import { site } from "@/config/site";

export type DownloadFile = {
  id: string;
  label: string;
  href: string;
};

export const downloadFiles: DownloadFile[] = [
  {
    id: "msit-zip",
    label: "MSiT_logotypy_2023 — katalog .zip",
    href: `${site.uploads}/2025/02/MSiT_logotypy_2023.zip`,
  },
  {
    id: "lzs-black",
    label: "LZS Operator KLUB — czarny napis",
    href: `${site.uploads}/2025/02/LZS-Operator-KLUB-czarny-napis.png`,
  },
  {
    id: "lzs-bg",
    label: "LZS Operator KLUB — z tłem",
    href: `${site.uploads}/2025/02/LZS-Operator-KLUB-z-tlem.png`,
  },
  {
    id: "witaj",
    label: "Rządowy Program KLUB — logo „Witaj w Klubie”",
    href: `${site.uploads}/2025/02/Rzadowy-Program-KLUB-logo-Witaj-W-Klubie.png`,
  },
];
