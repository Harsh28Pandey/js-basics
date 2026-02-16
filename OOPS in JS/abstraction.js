//? Abstraction - Hide complex logic and expose only essentials
class Shape { // Parent class

    constructor() {
        if (this.constructor === Shape) {
            throw new Error('Abstract class cannot be instantiated');
        }
    }

    // abstract method
    area() {
        throw new Error('Method "area" must be implemented');
    }
}

class Circle extends Shape { // child class
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius; // PI = 3.1416
    }
}

class Rectangle extends Shape { // child class
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.5398

const rectangle = new Rectangle(10, 5);
console.log(rectangle.area()); // 50