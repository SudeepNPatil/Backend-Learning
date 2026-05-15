/* const name:string = "Hello, TypeScript!";
console.log(name); 

let age :number = 30;
console.log(age); */

/* What Is Type Inference?

TypeScript automatically understands the type. */ 
// no need of explicitly declaring the type of a variable if it can be inferred from the assigned value.

// example : 
// let height = 5.8; // Type inference: number
// console.log(height); 

/* Then When Do We Add Types Explicitly?

Mostly in:

functions
objects
APIs
reusable code
React props
complex variables 

*/

// intensanally mention about null for veriabe 
// let city:null = null;

// Array 
let arr:string[] = ["Hello", "World"];
let arr2:number[] = [1, 2, 3, 4, 5];

// Tuple 
let tuple:[string, number] = ["Hello", 30];

enum Color {
    Red,
    Green,
    Blue
}

let somecolour = Color.Green;

// Any
let randomValue:any = "Hello";
console.log(randomValue.toUpperCase()); // No error, but can lead to runtime errors if randomValue is not a string.

// unknown
// let userInput:unknown = "Hello";

// console.log("User input is a string", userInput.toUpperCase()); // Error: Object is of type 'unknown'.

// functions
function add(a:number, b:number):number {
    return a + b;
}

console.log(add(5, 10));

// function with optional parameter 
function greet(name:string, greeting?:string):string {
    if(greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet("Alice"));
console.log(greet("Bob", "Hi"));

// function with default parameter 
function greetWithDefault(name:string, greeting:string = "Hello"):string {
    return `${greeting}, ${name}!`;
}

console.log(greetWithDefault("Alice"));
console.log(greetWithDefault("Bob", "Hi"));

// function with rest parameters
function sum(...numbers:number[]):number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// function with union types
function formatId(id:number | string):string {
    return `ID: ${id}`;
}

console.log(formatId(123));
console.log(formatId("abc"));

// function types
let calculate:(a:number,b:number) => number

calculate = add

console.log(calculate(5, 10));

// objects types 

let user:{
    name:string;
    age:number;
} = {
    name:"Alice",
    age:30
} // this look messy when we have multiple objects with same structure

// we can use interface to define the structure of an object

// interface is a way to define the structure of an object and can be reused for multiple objects with same structure
interface User {
    name:string;
    age:number;
}

let user1:User = {
    name:"Alice",
    age:30
}
