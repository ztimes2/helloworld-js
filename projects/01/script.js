function randomInRange(min, max) {
    return Math.trunc(Math.random() * max) + min;
}

let number = randomInRange(1, 20);
let score = 20;
let highestScore = 0;
let isFinished = false;

document.querySelector(".check").addEventListener("click", () => {
    if (isFinished) return;

    const input = document.querySelector(".guess").value;

    if (!input) {
        score--;
        if (score == 0) {
            isFinished = true;
            document.querySelector("body").style.backgroundColor = "#ff0000";
            document.querySelector(".message").textContent = "😵 Game over!";
            document.querySelector(".number").textContent = number;

        } else {
            document.querySelector(".message").textContent = "⛔️ No number!";
            document.querySelector(".score").textContent = score;
        }

    } else if (input > number) {
        score--;
        if (score == 0) {
            isFinished = true;
            document.querySelector("body").style.backgroundColor = "#ff0000";
            document.querySelector(".message").textContent = "😵 Game over!";
            document.querySelector(".number").textContent = number;

        } else {
            document.querySelector(".message").textContent = "⬆️ Too high!";
            document.querySelector(".score").textContent = score;
        }

    } else if (input < number) {
        score--;
        if (score == 0) {
            isFinished = true;
            document.querySelector("body").style.backgroundColor = "#ff0000";
            document.querySelector(".message").textContent = "😵 Game over!";
            document.querySelector(".number").textContent = number;

        } else {
            document.querySelector(".message").textContent = "⬇️ Too low!";
            document.querySelector(".score").textContent = score;
        }

    } else {
        isFinished = true;
        highestScore = score > highestScore ? score : highestScore;
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".message").textContent = "💪 Correct!";
        document.querySelector(".highscore").textContent = highestScore;
        document.querySelector(".number").textContent = number;
    }
});

document.querySelector(".again").addEventListener("click", () => {
    number = randomInRange(1, 20);
    score = 20;
    isFinished = false;

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".guess").value = "";
});
