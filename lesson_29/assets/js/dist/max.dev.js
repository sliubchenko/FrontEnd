"use strict";

var radius = prompt("Set the radius");
var area = 3.14 * radius * radius;
alert("The area is ".concat(area));
var distance = prompt("Set the distance in km");
var trip_time = prompt("Set desired trip time in hours");
var expected_speed = distance / trip_time;
alert("Expected speed is ".concat(expected_speed, " km/h"));
var usd = prompt("Set USD amount");
var rate = 0.96;
var euro = usd * rate;
alert("".concat(usd, " USD is ").concat(euro, " EURO"));