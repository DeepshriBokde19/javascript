let rows = 5;
for (let i = 0; i < rows; i++) {
    let pattern = "";
    
    for (let j = 0; j < rows; j++) {
        // Conditions to print '*' on the diagonals
        if (j === i || j === (rows - i - 1)) {
            pattern += "*";
        } else {
            pattern += " ";
        }
    }
    
    console.log(pattern);
}
