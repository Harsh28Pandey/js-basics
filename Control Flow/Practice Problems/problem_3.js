//? 3 - Create a simple program that handles a division by zero error.

try {
    let result = 10 / 0; // Error: Division by zero
    console.log(result);
} catch (error) {
    // console.log('error', error.message);
    console.log('error', error);
}