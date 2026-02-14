//? function declaration 

//? function - reusable blocks of code

function functionName(parameters) { // parameters/arguements
    // block of code
}

function greet() {
    console.log('Hello world');
}

greet();

//? parameter function
function greetings(message) {
    console.log(message);
}

greetings('Hi');


//? Function expressions
const greet1 = function () {
    console.log('Hello!');
}
const greet2 = function (username) {
    console.log('Hello!', username);
}

// console.log(greet1);
greet1();
greet2('Ram');
greet2('Shyam');

//? arrow functions - Simplified syntax for functions
// const add = (a, b) => {
//     return (a + b);
// };
const add = (a, b) => a + b;

console.log(add(5, 2)); // 7

//? default parameters in functions
const greet3 = function (username = 'Krishna') {
    console.log('Hello!', username);
}

greet3();
greet3('Ram2');
