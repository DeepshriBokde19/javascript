function firstRepeatedCharacter(s) {
    const seen = new Set();
    for (const char of s) {
        if (seen.has(char)) return char;
        seen.add(char);
    }
    return "";
}


const s = "abccbaacz";
console.log(firstRepeatedCharacter(s));  
