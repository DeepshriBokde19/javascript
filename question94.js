class Room {
    constructor(roomNumber, isOccupied = false) {
        this.roomNumber = roomNumber;
        this.isOccupied = isOccupied;
    }

    toString() {
        return `Room ${this.roomNumber} - ${this.isOccupied ? 'Occupied' : 'Available'}`;
    }
}

class Hotel {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    checkAvailability() {
        return this.rooms.filter(room => !room.isOccupied);
    }
}


const hotel = new Hotel("Grand Hotel");
hotel.addRoom(new Room(101));
hotel.addRoom(new Room(102, true));
hotel.checkAvailability().forEach(room => console.log(room.toString()));
