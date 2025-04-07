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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  ".",
  "-",
  "/",
  " ",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Shift",
  "Ctrl+V",
  "Ctrl+C",
];

export function isValidString(str) {
  const hasUppercase = /[A-Z]/.test(str);
  const hasLowercase = /[a-z]/.test(str);
  const hasDot = /\./.test(str);
  const hasDash = /-/.test(str);
  return (hasLowercase || hasUppercase) && !(hasDot || hasDash);
}

export function isValidMorse(str) {
  const hasDot = /\./.test(str);
  const hasDash = /-/.test(str);
  const hasSlash = /\//.test(str);
  return hasDot || hasDash || hasSlash;
}

export function isNotValidInput(ch) {
  return !characters.includes(ch);
}

export function mixedValues(str) {
  const hasAlpha = /[a-zA-Z]/.test(str);
  const hasDot = /\./.test(str);
  const hasDash = /-/.test(str);
  const hasSlash = /\//.test(str);

  return hasAlpha && (hasDot || hasDash || hasSlash);
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
  return "#";
}

export function convertStr(sentence) {
  let converted = "";
  // console.log("input to convert" + sentence);
  if (mixedValues(sentence)) {
    // console.log("Mixed input detected");
    converted = "";
    return converted;
  }

  if (isValidString(sentence)) {
    // console.log("String input detected");
    let tempArr = sentence.toUpperCase().split(" ");

    for (let i = 0; i < tempArr.length; i++) {
      let wordArr = tempArr[i].split("");
      for (let char in wordArr) {
        converted += convertChar(wordArr[char], null, obj) || "#";
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
        converted += convertChar(null, tempArr[ch], obj) || "#";
      }
    }
  }
  converted = converted.replace(/\/$/, "").trimStart().trimEnd(); //Removes trailing slash at the end
  return converted;
}
