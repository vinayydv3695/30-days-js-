
// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
console.log("Activity 1: For Loop - Task 1");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("\nActivity 1: For Loop - Task 2");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
console.log("\nActivity 2: While Loop - Task 3");
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log(`Sum of numbers from 1 to 10 is ${sum}`);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
console.log("\nActivity 2: While Loop - Task 4");
num = 10;
while (num >= 1) {
    console.log(num);
    num--;
}


// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("\nActivity 3: Do...While Loop - Task 5");
num = 1;
do {
    console.log(num);
    num++;
} while (num <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
console.log("\nActivity 3: Do...While Loop - Task 6");
let factorial = 1;
num = 5; // Change this to any number to calculate its factorial
let temp = num;
do {
    factorial *= temp;
    temp--;
} while (temp > 0);
console.log(`Factorial of ${num} is ${factorial}`);

// Task 7: Write a program to print a pattern using nested for loops.
console.log("\nActivity 4: Nested Loops - Task 7");
let rows = 5;
for (let i = 1; i <= rows; i++) {
    let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}


// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("\nActivity 5: Loop Control Statements - Task 8");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue;
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("\nActivity 5: Loop Control Statements - Task 9");
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}
