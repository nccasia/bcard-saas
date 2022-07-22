/**
 * Turns a multi-word string into a slug.
 * @param text Input string to convert into a valid slug.
 * @returns { string } The output string as a slug.
 */
export const slugify = (text: string): string => {
  return text
    .toString() // Called just to prevent any casting error.
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents.
    .toLowerCase() // Ensure that the whole string is all lowercase letters.
    .replace(/\s+/g, "-") // Replace all spaces with hyphens.
    .replace(/[^\w-]+/g, "-") // Remove all non-letter characters.
    .replace(/^-+/, "") // trim the beginning of the string.
    .replace(/-+$/, ""); // trim the end of the string as well...
};
