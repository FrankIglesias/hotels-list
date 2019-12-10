export function createArrayFrom(number): Array<Number> {
  return [...Array.from(Array(number + 1).keys()).slice(1)];
}
