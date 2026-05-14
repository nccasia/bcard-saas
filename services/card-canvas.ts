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
  Zalo?: string | null;
  Telegram?: string | null;
  Whatsapp?: string | null;
  Linkedin?: string | null;
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

/** Generic share / outbound link icon for social rows without a dedicated glyph. */
function drawShareIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.85;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const bw = s * 0.9;
  const bh = s * 0.52;
  const bx = x - bw / 2;
  const by = y + s * 0.06;
  ctx.strokeRect(bx, by, bw, bh);
  ctx.beginPath();
  ctx.moveTo(x, by);
  ctx.lineTo(x, y - s * 0.52);
  ctx.moveTo(x - s * 0.32, y - s * 0.32);
  ctx.lineTo(x, y - s * 0.52);
  ctx.lineTo(x + s * 0.32, y - s * 0.32);
  ctx.stroke();
}

/**
 * Zalo: rounded app tile with speech bubble (brand uses bubble-on-tile; see Wikimedia Commons Zalo icon references).
 */
function drawZaloIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.95;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const tile = s * 0.92;
  const tl = x - tile / 2;
  const tt = y - tile / 2;
  const tr = s * 0.16;
  ctx.beginPath();
  ctx.moveTo(tl + tr, tt);
  ctx.lineTo(tl + tile - tr, tt);
  ctx.quadraticCurveTo(tl + tile, tt, tl + tile, tt + tr);
  ctx.lineTo(tl + tile, tt + tile - tr);
  ctx.quadraticCurveTo(tl + tile, tt + tile, tl + tile - tr, tt + tile);
  ctx.lineTo(tl + tr, tt + tile);
  ctx.quadraticCurveTo(tl, tt + tile, tl, tt + tile - tr);
  ctx.lineTo(tl, tt + tr);
  ctx.quadraticCurveTo(tl, tt, tl + tr, tt);
  ctx.closePath();
  ctx.stroke();

  const bw = s * 0.44;
  const bh = s * 0.34;
  const bx = x - bw / 2;
  const by = y - bh / 2 - s * 0.02;
  const br = s * 0.09;
  ctx.beginPath();
  ctx.moveTo(bx + br, by);
  ctx.lineTo(bx + bw - br, by);
  ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + br);
  ctx.lineTo(bx + bw, by + bh - br);
  ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - br, by + bh);
  ctx.lineTo(bx + bw * 0.4, by + bh);
  ctx.lineTo(bx + bw * 0.28, by + bh + s * 0.13);
  ctx.lineTo(bx + bw * 0.34, by + bh);
  ctx.lineTo(bx + br, by + bh);
  ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - br);
  ctx.lineTo(bx, by + br);
  ctx.quadraticCurveTo(bx, by, bx + br, by);
  ctx.closePath();
  ctx.stroke();
}

/** Telegram: circular badge with paper-plane mark (Telegram’s widely recognized motif). */
function drawTelegramIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.95;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const r = s * 0.42;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  const ps = s * 0.38;
  ctx.beginPath();
  ctx.moveTo(x + ps * 0.52, y - ps * 0.06);
  ctx.lineTo(x - ps * 0.4, y + ps * 0.38);
  ctx.lineTo(x - ps * 0.26, y - ps * 0.02);
  ctx.lineTo(x - ps * 0.4, y - ps * 0.38);
  ctx.closePath();
  ctx.stroke();
}

/** WhatsApp: speech bubble with handset inside (matches common WhatsApp iconography). */
function drawWhatsAppIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.92;
  ctx.strokeStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  const bx = x - s * 0.02;
  const by = y - s * 0.06;
  ctx.beginPath();
  ctx.moveTo(bx + s * 0.05, by - s * 0.28);
  ctx.bezierCurveTo(bx + s * 0.42, by - s * 0.38, bx + s * 0.38, by + s * 0.28, bx + s * 0.08, by + s * 0.22);
  ctx.lineTo(bx - s * 0.18, by + s * 0.42);
  ctx.lineTo(bx - s * 0.12, by + s * 0.18);
  ctx.bezierCurveTo(bx - s * 0.38, by + s * 0.12, bx - s * 0.38, by - s * 0.28, bx + s * 0.05, by - s * 0.28);
  ctx.closePath();
  ctx.stroke();

  const ps = s * 0.2;
  const px = bx + s * 0.06;
  const py = by;
  ctx.beginPath();
  ctx.moveTo(px - ps / 5, py - ps / 2);
  ctx.lineTo(px - ps / 5, py + ps / 2);
  ctx.lineTo(px, py + ps / 2 + 1);
  ctx.lineTo(px + ps / 5, py + ps / 2);
  ctx.lineTo(px + ps / 5, py - ps / 2);
  ctx.closePath();
  ctx.stroke();
}

/** LinkedIn: rounded square with “in” wordmark (LinkedIn app tile style). */
function drawLinkedInIcon(ctx: CanvasRenderingContext2D, x: number, y: number): void {
  const s = CARD.iconSize * 0.95;
  ctx.save();
  ctx.strokeStyle = CARD.iconColor;
  ctx.fillStyle = CARD.iconColor;
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  const w = s * 0.88;
  const h = s * 0.88;
  const rx = s * 0.14;
  const left = x - w / 2;
  const top = y - h / 2;
  ctx.beginPath();
  ctx.moveTo(left + rx, top);
  ctx.lineTo(left + w - rx, top);
  ctx.quadraticCurveTo(left + w, top, left + w, top + rx);
  ctx.lineTo(left + w, top + h - rx);
  ctx.quadraticCurveTo(left + w, top + h, left + w - rx, top + h);
  ctx.lineTo(left + rx, top + h);
  ctx.quadraticCurveTo(left, top + h, left, top + h - rx);
  ctx.lineTo(left, top + rx);
  ctx.quadraticCurveTo(left, top, left + rx, top);
  ctx.closePath();
  ctx.stroke();
  ctx.font = `bold ${Math.max(7, s * 0.36)}px ${CARD.fontFamily}`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("in", x, y + s * 0.02);
  ctx.restore();
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
  drawShareIcon,
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

function drawContactRight(ctx: CanvasRenderingContext2D, card: CardData): void {
  const left = CARD.width * CARD.leftRatio + CARD.padding + 15;
  const textLeft = left + CARD.iconSize + CARD.iconGap;
  const maxTextWidth = CARD.width - textLeft - CARD.padding;
  const lineH = CARD.lineHeight;

  const nameLineH = 42;
  const titleLineH = 38;

  ctx.font = `bold ${CARD.textSize}px ${CARD.fontFamily}`;

  const rawFields = [
    { value: card.Email, icon: drawEnvelopeIcon },
    { value: card.Phone, icon: drawPhoneIcon },
    { value: card.Company, icon: drawCompanyIcon },
    { value: card.Web, icon: drawGlobeIcon },
    { value: card.Zalo, icon: drawZaloIcon },
    { value: card.Telegram, icon: drawTelegramIcon },
    { value: card.Whatsapp, icon: drawWhatsAppIcon },
    { value: card.Linkedin, icon: drawLinkedInIcon },
    { value: card.Address, icon: drawLocationIcon },
    // { value: card.Slogan, icon: drawQuoteIcon },
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
  ctx.fillText(card.Name?.trim() || "—", left, y);
  y += nameLineH;

  ctx.font = `${CARD.titleSize}px ${CARD.fontFamily}`;
  ctx.fillStyle = CARD.titleColor;
  ctx.fillText(card.Title?.trim() || "—", left, y);
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
  drawContactRight(ctx, card);

  return canvas.toDataURL("image/png");
}
