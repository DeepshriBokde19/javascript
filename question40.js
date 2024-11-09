function isAutomorphic(num) {
    let square = num * num;
    return square.toString().endsWith(num.toString());
}

// Example usage
let number = 76;
console.log(`${number} is ${isAutomorphic(number) ? "" : "not "}an automorphic number.`);
