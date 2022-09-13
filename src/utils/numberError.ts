export const numberError = (
  value: string,
  min: number = 0,
  max: number = 10
): string =>
  value && (+value > max || +value < min)
    ? `Enter a value from ${min} to ${max}`
    : "";
