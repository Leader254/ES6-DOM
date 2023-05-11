// Encapsulation can be defined as “the packing of data and functions into one component”. 
// Component - can be a function, a class or an object
// Packing, which is also known as bundling, grouping and binding, simply means to bring together 
// data and the methods which operate on data.

// Packing enables “controlling access to that component”. When we have the data and related 
// methods in a single unit, we can control how is it accessed outside the unit.
// 
// encapsulation is the bundling of data with the methods that operate on that data

// Working of Encapsulation
// Encapsulation is implemented by using access specifiers. An access specifier defines the scope

// function student(){
//     let id = 10;
//     let name = "Samuel";
//     let marks = 85;

//     function setMarks(){
//         marks = newMarks;
//         if(isNaN(newMarks)){
//             console.log(`Marks must be a number`);
//         }
//     }
// }

// square an array of numbers
const squares = function squareArray(){
    let data = [2,3,4,5,6];
    function square(){
        for(let i = 0;i < data.length; i++){
            data[i] = data[i] * data[i];
        }
        return data;
    }
    return square();
}
console.log(squares());
