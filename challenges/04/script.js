const bill = 275;
const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
const total = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${total}.`);
