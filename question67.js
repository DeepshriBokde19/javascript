function isStrongNumber(num) {
    const factorial = (n) => (n <= 1) ? 1 : n * factorial(n - 1);
    let sum = num.toString().split('').reduce((acc, digit) => acc + factorial(Number(digit)), 0);
    return sum === num;
}

console.log(isStrongNumber(145));  
console.log(isStrongNumber(123));  
