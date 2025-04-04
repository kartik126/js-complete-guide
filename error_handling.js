/*** Error Handling and Debugging in JavaScript
 * Covers try-catch blocks
 * Custom error types
 * Error propagation
 * Debugging techniques
 ***/

/*** 1. Basic Try-Catch
 * Handles runtime errors
 * Prevents application crashes
 * Can access error details
 ***/
try {
    const result = nonExistentFunction();
    console.log(result);
} catch (error) {
    console.log('Error type:', error.name);
    console.log('Error message:', error.message);
    console.log('Error stack:', error.stack);
}

/*** 2. Custom Error Types
 * Extend built-in Error class
 * Add custom properties
 * Useful for specific error handling
 ***/
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
        this.date = new Date();
    }
}

class DatabaseError extends Error {
    constructor(message, code) {
        super(message);
        this.name = 'DatabaseError';
        this.code = code;
    }
}

/*** 3. Multiple Error Types Handling
 * Can catch different error types
 * Provides specific error handling
 * Uses instanceof for type checking
 ***/
function validateUser(user) {
    try {
        if (!user.name) {
            throw new ValidationError('Name is required');
        }
        if (!user.age) {
            throw new ValidationError('Age is required');
        }
        if (user.age < 0) {
            throw new RangeError('Age cannot be negative');
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log('Validation Failed:', error.message);
        } else if (error instanceof RangeError) {
            console.log('Range Error:', error.message);
        } else {
            console.log('Unknown Error:', error);
        }
    }
}

/*** 4. Finally Block
 * Always executes after try-catch
 * Used for cleanup operations
 * Runs regardless of error
 ***/
function processFile() {
    let file = null;
    try {
        file = openFile();
        // Process file
    } catch (error) {
        console.log('Error processing file:', error);
    } finally {
        if (file) {
            closeFile(file); // Always close file
        }
    }
}

/*** 5. Error Propagation
 * Errors can bubble up through call stack
 * Can be caught at different levels
 * Useful for centralized error handling
 ***/
function level3() {
    throw new Error('Error in level 3');
}

function level2() {
    try {
        level3();
    } catch (error) {
        console.log('Caught in level 2');
        throw error; // Re-throwing
    }
}

function level1() {
    try {
        level2();
    } catch (error) {
        console.log('Finally caught in level 1');
    }
}

/*** 6. Async Error Handling
 * Using try-catch with async/await
 * Handling promise rejections
 ***/
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'TypeError') {
            console.log('Network error:', error);
        } else {
            console.log('Other error:', error);
        }
        throw error; // Re-throw for upper level handling
    }
}

/*** 7. Global Error Handling
 * Catch unhandled errors
 * Last resort for error handling
 ***/
window.onerror = function(message, source, line, column, error) {
    console.log('Global error handler:', {
        message,
        source,
        line,
        column,
        error
    });
    return true; // Prevents default error handling
};

/*** 8. Debugging Techniques
 * console methods
 * debugger statement
 * Error logging
 ***/
function debugExample(data) {
    console.log('Basic log:', data);
    console.info('Info message:', data);
    console.warn('Warning message:', data);
    console.error('Error message:', data);
    console.table([data]); // Tabular format
    console.trace('Stack trace');
    debugger; // Breakpoint for browser devtools
} 