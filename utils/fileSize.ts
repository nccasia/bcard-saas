export const fileSize = (index: number) => {
  if (index >= 1024) {
    return String(Math.round(index / 1024)) + "KB";
  }
  if (index >= 1048576) {
    return String(Math.round(index / 1048576)) + "MB";
  }
  if (index < 1024) {
    return String(index) + "B";
  }
};
