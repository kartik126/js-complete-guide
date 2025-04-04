/*** Class vs Instance Explanation
 * Class: A blueprint/template for creating objects
 * Instance: An actual object created from the class
 * Think of Class as a house blueprint, and Instance as an actual house built from it
 ***/

// Class Definition
class Car {
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    startEngine() {
        console.log(`${this.brand} ${this.model}'s engine is starting`);
    }
}

/*** Creating Instances
 * Each instance:
 * - Has its own copy of properties (brand, model, color)
 * - Shares the same methods (startEngine)
 * - Is independent of other instances
 ***/

// These are instances (actual cars)
const car1 = new Car("Toyota", "Camry", "red");
const car2 = new Car("Honda", "Civic", "blue");

console.log(car1); // Different properties
// Output: Car { brand: "Toyota", model: "Camry", color: "red" }

console.log(car2); // Different properties
// Output: Car { brand: "Honda", model: "Civic", color: "blue" }

/*** Key Differences Demonstration ***/

// 1. Multiple Instances from Same Class
class Dog {
    constructor(name) {
        this.name = name;
    }
    
    bark() {
        return `${this.name} says woof!`;
    }
}

// Different instances (different dogs)
const dog1 = new Dog("Rex");
const dog2 = new Dog("Max");

console.log(dog1.name); // "Rex"
console.log(dog2.name); // "Max"

/*** Memory and Methods
 * Methods are shared (one copy)
 * Properties are unique per instance
 ***/

console.log(dog1.bark === dog2.bark); // true (same method)
console.log(dog1.name === dog2.name); // false (different properties)

/*** Static vs Instance Members
 * Static: Belongs to class
 * Instance: Belongs to object
 ***/

class Counter {
    static totalCount = 0;  // Belongs to class
    instanceCount = 0;      // Belongs to instance

    increment() {
        Counter.totalCount++;    // Shared across all instances
        this.instanceCount++;    // Unique to this instance
    }
}

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment();
counter2.increment();

console.log(Counter.totalCount);    // 2 (shared)
console.log(counter1.instanceCount); // 1 (unique to counter1)
console.log(counter2.instanceCount); // 1 (unique to counter2)

/*** Summary:
 * Class:
 * - Blueprint/template
 * - Defines structure and behavior
 * - Can't be used directly (need to create instance)
 * - Static members belong to class
 * 
 * Instance:
 * - Actual object created from class
 * - Has own copy of properties
 * - Shares methods with other instances
 * - Can be created multiple times
 ***/ 