export const capitalize = (words: string): string => {
  return words?.split(/\s+/)?.map((word) => {
    return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}
