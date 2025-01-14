const modal = document.getElementById('myModal');
const form = document.querySelector('form');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.onclick = openModal;
closeBtn.onclick = closeModal;
modal.onclick = clickOut;
modal.onkeydown = escapeModal;
form.onsubmit = handleSubmit;

function openModal() {
    modal.onanimationend = () => modal.removeAttribute('class');
    modal.className = 'fade-in';
    modal.showModal();
}

function closeModal() {
    modal.onanimationend = () => {
        modal.removeAttribute('class');
        modal.close();
    }
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