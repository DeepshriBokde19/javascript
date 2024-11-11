function toggleCase(str) {
    return str.split('').map(char =>
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}


console.log(toggleCase("AcgDfD")); 
