export const numberError = (rating: string, min: number, max: number): string =>
  rating && (+rating > max || +rating < min)
    ? `Enter the value from ${min} to ${max}`
    : "";
