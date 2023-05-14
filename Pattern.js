// function rightAngled(n){
    
//     let pattern = "";
//     for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= i; j++){
//             pattern += "*"
//         }
//         pattern += "\n"
//     }
//     return pattern;
// }
// console.log(rightAngled(10))


// inverted rightAngledTriangle from top
// function invertedRightAngled(n){
//     let pattern = "";
//     for(let i = n; i >=1; i--){
//         for(let j = 1; j <= i; j++){
//             pattern += "*"
//         }
//         pattern +="\n"
//     }
//     return pattern;
// }
// console.log(invertedRightAngled(5));
// 
// Square
// 
// function squarePattern(n){
//     let pattern = "";
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < 5; j++){
//             pattern += "*"
//         }
//         pattern += "\n"
//     }
//     return pattern;
// }
// console.log(pyramidPattern(5))

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


// function pyramidAccurate(n){
//     let pattern = "";
//     for(let i = 1; i <= n; i++){
//         for(let j = 1; j <= n - 1; j++){
//             pattern += " ";
//         }
//         for(let k = 0; k < 2 * i - 1; k++){
//             pattern += "*";
//         }
//         pattern += "\n";
//     }
//     return pattern;
// }

// console.log(pyramidAccurate(5));















