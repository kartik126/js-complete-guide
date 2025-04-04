// JavaScript Variables and Data Types

// 1. Variables Declaration
// There are three ways to declare variables in JavaScript: var, let, and const

// Using var (function-scoped, older way)
var oldWay = "I'm using var";

// Using let (block-scoped, modern way, can be reassigned)
let modernWay = "I'm using let";

// Using const (block-scoped, cannot be reassigned)
const constant = "I cannot be changed";

// 2. Data Types in JavaScript
// String - for text
let name = "John";
console.log("String:", name, typeof name);

// Number - for both integers and floating-point
let age = 25;
let price = 99.99;
console.log("Number:", age, typeof age);
console.log("Number (float):", price, typeof price);

// Boolean - true or false
let isStudent = true;
console.log("Boolean:", isStudent, typeof isStudent);

// Undefined - variable declared but not assigned
let undefinedVar;
console.log("Undefined:", undefinedVar, typeof undefinedVar);

// Null - intentional absence of any object value
let nullVar = null;
console.log("Null:", nullVar, typeof nullVar);

// Object - collection of key-value pairs
let person = {
    name: "John",
    age: 25,
    isStudent: true
};
console.log("Object:", person, typeof person);

// Array - ordered collection of values (technically an object)
let colors = ["red", "green", "blue"];
console.log("Array:", colors, typeof colors);

// Symbol - unique identifier
let symbol = Symbol("description");
console.log("Symbol:", symbol, typeof symbol);

// BigInt - for large integers
let bigNumber = BigInt(9007199254740991);
console.log("BigInt:", bigNumber, typeof bigNumber);

// 3. Type Conversion Examples
console.log("\nType Conversion Examples:");
// String to Number
console.log("'123' to number:", Number("123"));

// Number to String
console.log("123 to string:", String(123));

// Boolean to String
console.log("true to string:", String(true));

// String to Boolean
console.log("'false' to boolean:", Boolean("false")); // true because non-empty string
console.log("'' to boolean:", Boolean("")); // false because empty string

// Try running this code and observe the output in the console! 