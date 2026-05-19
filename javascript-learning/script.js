// primitive types 

let name = "Sudeep" // string

let age = 25 // number
let isStudent = true // boolean

let undefinedValue; // undefined
let nullValue = null; // null
let symbolValue = Symbol("unique"); // symbol
let bigIntValue = 1234567890123456789012345678901234567890n; // bigint


// reference types

let array = [1, 2, 3, 4, 5]; // array

let person = { // object
    name: "Sudeep",
    age: 25,
    isStudent: true
};

function greet() { // function
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Sudeep!