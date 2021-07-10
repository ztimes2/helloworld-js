const calculateTip = bill => {
  const percentage = 50 <= bill && bill <= 300 ? 0.15 : 0.2;
  return bill * percentage
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const bill = bills[i];
  const tip = calculateTips(bill);
  tips.push(tip);
  totals.push(bill + tip);
}

const display = (bill, tip, total) => {
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${total}.`);
}

for (let i = 0; i < bills.length; i++) {
  display(bills[i], tips[i], totals[i]);
}

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(`Average totals: ${calculateAverage(totals)}!`);
