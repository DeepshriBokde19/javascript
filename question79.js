function capitalizeFirstLast(sentence) {
    return sentence.split(' ').map(word => {
        if (word.length < 2) return word.toUpperCase();
        return word.charAt(0).toUpperCase() + word.slice(1, -1) + word.charAt(word.length - 1).toUpperCase();
    }).join(' ');
}


console.log(capitalizeFirstLast("hello bhai kaise ho a")); 
