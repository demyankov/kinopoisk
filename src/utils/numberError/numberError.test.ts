import { numberError } from "./numberError";

describe("Number error (tests value)", () => {
  test("Correct data min", () => {
    expect(numberError("0")).toEqual("");
  });
  test("Correct data (medium value)", () => {
    expect(numberError("0")).toEqual("");
  });
  test("Correct data (max value)", () => {
    expect(numberError("0")).toEqual("");
  });
  test("UnCorrect data (negative value)", () => {
    expect(numberError("-5")).toEqual("Enter a value from 0 to 10");
  });
  test("UnCorrect data (more than max value)", () => {
    expect(numberError("11")).toEqual("Enter a value from 0 to 10");
  });
  test("Correct data with min, max", () => {
    expect(numberError("8", 5, 15)).toEqual("");
  });
  test("UnCorrect data with min, max (less than min value)", () => {
    expect(numberError("0", 5, 15)).toEqual("Enter a value from 5 to 15");
  });
  test("UnCorrect data with min, max (more than max value)", () => {
    expect(numberError("16", 5, 15)).toEqual("Enter a value from 5 to 15");
  });
  test("Empty data (spaces)", () => {
    expect(numberError("    ", 5, 15)).toEqual("");
  });
  test("Empty data", () => {
    expect(numberError("", 5, 15)).toEqual("");
  });
});
