export function getFontSizeToFit(
  text: string,
  width: number,
  fontFamily: string,
  fontSize: number,
  oneline: boolean,
) {
  const textWidth = getTextWidth(text, fontSize, fontFamily);
  if (textWidth > width && oneline) {
    return (width / textWidth) * fontSize;
  } else {
    return fontSize;
  }
}

function getTextWidth(text: string, fontSize: number, fontFamily: string) {
  const ctx: any = document.createElement("canvas").getContext("2d");
  ctx.font = `${fontSize}px ${fontFamily}`;
  return ctx.measureText(text).width;
}
