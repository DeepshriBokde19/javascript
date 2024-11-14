class Cab {
    constructor(driverName, cabNumber, location) {
        this.driverName = driverName;
        this.cabNumber = cabNumber;
        this.location = location;
    }

    toString() {
        return `Driver: ${this.driverName}, Cab Number: ${this.cabNumber}, Location: ${this.location}`;
    }
}

class CabService {
    constructor() {
        this.cabs = [];
    }

    addCab(cab) {
        this.cabs.push(cab);
    }

    showAvailableCabs() {
        this.cabs.forEach(cab => console.log(cab.toString()));
    }
}


const cabService = new CabService();
cabService.addCab(new Cab("Alice", "1234", "Downtown"));
cabService.addCab(new Cab("Bob", "5678", "Airport"));
cabService.showAvailableCabs();
