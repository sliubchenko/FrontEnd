const btnStartStop = document.getElementById('startStop');
const display = document.getElementById('digits');
const btnReset = document.getElementById('reset');
let timer;
let isRun = false;
let dseconds = 0;
let counter = 0;
const bgColors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet'];

function updateTime() {
    const currentColor = display.style.color;
    dseconds++;
    const displayMinutes = Math.floor(dseconds / 600);
    const displaySeconds = dseconds % 600;
    display.innerHTML = `${displayMinutes}:${displaySeconds.toString().padStart(3, '0')}`;
    display.style.background = bgColors[Math.round(Math.random() * bgColors.length)];
    display.style.color = currentColor === "black" ? "white" : "black";
    display.style.width = `${displaySeconds + 200}px`;
};

btnStartStop.addEventListener('click', () => {
    if (!isRun) {
        btnStartStop.innerHTML = 'Stop';
        timer = setInterval(updateTime, 100);
        isRun = true;
        counter++;
        btnStartStop.innerHTML += ` (${counter})`;
    } else {
        btnStartStop.innerHTML = 'Start';
        clearInterval(timer);
        isRun = false;
        btnStartStop.innerHTML += ` (${counter + 1})`;
    }
});

btnReset.addEventListener('click', () => {
    if (!isRun) {
        dseconds = 0;
        display.innerHTML = '0:000';
        display.style.background = 'white';
        display.style.color = "black";
        display.style.width = `200px`;
        btnStartStop.innerHTML = 'Start';
    };
});