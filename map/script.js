var map = L.map('map').setView([48.14237097379207, 17.10010293342004], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([48.14237097379207, 17.10010293342004]).addTo(map);