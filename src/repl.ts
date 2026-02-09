export function cleanInput(input: string): string[] {
  let actual=input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter(word => word.length > 0);
    return actual;
}
