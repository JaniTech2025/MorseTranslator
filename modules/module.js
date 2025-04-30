export const translate_dict = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

export const characters = [
  ...Object.keys(translate_dict), //Upper case
  ...Object.keys(translate_dict).map((chars) => chars.toLowerCase()), //Lower case alphabets
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Shift",
  "Ctrl+V",
  "Ctrl+C",
  " ",
  ".",
  "-",
  "/",
];

export function isValidString(str) {
  const hasChars = /[a-zA-Z]/.test(str);
  const hasDotOrDash = /[.-]/.test(str);
  return hasChars && !hasDotOrDash;
}

export function isValidMorse(str) {
  const hasDotOrDashOrSlash = /[./-]/.test(str);
  return hasDotOrDashOrSlash;
}

export function isNotValidInput(ch) {
  return !characters.includes(ch);
}

export function mixedValues(str) {
  const hasAlpha = /[a-zA-Z]/.test(str);
  const hasDotOrDashOrSlash = /[./-]/.test(str);
  return hasAlpha && hasDotOrDashOrSlash;
}

let obj = translate_dict;

export function convertChar(inKeyAlpha, inValueMorse, obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (inKeyAlpha !== null && key === inKeyAlpha)
        return " " + obj[inKeyAlpha];

      if (inValueMorse !== null && obj[key] === inValueMorse) return key;
    }
  }
  return "Enter a valid input";
}

export function convertStr(sentence) {
  let converted = "";
  // console.log("input to convert" + sentence);
  if (mixedValues(sentence)) {
    // console.log("Mixed input detected");
    converted = "Enter a valid input";
    return converted;
  }

  if (isValidString(sentence)) {
    // console.log("String input detected");
    let tempArr = sentence.toUpperCase().split(" ");

    for (let i = 0; i < tempArr.length; i++) {
      let wordArr = tempArr[i].split("");
      for (let char in wordArr) {
        // converted += convertChar(wordArr[char], null, obj) || "#";
        converted += convertChar(wordArr[char], null, obj);

        // Adds space between every morse character here
      }
      converted = converted + " /";
      // Adds special character between every word here
    }
  } else if (isValidMorse(sentence)) {
    // console.log("Morse input detected");
    let tempArr = sentence.split(" ");
    for (let ch in tempArr) {
      // console.log(tempArr[ch]);
      if (tempArr[ch] === "/") converted += " ";
      else {
        // converted += convertChar(null, tempArr[ch], obj) || "#";
        converted += convertChar(null, tempArr[ch], obj);
      }
    }
  }

  converted = converted.replace(/\/$/, "").trimStart().trimEnd(); //Removes trailing slash at the end
  return converted;
}
