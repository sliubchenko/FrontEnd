"use strict";

//  Min
//  1. Напиши всі можливі варіанти створення функцій.
//  - Оголошення Функції
//  - Функціональний Вираз
//  - Стрілкова функція
//  2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
function countArgs() {
  return arguments.length;
}

console.log("\u0410\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u0438 1, 2, 3. \u0407\u0445 \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C: ".concat(countArgs(1, 2, 3))); // 3. Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

function compareNumbers(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else return 0;
}

console.log("\u041F\u043E\u0440\u0456\u0432\u043D\u044E\u0454\u043C\u043E \u0447\u0438\u0441\u043B\u0430 23 \u0456 12. \u0424\u0443\u043D\u043A\u0446\u0456\u044F \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0454: ".concat(compareNumbers(23, 12))); //  4. Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(a) {
  if (a === 0 || a === 1) {
    return 1;
  } else return a * factorial(a - 1);
}

console.log("\u0424\u0430\u043A\u0442\u043E\u0440\u0456\u0430\u043B \u0432\u0456\u0434 5: ".concat(factorial(5))); //  5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function digitsToNumber(a, b, c) {
  return parseInt('' + a + b + c);
}

console.log("1 + 2 + 3 \u0431\u0443\u0434\u0435 '".concat(digitsToNumber(1, 2, 3))); //  6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function square(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a;
  return a * b;
}

console.log("\u041F\u043B\u043E\u0449\u0430: ".concat(square(2, 3))); //  Norm
//  1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfect(a) {
  var sum = 0;

  for (var i = 1; i <= Math.floor(a / 2); i++) {
    if (a % i === 0) {
      sum += i;
    }
  }

  return sum === a;
}

console.log("\u0427\u0438\u0441\u043B\u043E 6 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435? - ".concat(isPerfect(6)));
console.log("\u0427\u0438\u0441\u043B\u043E 3 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0435? - ".concat(isPerfect(3))); //  2. Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. 
//      Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerfect(a, b) {
  var min = Math.min(a, b);
  var max = Math.max(a, b);
  var perfNums = '';

  for (var i = min; i <= max; i++) {
    if (isPerfect(i)) {
      perfNums += i + ' ';
    }
  }

  return perfNums;
}

console.log("\u042F\u043A\u0456 \u0434\u043E\u0441\u043A\u043E\u043D\u0430\u043B\u0456 \u0447\u0438\u0441\u043B\u0430 \u0454 \u0443 \u0434\u0456\u0430\u043F\u0430\u0437\u043E\u043D\u0456 1-1000? - ".concat(findPerfect(1, 1000)));