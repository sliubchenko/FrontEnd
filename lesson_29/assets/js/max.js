const radius = prompt("Set the radius");
const area = 3.14 * radius * radius;
alert(`The area is ${area}`);

const distance = prompt("Set the distance in km");
const trip_time = prompt("Set desired trip time in hours");
const expected_speed = distance / trip_time;
alert(`Expected speed is ${expected_speed} km/h`);

const usd = prompt("Set USD amount");
const rate = 0.96;
const euro = usd * rate;
alert(`${usd} USD is ${euro} EURO`);