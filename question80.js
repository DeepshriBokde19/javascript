function maxWordsInSentences(sentences) {
    return Math.max(...sentences.map(sentence => sentence.split(' ').length));
}


console.log(maxWordsInSentences(["This is an example", "This is another example", "Hello World"]));
