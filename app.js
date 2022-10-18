console.log("Hello World!\n==========\n");


// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i < 100; i++) {
    if (i % 2 == 1) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i < 100; i++) {
    let str = "";
    if (i % 3 == 0) str += "Fizz";
    if (i % 5 == 0) str += "Buzz";

    str = (str == "") ? i : str;
    console.log(str);
}

console.log("EXERCISE 3:\n==========\n");
let i = 1;
while (i < 100) {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
}

i = 1;
do {
    if (i % 2 == 1) {
        console.log(i);
    }
    i++;
} while (i < 100);

i = 1;

i = 1; 
while (i < 100) {
    let str = "";
    if (i % 3 == 0) str += "Fizz";
    if (i % 5 == 0) str += "Buzz";

    str = (str == "") ? i : str;
    console.log(str);
    i++;
}

i = 1;
do {
    let str = "";
    if (i % 3 == 0) str += "Fizz";
    if (i % 5 == 0) str += "Buzz";

    str = (str == "") ? i : str;
    console.log(str);
    i++;
} while (i < 100);

console.log("EXERCISE 4:\n==========\n");
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

const output = function(value) {
    for (let i = 0; i <= n; i++) {
        if (i == value) {
            return "Found value!";
        }
    }
    return "Did not find value"
}
console.log(output(value));

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i < n; i++) {
    let str = "";
    str += (i % fizzDivisor == 0) ? "Fizz" : "";
    str += (i % buzzDivisor == 0) ? "Buzz" : "";

    str = (str == "") ? i : str;
    console.log(str);
}