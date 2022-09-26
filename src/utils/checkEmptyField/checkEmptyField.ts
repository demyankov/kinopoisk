export const checkEmptyField = (value: string) =>
  !!value.trim() ? "" : "Enter a value";
