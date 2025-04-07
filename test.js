import {
  convertStr,
  mixedValues,
  isNotValidInput,
  isValidMorse,
  isValidString,
  convertChar,
  translate_dict,
} from "./modules/module.js";

import isNotValidInput from "./modules/module.js";

let obj = translate_dict;

describe("Test cases for ConvertStr() that converts English text to Morse & vice versa", () => {
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

describe("Test cases for mixedValues() that detects mixed English/Morse char input", () => {
  test("given mixed english+Morse input it returns true", () => {
    expect(mixedValues("ABC.")).toBe(true);
    expect(mixedValues("A .- B C")).toBe(true);
    expect(mixedValues("A /  B C")).toBe(true);
  });
  test("given correct english/morse input it returns false", () => {
    expect(mixedValues("ABC")).toBe(false);
    expect(mixedValues(".- .- / .")).toBe(false);
  });
});

// describe("Test cases for isNotValidInput() that detects invalid input chars", () => {
//   test("given incorrect input it returns true", () => {
//     // expect(IsNotValidInput("A")).toBe(true);
//     // expect(IsNotValidInput(")")).toBe(true);
//   });
// });

describe("Test cases for isValidMorse() that detects valid morse input", () => {
  test("given correct morse input it returns true", () => {
    expect(isValidMorse(".- .- / .")).toBe(true);
    expect(isValidMorse(".- .- / .- .")).toBe(true);
  });
  test("given incorrect morse input it returns false", () => {
    expect(isValidMorse("A B C")).toBe(false);
    expect(isValidMorse("Victory")).toBe(false);
  });
});

describe("Test cases for  isValidString(), that detects valid english input", () => {
  test("given correct english input it returns true", () => {
    expect(isValidString("ABC")).toBe(true);
    expect(isValidString("A BC")).toBe(true);
    expect(isValidString("A B C")).toBe(true);
  });
  test("given incorrect english input it returns false", () => {
    expect(isValidString("A B -C")).toBe(false);
    expect(isValidString(".- .- .- ")).toBe(false);
  });
});

describe("Test cases for convertChar() that converts morse char to english char and vice-versa", () => {
  test("given correct morse char it returns the corresponding english char", () => {
    expect(convertChar(null, "--", obj)).toBe("M");
    expect(convertChar(null, "..", obj)).toBe("I");
  });
  test("given correct english char it returns the corresponding morse char", () => {
    expect(convertChar("M", null, obj)).toBe(" --");
    expect(convertChar("I", null, obj)).toBe(" ..");
  });
  test("given incorrect english char it returns false", () => {
    expect(convertChar("-", null, obj)).toBe("#");
  });
  test("given incorrect morse char it returns false", () => {
    expect(convertChar(null, " - ", obj)).toBe("#");
  });
});
