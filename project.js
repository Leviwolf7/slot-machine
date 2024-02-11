// Steps:
// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winning
// 7. Play again

// Step 1
const prompt = require("prompt-sync")(); // <-- This collects input from the user by using the package I installed from the terminal.

const deposit = () => {
    while (true) {
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount); //<-- parseFloat convert a string value to a floating point value (decimal number).

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) { //<-- isNaN checks if something  is not a number
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

// Step 2
const getNumberOfLines = () => {
    while (true) {
        const lines = prompt("Enter the number of line to bet on (1-3): ")
        const numberOfLines = parseFloat(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Invalid number of lines, try again.");
        } else {
            return numberOfLines;
        }
    }
}

// Step 3
const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ")
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return numberBet;
        }
    }
}

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

// 25:30