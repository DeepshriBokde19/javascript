let choice;
do {
    choice = parseInt(prompt("Choose an operation:\n1. Add\n2. Subtract\n3. Multiply\n4. Divide\n5. Exit"));
    if (choice >= 1 && choice <= 4) {
        let num1 = parseFloat(prompt("Enter first number:"));
        let num2 = parseFloat(prompt("Enter second number:"));
        let result;

        switch (choice) {
            case 1: result = num1 + num2; break;
            case 2: result = num1 - num2; break;
            case 3: result = num1 * num2; break;
            case 4: result = num1 / num2; break;
        }
        console.log("Result: " + result);
    } else if (choice !== 5) {
        console.log("Invalid choice. Try again.");
    }
} while (choice !== 5);
