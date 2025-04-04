/*** JavaScript Design Patterns
 * Reusable solutions to common problems
 * Improves code organization
 * Enhances maintainability
 * Promotes best practices
 ***/

/*** 1. Singleton Pattern
 * Ensures only one instance exists
 * Useful for shared resources
 * Common in configuration management
 ***/
class Database {
    static #instance = null;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        this.data = [];
        Database.#instance = this;
    }

    query(id) {
        console.log(`Querying ${id} from database`);
    }
}

/*** 2. Factory Pattern
 * Creates objects without specifying exact class
 * Handles object creation complexity
 * Provides common interface
 ***/
class UserFactory {
    createUser(type) {
        switch(type) {
            case 'admin':
                return new AdminUser();
            case 'regular':
                return new RegularUser();
            default:
                throw new Error('Invalid user type');
        }
    }
}

/*** 3. Observer Pattern
 * Defines one-to-many dependency
 * Subject notifies observers
 * Loose coupling between objects
 ***/
class EventEmitter {
    #listeners = new Map();

    on(event, callback) {
        if (!this.#listeners.has(event)) {
            this.#listeners.set(event, []);
        }
        this.#listeners.get(event).push(callback);
    }

    emit(event, data) {
        if (this.#listeners.has(event)) {
            this.#listeners.get(event).forEach(callback => callback(data));
        }
    }
}

/*** 4. Module Pattern
 * Encapsulates code
 * Creates private/public methods
 * Uses closures for privacy
 ***/
const Calculator = (function() {
    // Private variables
    let result = 0;
    
    // Public interface
    return {
        add(x) {
            result += x;
            return this;
        },
        subtract(x) {
            result -= x;
            return this;
        },
        getResult() {
            return result;
        }
    };
})();

/*** 5. Decorator Pattern
 * Adds behavior dynamically
 * Wraps objects with new functionality
 * Alternative to subclassing
 ***/
class Coffee {
    cost() {
        return 5;
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2;
    }
}

/*** 6. Strategy Pattern
 * Defines family of algorithms
 * Makes algorithms interchangeable
 * Isolates algorithm logic
 ***/
class PaymentStrategy {
    static paypal(amount) {
        console.log(`Paying ${amount} using PayPal`);
    }

    static creditCard(amount) {
        console.log(`Paying ${amount} using Credit Card`);
    }
}

/*** 7. Chain of Responsibility
 * Passes request through chain of handlers
 * Each handler decides to process/pass
 * Decouples sender and receiver
 ***/
class RequestHandler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

/*** 8. Best Practices
 * Code organization
 * Error handling
 * Performance considerations
 ***/

// Dependency Injection
class Service {
    constructor(dependency) {
        this.dependency = dependency;
    }
}

// Immutability
const immutableState = Object.freeze({
    data: 'cannot be modified'
});

// Pure Functions
const add = (a, b) => a + b;

/*** 9. Anti-Patterns to Avoid
 * Global variables
 * Memory leaks
 * Callback hell
 ***/

// Instead of global variables, use modules
export const config = {
    apiKey: 'secret'
};

// Instead of callback hell, use async/await
async function fetchData() {
    try {
        const user = await getUser();
        const posts = await getUserPosts(user.id);
        return posts;
    } catch (error) {
        console.error('Error:', error);
    }
}

/*** 10. Performance Patterns
 * Memoization
 * Throttling
 * Debouncing
 ***/
// Memoization
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Throttle
function throttle(fn, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = Date.now();
        if (now - lastCall >= delay) {
            fn(...args);
            lastCall = now;
        }
    };
} 