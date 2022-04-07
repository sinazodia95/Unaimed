const myNames = [];
const parentNode = document.getElementById("spanResult");
const Subm_btn = document.getElementById("sub_btn");
const reset_btn = document.getElementById("reset_btn");
const number = document.getElementById("peopleNo");
const resultDiv = document.getElementById("results");
const titleName = document.getElementById("Tname");
/************************************************
 *
 */

function GeneratorCollector() {
  const names = [];

  for (let i = 0; i < parseInt(number.value); i++) {
    let inputTag = document.createElement("input");
    names.push(inputTag);
  }

  names.forEach((name) => {
    parentNode.appendChild(name);
    myNames.push(name);
  });
}

/*********************************************************
 * Captures user inputs
 */
function CollectNames() {
  if (myNames.length === 0 && number.value != 0) {
    GeneratorCollector();
    enter.hidden = true;
    Subm_btn.hidden = false;
  }
}

/************************************************************
 * Reset the screen elements
 */
function reset() {
  if (myNames.length != 0) {
    let i = 0;
    do {
      let child = parentNode.lastChild;
      parentNode.removeChild(child);
      i++;
    } while (i < parseInt(number.value));

    number.value = 0;
    myNames.length = 0;
    resultDiv.removeChild(resultDiv.firstChild);
    titleName.value = "";
  }
  enter.hidden = false;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinner() {
  let seed = getRandom(parseInt(number.min), parseInt(number.value));
  let index = seed - 1;
  let Winner = myNames[index].value;
  return Winner;
}
