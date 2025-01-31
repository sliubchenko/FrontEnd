"use strict";

var carousel = document.querySelector('.carousel');
var frame = document.querySelectorAll('.frame');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var countElements = document.querySelectorAll('.count');
var shadow = document.querySelector('.shadow');
var zoomed = document.querySelector('.zoomed');
var qty = carousel.children.length;
var smooth = {
  behavior: 'smooth'
};
var currentElem = 0;
var autoScroll;
carousel.children[currentElem].scrollIntoView();
setCount(currentElem);
startInterval();
shadow.addEventListener('mouseenter', function () {
  return stopInterval();
});
shadow.addEventListener('mouseleave', function () {
  return startInterval();
});
carousel.addEventListener('mouseenter', function () {
  return stopInterval();
});
carousel.addEventListener('mouseleave', function () {
  return startInterval();
});
prev.addEventListener('click', function () {
  return shift(-1);
});
prev.addEventListener('mouseenter', function () {
  return stopInterval();
});
prev.addEventListener('mouseleave', function () {
  return startInterval();
});
next.addEventListener('click', function () {
  return shift();
});
next.addEventListener('mouseenter', function () {
  return stopInterval();
});
next.addEventListener('mouseleave', function () {
  return startInterval();
});
carousel.addEventListener('click', function (event) {
  var targetFrame = event.target.closest('.frame');
  if (!targetFrame) return;
  shadow.classList.toggle('zoom');
  showZoomedImage(currentElem);
});
shadow.addEventListener('click', function () {
  shadow.classList.toggle('zoom');
  startInterval();
});
shadow.addEventListener('wheel', function (e) {
  e.preventDefault();

  if (e.deltaY > 0) {
    shift(1, 0);
  } else {
    shift(-1, 0);
  }

  ;
  showZoomedImage(currentElem);
});
carousel.addEventListener('wheel', function (e) {
  e.preventDefault();

  if (e.deltaY > 0) {
    shift(1, 1);
  } else {
    shift(-1, 1);
  }

  ;
});

function setCount(n) {
  countElements.forEach(function (count) {
    count.textContent = "".concat(n + 1, " / ").concat(qty);
  });
}

;

function startInterval() {
  stopInterval();
  autoScroll = setInterval(function () {
    return shift();
  }, 1000);
}

;

function stopInterval() {
  clearInterval(autoScroll);
}

;

function shift() {
  var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var d = arguments.length > 1 ? arguments[1] : undefined;
  currentElem = (currentElem + step + qty) % qty;
  carousel.children[currentElem].scrollIntoView(smooth);
  setCount(currentElem, d);
}

;

function showZoomedImage(index) {
  zoomed.innerHTML = '';
  var clonedFrame = frame[index].cloneNode(true);
  zoomed.appendChild(clonedFrame);
}

;