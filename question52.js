let rows = 5;
for (let i = 0; i < rows; i++) {
    let pattern = "";

    // Leading spaces for each row
    for (let j = 0; j < i; j++) {
        pattern += " ";
    }

    // Left star
    pattern += "*";

    // Inner spaces between the two stars, except for the last row
    if (i < rows - 1) {
        for (let j = 0; j < (2 * (rows - i - 1) - 1); j++) {
            pattern += " ";
        }
        // Right star
        pattern += "*";
    }

    console.log(pattern);
}
