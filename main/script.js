import {
  // isValidString,
  // isValidMorse,
  // mixedValues,
  // translate_dict,
  // characters,
  isNotValidInput,
  // convertChar,
  convertStr,
} from "../modules/module.js";

const inputTxtElem = document.getElementById("textarea1");
const outputTxtElem = document.getElementById("textarea2");

const buttonElem = document.getElementById("btn1");
let inputTxt = inputTxtElem.textContent;

buttonElem.addEventListener("click", function () {
  //Clean up input
  let inputText = inputTxtElem.value
    .replace(/\r?\n|\r/g, "")
    .replace(/\s+/g, " ")
    .trim();

  outputTxtElem.value = convertStr(inputText) || "#";
});

inputTxtElem.addEventListener("focus", function () {
  resetUI();
});

inputTxtElem.addEventListener("keypress", function (e) {
  if (isNotValidInput(e.key)) e.preventDefault();
});

function resetUI() {
  inputTxtElem.value = "";
  outputTxtElem.value = "";
}
