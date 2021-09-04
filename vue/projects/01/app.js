Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            logs: []
        };
    },
    methods: {
        attackPlayer() {
            const damage = generateRandomNumber(8, 15);
            this.playerHealth = subtract(this.playerHealth, damage);

            this.logAttack("monster", damage);
        },
        attack() {
            this.currentRound++;

            const damage = generateRandomNumber(1, 12);
            this.monsterHealth = subtract(this.monsterHealth, damage);

            this.logAttack("player", damage);
            
            this.attackPlayer();
        },
        specialAttack() {
            this.currentRound++;

            const damage = generateRandomNumber(10, 25);
            this.monsterHealth = subtract(this.monsterHealth, damage);

            this.logAttack("player", damage);

            this.attackPlayer();
        },
        heal() {
            this.currentRound++;

            const recovery = generateRandomNumber(8, 20);
            this.playerHealth = add(this.playerHealth, recovery);

            this.logHeal(recovery);

            this.attackPlayer();
        },
        surrender() {
            this.playerHealth = 0;
            this.logSurrender();
        },
        resetGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.logs = [];
        },
        logAttack(attacker, damage) {
            this.logs.unshift({
                event: "attack",
                initiatedBy: attacker,
                damage: damage
            });
        },
        logHeal(recovery) {
            this.logs.unshift({
                event: "heal",
                initiatedBy: "player",
                recovery: recovery
            });
        },
        logSurrender() {
            this.logs.unshift({
                event: "surrender",
                initiatedBy: "player",
            });
        },
        initiatorLogClasses(initiator) {
            if (initiator === "player") {
                return "log--player";
            } else if (initiator === "monster") {
                return "log--monster";
            }
        },
        initiatorDispayName(initiator) {
            if (initiator === "player") {
                return "Player";
            } else if (initiator === "monster") {
                return "Monster";
            }
        }
    },
    computed: {
        monsterHealthbarStyles() {
            return {
                "width": `${this.monsterHealth}%`,
            };
        },
        playerHealthbarStyles() {
            return {
                "width": `${this.playerHealth}%`,
            };
        },
        isSpecialAttackDisabled() {
            return this.currentRound % 3 !== 0;
        },
        isGameOver() {
            return this.playerHealth === 0 || this.monsterHealth === 0;
        },
        gameResultText() {
            if (this.playerHealth !== 0 && this.monsterHealth === 0) {
                return "You won!";
            } else if (this.playerHealth === 0 && this.monsterHealth !== 0) {
                return "You lost!";
            } else {
                return "It's a draw!";
            }
        }
    }
}).mount("#game");

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function subtract(from, amount) {
    const result = from - amount;
    return result > 0 ? result : 0;
}

function add(to, amount) {
    const result = to + amount;
    return result < 100 ? result : 100;
}