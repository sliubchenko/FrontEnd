"use strict";

//Min
var a = 0.1;
var b = 0.2;
var c = (a + b).toFixed(1);
alert("1. The sum of 0.1 and 0.2 is ".concat(c));
var d = '1';
var e = 2;
var f = parseInt(d) + e;
alert("2. The sum of \"1\" and 2 is ".concat(f));
var usb = parseInt(prompt('Enter your usb-drive size in GB'));
var file = 820;
var files_qty = Math.floor(usb * 1024 / file);
alert("3. You can save ".concat(files_qty, " files on your drive")); //Norm

var budget = parseFloat(prompt('Enter your budget'));
var choco_price = parseFloat(prompt('Enter choco price'));
var choco_amount = Math.floor(budget / choco_price);
var rest = (budget - choco_price * choco_amount).toFixed(2);
alert("4. You can buy ".concat(choco_amount, " chocolate bars and get the rest ").concat(rest));
var number = parseInt(prompt('Enter your 3-digit number'));
var reverse = String(number % 10);
number = parseInt(number / 10);
reverse += String(number % 10);
number = parseInt(number / 10);
reverse += String(number);
alert("5. Reverse is ".concat(reverse)); //Max

var deposit = parseFloat(prompt('What is deposit amount?'));
var profit = (deposit * 0.05 / 12 * 2).toFixed(2); //     / 12 * 2    for clarily

alert("6. Your profit will be ".concat(profit));