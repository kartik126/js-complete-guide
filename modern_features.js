/*** Modern JavaScript Features (ES6+)
 * Latest JavaScript capabilities
 * Modern syntax improvements
 * New built-in methods
 * Enhanced functionality
 ***/

/*** 1. Optional Chaining (?.)
 * Safely access nested properties
 * Prevents null/undefined errors
 ***/
const user = {
    details: {
        address: null
    }
};

// Old way
const city = user && user.details && user.details.address && user.details.address.city;

// Modern way
const cityModern = user?.details?.address?.city; // undefined

/*** 2. Nullish Coalescing (??)
 * Provides default values
 * Only for null/undefined
 ***/
const count = 0;
const value = count ?? 42; // 0 (keeps falsy values except null/undefined) 
const missing = null ?? 'default'; // 'default'

/*** 3. Private Class Fields
 * True private properties
 * Encapsulation in classes
 ***/
class BankAccount {
    #balance = 0;  // Private field
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

/*** 4. Array Methods
 * New array manipulation features
 * More functional approaches
 ***/
const numbers = [1, 2, 3, 4, 5];

// flat and flatMap
const nested = [1, [2, 3], [4, [5]]];
const flattened = nested.flat(2); // [1, 2, 3, 4, 5]

// Array.from with mapping
const doubled = Array.from(numbers, x => x * 2);

// at() method
const last = numbers.at(-1); // 5

/*** 5. Object Methods
 * Enhanced object manipulation
 * New utility methods
 ***/
const source = { a: 1, b: 2 };
const clone = Object.fromEntries(
    Object.entries(source)
);

// Object.hasOwn (replacement for hasOwnProperty)
const hasA = Object.hasOwn(source, 'a'); // true

/*** 6. String Methods
 * Enhanced string manipulation
 ***/
const text = '  Hello World  ';
const trimmed = text.trimStart(); // "Hello World  "
const padded = "123".padStart(5, '0'); // "00123"
const repeated = 'abc'.repeat(2); // "abcabc"

/*** 7. Numeric Separators
 * Improved number readability
 ***/
const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF_FF;

/*** 8. Promise Methods
 * Enhanced async handling
 ***/
const promises = [Promise.resolve(1), Promise.resolve(2)];

// Promise.allSettled
Promise.allSettled(promises).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Value:', result.value);
        }
    });
});

/*** 9. Logical Assignment Operators
 * Combine logical operations with assignment
 ***/
let x = null;
x ??= 42; // x = 42
let y = 0;
y ||= 42; // y = 42
let z = 1;
z &&= 42; // z = 42

/*** 10. BigInt
 * Handle large integers
 ***/
const bigNumber = 9007199254740991n;
const result = bigNumber + 1n;

/*** 11. Dynamic Import
 * Load modules on demand
 ***/
async function loadModule() {
    const module = await import('./module.js');
    module.doSomething();
}

/*** 12. Top Level Await
 * Use await outside async functions
 ***/
// In modules:
const data = await fetch('api/data');
const json = await data.json();

/*** 13. RegExp Features
 * Named capture groups
 * Lookbehind assertions
 ***/
const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = pattern.exec('2023-12-25');
const { year, month, day } = match.groups;

/*** 14. Intl API Improvements
 * Enhanced internationalization
 ***/
const number = 123456.789;
const formatter = new Intl.NumberFormat('de-DE');
const formatted = formatter.format(number); // 123.456,789 