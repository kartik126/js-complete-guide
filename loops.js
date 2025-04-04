// JavaScript Loops and Iterations

// 1. For Loop - Basic counter
console.log("1. Basic For Loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Iteration ${i}`);
}

// 2. While Loop
console.log("\n2. While Loop:");
let count = 0;
while (count < 3) {
    console.log(`Count is ${count}`);
    count++;
}

// 3. Do-While Loop (executes at least once)
console.log("\n3. Do-While Loop:");
let num = 0;
do {
    console.log(`Number is ${num}`);
    num++;
} while (num < 3);

// 4. For...of Loop (for iterating arrays)
console.log("\n4. For...of Loop:");
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}

// 5. For...in Loop (for iterating object properties)
console.log("\n5. For...in Loop:");
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}


// 6. forEach Method (for arrays)
console.log("\n6. forEach Loop:");
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index}: ${fruit}`);
});

// 7. Break and Continue
console.log("\n7. Break and Continue:");
for (let i = 0; i < 5; i++) {
    if (i === 1) continue; // Skip iteration
    if (i === 4) break;    // Exit loop
    console.log(`Number ${i}`);
}

// 8. Nested Loops
console.log("\n8. Nested Loops:");
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
} 