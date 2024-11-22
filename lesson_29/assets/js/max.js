const radius = prompt("Set the radius");
const area = parseFloat((Math.PI * radius * radius).toFixed(3));
alert(`The area is ${area}`);

const distance = prompt("Set the distance in km");
const trip_time = prompt("Set desired trip time in hours");
const expected_speed = parseFloat((distance / trip_time).toFixed(3));
alert(`Expected speed is ${expected_speed} km/h`);

const usd = prompt("Set USD amount");
const rate = 0.96;
const euro = parseFloat((usd * rate).toFixed(2));
alert(`${usd} USD is ${euro} EURO`);