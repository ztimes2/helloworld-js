function randomInRange(min, max) {
    return Math.trunc(Math.random() * max) + min;
}

function displayNumber(n) {
    document.querySelector(".number").textContent = n;
}

function displayMessage(m) {
    document.querySelector(".message").textContent = m;
}

function displayScore(s) {
    document.querySelector(".score").textContent = s;
}

function displayHighestScore(s) {
    document.querySelector(".highscore").textContent = s;
}

function readInput() {
    return document.querySelector(".guess").value;
}

function resetInput() {
    document.querySelector(".guess").value = "";
}

function displayBackgroundColor(c) {
    document.querySelector("body").style.backgroundColor = c;
}

function loseGame() {
    isFinished = true;
    displayBackgroundColor("#ff0000");
    displayMessage("😵 Game over!");
    displayNumber(number);
}

function handleWrongGuess(message) {
    score--;
    if (score == 0) {
        loseGame();
    } else {
        displayMessage(message);
        displayScore(score);
    }
}

let number = randomInRange(1, 20);
let score = 20;
let highestScore = 0;
let isFinished = false;

document.querySelector(".check").addEventListener("click", () => {
    if (isFinished) return;

    const input = readInput();

    if (!input) {
        handleWrongGuess("⛔️ No number!");

    } else if (input > number) {
        handleWrongGuess("⬆️ Too high!");

    } else if (input < number) {
        handleWrongGuess("⬇️ Too low!");

    } else {
        isFinished = true;
        displayBackgroundColor("#60b347");
        displayMessage("💪 Correct!");
        displayNumber(number);

        if (score > highestScore) {
            highestScore = score;
            displayHighestScore(highestScore);
        }
    }
});

document.querySelector(".again").addEventListener("click", () => {
    number = randomInRange(1, 20);
    score = 20;
    isFinished = false;

    displayBackgroundColor("#222");
    displayNumber("?");
    displayMessage("Start guessing...");
    displayScore(score);
    resetInput();
});
