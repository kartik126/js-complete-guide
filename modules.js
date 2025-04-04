/*** JavaScript Modules
 * Help organize and structure code
 * Enable code reuse
 * Control access to code
 * Support modern development practices
 ***/

/*** 1. Export Syntax
 * Named exports
 * Default exports
 * Multiple exports
 ***/

// math.js
/*** Named Exports
 * Can have multiple per file
 * Must be imported with exact name
 ***/
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const PI = 3.14159;

/*** Default Export
 * Only one per file
 * Can be imported with any name
 ***/
// user.js
class User {
    constructor(name) {
        this.name = name;
    }
}

export default User;

/*** 2. Import Syntax
 * Different ways to import modules
 * Can rename imports
 * Can import everything
 ***/

// main.js
/*** Import Examples ***/
import { add, subtract } from './math.js';
import User from './user.js';
import { PI as MathPI } from './math.js';
import * as MathUtils from './math.js';

/*** 3. Module Organization
 * Index files
 * Barrel exports
 ***/

// services/index.js
/*** Barrel Export Pattern
 * Consolidates exports
 * Simplifies imports
 ***/
export { default as UserService } from './userService.js';
export { default as AuthService } from './authService.js';
export { default as DataService } from './dataService.js';

/*** 4. Module Features
 * Strict mode by default
 * Own scope
 * Hoisted imports
 ***/

// logger.js
/*** Module Scope Example ***/
const privateFunction = () => {
    console.log('This is private');
};

export const publicFunction = () => {
    privateFunction();
    console.log('This is public');
};

/*** 5. Dynamic Imports
 * Load modules on demand
 * Returns a promise
 ***/

// app.js
/*** Dynamic Import Example ***/
async function loadModule() {
    try {
        const module = await import('./heavy-module.js');
        module.init();
    } catch (error) {
        console.log('Error loading module:', error);
    }
}

/*** 6. Module Patterns
 * Singleton Pattern
 * Factory Pattern
 ***/

// singleton.js
/*** Singleton Module Pattern ***/
let instance = null;

export default class Database {
    constructor() {
        if (instance) {
            return instance;
        }
        instance = this;
    }
}

// factory.js
/*** Factory Module Pattern ***/
export const createShape = (type) => {
    switch (type) {
        case 'circle':
            return new Circle();
        case 'square':
            return new Square();
        default:
            throw new Error('Unknown shape type');
    }
};

/*** 7. Best Practices
 * One responsibility per module
 * Clear naming conventions
 * Proper error handling
 ***/

// config.js
/*** Configuration Module Example ***/
export const config = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retryAttempts: 3
};

// api.js
/*** API Module Example ***/
import { config } from './config.js';

export class API {
    static async fetch(endpoint) {
        try {
            const response = await fetch(`${config.apiUrl}${endpoint}`);
            return await response.json();
        } catch (error) {
            throw new Error(`API Error: ${error.message}`);
        }
    }
} 