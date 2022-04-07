const myNames = [];
const parentNode = document.getElementById("spanResult");
const Subm_btn = document.getElementById("sub_btn");
const reset_btn = document.getElementById("reset_btn");
const number = document.getElementById("peopleNo");
const resultDiv=document.getElementById('results');
const titleName=document.getElementById('Tname');
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
 * Captures user inputs when the enter button is pressed
 */
function CollectNames() {
  enter.onclick = function () {
    if (myNames.length === 0 && number.value != 0) {
      GeneratorCollector();
      enter.hidden = true;
      Subm_btn.hidden = false;
    }
  };
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
  }
  enter.hidden = false;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //display winner
}

function getWinner(){
  let index=getRandom(parseInt(number.min),parseInt(number.value));
  let Winner=myNames[index].value;
  return Winner;

}

// ...............................
CollectNames();




Subm_btn.onclick = function () {

  let fName=getWinner();
  //  console.log(fName);
  let par = document.createElement("p");
  
  let textToAdd=document.createTextNode(` The Winner of the ${titleName.value} is ${fName} `);
  par.appendChild(textToAdd);
  resultDiv.appendChild(par);

  // reset();
  reset_btn.hidden = false;
  Subm_btn.hidden = true;
  // reset();
};

reset_btn.onclick = function () {
  reset();
  // console.log("Hello");
};

// let form = document.getElementsByTagName("form")[0];

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   sendData();
// });
