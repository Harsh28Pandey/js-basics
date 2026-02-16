//? Polymorphism - Methods can behave differently based on the object.
class Animal1 {
    speak() {
        console.log('Animal speaks...');
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log('barking...');
    }

    speak() {
        console.log('dog barks...');
    }
}

const dog1 = new Dog1();
dog1.speak(); // dog barks...
dog1.bark();

const animal = new Animal1();
animal.speak(); // Animal speaks...