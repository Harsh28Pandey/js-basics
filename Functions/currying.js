//? Currying
// Currying is the process of transforming a function with multiple arguments into a sequence of functions, each taking one argument.

const addNums = a => b => a + b;
console.log(addNums(5)(3)); // 8