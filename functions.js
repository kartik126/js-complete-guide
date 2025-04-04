// JavaScript Functions Tutorial

// 1. Function Declaration (Traditional way)
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function Expression
const sayHello = function(name) {
    return `Hello, ${name}!`;
};

// 3. Arrow Function (ES6+)
const greetArrow = (name) => `Hello, ${name}!`;

// 4. Function with Default Parameters
function welcome(name = "Guest", age = 18) {
    return `Welcome ${name}, you are ${age} years old`;
}

// 5. Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. Function with Multiple Returns
function checkAge(age) {
    if (age < 18) {
        return "Too young";
    } else if (age < 30) {
        return "Young adult";
    }
    return "Adult";
}

// 7. Callback Function
function processUser(name, callback) {
    const fullName = `Mr/Ms. ${name}`;
    callback(fullName);
}

// 8. Immediately Invoked Function Expression (IIFE)
(function() {
    const secret = "I am private";
    // This code runs immediately and variables are scoped
})();

// 9. Function as Object Method
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    // Shorthand method syntax
    subtract(a, b) {
        return a - b;
    }
};

// 10. Generator Function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

// 11. Higher-Order Function
function multiply(factor) {
    return function(number) {
        return number * factor;
    };
}

// 12. Pure Function (always returns same output for same input)
function addPure(a, b) {
    return a + b;
}

// 13. Function with Closure
function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
} 