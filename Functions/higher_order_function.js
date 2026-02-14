//? higher-order functions & callbacks
// a function that accepts another function as an arguement - higher-order function
// let array1 = [1, 2];

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let array1 = [1, 2];
processArray(array1, function (num) {
    console.log(num * 2); // 2, 4
});

function multiplyNumbers(num) {
    console.log(10 * num);
}

processArray(array1, multiplyNumbers); // 10, 20