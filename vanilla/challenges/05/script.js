const calculateAverage = (a, b, c) => (a + b + c) / 3;

const isGreaterThan = function(a, b) {
  return a > b && a / b >= 2;
}

function displayWinner(d, k) {
  if (isGreaterThan(d, k)) {
    console.log("Dolphins won!");
    
  } else if (isGreaterThan(k, d)) {
    console.log("Koalas won!");
    
  } else {
    console.log("No winner!");
  }
}
  
const dolphinsScoreAverage = calculateAverage(44, 23, 71);
const koalasScoreAverage = calculateAverage(65, 54, 49);
  
displayWinner(dolphinsScoreAverage, koalasScoreAverage);
