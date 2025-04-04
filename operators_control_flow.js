// JavaScript Operators and Control Flow

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("\n1. Arithmetic Operators:");
console.log("Addition:", a + b);        // 13
console.log("Subtraction:", a - b);     // 7
console.log("Multiplication:", a * b);   // 30
console.log("Division:", a / b);        // 3.333...
console.log("Modulus:", a % b);         // 1
console.log("Exponentiation:", a ** b);  // 1000

// 2. Comparison Operators
console.log("\n2. Comparison Operators:");
console.log("Equal value (==):", 5 == "5");           // true
console.log("Equal value and type (===):", 5 === "5"); // false
console.log("Greater than:", a > b);                   // true
console.log("Less than or equal:", a <= b);           // false

// 3. Logical Operators
console.log("\n3. Logical Operators:");
console.log("AND (&&):", true && false);              // false
console.log("OR (||):", true || false);               // true
console.log("NOT (!):", !true);                       // false

// 4. Control Flow - if/else
let age = 20;
console.log("\n4. If/Else Statement:");
if (age >= 21) {
    console.log("Can drink in the US");
} else if (age >= 18) {
    console.log("Can vote but can't drink");
} else {
    console.log("Too young");
}

// 5. Switch Statement
let day = "Monday";
console.log("\n5. Switch Statement:");
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}

// 6. Ternary Operator
let score = 75;
console.log("\n6. Ternary Operator:");
let result = score >= 60 ? "Pass" : "Fail";
console.log(`Score ${score} is a ${result}`);

// 7. Nullish Coalescing Operator (??)
console.log("\n7. Nullish Coalescing:");
let userInput = null;
let defaultValue = "Guest";
console.log(userInput ?? defaultValue);  // "Guest"

// 8. Optional Chaining
console.log("\n8. Optional Chaining:");
let user = {
    details: {
        // address is undefined
    }
};
console.log(user.details?.address?.street); // undefined instead of error 