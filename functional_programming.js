/*** Functional Programming in JavaScript
 * Pure functions
 * Immutability
 * Higher-order functions
 * Function composition
 * Currying and Partial Application
 ***/

/*** 1. Pure Functions
 * Same input always gives same output
 * No side effects
 * Predictable behavior
 ***/

// Impure function (with side effect)
let total = 0;
function addToTotal(num) {
    total += num; // Side effect: modifies external state
    return total;
}

// Pure function
function add(a, b) {
    return a + b; // No side effects, same input = same output
}

/*** 2. Immutability
 * Don't modify data
 * Create new copies with changes
 ***/

// Mutable approach
const numbers = [1, 2, 3];
numbers.push(4); // Modifies original array

// Immutable approach
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4]; // Creates new array

/*** 3. Higher-Order Functions
 * Functions that take/return functions
 * Enable function composition
 ***/

// Higher-order function
function multiply(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiply(2);
const triple = multiply(3);

/*** 4. Function Composition
 * Combining functions
 * Data transformation pipelines
 ***/

const compose = (...fns) => x => 
    fns.reduceRight((acc, fn) => fn(acc), x);

const pipe = (...fns) => x => 
    fns.reduce((acc, fn) => fn(acc), x);

// Example usage
const addOne = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

const transform = compose(square, double, addOne);
// transform(2) -> square(double(addOne(2))) -> square(double(3)) -> square(6) -> 36

/*** 5. Currying
 * Transform multiple args into series of single arg functions
 ***/

// Regular function
function add(a, b, c) {
    return a + b + c;
}

// Curried version
const curriedAdd = a => b => c => a + b + c;

// Usage
const add5 = curriedAdd(5);
const add5and10 = add5(10);
const result = add5and10(15); // 30

/*** 6. Partial Application
 * Fix a number of arguments
 ***/

function partial(fn, ...args) {
    return (...moreArgs) => fn(...args, ...moreArgs);
}

const add = (a, b, c) => a + b + c;
const add5and10 = partial(add, 5, 10);
const result = add5and10(15); // 30

/*** 7. Functors and Monads
 * Containers for values
 * Chain operations
 ***/

class Maybe {
    constructor(value) {
        this.value = value;
    }

    map(fn) {
        return this.value === null || this.value === undefined
            ? new Maybe(null)
            : new Maybe(fn(this.value));
    }

    static of(value) {
        return new Maybe(value);
    }
}

/*** 8. Point-Free Programming
 * Function composition without mentioning arguments
 ***/

const map = fn => array => array.map(fn);
const filter = predicate => array => array.filter(predicate);
const reduce = (fn, initial) => array => array.reduce(fn, initial);

/*** 9. Memoization
 * Cache function results
 * Pure function optimization
 ***/

function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

/*** 10. Functional Error Handling
 * Either type
 * Error as data
 ***/

class Either {
    static Left = class Left {
        constructor(value) {
            this.value = value;
        }
        map() { return this; }
    }

    static Right = class Right {
        constructor(value) {
            this.value = value;
        }
        map(fn) { return new Either.Right(fn(this.value)); }
    }
} 