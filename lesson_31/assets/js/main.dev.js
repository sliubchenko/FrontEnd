"use strict";

alert('!Min level!');
alert('1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.');
var age = parseInt(prompt('What is your age?'));

if (!isNaN(age)) {
  if (age > 0 && age < 12) {
    alert('You are child.');
  } else if (age >= 12 && age < 18) {
    alert('You are kid.');
  } else if (age >= 18 && age < 60) {
    alert('You are adult.');
  } else if (age >= 60 && age <= 120) {
    alert('You are pensioner.');
  } else {
    alert('Age is not correct!');
  }
}

alert('2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).');
var digit = prompt('Enter the digit from 0 to 9.');

switch (digit) {
  case '0':
    alert("".concat(digit, " = )"));
    break;

  case '1':
    alert("".concat(digit, " = !"));
    break;

  case '2':
    alert("".concat(digit, " = @"));
    break;

  case '3':
    alert("".concat(digit, " = #"));
    break;

  case '4':
    alert("".concat(digit, " = $"));
    break;

  case '5':
    alert("".concat(digit, " = %"));
    break;

  case '6':
    alert("".concat(digit, " = ^"));
    break;

  case '7':
    alert("".concat(digit, " = &"));
    break;

  case '8':
    alert("".concat(digit, " = *"));
    break;

  case '9':
    alert("".concat(digit, " = ("));
    break;

  default:
    alert('Enter correct digit!');
}

alert('3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.');
var a = parseInt(prompt('Enter first number.')),
    b = parseInt(prompt('Enter second different number.'));
var sum = 0,
    min,
    max;

if (!isNaN(a) && !isNaN(b) && a != b) {
  min = Math.min(a, b);
  max = Math.max(a, b);
} else {
  alert('Enter correct numbers!');
}

for (var _i = min; _i <= max; _i++) {
  sum += _i;
}

alert("Sum is ".concat(sum));
alert('4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.');
var c = parseInt(prompt('Enter first positive number.')),
    d = parseInt(prompt('Enter second different positive number.'));
var minim,
    div_nums = '';

if (!isNaN(c) && !isNaN(d) && c != d && c > 0 && d > 0) {
  minim = Math.min(c, d);
  div_nums += 1;

  for (var _i2 = 2; _i2 <= minim; _i2++) {
    if (c % _i2 == 0 && d % _i2 == 0) {
      div_nums += ', ' + _i2;
    }
  }

  alert("Dividers are ".concat(div_nums));
} else {
  alert('Enter correct numbers!');
}

alert('5. Запитай у користувача число і виведи всі дільники цього числа.');
var e = parseInt(prompt('Enter positive number'));
var dividers = '';

if (!isNaN(e)) {
  dividers = '1';

  for (i = 2; i <= Math.floor(e / 2); i++) {
    if (e % i == 0) {
      dividers += ', ' + i;
    }
  }

  dividers += ', ' + e;
}

alert("Dividers are ".concat(dividers));
alert('!Norm level!');
alert('1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.');
var palindrome = parseInt(prompt("Enter positive 5-digits number."));
var pal_reverse = '',
    pal_temp = palindrome;

if (palindrome > 9999 && palindrome <= 99999) {
  while (pal_temp > 0) {
    pal_reverse += pal_temp % 10;
    pal_temp = Math.trunc(pal_temp / 10);
  }

  if (parseInt(pal_reverse) == palindrome) {
    alert("Number ".concat(palindrome, " is palindrome."));
  } else {
    alert("Number ".concat(palindrome, " is not palindrome."));
  }
} else {
  alert('Enter correct number!');
}

alert("2. \u0417\u0430\u043F\u0438\u0442\u0430\u0439 \u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \u0441\u0443\u043C\u0443 \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u0456 \u0432\u0438\u0432\u0435\u0434\u0438 \u0441\u0443\u043C\u0443 \u0434\u043E \u043E\u043F\u043B\u0430\u0442\u0438 \u0437\u0456 \u0437\u043D\u0438\u0436\u043A\u043E\u044E:\n\u0432\u0456\u0434 200 \u0434\u043E 300 - \u0437\u043D\u0438\u0436\u043A\u0430 \u0431\u0443\u0434\u0435 3%; \n\u0432\u0456\u0434 300 \u0434\u043E 500 - 5%;\n\u0432\u0456\u0434 500 \u0456 \u0432\u0438\u0449\u0435 - 7%.");
var order_sum = parseFloat(prompt('Enter the order sum.'));
var bill;

if (!isNaN(order_sum)) {
  if (order_sum < 200) {
    alert("Your bill is ".concat(order_sum));
  }

  if (order_sum >= 200 && order_sum < 300) {
    bill = (order_sum * 0.97).toFixed(2);
    alert("Your bill is ".concat(bill));
  }

  if (order_sum >= 300 && order_sum < 500) {
    bill = (order_sum * 0.95).toFixed(2);
    alert("Your bill is ".concat(bill));
  }

  if (order_sum >= 500) {
    bill = (order_sum * 0.93).toFixed(2);
    alert("Your bill is ".concat(bill));
  }
} else {
  alert('Enter correct order sum!');
}

alert("3. \u0417\u0430\u043F\u0438\u0442\u0430\u0439 \u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 10 \u0447\u0438\u0441\u0435\u043B \u0456 \u043F\u043E\u0440\u0430\u0445\u0443\u0439, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0432\u0456\u043D \u0432\u0432\u0456\u0432 \u0434\u043E\u0434\u0430\u0442\u043D\u0456\u0445, \u0432\u0456\u0434\u2019\u0454\u043C\u043D\u0438\u0445 \u0456 \u043D\u0443\u043B\u0456\u0432. \u041F\u0440\u0438 \u0446\u044C\u043E\u043C\u0443 \u0442\u0430\u043A\u043E\u0436 \u043F\u043E\u0440\u0430\u0445\u0443\u0439, \u0441\u043A\u0456\u043B\u044C\u043A\u0438 \u0437 \u043D\u0438\u0445 \u043F\u0430\u0440\u043D\u0438\u0445 \u0456 \u043D\u0435\u043F\u0430\u0440\u043D\u0438\u0445. \n    \u0412\u0438\u0432\u0435\u0434\u0438 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0443 \u043D\u0430 \u0435\u043A\u0440\u0430\u043D. \u0412\u0440\u0430\u0445\u043E\u0432\u0443\u0439, \u0449\u043E \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043E\u0434\u043D\u0456\u0454\u0457 \u0437\u043C\u0456\u043D\u043D\u043E\u0457 (\u043D\u0435 10) \u0434\u043B\u044F \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0447\u0438\u0441\u0435\u043B \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043C.");
var dodatnych = 0,
    vidjemnych = 0,
    nuliv = 0,
    parnych = 0,
    neparnych = 0,
    ten_numbers;

for (i = 0; i < 10; i++) {
  ten_numbers = parseInt(prompt('Enter one of ten numbers.'));

  if (!isNaN(ten_numbers)) {
    if (ten_numbers == 0) {
      nuliv++;
    } else {
      if (ten_numbers % 2 == 0) {
        parnych++;
      } else {
        neparnych++;
      }

      if (ten_numbers > 0) {
        dodatnych++;
      } else {
        vidjemnych++;
      }
    }
  }
}

alert("Dodatnych = ".concat(dodatnych, "\n        Vidjemnych = ").concat(vidjemnych, "\n        Parnych = ").concat(parnych, "\n        Neparnych = ").concat(neparnych, "\n        Nuliv = ").concat(nuliv));
alert('4. ЗАКОМЕНТОВАНО! Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.'); // const today = new Date();
// let dayOfWeek = today.getDay();
// while (true) {
//     if (dayOfWeek < 7) {
//         switch(String(dayOfWeek)) {
//             case '0':
//                 alert(`Сьогодні Неділя. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '1':
//                 alert(`Сьогодні Понеділок. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '2':
//                 alert(`Сьогодні Вівторок. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '3':
//                 alert(`Сьогодні Середа. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '4':
//                 alert(`Сьогодні Четвер. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '5':
//                 alert(`Сьогодні П'ятниця. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//             case '6':
//                 alert(`Сьогодні Субота. Хочеш побачити наступний день?`);
//                 dayOfWeek++;
//                 break;
//         }
//     }
//     else {
//         dayOfWeek = 0;
//     }
// }

alert('!Max level!');
alert("1. \u0413\u0440\u0430 \xAB\u0412\u0433\u0430\u0434\u0430\u0439 \u0447\u0438\u0441\u043B\u043E\xBB. \u0417\u0430\u043F\u0440\u043E\u043F\u043E\u043D\u0443\u0439 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u0432\u0456 \u0437\u0430\u0433\u0430\u0434\u0430\u0442\u0438 \u0447\u0438\u0441\u043B\u043E \u0432\u0456\u0434 0 \u0434\u043E 100 \u0456 \u0432\u0456\u0434\u0433\u0430\u0434\u0430\u0439 \u0439\u043E\u0433\u043E \u043D\u0430\u0441\u0442\u0443\u043F\u043D\u0438\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C: \u043A\u043E\u0436\u043D\u0443 \u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044E \u0446\u0438\u043A\u043B\u0443 \u0434\u0456\u043B\u0438 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D \u0447\u0438\u0441\u0435\u043B \u043D\u0430\u0432\u043F\u0456\u043B, \u0437\u0430\u043F\u0438\u0441\u0443\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 N \u0456 \u043F\u0438\u0442\u0430\u0439 \u0443 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430 \xAB\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E> N, <N \u0430\u0431\u043E == N?\xBB. \u0417\u0430\u043B\u0435\u0436\u043D\u043E \u0432\u0456\u0434 \u0442\u043E\u0433\u043E \u0449\u043E \u0432\u043A\u0430\u0437\u0430\u0432 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447, \u0437\u043C\u0435\u043D\u0448\u0443\u0439 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D. \u041F\u043E\u0447\u0430\u0442\u043A\u043E\u0432\u0438\u0439 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D \u0432\u0456\u0434 0 \u0434\u043E 100, \u043F\u043E\u0434\u0456\u043B\u0438 \u043D\u0430\u0432\u043F\u0456\u043B \u0456 \u043E\u0442\u0440\u0438\u043C\u0430\u0439 50. \u042F\u043A\u0449\u043E \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0432\u043A\u0430\u0437\u0430\u0432, \u0449\u043E \u0439\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u043E> 50, \u0442\u043E \u0437\u043C\u0456\u043D\u0438 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D \u043D\u0430 \u0432\u0456\u0434 50 \u0434\u043E 100. \u0406 \u0442\u0430\u043A \u0434\u043E \u0442\u0438\u0445 \u043F\u0456\u0440, \u043F\u043E\u043A\u0438 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043D\u0435 \u0432\u0438\u0431\u0435\u0440\u0435 == N (\u0431\u0443\u0434\u0435 \u043A\u043E\u0440\u0438\u0441\u043D\u0438\u043C \u043F\u043E\u0447\u0438\u0442\u0430\u0442\u0438 \u043F\u0440\u043E \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C: \"\u0431\u0456\u043D\u0430\u0440\u043D\u0438\u0439 \u043F\u043E\u0448\u0443\u043A\").");
var left = 0,
    right = 100;

while (left <= right) {
  var mid = Math.floor((left + right) / 2);
  var answer = prompt("Is your number ".concat(mid, "? Options are > < ="));

  if (answer == '=') {
    alert('Great! We did it!');
    break;
  }

  if (answer == '>') {
    left = mid + 1;
    continue;
  }

  if (answer == '<') {
    right = mid - 1;
    continue;
  } else {
    alert('Whong symbol!');
    continue;
  }
}

alert('2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.');
var tableContainer = document.getElementById('table-container');
var tableHTML = '<table>';

for (var _i3 = 1; _i3 <= 10; _i3++) {
  tableHTML += '<tr>';

  for (var j = 2; j <= 9; j++) {
    tableHTML += "<td>".concat(j, " x ").concat(_i3, " = ").concat(_i3 * j, "</td>");
  }

  tableHTML += '</tr>';
}

tableHTML += '</table>';
tableContainer.innerHTML = tableHTML;
alert('3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.');
var day = parseInt(prompt('Set the date day.')),
    month = parseInt(prompt('Set the date month.')),
    year = parseInt(prompt('Set the date day.'));

if (day == 28 && month == 2 && !(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
  day = 1;
  month++;
} else if (day == 29 && month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
  day = 1;
  month++;
} else if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
  day = 1;
  month++;
} else if (day == 31) {
  day = 1;
  month++;
} else {
  day++;
}

if (month > 12) {
  month = 1;
  year++;
}

alert("The next day is ".concat(day, "-").concat(month, "-").concat(year));