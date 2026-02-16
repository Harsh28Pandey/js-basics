//? old JS syntax, before ES6
function Person() {
    this.name = 'Alice';
}

Person.prototype.greet = function () {
    return `Hello ${this.name}`;
}

const p = new Person();
console.log(p.greet());