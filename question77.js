function countWordsWithPrefix(words, prefix) {
    return words.filter(word => word.startsWith(prefix)).length;
}


console.log(countWordsWithPrefix(["pay", "attention", "practice", "attend"], "at")); 
