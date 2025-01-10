"use strict";

var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];
var songsElement = document.getElementById("songs");
var songs = '<ol>';

for (var i in playList) {
  songs += "<li>".concat(playList[i]["author"], " - ").concat(playList[i]["song"], "</li>");
}

songs += '</ol>';
songsElement.innerHTML = songs;

function openModal() {
  var modal = document.getElementById('modal-window');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal-window');
  modal.style.display = 'none';
}

var colors = ['red', 'yellow', 'green'];
var current_index = 0;

function nextColor() {
  colors.forEach(function (color) {
    document.getElementById(color).classList.remove('active');
  });
  current_index = (current_index + 1) % colors.length;
  var nextColor = colors[current_index];
  document.getElementById(nextColor).classList.add('active');
}

document.getElementById(colors[current_index].classList.add('active'));