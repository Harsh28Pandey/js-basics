// scope, closure
//? scope - Accessibility of variables (global, local & block)
//? closure - Function that remembers its outer variables

// let a = 5; // global
function outer() {
    let count = 0; // local
    // a = 10;
    return function inner() {
        count++;
        console.log(`Count: ${count}`);
        // let x = 3; // block
    };
}

let counter = outer(); // `counter` is assigned the inner() function with a closure over `count`
counter(); // Logs "Count: 1"
counter(); // Logs "Count: 2"
counter(); // Logs "Count: 3"