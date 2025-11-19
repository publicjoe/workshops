console.log("Hello World!");

let myName = "Bob";
console.log(myName);

const age = 30;
console.log(age);

myName = "Jane";
console.log(myName);

/* age = 25;
console.log(age); */

// Array
let students = ["Alice", "Bob", "Charlie"];
console.log(students);

// Object
let person = {
    firstName: "Joe",
    lastName: "Public"
};
console.log(person);

// Boolean
let isAnimal = true;
console.log(isAnimal);

// Undefined
let address;
console.log(address);

// Now assign a value
address = "123 Some Street";
console.log(address);

// Null
let phoneNumber = null;
console.log(phoneNumber);

// Number addition
let firstNum = 3;
let secondNum = 7;
let sum = firstNum + secondNum;
console.log("The sum is: " + sum);

// String Concatenation
let greeting = "Hello, ";
let name = "Joe";
let welcomeMessage = greeting + name;
console.log(welcomeMessage);

console.log("firstNum is: " + firstNum);
console.log("secondNum is: " + secondNum);
// Destructuring assignment to swap values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring
[firstNum, secondNum] = [secondNum, firstNum];
console.log("The new value of firstNum is: " + firstNum);
console.log("The new value of secondNum is: " + secondNum);