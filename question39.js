function isStrongNumber(num) {
    let sum = 0;
    let temp = num;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

// Example usage
let number = 145;
console.log(`${number} is ${isStrongNumber(number) ? "" : "not "}a strong number.`);
