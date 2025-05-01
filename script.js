import {
  isNotValidInput,
  convertStr,
  translate_dict,
} from "./modules/module.js";

const inputTxtElem = document.getElementById("textarea1");
const outputTxtElem = document.getElementById("textarea2");
const displayTextElem = document.querySelector("p");

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

const dispArr = [];
for (const [key, value] of Object.entries(translate_dict)) {
  let tempVal = key + value + " ";
  // dispArr.push(`${key} : ${value}` + " ");
  dispArr.push(tempVal);
}

displayTextElem.textContent = dispArr;

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
