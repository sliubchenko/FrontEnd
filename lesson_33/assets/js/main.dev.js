"use strict";

//  Min
// const car = {
//     brand: "Skoda",
//     model: "Fabia",
//     year: 2023,
//     avgSpeed: 90,
//     fuelCapac: 50,
//     avgFuelCons: 5,
//     drivers: [
//         "Sergii",
//         "Mykhailo"
//     ],
//     info() {    // 1.1
//         let carInfo = '<ul>';
//         Object.keys(car).forEach(key => {
//             if (typeof car[key] !== 'function' && typeof car[key] !== 'object') {
//                 carInfo += `<li><b>${key}</b>: ${car[key]}</li>`
//             }
//         })
//         carInfo += '</ul>';
//         return carInfo;
//     },
//     driverAdd() {   // 1.2
//         const newDriver = prompt('Enter driver name. Than you can use checkDriver("name") to find the driver. For trip data use tripData(distance).');
//         this.drivers.push(newDriver);
//     },
//     showDrivers() {
//         let drivers = ''
//         Object.values(car.drivers).forEach(value => {
//             drivers += value + ' ';
//         })
//         return drivers;
//     },
//     checkDriver(name) { // 1.3
//         return Object.values(car.drivers).some(value => value === name);
//     },
//     tripData(distance) {    // 1.4
//         let tripTime = (distance / this.avgSpeed);
//         if (tripTime > 4) {
//             tripTime += Math.trunc(tripTime / 4);
//         }
//         fuelTotal = distance / 100 * this.avgFuelCons;
//         return `Trip time ${tripTime.toFixed(3)} h and total consumtion is ${fuelTotal} l`;
//     }
// }
// car.driverAdd();
// const carFullInfo = car.info();
// document.getElementById('carFullInfo').innerHTML = carFullInfo;
// const showAllDrivers = car.showDrivers();
// document.getElementById('showAllDrivers').innerHTML = showAllDrivers;
//  Norm
// const clock = {
//     h: 12,
//     m: 25,
//     s: 45,
//     showTime() {
//         Object.keys(clock).forEach(key => {
//             if (typeof clock[key] !== 'function' && typeof clock[key] !== 'object') {
//                 console.log(`${key}: ${clock[key]}`);
//             }
//         })
//         console.log(`${clock.h}:${clock.m}:${clock.s}`);
//     },
//     sChange(sec) {
//         let newS = this.s + sec;
//         let newM = this.m;
//         let newH = this.h;
//         if (newS > 59) {
//             newM += Math.trunc(newS / 60);
//             newS = newS % 60;
//             if (newM > 59) {
//                 newH += Math.trunc(newM / 60);
//                 newM = newM % 60;
//                 if (newH > 23) {
//                     newH = newH % 24;
//                 }
//             }
//         }
//         return console.log(`${newH}:${newM}:${newS}`);
//     },
//     mChange(min) {
//         const newS = this.s;
//         let newM = this.m + min;
//         let newH = this.h;
//             if (newM > 59) {
//                 newH += Math.trunc(newM / 60);
//                 newM = newM % 60;
//                 if (newH > 23) {
//                     newH = newH % 24;
//                 }
//             }
//         return console.log(`${newH}:${newM}:${newS}`);
//     },
//     hChange(hour) {
//         let newS = this.s;
//         let newM = this.m;
//         let newH = this.h + hour;
//                 if (newH > 23) {
//                     newH = newH % 24;
//                 }
//         return console.log(`${newH}:${newM}:${newS}`);
//     }
// }
//  Max
function simplifier(cis, znam) {
  var min = Math.min(cis, znam);
  var max = Math.max(cis, znam);
  var div = 1;

  if (max % min === 0) {
    div = min;
  } else {
    for (var i = 1; i <= Math.floor(min / 2); i++) {
      if (min % i === 0 && max % i === 0) {
        div = i;
      }
    }
  }

  return div;
}

var drib = {
  cis1: 0,
  znam1: 0,
  plus: function plus(cis2, znam2) {
    var newZnam = 0;
    var newCis1 = 0;
    var newCis2 = 0;
    var newCis = 0;

    if (znam2 !== this.znam1) {
      newZnam = znam2 * this.znam1;
      newCis1 = this.cis1 * znam2;
      newCis2 = cis2 * this.znam1;
      newCis = newCis1 + newCis2;
    } else {
      newCis = this.cis1 + cis2;
      newZnam = this.znam1;
    }

    return "".concat(newCis / simplifier(newCis, newZnam), "/").concat(newZnam / simplifier(newCis, newZnam));
  },
  minus: function minus(cis2, znam2) {
    var newZnam = 0;
    var newCis1 = 0;
    var newCis2 = 0;
    var newCis = 0;

    if (znam2 !== this.znam1) {
      newZnam = znam2 * this.znam1;
      newCis1 = this.cis1 * znam2;
      newCis2 = cis2 * this.znam1;
      newCis = newCis1 - newCis2;
    } else {
      newCis = this.cis1 - cis2;
      newZnam = this.znam1;
    }

    return "".concat(newCis / simplifier(newCis, newZnam), "/").concat(newZnam / simplifier(newCis, newZnam));
  },
  multi: function multi(cis2, znam2) {
    var newZnam = 0;
    var newCis1 = 0;
    var newCis2 = 0;
    var newCis = 0;
    newCis = this.cis1 * cis2;
    newZnam = this.znam1 * znam2;
    return "".concat(newCis / simplifier(newCis, newZnam), "/").concat(newZnam / simplifier(newCis, newZnam));
  },
  divis: function divis(cis2, znam2) {
    var newZnam = 0;
    var newCis1 = 0;
    var newCis2 = 0;
    var newCis = 0;
    newCis = this.cis1 * znam2;
    newZnam = this.znam1 * cis2;
    return "".concat(newCis / simplifier(newCis, newZnam), "/").concat(newZnam / simplifier(newCis, newZnam));
  }
};
drib.cis1 = parseInt(prompt('Введіть чисельник першого дробу'));
drib.znam1 = parseInt(prompt('Введіть знаменник першого дробу'));
nextCis = parseInt(prompt('Введіть чисельник другого дробу'));
nextZnam = parseInt(prompt('Введіть знаменник другого дробу'));
document.getElementById('sumaDrobiv').innerHTML = "".concat(drib.cis1, "/").concat(drib.znam1, " + ").concat(nextCis, "/").concat(nextZnam, " = ").concat(drib.plus(nextCis, nextZnam));
document.getElementById('riznycaDrobiv').innerHTML = "".concat(drib.cis1, "/").concat(drib.znam1, " - ").concat(nextCis, "/").concat(nextZnam, " = ").concat(drib.minus(nextCis, nextZnam));
document.getElementById('multiDrobiv').innerHTML = "".concat(drib.cis1, "/").concat(drib.znam1, " * ").concat(nextCis, "/").concat(nextZnam, " = ").concat(drib.multi(nextCis, nextZnam));
document.getElementById('divisDrobiv').innerHTML = "".concat(drib.cis1, "/").concat(drib.znam1, " / ").concat(nextCis, "/").concat(nextZnam, " = ").concat(drib.divis(nextCis, nextZnam));