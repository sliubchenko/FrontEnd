//Min
const a = 0.1;
const b = 0.2;
const c = (a + b).toFixed(1);
alert(`1. The sum of 0.1 and 0.2 is ${c}`);

const d = '1';
const e = 2;
const f = parseInt(d) + e;
alert(`2. The sum of "1" and 2 is ${f}`);

const usb = parseInt(prompt('Enter your usb-drive size in GB'));
const file = 820;
if (!isNaN(usb)){
    const files_qty = Math.floor(usb * 1024 / file);
    alert(`3. You can save ${files_qty} files on your drive`);
}
else {
    alert('Wrong format!')
}



//Norm
const budget = parseFloat(prompt('Enter your budget'));
const choco_price = parseFloat(prompt('Enter choco price'));
if (!isNaN(budget) && !isNaN(choco_price)){
    const choco_amount = Math.floor(budget / choco_price);
    const rest = (budget - choco_price * choco_amount).toFixed(2);
    alert(`4. You can buy ${choco_amount} chocolate bars and get the rest ${rest}`);
}
else {
    alert('Wrong format!')
}

let number = parseInt(prompt('Enter your 3-digit number'));
if (!isNaN(number) && number < 1000 && number >99){
    let reverse = String(number % 10);
    number = parseInt(number / 10);
    reverse += String(number % 10);
    number = parseInt(number / 10);
    reverse += String(number);
    alert(`5. Reverse is ${reverse}`);
}
else {
    alert('Wrong format!')
}



//Max
const deposit = parseFloat(prompt('What is deposit amount?'));
if (!isNaN(deposit)){
    const profit = (deposit * 0.05 / 12 * 2).toFixed(2); //     / 12 * 2    for clarily
    alert(`6. Your profit will be ${profit}`);
}
else {
    alert('Wrong format!')
}