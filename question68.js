function isSpecialNumber(num) {
    const digits = num.toString().split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    let product = digits.reduce((a, b) => a * b, 1);
    return sum + product === num;
}

console.log(isSpecialNumber(19)); 
