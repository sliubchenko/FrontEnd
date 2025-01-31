const carousel = document.querySelector('.carousel');
const frame = document.querySelectorAll('.frame');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const count = document.querySelector('.count');
const shadow = document.querySelector('.shadow');
const zoomed = document.querySelector('.zoomed');
const qty = carousel.children.length;
const smooth = { behavior: 'smooth'};
let currentElem = 0;
let autoScroll;

carousel.children[currentElem].scrollIntoView();

setCount(currentElem);
startInterval();

shadow.addEventListener('mouseenter', () => stopInterval());
shadow.addEventListener('mouseleave', () => startInterval());
carousel.addEventListener('mouseenter', () => stopInterval());
carousel.addEventListener('mouseleave', () => startInterval());
prev.addEventListener('click', () => shift(-1));
prev.addEventListener('mouseenter', () => stopInterval());
prev.addEventListener('mouseleave', () => startInterval());
next.addEventListener('click', () => shift());
next.addEventListener('mouseenter', () => stopInterval());
next.addEventListener('mouseleave', () => startInterval());

carousel.addEventListener('click', (event) => {
    const targetFrame = event.target.closest('.frame');
    if (!targetFrame) return;
    shadow.classList.toggle('zoom');
    showZoomedImage(currentElem);
});

shadow.addEventListener('click', () => {
    shadow.classList.toggle('zoom');
    startInterval();
});

shadow.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (e.deltaY > 0) {
        shift(1);
    } else {
        shift(-1);
    }
    showZoomedImage(currentElem);
})

function setCount(n) {
    count.textContent = `${n + 1} / ${qty}`;
};

function startInterval() {
    stopInterval();
    autoScroll = setInterval(() => shift(), 1000);
};

function stopInterval() {
    clearInterval(autoScroll);
};

function shift(step = 1) {
    currentElem = (currentElem + step + qty) % qty;
    carousel.children[currentElem].scrollIntoView(smooth);
    setCount(currentElem);
};

function showZoomedImage(index) {
    zoomed.innerHTML = '';
    const clonedFrame = frame[index].cloneNode(true);
    zoomed.appendChild(clonedFrame);
};
