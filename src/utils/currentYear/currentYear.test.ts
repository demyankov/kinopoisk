import { currentYear } from "./currentYear";

describe("Current year", () => {
  test("Correct current year", () => {
    expect(currentYear).toBe(2022);
  });
});
