let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
        pattern += String.fromCharCode(65 + j) + " ";
    }
    console.log(pattern);
}
