export function removeTags(text: string): string {
  const regex = /(<[a-z]>)|(<\/[a-z]>)/g;

  return text.replace(regex, "");
}
