/*
  * Problem No. 1) 
*/
console.log("<<<--Problem No 1-->>>");
const num = require("prompt-sync")();
var check = parseInt(num("Enter the value n: "));
console.log("Power of 2 upto "+ check +" is")
for (let x = 0; x <= check; x++){
    y = 2**x
    console.log(y);
}
console.log("---------------------------------------");

/*
  * Problem No. 2) 
*/
console.log("<<<--Problem No 2-->>>");
const num2 = require("prompt-sync")();
var n = parseInt(num2("Enter the value n: "));
let harmonic = 0;
for( let h = 1; h <= n; h++){
    harmonic += (1/h);
    console.log(harmonic);
}
console.log("---------------------------------------");

/*
  * Problem No. 3) 
*/
console.log("<<<--Problem No 3-->>>");
const num3 = require("prompt-sync")();
let pm = parseInt(num3("Enter the Positive Number to check its prime or not: "));
let isPrime = true;

if (pm === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (pm > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < pm; i++) {
        if (pm % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${pm} is a prime number`);
    } else {
        console.log(`${pm} is a not prime number`);
    }
}
console.log("---------------------------------------");

/*
  * Problem No. 4) 
*/
console.log("<<<--Problem No 4-->>>");
const num3 = require("prompt-sync")();
const lowerNumber = parseInt(num3('Enter lower number: '));
const higherNumber = parseInt(num3('Enter higher number: '));

console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
console.log("---------------------------------------");

/*
  * Problem No. 5) 
*/
console.log("<<<--Problem No 5-->>>");
const num4 = require("prompt-sync")();

// program to find the factorial of a number

// take input from the user
const number = parseInt(num4('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
console.log("---------------------------------------");


/*
  * Problem No. 6) 
*/
console.log("<<<--Problem No 6-->>>");
const num4 = require("prompt-sync")();
const fact = parseInt(num4('Enter a positive integer: '));
var dont = [], max = fact, primes = [];

for (var i = 2; i <= max; i++) {
    if (!dont[i]) {
        primes.push(i);
        for (var j = i; j <= max; j += i) dont[j] = true;
    }
}

console.log(primes);

console.log("---------------------------------------");