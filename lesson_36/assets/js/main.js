const textArea = document.getElementById('textLine');
const textEdit = document.getElementById('textEdit');

document.addEventListener('keydown', function(e) {
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

document.querySelectorAll('th').forEach((header, index) => {
    header.addEventListener('click', () => {
        const table = header.closest('table');
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.rows);
        const type = header.dataset.type;
        const isAscending = header.dataset.order === 'asc';

        rows.sort((rowA, rowB) => {
            const cellA = rowA.cells[index].textContent.trim();
            const cellB = rowB.cells[index].textContent.trim();

            if (type === 'number') {
                return isAscending ? cellA - cellB : cellB - cellA;
            } else {
            return isAscending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
            }
        });

        header.dataset.order = isAscending ? 'desc' : 'asc';

        tbody.append(...rows);
    });
});

const resizableBlock = document.getElementById('resizableBlock');

resizableBlock.addEventListener('mousedown', function(e) {
    
});