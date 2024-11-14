function isPangram(sentence) {
    return new Set(sentence.toLowerCase().replace(/[^a-z]/g, '')).size === 26;
}

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(isPangram(sentence));  
