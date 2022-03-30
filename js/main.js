CollectNames();

Subm_btn.onclick = function () {
  getWinner();
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
