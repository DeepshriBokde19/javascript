let input;
do {
    input = prompt("Enter 'hello' to continue, anything else to stop:");
    console.log("Hello");
} while (input.toLowerCase() === "hello");
