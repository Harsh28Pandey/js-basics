//? 2 -  Write a function that accepts an array and a function as arguments, and applies the function to each element in the array.

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach([1, 2, 3], function (num) {
    console.log(num * num); // 1 4 9
});