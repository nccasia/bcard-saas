import path from "path";

import { createCanvas, loadImage, type CanvasRenderingContext2D, type Image } from "canvas";

export interface CardData {
  Name?: string | null;
  NameId?: string | null;
  Email?: string | null;
  Phone?: string | null;
  Title?: string | null;
  Company?: string | null;
  Web?: string | null;
  Address?: string | null;
  Slogan?: string | null;
}

export const CARD = {
  width: 850,
  height: 500,
  leftRatio: 0.4,
  padding: 40,
  radius: 8,
  shadowBlur: 15,
  bg: "rgba(255, 255, 255, 0.95)",
  bgGradientStart: "#ffffff",
  bgGradientEnd: "#dde7ff",
  divider: "#777373",
  dividerWidth: 1.5,
  nameColor: "#606060",
  nameSize: 28,
  titleColor: "#646464",
  titleSize: 20,
  textColor: "#767676",
  textSize: 18,
  sloganColor: "#606060",
  sloganAccent: "#E84F59",
  fontFamily: "Helvetica Neue, Arial, sans-serif",
  logoWidth: 240,
  lineHeight: 36,
  iconSize: 18,
  iconGap: 12,
  iconColor: "#7e7b7b",
};

type CardTheme = {
  bgStart: string;
  bgEnd: string;
  accent: string;
};

const THEMES: CardTheme[] = [
  // Cool / neutral
  { bgStart: "#ffffff", bgEnd: "#dde7ff", accent: "#4f46e5" }, // indigo
  { bgStart: "#f9fafb", bgEnd: "#e5e7eb", accent: "#1f2937" }, // gray/slate
  { bgStart: "#eff6ff", bgEnd: "#bfdbfe", accent: "#2563eb" }, // blue
  { bgStart: "#ecfeff", bgEnd: "#ddd6fe", accent: "#0891b2" }, // cyan/purple
  { bgStart: "#eef2ff", bgEnd: "#e0f2fe", accent: "#6366f1" }, // indigo/sky mix

  // Warm
  { bgStart: "#fff7f5", bgEnd: "#ffd6c9", accent: "#ea580c" }, // warm orange
  { bgStart: "#fffbeb", bgEnd: "#fed7aa", accent: "#d97706" }, // amber
  { bgStart: "#fef2f2", bgEnd: "#fecaca", accent: "#dc2626" }, // red
  { bgStart: "#fff1f2", bgEnd: "#ffe4e6", accent: "#fb7185" }, // soft coral

  // Greens
  { bgStart: "#f0fdf4", bgEnd: "#bbf7d0", accent: "#16a34a" }, // light green
  { bgStart: "#ecfdf3", bgEnd: "#6ee7b7", accent: "#059669" }, // emerald
  { bgStart: "#f7fee7", bgEnd: "#bef264", accent: "#65a30d" }, // lime

  // Pinks / violets
  { bgStart: "#fdf2ff", bgEnd: "#e9d5ff", accent: "#db2777" }, // pink
  { bgStart: "#fdf2f8", bgEnd: "#fecdd3", accent: "#be185d" }, // rose
  { bgStart: "#f5f3ff", bgEnd: "#e0f2fe", accent: "#7c3aed" }, // purple/blue
  { bgStart: "#fdf2ff", bgEnd: "#cffafe", accent: "#a855f7" }, // violet/cyan mix

  // Bold mixed gradients
  { bgStart: "#0f172a", bgEnd: "#1e293b", accent: "#38bdf8" }, // dark slate + cyan
  { bgStart: "#022c22", bgEnd: "#064e3b", accent: "#34d399" }, // deep green + mint
  { bgStart: "#111827", bgEnd: "#312e81", accent: "#f9a8d4" }, // dark indigo + pink
  { bgStart: "#3f0f1f", bgEnd: "#4c1d95", accent: "#f97316" }, // wine + purple + orange
];

function pickRandomTheme(): CardTheme {
  const idx = Math.floor(Math.random() * THEMES.length);
  return THEMES[idx] ?? THEMES[0];
}

function getLogoPath(): string {
  return path.join(process.cwd(), "asset", "images", "logo_content.png");
}

async function drawLogoLeft(ctx: CanvasRenderingContext2D, logoImage: Image | null): Promise<number> {
  const leftW = CARD.width * CARD.leftRatio;
  const centerX = leftW / 2;
  const centerY = CARD.height / 2;

  if (logoImage) {
    const scale = Math.min(CARD.logoWidth / logoImage.width, (CARD.height - CARD.padding * 2) / logoImage.height);
    const dw = logoImage.width * scale;
    const dh = logoImage.height * scale;
    ctx.drawImage(logoImage, centerX - dw / 2, centerY - dh / 2, dw, dh);
    return dh;
  }
  return 0;
}

function drawDivider(ctx: CanvasRenderingContext2D): void {
  const x = CARD.width * CARD.leftRatio;
  ctx.strokeStyle = CARD.divider;
  ctx.lineWidth = CARD.dividerWidth;
  ctx.beginPath();
  ctx.moveTo(x, CARD.padding + 20);
  ctx.lineTo(x, CARD.height - CARD.padding - 20);
  ctx.stroke();
}

function drawEnvelopeIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize;
  const h = s * 0.6;
  const w = s * 1.1;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - w / 2, y - h / 2);
  ctx.lineTo(x + w / 2, y - h / 2);
  ctx.lineTo(x + w / 2, y + h / 2);
  ctx.lineTo(x - w / 2, y + h / 2);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - w / 2, y - h / 2);
  ctx.lineTo(x, y);
  ctx.lineTo(x + w / 2, y - h / 2);
  ctx.stroke();
}

function drawPhoneIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.9;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - s / 3, y - s / 2);
  ctx.lineTo(x - s / 3, y + s / 2);
  ctx.lineTo(x, y + s / 2 + 2);
  ctx.lineTo(x + s / 3, y + s / 2);
  ctx.lineTo(x + s / 3, y - s / 2);
  ctx.lineTo(x - s / 3, y - s / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - s / 4, y + s / 2 + 2);
  ctx.lineTo(x + s / 4, y + s / 2 + 2);
  ctx.stroke();
}

function drawGlobeIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const r = CARD.iconSize / 2 - 1;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - r, y);
  ctx.lineTo(x + r, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x, y + r);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, r, -Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, r, Math.PI / 2, (Math.PI * 3) / 2);
  ctx.stroke();
}

function drawCompanyIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.9;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(x - s / 2, y + s / 2);
  ctx.lineTo(x - s / 2, y - s / 4);
  ctx.lineTo(x, y - s / 2);
  ctx.lineTo(x + s / 2, y - s / 4);
  ctx.lineTo(x + s / 2, y + s / 2);
  ctx.lineTo(x - s / 2, y + s / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x - s / 4, y);
  ctx.lineTo(x - s / 4, y + s / 4);
  ctx.lineTo(x + s / 4, y + s / 4);
  ctx.lineTo(x + s / 4, y);
  ctx.stroke();
}

function drawLocationIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.85;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.arc(x, y - s / 3, s / 3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y - s / 3 + s / 4);
  ctx.lineTo(x, y + s / 2);
  ctx.lineTo(x - s / 4, y + s / 3);
  ctx.lineTo(x, y + s / 2);
  ctx.lineTo(x + s / 4, y + s / 3);
  ctx.stroke();
}

function drawQuoteIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.7;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(x - s / 4, y - s / 4, s / 4, 0, Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x + s / 4, y - s / 4, s / 4, 0, Math.PI);
  ctx.stroke();
}

// Extra decorative-only icons (abstract shapes)
function drawCircleBadgeIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const r = CARD.iconSize * 0.9;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, r * 0.35, 0, Math.PI * 2);
  ctx.stroke();
}

function drawDiamondIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 1.3;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, y - s / 2);
  ctx.lineTo(x + s / 2, y);
  ctx.lineTo(x, y + s / 2);
  ctx.lineTo(x - s / 2, y);
  ctx.closePath();
  ctx.stroke();
}

function drawStarIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const outer = CARD.iconSize * 1.2;
  const inner = outer * 0.45;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? outer : inner;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawRingIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const outer = CARD.iconSize * 1.5;
  const inner = outer * 0.6;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(x, y, outer, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(x, y, inner, 0, Math.PI * 2);
  ctx.stroke();
}

function drawPlusIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 1.2;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(x - s / 2, y);
  ctx.lineTo(x + s / 2, y);
  ctx.moveTo(x, y - s / 2);
  ctx.lineTo(x, y + s / 2);
  ctx.stroke();
}

function drawChevronIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 1.2;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.6;
  ctx.beginPath();
  ctx.moveTo(x - s / 2, y - s / 4);
  ctx.lineTo(x, y + s / 4);
  ctx.lineTo(x + s / 2, y - s / 4);
  ctx.stroke();
}

function drawTriangleIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 1.4;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, y - s / 2);
  ctx.lineTo(x + s / 2, y + s / 2);
  ctx.lineTo(x - s / 2, y + s / 2);
  ctx.closePath();
  ctx.stroke();
}

function drawHexagonIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const r = CARD.iconSize * 1.1;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  for (let i = 0; i < 6; i += 1) {
    const angle = (Math.PI / 3) * i;
    const px = x + Math.cos(angle) * r;
    const py = y + Math.sin(angle) * r;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
}

function drawDotGridIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 1.4;
  const step = s / 3;
  ctx.fillStyle = CARD.iconColor;
  for (let ix = -1; ix <= 1; ix += 1) {
    for (let iy = -1; iy <= 1; iy += 1) {
      const px = x + ix * step;
      const py = y + iy * step;
      ctx.beginPath();
      ctx.arc(px, py, 1.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

const DECORATION_ICONS: Array<(ctx: CanvasRenderingContext2D, x: number, y: number) => void> = [
  // contact-like icons
  drawEnvelopeIcon,
  drawPhoneIcon,
  drawGlobeIcon,
  drawCompanyIcon,
  drawLocationIcon,
  drawQuoteIcon,
  // abstract decorative icons
  drawCircleBadgeIcon,
  drawDiamondIcon,
  drawStarIcon,
  drawRingIcon,
  drawPlusIcon,
  drawChevronIcon,
  drawTriangleIcon,
  drawHexagonIcon,
  drawDotGridIcon,
];

function drawDecorativeIcons(ctx: CanvasRenderingContext2D): void {
  const rightStartX = CARD.width * CARD.leftRatio + CARD.padding;
  const rightEndX = CARD.width - CARD.padding;
  const topY = CARD.padding;
  const bottomY = CARD.height - CARD.padding;

  // Random placement with a minimum distance so icons don't overlap.
  const maxIcons = 24;
  const maxAttempts = maxIcons * 10;
  const placed: { x: number; y: number; radius: number }[] = [];

  const minDist = CARD.iconSize * 2.4; // base minimum distance between icon centers

  let attempts = 0;
  while (placed.length < maxIcons && attempts < maxAttempts) {
    attempts += 1;

    const icon = DECORATION_ICONS[Math.floor(Math.random() * DECORATION_ICONS.length)];

    const x = rightStartX + (rightEndX - rightStartX) * Math.random();
    const y = topY + (bottomY - topY) * Math.random();

    const scale = 0.7 + Math.random() * 0.9; // 0.7–1.6 (smaller)
    const radius = CARD.iconSize * scale * 1.3;

    let tooClose = false;
    for (const p of placed) {
      const dx = x - p.x;
      const dy = y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < minDist + p.radius + radius) {
        tooClose = true;
        break;
      }
    }
    if (tooClose) continue;

    placed.push({ x, y, radius });

    const alpha = 0.05 + Math.random() * 0.08; // a bit stronger for highlight

    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.lineWidth = 1.6;
    ctx.translate(x, y);
    const rotation = (Math.random() - 0.5) * (Math.PI / 1.5);
    ctx.rotate(rotation);
    ctx.scale(scale, scale);
    icon(ctx, 0, 0);
    ctx.restore();
  }
}

/** Splits text into lines that fit within maxWidth (word-wrap; long words break by character). */
function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  if (!text.trim()) return [""];
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    const w = ctx.measureText(candidate).width;
    if (w <= maxWidth) {
      current = candidate;
    } else {
      if (current) lines.push(current);
      const singleW = ctx.measureText(word).width;
      if (singleW <= maxWidth) {
        current = word;
      } else {
        current = "";
        let chunk = "";
        for (const ch of word) {
          const next = chunk + ch;
          if (ctx.measureText(next).width <= maxWidth) chunk = next;
          else {
            if (chunk) lines.push(chunk);
            chunk = ch;
          }
        }
        if (chunk) lines.push(chunk);
      }
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function drawContactRight(
  ctx: CanvasRenderingContext2D,
  name: string,
  title: string,
  company: string,
  email: string,
  phone: string,
  web: string,
  address: string,
  slogan: string,
): void {
  const left = CARD.width * CARD.leftRatio + CARD.padding + 15;
  const textLeft = left + CARD.iconSize + CARD.iconGap;
  const maxTextWidth = CARD.width - textLeft - CARD.padding;
  const lineH = CARD.lineHeight;

  const nameLineH = 42;
  const titleLineH = 38;

  ctx.font = `bold ${CARD.textSize}px ${CARD.fontFamily}`;

  const rawFields = [
    { value: email, icon: drawEnvelopeIcon },
    { value: phone, icon: drawPhoneIcon },
    { value: company, icon: drawCompanyIcon },
    { value: web, icon: drawGlobeIcon },
    { value: address, icon: drawLocationIcon },
    { value: slogan, icon: drawQuoteIcon },
  ];

  const fields = rawFields
    .map((field) => {
      const trimmed = field.value?.trim() || "";
      if (!trimmed) return null;
      return {
        icon: field.icon,
        lines: wrapText(ctx, trimmed, maxTextWidth),
      };
    })
    .filter((f): f is { icon: typeof drawEnvelopeIcon; lines: string[] } => Boolean(f));

  const totalBlockHeight =
    nameLineH +
    titleLineH +
    fields.reduce((sum, f) => sum + f.lines.length * lineH, 0);

  let y = (CARD.height - totalBlockHeight) / 2 + nameLineH - 4;

  ctx.textAlign = "left";

  ctx.font = `bold ${CARD.nameSize}px ${CARD.fontFamily}`;
  ctx.fillStyle = CARD.nameColor;
  ctx.fillText(name || "—", left, y);
  y += nameLineH;

  ctx.font = `${CARD.titleSize}px ${CARD.fontFamily}`;
  ctx.fillStyle = CARD.titleColor;
  ctx.fillText(title || "—", left, y);
  y += titleLineH;

  ctx.font = `bold ${CARD.textSize}px ${CARD.fontFamily}`;
  ctx.fillStyle = CARD.textColor;

  const drawField = (
    iconFn: (ctx: CanvasRenderingContext2D, x: number, y: number) => void,
    lines: string[],
  ) => {
    const iconY = y - CARD.textSize * 0.35;
    iconFn(ctx, left + CARD.iconSize / 2, iconY);
    for (const line of lines) {
      ctx.fillText(line, textLeft, y);
      y += lineH;
    }
  };

  for (const field of fields) {
    drawField(field.icon, field.lines);
  }
}


/**
 * Renders the card to a canvas and returns a PNG data URL (e.g. "data:image/png;base64,...").
 */
export async function renderCardToDataURL(card: CardData): Promise<string> {
  const canvas = createCanvas(CARD.width, CARD.height);
  const ctx = canvas.getContext("2d");

  ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
  ctx.shadowBlur = CARD.shadowBlur;
  ctx.shadowOffsetY = 5;

  const r = CARD.radius;
  const w = CARD.width;
  const h = CARD.height;

  // Pick a random theme for this render and apply highlight colors.
  const theme = pickRandomTheme();
  CARD.bgGradientStart = theme.bgStart;
  CARD.bgGradientEnd = theme.bgEnd;
  CARD.divider = theme.accent;
  CARD.iconColor = theme.accent;
  CARD.nameColor = theme.accent;
  CARD.sloganAccent = theme.accent;

  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(w - r, 0);
  ctx.arcTo(w, 0, w, r, r);
  ctx.lineTo(w, h - r);
  ctx.arcTo(w, h, w - r, h, r);
  ctx.lineTo(r, h);
  ctx.arcTo(0, h, 0, h - r, r);
  ctx.lineTo(0, r);
  ctx.arcTo(0, 0, r, 0, r);
  ctx.closePath();
  const gradient = ctx.createLinearGradient(0, 0, w, h);
  gradient.addColorStop(0, CARD.bgGradientStart);
  gradient.addColorStop(1, CARD.bgGradientEnd);
  ctx.fillStyle = gradient;
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

  drawDecorativeIcons(ctx);

  const logoImage: Image | null = await loadImage(getLogoPath()).catch(() => null);
  await drawLogoLeft(ctx, logoImage);
  drawDivider(ctx);
  drawContactRight(
    ctx,
    card.Name || "",
    card.Title || "",
    card.Company ?? "",
    card.Email || "",
    card.Phone || "",
    card.Web || "",
    card.Address ?? "",
    card.Slogan ?? "",
  );

  return canvas.toDataURL("image/png");
}
