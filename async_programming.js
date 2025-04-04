/*** Asynchronous Programming in JavaScript
 * Handles operations that take time
 * Prevents blocking of main thread
 * Three main patterns: Callbacks, Promises, and Async/Await
 ***/

/*** 1. Callbacks
 * Traditional way of handling async operations
 * Can lead to callback hell
 * Less used in modern JavaScript
 ***/
function fetchDataWithCallback(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'John' };
        callback(data);
    }, 2000);
}

console.log('Starting callback example...');
fetchDataWithCallback((result) => {
    console.log('Callback result:', result);
});
console.log('Callback example queued...');

/*** 2. Promises
 * Modern way to handle async operations
 * Has three states: pending, fulfilled, rejected
 * Chainable with .then() and .catch()
 ***/
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ id: 1, name: 'John' });
            } else {
                reject('Error fetching data');
            }
        }, 2000);
    });
}

console.log('Starting promise example...');
fetchDataWithPromise()
    .then(result => console.log('Promise result:', result))
    .catch(error => console.log('Promise error:', error));
console.log('Promise example queued...');

/*** 3. Promise Methods
 * Promise.all(): Waits for all promises
 * Promise.race(): Waits for first promise
 * Promise.allSettled(): Gets all results regardless of status
 ***/
const promise1 = Promise.resolve('First');
const promise2 = new Promise(resolve => setTimeout(() => resolve('Second'), 1000));
const promise3 = Promise.resolve('Third');

Promise.all([promise1, promise2, promise3])
    .then(results => console.log('All promises:', results));

Promise.race([promise1, promise2, promise3])
    .then(result => console.log('Race winner:', result));

/*** 4. Async/Await
 * Syntactic sugar over promises
 * Makes async code look synchronous
 * Must use 'async' keyword for function
 * Must use 'await' for promise
 ***/
async function fetchUserData() {
    try {
        console.log('Starting async/await...');
        const user = await fetchDataWithPromise();
        console.log('Async/await result:', user);
        return user;
    } catch (error) {
        console.log('Async/await error:', error);
    }
}

/*** 5. Error Handling in Async Code
 * try/catch blocks with async/await
 * .catch() with promises
 * Error callbacks with traditional callbacks
 ***/
async function demonstrateErrorHandling() {
    try {
        const result = await Promise.reject('Something went wrong');
    } catch (error) {
        console.log('Caught error:', error);
    }
}

/*** 6. Real-world Example: Fetching Data
 * Combines multiple async operations
 * Shows proper error handling
 * Demonstrates async/await pattern
 ***/
async function fetchUserAndPosts() {
    try {
        const user = await fetchDataWithPromise();
        console.log('User:', user);
        
        // Simulating fetching posts for user
        const posts = await new Promise(resolve => {
            setTimeout(() => {
                resolve(['Post 1', 'Post 2']);
            }, 1000);
        });
        
        console.log('Posts:', posts);
        return { user, posts };
    } catch (error) {
        console.log('Error in fetchUserAndPosts:', error);
        throw error; // Re-throwing for upper level handling
    }
}

/*** 7. Parallel vs Sequential Execution
 * Sequential: await each promise one after another
 * Parallel: Promise.all for concurrent execution
 ***/
async function sequential() {
    const result1 = await Promise.resolve('First');
    const result2 = await Promise.resolve('Second');
    return [result1, result2];
}

async function parallel() {
    const [result1, result2] = await Promise.all([
        Promise.resolve('First'),
        Promise.resolve('Second')
    ]);
    return [result1, result2];
} 