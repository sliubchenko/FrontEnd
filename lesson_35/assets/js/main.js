var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
    ];

let songsElement = document.getElementById("songs");
let songs = '<ol>';
for (let i in playList) {
    songs += `<li>${playList[i]["author"]} - ${playList[i]["song"]}</li>`;
}
songs += '</ol>';
songsElement.innerHTML = songs;



function openModal() {
    const modal = document.getElementById('modal-window');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal-window');
    modal.style.display = 'none';
}



const colors = ['red', 'yellow', 'green'];
let current_index = 0;

function nextColor() {
    colors.forEach(color => {
        document.getElementById(color).classList.remove('active');
    });
    current_index = (current_index + 1) % colors.length;
    const nextColor = colors[current_index];
    document.getElementById(nextColor).classList.add('active');
}

document.getElementById(colors[current_index].classList.add('active'));