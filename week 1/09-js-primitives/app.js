console.log("Hello World!");

let number = 1;
console.log(number);

let mints = 10;
let cocolates = 5;
let sweets = mints + cocolates;
console.log(sweets);

let myName = "Bob";
console.log(myName);

let firstName = "Bob";
let lastName = "Smith";
let fullName = firstName + " " + lastName;
console.log(fullName);

let fullNameWithLiterals = `${firstName} ${lastName}`;
console.log(fullNameWithLiterals);

let isTrue = true;
console.log(isTrue);

let isFalse = false;
console.log(isFalse);

let name = "Bob";
console.log(typeof name);

// We have declared a variable called number above
console.log("The type of number is: " + typeof number);

// We have declared a variable called isTrue above
console.log("The type of isTrue is: ${typeof isTrue}");

let newVariable;
console.log(newVariable); // Output is undefined

let age = null;
console.log(age); // Output is null

let a = 1;
let b = 2;
let isAGreaterThanB = a > b;
let isALessThanB = a < b;
let isAEqualToB = a === b;

console.log(isAGreaterThanB);
console.log(isALessThanB);
console.log(isAEqualToB);

console.log(`Is ${a} greater than ${b}?`, isAGreaterThanB);
console.log(`Is ${a} less than ${b}?`, isALessThanB);
console.log(`Is ${a} equal to ${b}?`, isAEqualToB);3

let weather = "sunny";
let today = "Monday";
let time = "morning";

let weatherReport = `Today is ${today}. The weather is ${weather} in the ${time}.`;
console.log(weatherReport);