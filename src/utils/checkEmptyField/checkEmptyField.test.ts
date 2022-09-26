import { checkEmptyField } from "./checkEmptyField";

test("Check empty field", () => {
  expect(checkEmptyField("")).toBe("Enter a value");
  expect(checkEmptyField("    ")).toBe("Enter a value");
  expect(checkEmptyField("not empty")).toBe("");
});
