/*** Closures and Hoisting
 * Core JavaScript concepts
 * Scope and variable access
 * Function and variable declarations
 ***/

/*** 1. Hoisting
 * Variable and function declarations are moved to the top
 * Only declarations are hoisted, not initializations
 ***/

// Variable Hoisting
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";

// Function Declaration Hoisting
hoistedFunction(); // Works!
function hoistedFunction() {
    console.log("I'm a hoisted function");
}

// Function Expression - Not Hoisted
try {
    notHoistedFunction(); // Error!
} catch(e) {
    console.log("Can't access before initialization");
}
var notHoistedFunction = function() {
    console.log("I'm not hoisted");
};

/*** 2. let and const Hoisting
 * Still hoisted but in "temporal dead zone"
 * Cannot access before declaration
 ***/

try {
    console.log(letVar); // Error: Cannot access before initialization
} catch(e) {
    console.log("Temporal dead zone");
}
let letVar = "I'm in the temporal dead zone";

/*** 3. Closures
 * Function retains access to outer scope
 * Creates private variables
 * Preserves data
 ***/

// Basic Closure
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        getCount() {
            return count;
        }
    };
}

const counter = createCounter();
// count is private, can only be accessed through returned methods

/*** 4. Practical Closure Examples
 * Data privacy
 * Function factories
 * Module pattern
 ***/

// Function Factory
function multiply(x) {
    return function(y) {
        return x * y;
    };
}

const multiplyByTwo = multiply(2);
const multiplyByThree = multiply(3);

// Module Pattern
const bankAccount = (function() {
    let balance = 0;  // Private variable
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return true;
            }
            return false;
        },
        getBalance() {
            return balance;
        }
    };
})();

/*** 5. Common Closure Pitfalls
 * Loop closures
 * Memory leaks
 ***/

// Loop Closure Problem
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Will print 3 three times
    }, 100);
}

// Fixed with let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Will print 0, 1, 2
    }, 100);
}

// Fixed with IIFE (for var)
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j); // Will print 0, 1, 2
        }, 100);
    })(i);
}

/*** 6. Memory Management in Closures
 * Proper cleanup
 * Avoiding memory leaks
 ***/

function createHandler() {
    let heavyData = new Array(10000);
    
    return function handler() {
        console.log(heavyData.length);
    };
}

// Clear references when no longer needed
let handler = createHandler();
handler = null; // Allow garbage collection

/*** 7. Advanced Closure Patterns
 * Currying
 * Partial application
 * Memoization
 ***/

// Memoization with Closure
function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// Usage
const expensiveFunction = memoize((n) => {
    // Expensive computation
    return n * n;
}); 