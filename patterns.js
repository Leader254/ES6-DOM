// for loops for creating different star patterns
// square pattern
// let string = "";
// for(let i = 0; i < 5; i++){ // outer loop
//     for(let j = 0; j < 5; j++){ // inner loop
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// right triangle pattern
// to create a right triangle pattern, the outer loop will run 5 times and the inner loop will run 0, 1, 2, 3, 4 times
// let n = 5;
// let string = "";
// for(let i = 1; i <= n; i++){
//     // printing spaces
//     for(let j = 0; j < n - i; j++){
//         string += " ";
//     }
//     // printing stars
//     for(let k = 0; k < i; k++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// inverted right triangle pattern
// let n = 5;
// let string = "";

// for(let i = 1; i <= n; i++){
//     for(let j = 0; j < i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// downward triangle
// let n = 5;
// let string = "";

// for(let i = n; i >= 1; i--){
//     for(let j = 0; j < i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);

// OR

// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// pyramid
// let n = 5;
// let string = "";
// External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < 2 * i - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);