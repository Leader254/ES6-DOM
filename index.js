// arrow functions and template literals
// // syntax
// const arrowFunction = (name) => {
//     return `Hello ${name}`;
// }
// console.log(arrowFunction('Samuel'));

// arrow function with the map keyword
// const names = ['Samuel', 'Gatheru', 'Wanjohi'];
// const nameLengths = names.map((names) => {
//     return names.length;
// });
// console.log(nameLengths);
// explaination
// the map keyword is used to iterate through an array and return a new array
// the map keyword takes in a callback function as an argument
// the callback function takes in an argument which is the current item in the array
// the callback function returns the length of the current item in the array
// the map keyword returns a new array with the lengths of the items in the array

// template literals
// syntax

// function sayHello(name,age){
//     return `Hello, my name is ${name} and I am ${age} years of age`;
// }
// console.log(sayHello("Samuel",24));

// default parameters
// function myFunction(a,b){ //with no default parameters
//     return a+b;
// }
// console.log(myFunction(3,2)); // returns 5  because the function takes in two arguments

// one with default parameters
// function myFunction(a=0,b=0){ //with default parameters
//     return a+b;
// }
// console.log(myFunction(3)); // returns 3 because the function takes in one argument and the other argument is set to 0

// array destructuring
// const names = ['Samuel', 'Gatheru', 'Wanjohi'];
// const [first,second,third] = names;
// console.log(first,second);

// object destructuring
// const person = {
//     firstName: 'Samuel',
//     lastName: 'Gatheru',
//     age: 24,
//     occupation: {
//         name: 'Software Developer',
//         years: 2
//     }
// }
// const {firstName,lastName,age} = person; // destructuring the person object
// console.log(firstName,lastName,age);
// const {occupation: {name}} = person; // destructuring the occupation object
// console.log(name);

// rest parameters and spread operator
// spread operator on arrays

// const names = ['Samuel', 'Gatheru', 'Wanjohi'];

// const newNames = [...names,'Kamau','Wanjiku']; // spread operator at the end of the array
// const startNames = ['Maina','Joseph',...names]; // spread operator at the beginning of the array
// console.log(startNames);

// combining two arrays using the spread operator

// let firstArray = [1,2,3];
// let secondArray = [4,5,6];

// let combinedArray = [...firstArray,...secondArray];
// console.log(combinedArray);

// spread operator on objects
// const person = {
//     firstName: 'Samuel',
//     lastName: 'Gatheru',
//     age: 24,
//     occupation: {
//         name: 'Software Developer',
//         years: 2
//     }
// }
// const newPerson = {newName: 'Kamau',newLastName: 'Wanjiku',...person}; // spread operator on objects
// console.log(newPerson);

// rest parameters
// const combine = (...args) => {
//     return args.reduce(function (prev, curr) {
//       return prev + ' ' + curr;
//     });
//   };
  
//   let message = combine('JavaScript', 'Rest', 'Parameters'); // =>
//   console.log(message); // JavaScript Rest Parameters

// rest parammeters with array destructuring
// const numbers8 = [1,2,3,4,5,6,7,8,9,10];
// const [first,second,third,...rest] = numbers8;
// console.log(rest);


// asynchronous javascript

// callback functions - functions that are passed as arguments to other functions
// function goPlaying(time,callback){
//     console.log(`I am going to play at ${time}`);
//     callback();
// }
// function play(){
//     console.log('I am playing');
// }
// goPlaying('4pm',play);

// promises - used to handle asynchronous operations in javascript 
// a promise can be in one of three states
// - pending 
// - fulfilled
// - rejected

// syntax
// fuelTank exmaple

// async/await

// import and export
import {add,subtract} from './math.js'; // importing the add and subtract functions from the math.js file
console.log(add(2,3));
console.log(subtract(10,5));