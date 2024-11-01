// Accept a number and check if it is a strong number or not (Sum of factorial of each digit)
// Ex- 145 = 1! + 4! + 5! = 145


let num = 145; // Input number
let originalNum = num; // Store the original number
let sumOfFactorials = 0;

// Calculate the sum of the factorial of each digit
while (num > 0) {
    let digit = num % 10; // Get the last digit
    let factorial = 1; // Initialize factorial for the current digit

    // Calculate the factorial of the digit
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sumOfFactorials += factorial; // Add the factorial of the digit
    num = Math.floor(num / 10); // Remove the last digit
}

// Check if the sum of factorials equals the original number
if (sumOfFactorials === originalNum) {
    console.log(originalNum + " is a strong number."); // Output: strong number
} else {
    console.log(originalNum + " is not a strong number."); // Output: not a strong number
}
