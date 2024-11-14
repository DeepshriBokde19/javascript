class RailwayTicket {
    constructor(passengerName, age, destination) {
        this.passengerName = passengerName;
        this.age = age;
        this.destination = destination;
    }

    displayTicket() {
        return `Passenger: ${this.passengerName}, Age: ${this.age}, Destination: ${this.destination}`;
    }
}


const ticket = new RailwayTicket("John Doe", 30, "Paris");
console.log(ticket.displayTicket());
