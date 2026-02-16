//? Problem 1: Create a class Vehicle with a method to display the vehicle type and a subclass Car that displays car-specific information.

class Vehicle {
    displayType() {
        console.log('This is a vehicle');
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super();
        this.brand = brand;
        this.model = model;
    }

    displayCarInfo() {
        console.log(`This is a car. Brand: ${this.brand}, Model: ${this.model}`);
    }
}

// usage
const myCar = new Car('Toyota', 'Corolla');
myCar.displayType();
myCar.displayCarInfo();