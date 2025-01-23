let display = document.getElementById('display');
let result = 0;

document.addEventListener("click", function(e) {
    const clickedBtn = e.target;
    clickedBtn.classList.add('clicked');
    setTimeout(() => {
        clickedBtn.classList.remove('clicked');
    }, 100);
    if (e.target.tagName.toLowerCase() === 'td') {
        if (e.target.innerHTML === 'C') {
            display.innerHTML = '';
            result = 0;
            return;
        }
        if (!isNaN(e.target.innerHTML) && (display.innerHTML.length < 10)) {
            display.innerHTML += e.target.innerHTML;
        }
        if (e.target.innerHTML === '+') {
            result += parseInt(display.innerHTML);
            display.innerHTML = result;
        }
        if (e.target.innerHTML === '=') {
            display.innerHTML = result;
        }
    }
});