"use strict";

var radius = prompt("Set the radius");
var area = parseFloat((Math.PI * radius * radius).toFixed(3));
alert("The area is ".concat(area));
var distance = prompt("Set the distance in km");
var trip_time = prompt("Set desired trip time in hours");
var expected_speed = parseFloat((distance / trip_time).toFixed(3));
alert("Expected speed is ".concat(expected_speed, " km/h"));
var usd = prompt("Set USD amount");
var rate = 0.96;
var euro = parseFloat((usd * rate).toFixed(2));
alert("".concat(usd, " USD is ").concat(euro, " EURO"));