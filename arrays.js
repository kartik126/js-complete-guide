/*** Arrays in JavaScript
 * Arrays are ordered collections that can store multiple values
 * They can contain mixed data types
 * Array indices start at 0
 ***/

// Basic Array Creation
const fruits = ['apple', 'banana', 'orange'];
console.log('Basic Array:', fruits);

/*** Array Methods - Adding and Removing Elements
 * push(): adds to end
 * pop(): removes from end
 * unshift(): adds to beginning
 * shift(): removes from beginning
 ***/
const numbers = [1, 2, 3];
numbers.push(4);
console.log('After push:', numbers);
numbers.pop();
console.log('After pop:', numbers);
numbers.unshift(0);
console.log('After unshift:', numbers);
numbers.shift();
console.log('After shift:', numbers);

/*** Array Methods - Transforming Arrays
 * map(): creates new array by transforming each element
 * filter(): creates new array with elements that pass a test
 * reduce(): reduces array to single value
 ***/
const prices = [10, 20, 30, 40];

const doubled = prices.map(price => price * 2);
console.log('Mapped prices (doubled):', doubled);

const expensive = prices.filter(price => price > 20);
console.log('Filtered prices (> 20):', expensive);

const total = prices.reduce((sum, price) => sum + price, 0);
console.log('Reduced prices (sum):', total);

/*** Array Methods - Finding Elements
 * find(): returns first element that passes test
 * findIndex(): returns index of first element that passes test
 * includes(): checks if array includes value
 ***/
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Bob' }
];

const jane = users.find(user => user.name === 'Jane');
console.log('Found user:', jane);

const bobIndex = users.findIndex(user => user.name === 'Bob');
console.log('Bob index:', bobIndex);

console.log('Includes Jane?', users.some(user => user.name === 'Jane'));

/*** Array Methods - Sorting and Reversing
 * sort(): sorts elements
 * reverse(): reverses array order
 ***/
const letters = ['c', 'a', 'b'];
console.log('Sorted letters:', letters.sort());
console.log('Reversed letters:', letters.reverse());

/*** Array Methods - Slicing and Splicing
 * slice(): extracts portion of array
 * splice(): changes array by removing/replacing elements
 ***/
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
console.log('Sliced months:', months.slice(1, 3));

const colors = ['red', 'green', 'blue'];
colors.splice(1, 0, 'yellow');
console.log('Spliced colors:', colors);

/*** Array Methods - Joining and Splitting
 * join(): joins elements into string
 * split(): splits string into array
 ***/
const words = ['Hello', 'World'];
console.log('Joined words:', words.join(' '));

const sentence = 'JavaScript is awesome';
console.log('Split sentence:', sentence.split(' '));

/*** Array Spread Operator
 * Used for copying arrays
 * Used for combining arrays
 ***/
const original = [1, 2, 3];
const copy = [...original];
console.log('Spread copy:', copy);

const combined = [...original, ...copy];
console.log('Combined arrays:', combined);

/*** Array Destructuring
 * Extract values from arrays into variables
 ***/
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log('Destructured:', { first, second, rest });

/*** Multi-dimensional Arrays
 * Arrays can contain other arrays
 ***/
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log('Matrix:', matrix);
console.log('Matrix element:', matrix[1][1]); 