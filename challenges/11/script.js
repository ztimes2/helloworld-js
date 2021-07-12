const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🟨 Yellow card"],
]);

// Task 1
const events = [...new Set(gameEvents.values())];

// Task 2
gameEvents.delete(64);

// Task 3
console.log(`An event happened, on average, every ${90 / gameEvents.size} minutes`);

// Task 4
for (const [minute, event] of gameEvents) {
	const half = minute <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"; 
  console.log(`${half} ${minute}: ${event}`);
}
