// Encapsulation - Data Hiding - Binding the data and the functions that manipulate the data together as a single unit. example - class
// Inheritance - Reusability - Inheriting the properties and methods of the parent class. example - class
// Polymorphism - Overriding - Overriding the properties and methods of the parent class. example - class exmple
// Abstraction - Hiding the implementation details from the user. example - TV remote

// classes - blueprint of an object - template of an object - class is a collection of objects 
// object - instance of a class

// classes
// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     // methods
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }
// const personSamuel = new Person("Samuel", 24); // creating a new object using the class Person
// const personMaggy = new Person("Maggy", 22);
// personSamuel.greet();
// personMaggy.greet();

// inheritance - reusability - is when a class inherits the properties and methods of another class
// syntax - class childClass extends parentClass

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     // methods
//     greet2(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// class Student extends Person{
//     constructor(name, age, position){
//         super(name, age);
//         this.position = position;
//     }
//     // methods
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I am a ${this.position} and`);
//     }
//     info(){
//         console.log("I am a student.");
//     }
// }
// const Samuel = new Student("Samuel", 24, "Prefect");
// Samuel.greet();
// Samuel.info();
// Samuel.greet2();  // calling the method from the parent class


// encapsulation - data hiding - binding the data and the functions that manipulate the data together as a single unit

// class Person {
//     // setter
//     set newName(name){
//         this.name = name;
//     }
//     set newAge(age){
//         this.age = age;
//     }
//     // getter
//     get personalDetails(){
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }
// const personSamuel = new Person();
// personSamuel.newName = "Samuel";    // setting the name
// personSamuel.newAge = 24;           // setting the age
// console.log(personSamuel.personalDetails); // getting the details

// bank account
// class BankAccount{
//     constructor(name, balance){
//         this.name = name;
//         // this.accountNumber = accountNumber;
//         this.balance = balance;
//     }
//     // methods
//     deposit(amount){
//         this.balance += amount;
//         console.log(`You have deposited ${amount} into your account. Your new balance is ${this.balance}`);
//     }
//     withdraw(amount){
//         if(this.balance < amount){
//             console.log("Insufficient funds, please try depositing more funds.");
//         }else{
//             this.balance -= amount;
//             console.log(`You have withdrawn ${amount} from your account. Your new balance is ${this.balance}`);
//         }
//     }
//     checkBalance(){
//         console.log(`Your account balance is ${this.balance}`);
//     }
// }
// const accountSamuel = new BankAccount("Samuel", 1000);
// // accountSamuel.deposit(500);
// accountSamuel.withdraw(200);
// accountSamuel.checkBalance()
// accountSamuel.deposit(500);
// accountSamuel.checkBalance();
// accountSamuel.withdraw(2000);

// polymorphism - overriding - is when a class overrides the properties and methods of another class
// syntax - class childClass extends parentClass
// animals example
class Animal{
    makeSound(){
        console.log("The animal makes a sound.");
    }
    
}

// Abstraction - Hiding the implementation details from the user. example - TV remote
// interfaces - 
// message passing -