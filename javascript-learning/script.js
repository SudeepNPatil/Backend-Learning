// veriable

var testName = "test"; // function scoped and hoisted and initialised with undefined.
let name = "Sudeep" // Block scoped and hoisted but not initialised, it's in the temporal dead zone until it's declared and initialised.
const pi = 3.14; // block scoped and need to be initialised at the time of declaration, and cannot be reassigned.


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
// function definition
function greet(name) { // function
    console.log("Hello, " + name + "!");
}

greet("Sudeep"); // Output: Hello, Sudeep!

// function expression
const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
};
greetExpression("Sudeep"); // Output: Hello, Sudeep!

// arrow function
const greetArrow = (name) =>{
    console.log("Hello, " + name + "!");
}
greetArrow("Sudeep"); // Output: Hello, Sudeep!

// IFFE (Immediately Invoked Function Expression)
(function(name){
    console.log("Hello, " + name + "!");
})("Sudeep");

// type coercion
let result1 = "5" + 10; // result1 will be "510" (string concatenation)
let result2 = "5" - 10; // result2 will be -5 (number subtraction) before coercion, "5" is converted to 5 (number) and then subtraction is performed
let result3 = "5" * 10; // result3 will be 50 (number multiplication)
let result4 = "5" / 10; // result4 will be 0.5 (number division)


// clouser -- a function bind with it's lexical scope, that is called as clouser.
function outerfunction(){
    let count =0;
    function innerfunction(){
        count++;
        console.log(count);
    }
    return innerfunction;
}

let counter = outerfunction();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3






