let menu = {
    1: "Burger - $5",
    2: "Pizza - $8",
    3: "Pasta - $7",
    4: "Salad - $4",
    5: "Exit"
};

let choice;
let total = 0;

do {
    console.log("Menu:");
    for (let item in menu) {
        console.log(`${item}. ${menu[item]}`);
    }

    choice = parseInt(prompt("Enter your choice:"));
    switch (choice) {
        case 1: total += 5; console.log("You ordered a Burger"); break;
        case 2: total += 8; console.log("You ordered a Pizza"); break;
        case 3: total += 7; console.log("You ordered Pasta"); break;
        case 4: total += 4; console.log("You ordered a Salad"); break;
        case 5: console.log("Exiting..."); break;
        default: console.log("Invalid choice."); break;
    }
} while (choice !== 5);

console.log("Total bill: $" + total);
