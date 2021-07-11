const game = {
	team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
  	[
    	"Neuer", 
      "Pavard", 
      "Martinez", 
      "Alaba", 
      "Davies", 
      "Kimmich", 
      "Goretzka", 
      "Coman", 
      "Muller", 
      "Gnarby", 
      "Lewandowski",
    ],
    [
			"Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
  	team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Task 1
for (const [i, player] of game.scored.entries()) {
	console.log(`Goal ${i+1}: ${player}`);
}

// Task 2
let totalOdds = 0;
for (const odd of Object.values(game.odds)) {
	totalOdds += odd;
}
console.log(totalOdds / Object.values(game.odds).length);

// Task 3
for (const [key, value] of Object.entries(game.odds)) {
	const oddName = game[key] ? `victory ${game[key]}` : "draw";
  console.log(`Odd of ${oddName}: ${value}`);
}

// Task 4
const scorers = {};
for (const player of game.scored) {
	if (!scorers[player]) scorers[player] = 0;
  scorers[player]++;
}
console.log(scorers);
