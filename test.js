import { convertStr } from "./modules/module.js";

describe("Test cases for a function that converts English text to Morse & vice versa", () => {
  test("given the correct english input it gives the correct morse output", () => {
    expect(convertStr("ABC")).toBe(".- -... -.-.");
    expect(convertStr("A BC")).toBe(".- / -... -.-.");
    expect(convertStr("A B C")).toBe(".- / -... / -.-.");
  });
  test("given a correct morse input it gives the correct english output", () => {
    expect(convertStr(".- .- / .")).toBe("AA E");
    expect(convertStr(".- .- / .- .")).toBe("AA AE");
    expect(convertStr("Victory")).toBe("...- .. -.-. - --- .-. -.--");
  });

  test("morse characters have one space between them", () => {
    expect(convertStr("THIS")).toBe("- .... .. ...");
  });
  test("english words converted to morse have a slash between them", () => {
    expect(convertStr("this is a full sentence")).toBe(
      "- .... .. ... / .. ... / .- / ..-. ..- .-.. .-.. / ... . -. - . -. -.-. ."
    );
  });
  test("Given mixed morse and English input, an error in input is indicated", () => {
    expect(convertStr("this is a mixed sentence.-")).toBe("");
  });
  test("Given empty input, an error in input is indicated", () => {
    expect(convertStr("")).toBe("");
  });
});
