function splitAndCapitalize(sentence) {
    sentence.split(' ').forEach(word => {
        console.log(word.charAt(0).toUpperCase() + word.slice(1));
    });
}


splitAndCapitalize("hello bhai kaise ho");
