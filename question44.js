let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess the number between 1 and 100:"));
    if (guess > randomNumber) {
        console.log("Too high, try again.");
    } else if (guess < randomNumber) {
        console.log("Too low, try again.");
    }
} while (guess !== randomNumber);

console.log("Congratulations! You guessed the correct number.");
