// map method
// The map() method creates a new array with the results of calling a provided function on every element in the calling array.
// map() calls a provided callback function once for each element in an array, in order, and constructs a new array from the results.
// callback is invoked only for indexes of the array which have assigned values (including undefined).
// 
// Syntax
let numbers = [2,4,5,6,7,8,9,10];

const square =(num) =>{
    return num * num;
}

let squaredNumbers = numbers.map(square);
console.log(squaredNumbers);