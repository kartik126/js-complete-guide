/*** Object-Oriented Programming in JavaScript
 * Classes are templates for creating objects
 * Introduced in ES6 but built on prototype inheritance
 * Supports inheritance, encapsulation, and polymorphism
 ***/

/*** Basic Class Definition
 * Constructor method initializes object
 * Methods are shared across instances
 * 'this' refers to current instance
 ***/
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

const dog = new Animal('Rex', 3);
console.log('Dog:', dog);
dog.speak();


/*** Class Inheritance
 * 'extends' keyword for inheritance
 * 'super' calls parent constructor
 * Child can override parent methods
 ***/
class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name} barks!`);
    }

    fetch() {
        console.log(`${this.name} fetches the ball`);
    }
}

const rex = new Dog('Rex', 3, 'German Shepherd');
console.log('Dog with breed:', rex);
rex.speak();
rex.fetch();

/*** Getters and Setters
 * Control access to class properties
 * Can add validation or transformation
 * Called like properties, not methods
 ***/
class BankAccount {
    constructor(initialBalance) {
        this._balance = initialBalance;
    }

    get balance() {
        return `$${this._balance}`;
    }

    set balance(value) {
        if (value < 0) {
            throw new Error('Balance cannot be negative');
        }
        this._balance = value;
    }
}

const account = new BankAccount(1000);
console.log('Account balance:', account.balance);

/*** Static Methods and Properties
 * Belong to class itself, not instances
 * Called on class, not objects
 * Useful for utility functions
 ***/
class MathOperations {
    static PI = 3.14159;

    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }
}

console.log('PI:', MathOperations.PI);
console.log('Square of 4:', MathOperations.square(4));

/*** Private Class Fields
 * Marked with # prefix
 * Only accessible within class
 * Provides true encapsulation
 ***/
class Car {
    #mileage = 0;
    
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive(distance) {
        this.#mileage += distance;
        console.log(`Drove ${distance}km`);
    }

    getMileage() {
        return this.#mileage;
    }
}

const tesla = new Car('Tesla', 'Model 3');
tesla.drive(100);
console.log('Mileage:', tesla.getMileage());

/*** Interface-like Pattern
 * JavaScript doesn't have built-in interfaces
 * Can use class methods to enforce structure
 ***/
class Shape {
    area() {
        throw new Error('Method not implemented');
    }

    perimeter() {
        throw new Error('Method not implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

const rect = new Rectangle(5, 3);
console.log('Rectangle area:', rect.area());
console.log('Rectangle perimeter:', rect.perimeter()); 