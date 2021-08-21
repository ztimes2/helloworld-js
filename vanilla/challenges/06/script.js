const calculateTip = bill => {
  const percentage = 50 <= bill && bill <= 300 ? 0.15 : 0.2;
  return bill * percentage
}

const bills = [125, 555, 44];

const tips = [
  calculateTip(bills[0]), 
  calculateTip(bills[1]), 
  calculateTip(bills[2])
];

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

const display = (bill, tip, total) => {
  console.log(`The bill was ${bill}, the tip was ${tip}, and the total is ${total}.`);
}

display(bills[0], tips[0], totals[0]);
display(bills[1], tips[1], totals[1]);
display(bills[2], tips[2], totals[2]);
