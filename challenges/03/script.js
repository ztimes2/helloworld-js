const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const dolphinsScoreAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const koalasScoreAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

const MIN_WINNING_SCORE = 100;

if (dolphinsScoreAverage > koalasScoreAverage && dolphinsScoreAverage >= MIN_WINNING_SCORE) {
  console.log("Dolphins won!");
} else if (dolphinsScoreAverage < koalasScoreAverage && koalasScoreAverage >= MIN_WINNING_SCORE) {
  console.log("Koalas won!");
} else if (dolphinsScoreAverage == koalasScoreAverage && dolphinsScoreAverage >= MIN_WINNING_SCORE) {
  console.log("Draw!");
} else {
  console.log("No winner!");
}
