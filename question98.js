function binaryToDecimal(binaryStr) {
    return parseInt(binaryStr, 2);
}


const binaryStr = "1010";
console.log(`Decimal equivalent of ${binaryStr} is: ${binaryToDecimal(binaryStr)}`);  
