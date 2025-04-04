/*** JavaScript Event Loop and Async Patterns
 * Understanding how JS handles async operations
 * Event Loop mechanics
 * Callback Queue vs Microtask Queue
 * Advanced async patterns
 ***/

/*** 1. Event Loop Basics
 * Call Stack
 * Callback Queue
 * Microtask Queue
 ***/

// Synchronous execution (Call Stack)
function main() {
    console.log('1. Start');
    synchronousTask();
    console.log('3. End');
}

function synchronousTask() {
    console.log('2. Sync Task');
}

/*** 2. Macrotasks (setTimeout, setInterval)
 * Goes to Callback Queue
 * Executed after Microtasks
 ***/

console.log('1. First');
setTimeout(() => {
    console.log('4. Timeout');
}, 0);
Promise.resolve()
    .then(() => console.log('3. Promise'));
console.log('2. Second');

// Output order:
// 1. First
// 2. Second
// 3. Promise
// 4. Timeout

/*** 3. Microtasks (Promises, queueMicrotask)
 * Higher priority than Macrotasks
 * Executed before next render
 ***/

queueMicrotask(() => {
    console.log('2. Microtask');
});

Promise.resolve().then(() => {
    console.log('3. Promise microtask');
});

console.log('1. Sync code');

/*** 4. Advanced Promise Patterns
 * Promise chaining
 * Parallel execution
 * Error handling
 ***/

// Sequential execution
async function sequential() {
    const result1 = await step1();
    const result2 = await step2(result1);
    const result3 = await step3(result2);
    return result3;
}

// Parallel execution
async function parallel() {
    const [result1, result2, result3] = await Promise.all([
        step1(),
        step2(),
        step3()
    ]);
    return [result1, result2, result3];
}

/*** 5. Custom Promise Implementation
 * Understanding Promise mechanics
 ***/

class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.callbacks = [];

        const resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.callbacks.forEach(cb => cb(value));
            }
        };

        executor(resolve);
    }

    then(onFulfilled) {
        if (this.state === 'fulfilled') {
            onFulfilled(this.value);
        } else {
            this.callbacks.push(onFulfilled);
        }
    }
}

/*** 6. Async Iterators and Generators
 * Async iteration patterns
 * Generator-based flow control
 ***/

async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

async function useGenerator() {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
}

/*** 7. Race Conditions and Solutions
 * Handling concurrent operations
 * Preventing race conditions
 ***/

class RequestManager {
    constructor() {
        this.pending = new Map();
    }

    async fetchWithCache(url) {
        if (this.pending.has(url)) {
            return this.pending.get(url);
        }

        const promise = fetch(url).finally(() => {
            this.pending.delete(url);
        });

        this.pending.set(url, promise);
        return promise;
    }
}

/*** 8. Cancellation Patterns
 * Handling long-running operations
 * Cleanup and cancellation
 ***/

class CancellableOperation {
    constructor() {
        this.abortController = new AbortController();
    }

    async execute() {
        try {
            await fetch('api/data', {
                signal: this.abortController.signal
            });
        } catch (error) {
            if (error.name === 'AbortError') {
                console.log('Operation cancelled');
            }
        }
    }

    cancel() {
        this.abortController.abort();
    }
}

/*** 9. Error Handling in Async Code
 * Global error handlers
 * Proper error propagation
 ***/

window.addEventListener('unhandledrejection', event => {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
}); 