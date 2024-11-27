alert('!Min level!');

alert('1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.');
const age = parseInt(prompt('What is your age?'));
if (!isNaN(age)) {
    if ((age > 0) && (age < 12)) {
        alert('You are child.')
    } 
    else if ((age >= 12) && (age < 18)) {
        alert('You are kid.')
    } 
    else if ((age >=18) && (age < 60)) {
        alert('You are adult.')
    }
    else if ((age >= 60) && (age <= 120)) {
        alert('You are pensioner.')
    }
    else {
        alert('Age is not correct!')
    }
}

alert('2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).');
const digit = prompt('Enter the digit from 0 to 9.');
switch(digit) {
    case '0':
        alert(`${digit} = )`);
        break;
    case '1':
        alert(`${digit} = !`);
        break;
    case '2':
        alert(`${digit} = @`);
        break;
    case '3':
        alert(`${digit} = #`);
        break;
    case '4':
        alert(`${digit} = $`);
        break;
    case '5':
        alert(`${digit} = %`);
        break;
    case '6':
        alert(`${digit} = ^`);
        break;
    case '7':
        alert(`${digit} = &`);
        break;
    case '8':
        alert(`${digit} = *`);
        break;
    case '9':
        alert(`${digit} = (`);
        break;
    default:
        alert('Enter correct digit!');
}

alert('3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.');
const   a = parseInt(prompt('Enter first number.')),
        b = parseInt(prompt('Enter second different number.'));
let     sum = 0,
        min, 
        max;
if (!isNaN(a) && !isNaN(b) && (a != b)) {
    min = Math.min(a, b);
    max = Math.max(a, b);
}
else {
    alert('Enter correct numbers!')
}
for (let i = min; i <= max; i++) {
    sum += i;
}
alert(`Sum is ${sum}`);

alert('4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.');
const   c = parseInt(prompt('Enter first positive number.')),
        d = parseInt(prompt('Enter second different positive number.'));
let     minim,
        div_nums = '';
if (!isNaN(c) && !isNaN(d) && (c != d) && (c > 0) && (d > 0)) {
    minim = Math.min(c, d);
    div_nums += 1;
    for (let i = 2; i <= minim; i++) {
        if ((c % i == 0) && (d % i == 0)) {
            div_nums += ', ' + i;
        }
    }
    alert(`Dividers are ${div_nums}`);
}
else {
    alert('Enter correct numbers!');
}

alert('5. Запитай у користувача число і виведи всі дільники цього числа.');
const e = parseInt(prompt('Enter positive number'));
let dividers = '';
if (!isNaN(e)) {
    dividers = '1';
    for (i = 2; i <= Math.floor(e / 2); i++) {
        if (e % i == 0) {
            dividers += ', ' + i;
        }
    }
    dividers += ', ' + e;
}
alert(`Dividers are ${dividers}`);



alert('!Norm level!');

alert('1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.');
const   palindrome = parseInt(prompt("Enter positive 5-digits number."));
let     pal_reverse = '',
        pal_temp = palindrome;
if ((palindrome > 9999) && (palindrome <= 99999)) {
    while (pal_temp > 0) {
        pal_reverse += pal_temp % 10;
        pal_temp = Math.trunc(pal_temp / 10);
    }
    if (parseInt(pal_reverse) == palindrome) {
        alert(`Number ${palindrome} is palindrome.`);
    }
    else {
        alert(`Number ${palindrome} is not palindrome.`);
    }
}
else {
    alert('Enter correct number!');
}

alert(`2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.`);
const order_sum = parseFloat(prompt('Enter the order sum.'));
let bill;
if (!isNaN(order_sum)) {
    if (order_sum < 200) {
        alert(`Your bill is ${order_sum}`);
    }
    if ((order_sum >= 200) && (order_sum < 300)) {
        bill = (order_sum * 0.97).toFixed(2);
        alert(`Your bill is ${bill}`);
    }
    if ((order_sum >= 300) && (order_sum < 500)) {
        bill = (order_sum * 0.95).toFixed(2);
        alert(`Your bill is ${bill}`);
    }
    if (order_sum >= 500) {
        bill = (order_sum * 0.93).toFixed(2);
        alert(`Your bill is ${bill}`);
    }
}
else {
    alert('Enter correct order sum!')
}

alert(`3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. 
    Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.`);
let dodatnych = 0,
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
        }
        else {
            if (ten_numbers % 2 == 0) {
                parnych++;
            }
            else {
                neparnych++;
            }

            if (ten_numbers > 0) {
                dodatnych++;
            }
            else {
                vidjemnych++;
            }
        }
    }
}
alert(`Dodatnych = ${dodatnych}
        Vidjemnych = ${vidjemnych}
        Parnych = ${parnych}
        Neparnych = ${neparnych}
        Nuliv = ${nuliv}`);

alert('4. ЗАКОМЕНТОВАНО! Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.');
// const today = new Date();
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
alert(`1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").`);
let left = 0,
    right = 100;
while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const answer = prompt(`Is your number ${mid}? Options are > < =`);
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
    }
    else {
        alert('Whong symbol!');
        continue;
    }
}

alert('2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.');
const tableContainer = document.getElementById('table-container');
let tableHTML = '<table>';
for (let i = 1; i <= 10; i++) {
    tableHTML += '<tr>';
    for (let j = 2; j <= 9; j++) {
        tableHTML += `<td>${j} x ${i} = ${i * j}</td>`;
    }
    tableHTML += '</tr>';
}
tableHTML += '</table>';
tableContainer.innerHTML = tableHTML;

alert('3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.');
let     day = parseInt(prompt('Set the date day.')),
        month = parseInt(prompt('Set the date month.')),
        year = parseInt(prompt('Set the date day.'));

if ((day == 28) && (month == 2) && !(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))) {
    day = 1;
    month++;
}
else if ((day == 29) && (month == 2) && (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))) {
    day = 1;
    month++;
}
else if ((day == 30) && ((month == 4) || (month == 6) || (month == 9) || (month == 11))) {
    day = 1;
    month++;
}
else if (day == 31) {
    day = 1
    month++;
}
else {
    day++;
}

if (month > 12) {
    month = 1;
    year++;
}

alert(`The next day is ${day}-${month}-${year}`);