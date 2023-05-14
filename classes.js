// this is a type of function but instead of using the function keyword we use the class keyword
// the properties are defined inside the constructor method
// the methods are defined inside the class
// the constructor method is called automatically when a new object is created
// the constructor method is used to initialize the object
// the constructor method is called with the new keyword

// syntax

class Student { // class keyword always starts with a capital letter
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // method
    greet() {
        return `Hello ${this.name}`;
    }
}

// inheritance
class Person extends Student {
    constructor(name,age,height){
        super(name, age); // super keyword is used to call the constructor of the parent class
        this.height = height;
    }

    showHeight(){
        return `The height is ${this.height}`;
    }
} 

const newPerson = new Person("John", 20, 5.5);
console.log(newPerson.showHeight());

// creating an object
// const student1 = new Student("John",20);
// console.log(`The student name is ${student1.name} and their age is ${student1.age}`);
// console.log(student1.greet());