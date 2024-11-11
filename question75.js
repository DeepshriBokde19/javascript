function countVowelsConsonants(str) {
    let vowels = 'aeiouAEIOU';
    let vowelCount = 0, consonantCount = 0;

    for (let char of str) {
        if (vowels.includes(char)) vowelCount++;
        else if (/[a-zA-Z]/.test(char)) consonantCount++;
    }

    return { vowelCount, consonantCount };
}


console.log(countVowelsConsonants("Hello World"));
