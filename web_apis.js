/*** Web APIs and Browser Integration
 * Browser-specific APIs
 * DOM manipulation
 * Storage
 * Network requests
 * Device features
 ***/

/*** 1. Storage APIs
 * LocalStorage
 * SessionStorage
 * IndexedDB
 * Cookies
 ***/

// LocalStorage (persistent)
class StorageManager {
    static saveData(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getData(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    // SessionStorage (temporary)
    static saveSessionData(key, data) {
        sessionStorage.setItem(key, JSON.stringify(data));
    }
}

/*** 2. Geolocation API
 * Get user location
 * Watch position changes
 ***/

class LocationService {
    static getCurrentPosition() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                position => resolve(position),
                error => reject(error)
            );
        });
    }

    static watchPosition(callback) {
        return navigator.geolocation.watchPosition(
            position => callback(position)
        );
    }
}

/*** 3. Notification API
 * Browser notifications
 * Permission handling
 ***/

class NotificationManager {
    static async requestPermission() {
        const permission = await Notification.requestPermission();
        return permission;
    }

    static showNotification(title, options = {}) {
        if (Notification.permission === 'granted') {
            return new Notification(title, options);
        }
    }
}

/*** 4. File API
 * File handling
 * File reading
 * Drag and drop
 ***/

class FileHandler {
    static readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => resolve(e.target.result);
            reader.onerror = e => reject(e);
            reader.readAsText(file);
        });
    }

    static handleDrop(element, callback) {
        element.addEventListener('dragover', e => e.preventDefault());
        element.addEventListener('drop', e => {
            e.preventDefault();
            const files = Array.from(e.dataTransfer.files);
            callback(files);
        });
    }
}

/*** 5. Media APIs
 * Audio/Video handling
 * Media recording
 * Media streams
 ***/

class MediaHandler {
    static async getUserMedia(constraints = { video: true, audio: true }) {
        try {
            return await navigator.mediaDevices.getUserMedia(constraints);
        } catch (error) {
            console.error('Media access error:', error);
            throw error;
        }
    }

    static createRecorder(stream) {
        return new MediaRecorder(stream);
    }
}

/*** 6. Canvas API
 * 2D drawing
 * Image manipulation
 ***/

class CanvasManager {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    drawRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    drawImage(image, x, y) {
        this.ctx.drawImage(image, x, y);
    }
}

/*** 7. Web Workers
 * Background processing
 * Multi-threading
 ***/

class WorkerManager {
    constructor(workerScript) {
        this.worker = new Worker(workerScript);
    }

    postMessage(data) {
        this.worker.postMessage(data);
    }

    onMessage(callback) {
        this.worker.onmessage = event => callback(event.data);
    }
}

/*** 8. Intersection Observer
 * Element visibility detection
 * Lazy loading
 ***/

class VisibilityObserver {
    constructor(callback, options = {}) {
        this.observer = new IntersectionObserver(callback, options);
    }

    observe(element) {
        this.observer.observe(element);
    }

    disconnect() {
        this.observer.disconnect();
    }
}

/*** 9. Battery API
 * Device battery status
 * Power management
 ***/

class BatteryMonitor {
    static async getBatteryStatus() {
        if ('getBattery' in navigator) {
            const battery = await navigator.getBattery();
            return {
                level: battery.level,
                charging: battery.charging
            };
        }
        return null;
    }
}

/*** 10. Clipboard API
 * Copy/Paste operations
 * Clipboard access
 ***/

class ClipboardManager {
    static async copyText(text) {
        try {
            await navigator.clipboard.writeText(text);
            return true;
        } catch (error) {
            console.error('Clipboard write failed:', error);
            return false;
        }
    }

    static async readText() {
        try {
            return await navigator.clipboard.readText();
        } catch (error) {
            console.error('Clipboard read failed:', error);
            return null;
        }
    }
} 