"use strict";

var btnStartStop = document.getElementById('startStop');
var display = document.getElementById('digits');
var btnReset = document.getElementById('reset');
var timer;
var isRun = false;
var dseconds = 0;
var counter = 0;
var bgColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

function updateTime() {
  var currentColor = display.style.color;
  dseconds++;
  var displayMinutes = Math.floor(dseconds / 600);
  var displaySeconds = dseconds % 600;
  display.innerHTML = "".concat(displayMinutes, ":").concat(displaySeconds.toString().padStart(3, '0'));
  display.style.background = bgColors[Math.round(Math.random() * bgColors.length)];
  display.style.color = currentColor === "black" ? "white" : "black";
  display.style.width = "".concat(displaySeconds + 200, "px");
}

;
btnStartStop.addEventListener('click', function () {
  if (!isRun) {
    btnStartStop.innerHTML = 'Stop';
    timer = setInterval(updateTime, 100);
    isRun = true;
    counter++;
    btnStartStop.innerHTML += " (".concat(counter, ")");
  } else {
    btnStartStop.innerHTML = 'Start';
    clearInterval(timer);
    isRun = false;
    btnStartStop.innerHTML += " (".concat(counter + 1, ")");
  }
});
btnReset.addEventListener('click', function () {
  if (!isRun) {
    dseconds = 0;
    display.innerHTML = '0:000';
    display.style.background = 'white';
    display.style.color = "black";
    display.style.width = "200px";
    btnStartStop.innerHTML = 'Start';
  }

  ;
});