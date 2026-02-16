// classes & objects
class Car {
    // brand = 'Tesla';
    // color = 'red';

    constructor(brand, color) {
        this.brand = brand; // property
        this.color = color; // property
    }

    drive() { // method
        console.log(`Drive ${this.brand} which if of ${this.color} color`);
    }
}

const myCar = new Car('Tesla', 'Blue'); // object
console.log(myCar);
myCar.drive();

const myCar1 = new Car('Maruti', 'white'); // object
myCar1.drive();