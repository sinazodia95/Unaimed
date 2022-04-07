const myNames = [];
const parentNode = document.getElementById("spanResult");
const Subm_btn = document.getElementById("sub_btn");
const reset_btn = document.getElementById("reset_btn");
const number = document.getElementById("peopleNo");
const title=document.getElementById("Tname");
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
  }
  enter.hidden = false;
}

function getWinner() 

{
  //display winner
  // alert(myNames.indexOf[Math.floor(Math.random() * myNames.length)]);
  //  alert(title.value)
   alert("The winner of "+title.value+" is: "+myNames[Math.floor(Math.random() * myNames.length)].value);

}


