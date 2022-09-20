enter.onclick = function () {
    CollectNames();
  };
  // Collect names upon clicking the Submit button
  Subm_btn.onclick = function () {
    let fName = getWinner();
  
    let par = document.createElement("p");
  
    let textToAdd = document.createTextNode(
      ` The Winner of the ${titleName.value} is ${fName} `
    );
    par.appendChild(textToAdd);
    resultDiv.appendChild(par);
  
    reset_btn.hidden = false;
    Subm_btn.hidden = true;
  };
  
  // Reset the program upon clicking the Reset button
  reset_btn.onclick = function () {
    reset();
  };

  // Define what happens on successful data submission
  XHR.addEventListener("load", function(event) {
    if (XHR.readyState === XHR.DONE) {
      if (XHR.status === 200) {
        alert("Your order has been received! Check your email.");
      } else {
        alert("Oh oh! We have a problem! " + XHR.responseText + ".");
      }
    }
  });  