export function removeTags(text: string): string {
  const regex = /<[^>]*>/g;

  return text.replace(regex, "");
}
