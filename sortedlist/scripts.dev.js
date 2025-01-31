"use strict";

var tableData = {
  'Sergii': 38,
  'Andrii': 10,
  'Mykhailo': 33,
  'Oleksandr': 61
};
var table = document.getElementById('table');
var tableHeads = document.getElementsByTagName('th');
var htmlData = '';
var tbodyData = '';
var sortMeth;
var sortedTable;

function sortByName(dataToSort) {
  var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';
  return Object.keys(dataToSort).sort(function (a, b) {
    if (direction === 'asc') {
      return a.localeCompare(b);
    } else {
      return b.localeCompare(a);
    }
  }).reduce(function (acc, key) {
    acc[key] = dataToSort[key];
    return acc;
  }, {});
}

function tableBuild(objectData) {
  htmlData = "<table><thead><tr><th scope=\"col\">Name</th><th scope=\"col\">Age</th></tr></thead><tbody>";

  for (var key in objectData) {
    tbodyData += "<tr><td>".concat(key, "</td><td>").concat(objectData[key], "</td></tr>");
  }

  htmlData += "".concat(tbodyData, "</tbody></table>");
  table.innerHTML = htmlData;
  tbodyData = '';
}

tableBuild(tableData);
document.addEventListener('click', function (e) {
  if (e.target.innerHTML === 'Name') {
    if (sortMeth !== 'asc') sortedTable = sortByName(tableData);
    tableBuild(sortedTable);
  } else {}
});