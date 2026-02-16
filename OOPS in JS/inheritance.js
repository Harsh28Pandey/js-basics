//? Inheritance - One class can inherit properties and methods from another.
class Animal {
    eat() {
        console.log('Eating...');
    }
}

class Dog extends Animal {
    bark() {
        console.log('barking...');
    }
}

const dog = new Dog();
dog.eat();
dog.bark();