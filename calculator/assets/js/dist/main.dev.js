"use strict";

var display = document.getElementById('display');
var result = 0;
document.addEventListener("click", function (e) {
  var clickedBtn = e.target;
  clickedBtn.classList.add('clicked');
  setTimeout(function () {
    clickedBtn.classList.remove('clicked');
  }, 100);

  if (e.target.tagName.toLowerCase() === 'td') {
    if (e.target.innerHTML === 'C') {
      display.innerHTML = '';
      result = 0;
      return;
    }

    if (!isNaN(e.target.innerHTML) && display.innerHTML.length < 10) {
      display.innerHTML += e.target.innerHTML;
    }

    if (e.target.innerHTML === '+') {
      result += parseInt(display.innerHTML);
      display.innerHTML = result;
    }

    if (e.target.innerHTML === '=') {
      display.innerHTML = result;
    }
  }
});