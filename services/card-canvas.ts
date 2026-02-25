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
  const noInfo = "No Information";
  const left = CARD.width * CARD.leftRatio + CARD.padding + 15;
  const textLeft = left + CARD.iconSize + CARD.iconGap;
  const maxTextWidth = CARD.width - textLeft - CARD.padding;
  const lineH = CARD.lineHeight;

  const nameLineH = 42;
  const titleLineH = 38;

  ctx.font = `bold ${CARD.textSize}px ${CARD.fontFamily}`;
  const emailLines = wrapText(ctx, email?.trim() ? email : noInfo, maxTextWidth);
  const phoneLines = wrapText(ctx, phone?.trim() ? phone : noInfo, maxTextWidth);
  const companyLines = wrapText(ctx, company?.trim() ? company : noInfo, maxTextWidth);
  const webLines = wrapText(ctx, web?.trim() ? web : noInfo, maxTextWidth);
  const addressLines = wrapText(ctx, address?.trim() ? address : noInfo, maxTextWidth);
  const sloganLines = wrapText(ctx, slogan?.trim() ? slogan : noInfo, maxTextWidth);

  const contactHeights = [
    emailLines.length,
    phoneLines.length,
    companyLines.length,
    webLines.length,
    addressLines.length,
    sloganLines.length,
  ].map((n) => n * lineH);
  const totalBlockHeight =
    nameLineH + titleLineH + contactHeights.reduce((a, b) => a + b, 0);

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
      ctx.fillText(line || " ", textLeft, y);
      y += lineH;
    }
  };

  drawField(drawEnvelopeIcon, emailLines);
  drawField(drawPhoneIcon, phoneLines);
  drawField(drawCompanyIcon, companyLines);
  drawField(drawGlobeIcon, webLines);
  drawField(drawLocationIcon, addressLines);
  drawField(drawQuoteIcon, sloganLines);
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
  ctx.fillStyle = CARD.bg;
  ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetY = 0;

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
