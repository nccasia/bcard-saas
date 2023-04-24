export function isDarkMode() {
  if (typeof window === "undefined") {
    return false;
  }

  const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

  return darkModeQuery.matches;
}
