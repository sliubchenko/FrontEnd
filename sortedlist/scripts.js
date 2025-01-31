const tableData = {
    'Sergii': 38,
    'Andrii': 10,
    'Mykhailo': 33,
    'Oleksandr': 61
};
const table = document.getElementById('table');
const tableHeads = document.getElementsByTagName('th');
let htmlData = '';
let tbodyData = '';
let sortMeth;
let sortedTable;

function sortByName(dataToSort, direction = 'asc') {
    return Object.keys(dataToSort)
    .sort((a, b) => 
    {
        if (direction === 'asc') {
            return a.localeCompare(b);
        }
        else {
            return b.localeCompare(a);
        }
    })
    .reduce((acc, key) => {
        acc[key] = dataToSort[key];
        return acc;
    }, {});
}

function tableBuild(objectData) {
    htmlData = `<table><thead><tr><th scope="col">Name</th><th scope="col">Age</th></tr></thead><tbody>`;

    for (let key in objectData) {
        tbodyData += `<tr><td>${key}</td><td>${objectData[key]}</td></tr>`;
    }

    htmlData += `${tbodyData}</tbody></table>`;
    table.innerHTML = htmlData;
    tbodyData = '';
}

tableBuild(tableData);

document.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'Name') {
        if (sortMeth !== 'asc')
    }
});
