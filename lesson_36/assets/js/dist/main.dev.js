"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var textArea = document.getElementById('textLine');
var textEdit = document.getElementById('textEdit');
document.addEventListener('keydown', function (e) {
  if (e.code === 'KeyE' && e.ctrlKey) {
    e.preventDefault();
    textEdit.value = textArea.textContent.trim();
    textArea.style.display = 'none';
    textEdit.style.display = 'block';
    textEdit.focus();
  }

  if (e.code === 'KeyS' && e.ctrlKey) {
    e.preventDefault();
    textArea.textContent = textEdit.value.trim();
    textEdit.style.display = 'none';
    textArea.style.display = 'block';
    textArea.focus();
  }
});
document.querySelectorAll('th').forEach(function (header, index) {
  header.addEventListener('click', function () {
    var table = header.closest('table');
    var tbody = table.querySelector('tbody');
    var rows = Array.from(tbody.rows);
    var type = header.dataset.type;
    var isAscending = header.dataset.order === 'asc';
    rows.sort(function (rowA, rowB) {
      var cellA = rowA.cells[index].textContent.trim();
      var cellB = rowB.cells[index].textContent.trim();

      if (type === 'number') {
        return isAscending ? cellA - cellB : cellB - cellA;
      } else {
        return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
      }
    });
    header.dataset.order = isAscending ? 'desc' : 'asc';
    tbody.append.apply(tbody, _toConsumableArray(rows));
  });
});
var resizableBlock = document.getElementById('resizableBlock');
resizableBlock.addEventListener('mousedown', function (e) {});