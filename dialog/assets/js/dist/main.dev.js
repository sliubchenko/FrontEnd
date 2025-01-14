"use strict";

var modal = document.getElementById('myModal');
var form = document.querySelector('form');
var openBtn = document.getElementById('openBtn');
var closeBtn = document.getElementById('closeBtn');
openBtn.onclick = openModal;
closeBtn.onclick = closeModal;
modal.onclick = clickOut;
modal.onkeydown = escapeModal;
form.onsubmit = handleSubmit;

function openModal() {
  modal.onanimationend = function () {
    return modal.removeAttribute('class');
  };

  modal.className = 'fade-in';
  modal.showModal();
}

function closeModal() {
  modal.onanimationend = function () {
    modal.removeAttribute('class');
    modal.close();
  };

  modal.className = 'fade-out';
}

function clickOut(e) {
  if (e.target === modal) closeModal();
}

function escapeModal(e) {
  if (e.key === 'Escape') {
    e.preventDefault();
    closeModal();
  }
}

function handleSubmit(e) {
  e.preventDefault();
  closeModal();
}