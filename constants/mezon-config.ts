export const MEZON_IMAGE_URL =
  "https://cdn.mezon.vn/1837043892743049216/1840654271217930240/1827994776956309500/857_0246x0w.webp";

export const MEZON_EMBED_FOOTER = {
  text: "Powered by Mezon",
  icon_url: MEZON_IMAGE_URL,
};

export interface EmbedProps {
  color?: string;
  title?: string;
  url?: string;
  author?: {
    name?: string | null;
    icon_url?: string | null;
    url?: string | null;
  };
  description?: string;
  thumbnail?: { url: string | null };
  fields?: Array<{
    name: string;
    value: string;
    inline?: boolean;
    options?: any[];
    inputs?: Record<string, unknown>;
  }>;
  image?: { url: string | null; width: string | null; height: string | null };
  timestamp?: string;
  footer?: { text: string; icon_url?: string };
}
