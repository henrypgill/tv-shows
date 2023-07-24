export function removePTags(text: string): string {
  const regex = /(<p>)|(<\/p>)/g;

  return text.replace(regex, "");
}
