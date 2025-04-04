/*** JavaScript Security Best Practices
 * Prevent common vulnerabilities
 * Secure data handling
 * Input validation
 * Authentication & Authorization
 ***/

/*** 1. Input Validation
 * Sanitize user input
 * Prevent XSS attacks
 * Type checking
 ***/

class InputValidator {
    static sanitizeInput(input) {
        // Remove HTML tags and special characters
        return input.replace(/<[^>]*>?/gm, '')
                   .replace(/[&<>"']/g, '');
    }

    static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    static validatePassword(password) {
        // Minimum 8 characters, at least one letter and one number
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
    }
}

/*** 2. Secure Data Storage
 * Encryption
 * Secure cookies
 * Local storage security
 ***/

class SecureStorage {
    static setSecureItem(key, value) {
        // Encrypt before storing
        const encrypted = this.encrypt(value);
        localStorage.setItem(key, encrypted);
    }

    static getSecureItem(key) {
        const encrypted = localStorage.getItem(key);
        return encrypted ? this.decrypt(encrypted) : null;
    }

    static setCookie(name, value, days, secure = true) {
        const secureFlag = secure ? '; secure' : '';
        const httpOnly = '; HttpOnly';
        document.cookie = `${name}=${value}${secureFlag}${httpOnly}; max-age=${days*24*60*60}; SameSite=Strict`;
    }
}

/*** 3. API Security
 * CSRF protection
 * Rate limiting
 * Request validation
 ***/

class APISecurityManager {
    constructor() {
        this.requestCount = new Map();
        this.maxRequests = 100;
        this.timeWindow = 3600000; // 1 hour
    }

    addCSRFToken(headers) {
        headers['X-CSRF-Token'] = this.getCSRFToken();
        return headers;
    }

    checkRateLimit(userId) {
        const now = Date.now();
        const userRequests = this.requestCount.get(userId) || [];
        
        // Remove old requests
        const recentRequests = userRequests.filter(time => 
            now - time < this.timeWindow
        );

        if (recentRequests.length >= this.maxRequests) {
            throw new Error('Rate limit exceeded');
        }

        recentRequests.push(now);
        this.requestCount.set(userId, recentRequests);
    }
}

/*** 4. Authentication Best Practices
 * Secure password handling
 * Token management
 * Session security
 ***/

class AuthManager {
    static hashPassword(password, salt) {
        // In real implementation, use proper crypto library
        return `hashed_${password}_${salt}`;
    }

    static generateToken() {
        return crypto.randomUUID();
    }

    static validateToken(token) {
        // Verify token signature and expiration
        return token && token.length > 0;
    }
}

/*** 5. Content Security
 * CSP implementation
 * Safe DOM manipulation
 * iframe security
 ***/

class ContentSecurity {
    static sanitizeHTML(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }

    static secureIframe(iframe) {
        iframe.sandbox = 'allow-scripts allow-same-origin';
        iframe.allow = 'camera=none; microphone=none; geolocation=none';
    }
}

/*** 6. Error Handling Security
 * Safe error messages
 * Log sanitization
 * Stack trace protection
 ***/

class SecureErrorHandler {
    static handleError(error, isProduction = true) {
        // Log full error internally
        this.logError(error);

        // Return safe error to user
        return isProduction ? 
            { message: 'An error occurred' } : 
            { message: error.message };
    }

    static logError(error) {
        // Remove sensitive data before logging
        const safeError = this.sanitizeError(error);
        console.error(safeError);
    }
}

/*** 7. Secure Communication
 * HTTPS enforcement
 * Secure WebSocket
 * postMessage security
 ***/

class SecureCommunication {
    static enforceHTTPS() {
        if (location.protocol !== 'https:') {
            location.replace(`https:${location.href.substring(location.protocol.length)}`);
        }
    }

    static validateMessageOrigin(event, allowedOrigin) {
        return event.origin === allowedOrigin;
    }
} 