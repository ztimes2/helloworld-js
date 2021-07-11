const player0 = {
    currentScore: 0,
    totalScore: 0,

    addToCurrentScore: function (score) {
        this.setCurrentScore(this.currentScore + score);
    },

    setCurrentScore: function (score) {
        this.currentScore = score;
        document.querySelector("#current--0").textContent = score;
    },

    setTotalScore: function (score) {
        this.totalScore = score;
        document.querySelector("#score--0").textContent = score;
    },

    resetCurrentScore: function () {
        this.setCurrentScore(0);
    },

    resetTotalScore: function () {
        this.setTotalScore(0);
    },

    reset: function () {
        this.resetCurrentScore();
        this.resetTotalScore();
        document.querySelector(".player--0").classList.remove("player--winner");
    },

    holdCurrentScore: function () {
        const score = this.totalScore + this.currentScore;
        this.setTotalScore(score);
    },

    deactivate: function () {
        document.querySelector(".player--0").classList.remove("player--active");
    },

    activate: function () {
        document.querySelector(".player--0").classList.add("player--active");
    },

    win: function () {
        document.querySelector(".player--0").classList.add("player--winner");
    }
};

const player1 = {
    currentScore: 0,
    totalScore: 0,

    addToCurrentScore: function (score) {
        this.setCurrentScore(this.currentScore + score);
    },

    setCurrentScore: function (score) {
        this.currentScore = score;
        document.querySelector("#current--1").textContent = score;
    },

    setTotalScore: function (score) {
        this.totalScore = score;
        document.querySelector("#score--1").textContent = score;
    },

    resetCurrentScore: function () {
        this.setCurrentScore(0);
    },

    resetTotalScore: function () {
        this.setTotalScore(0);
    },

    reset: function () {
        this.resetCurrentScore();
        this.resetTotalScore();
        document.querySelector(".player--1").classList.remove("player--winner");
    },

    holdCurrentScore: function () {
        const score = this.totalScore + this.currentScore;
        this.setTotalScore(score);
    },

    deactivate: function () {
        document.querySelector(".player--1").classList.remove("player--active");
    },

    activate: function () {
        document.querySelector(".player--1").classList.add("player--active");
    },

    win: function () {
        document.querySelector(".player--1").classList.add("player--winner");
    }
};

const dice = {
    roll: function () {
        const value = this.randomInRange(1, 6);
        this.setImage(`dice-${value}.png`);
        return value;
    },

    setImage: function (src) {
        document.querySelector(".dice").setAttribute("src", src);
    },

    randomInRange: function (min, max) {
        return Math.trunc(Math.random() * max) + min;
    }
};

let currentPlayer;
let isGameOn = false;

const resetGame = function () {
    player0.reset();
    player1.reset();
    currentPlayer = player0;
    isGameOn = true;
}

function switchPlayer() {
    if (currentPlayer === player0) {
        player0.deactivate();
        player1.activate();
        currentPlayer = player1;
    } else {
        player0.activate();
        player1.deactivate();
        currentPlayer = player0;
    }
}

const buttonNew = document.querySelector(".btn--new");
const buttonRoll = document.querySelector(".btn--roll");
const buttonHold = document.querySelector(".btn--hold");

buttonNew.addEventListener("click", resetGame);

buttonRoll.addEventListener("click", () => {
    if (!isGameOn) return;

    const value = dice.roll();

    if (value === 1) {
        currentPlayer.resetCurrentScore();
        switchPlayer();
        return;
    }

    currentPlayer.addToCurrentScore(value);
})

buttonHold.addEventListener("click", () => {
    if (!isGameOn) return;

    currentPlayer.holdCurrentScore();
    currentPlayer.resetCurrentScore();

    if (currentPlayer.totalScore >= 100) {
        currentPlayer.win();
        isGameOn = false;
    } else {
        switchPlayer();
    }
});

resetGame();