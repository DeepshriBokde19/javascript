class MenuItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Restaurant {
    constructor(name) {
        this.name = name;
        this.menu = [];
    }

    addItem(item) {
        this.menu.push(item);
    }

    showMenu() {
        this.menu.forEach(item => console.log(`Item: ${item.name}, Price: $${item.price}`));
    }
}


const restaurant = new Restaurant("Gourmet Paradise");
restaurant.addItem(new MenuItem("Pasta", 12.99));
restaurant.addItem(new MenuItem("Burger", 8.99));
restaurant.showMenu();
