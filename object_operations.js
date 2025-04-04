// JavaScript Object Operations

// 1. Creating an initial object
let person = {
    name: "John",
    age: 25,
    isStudent: true
};

console.log("1. Original Object:", person);

// 2. Adding new properties
person.email = "john@example.com";                // Dot notation
person["phone"] = "123-456-7890";                // Bracket notation
console.log("\n2. After adding properties:", person);

// 3. Modifying existing properties
person.name = "John Doe";                        // Updating simple property
person.age += 1;                                 // Incrementing numeric property
console.log("\n3. After modifying properties:", person);

// 4. Deleting properties
delete person.isStudent;                         // Removing a property
console.log("\n4. After deleting isStudent:", person);

// 5. Object methods
let enhancedPerson = {
    name: "John",
    age: 25,
    sayHello() {                                // Method definition
        return `Hello, my name is ${this.name}`;
    },
    getAgeInDays() {
        return this.age * 365;
    }
};
console.log("\n5. Object methods:");
console.log(enhancedPerson.sayHello());
console.log("Age in days:", enhancedPerson.getAgeInDays());

// 6. Object.keys(), Object.values(), Object.entries()
console.log("\n6. Object inspection:");
console.log("Keys:", Object.keys(person));
console.log("Values:", Object.values(person));
console.log("Entries:", Object.entries(person));

// 7. Merging objects (Object spread)
let personalInfo = { name: "John", age: 25 };
let contactInfo = { email: "john@example.com", phone: "123-456-7890" };
let completeProfile = { ...personalInfo, ...contactInfo };
console.log("\n7. Merged objects:", completeProfile);

// 8. Object destructuring
const { name, email, phone: phoneNumber } = completeProfile;  // Renaming while destructuring
console.log("\n8. Destructured values:");
console.log("Name:", name);
console.log("Email:", email);
console.log("Phone (renamed):", phoneNumber);

// 9. Nested objects
let company = {
    name: "Tech Corp",
    employee: {
        id: 123,
        details: {
            position: "Developer",
            department: "IT"
        }
    }
};
console.log("\n9. Nested object access:");
console.log(company.employee.details.position);

// 10. Object property shorthand
let firstName = "John";
let lastName = "Doe";
let shorthandObject = { firstName, lastName };    // Same as { firstName: firstName, lastName: lastName }
console.log("\n10. Shorthand object:", shorthandObject);

// 11. Computed property names
let propertyName = "dynamic";
let dynamicObject = {
    [propertyName]: "This is a dynamic property name",
    [`computed${propertyName}`]: "Another dynamic name"
};
console.log("\n11. Computed properties:", dynamicObject);

// 12. Object methods from Object class
let objectDemo = { a: 1, b: 2 };
console.log("\n12. Object class methods:");
console.log("Is Frozen?", Object.isFrozen(objectDemo));
Object.freeze(objectDemo);                        // Make object immutable
console.log("Is Frozen after freeze?", Object.isFrozen(objectDemo));

// 13. Property descriptors
let descriptorObject = {};
Object.defineProperty(descriptorObject, 'readOnly', {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: false
});
console.log("\n13. Property descriptor demo:", descriptorObject.readOnly);

// 14. Object observation (checking if property exists)
console.log("\n14. Property checks:");
console.log("'name' in person:", 'name' in person);
console.log("person.hasOwnProperty('age'):", person.hasOwnProperty('age'));

// Try running this code to see all the different ways you can work with objects! 