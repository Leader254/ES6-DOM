// let - variables declared with let keyword are block scoped
// var - variables declared with var keyword are function scoped
// const - variables declared with const keyword are block scoped and cannot be reassigned
// Hoisting does not occur in let and const variables but occurs in var variables
// let does not allow redeclaration of variables in the same scope while var does
// let and const variables are not accessible before declaration while var variables are
// let and const variables are not added to the global object while var variables are
// let and const variables are not redeclared in the same scope while var variables are
// let and const variables are not reassigned while var variables are

// variable declared with var keyword inside a function can be accessed outside the function
// exmaple

// function myFunction() {
//     var myVar = 'Hello';
//     console.log(myVar);
//   }
  
// myFunction();
  
// let is block scoped
// example
// function myFunction() {
//     // firstName is declared inside the function and is accessible anywhere inside the function
//     let firstName = 'Samuel';
//     if( firstName == 'Samuel'){
//         // secondName is declared inside the if block and is only accessible inside the if block
//         let secondName = 'Gatheru';
//         console.log(`My name is ${firstName} ${secondName}`);
//     }
//     // variable b is not accessible outside the if block
//     // console.log(a+ ' ' +b);
//   }

// myFunction();

// let firstName = 'Samuel';
// {
//     let lastName = 'Gatheru';
//     console.log(`My name is ${firstName} ${lastName}`);
// }
// variable lastName is not accessible outside the block and therefore we cannot use it here
// console.log(`firstName is ${firstName} and lastName is ${lastName}`) // this will throw an error

// const does not allow reassignment of variables
// example
// const firstName = 'Samuel';
// // firstName = 'Gatheru'; // this will throw an error

// console.log(firstName);

// const variables are mutable
// example
// const person = {
//     firstName: 'Samuel',
//     lastName: 'Gatheru'
// }
// const b = Object.keys(person); // returns an array of the keys in the object
// const a = Object.values(person); // returns an array of the values in the object
// console.log(a);
