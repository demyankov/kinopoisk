export const initialState = (name: string) => {
  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) || "")
    : [];
};
