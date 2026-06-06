// This is Part-01 JavaScript fundamentals

// The code is commented out because it is not necessary to run all the code at once, and it will help us to focus on one topic at a time. You can uncomment the code to see the output and understand the concepts better.
// The code is clear with comments explaining each topic, and it is organized in sections for better readability. The code covers the basics of JavaScript, including values and variables, data types, let, const and var, basic operators, operator precedence, strings and template literals, if/else statements, type conversion and coercion, truthy and falsy values, equality operators, and logical operators.
// add the rest in here later 😜 

/*

console.log("Hello Wrold!");


// 🎯Values and Variables

console.log("Liam"); // now Liam is a value
console.log(23); // the number is a value too
// a value is the smallest data we have in Js

let firstName = 'Liam';
console.log(firstName);

// 'firstName' is called a variable and they store a value in them

// Naming rules and conventions camelCase.



// 🎯Data Types in JavaScript

let children; // Undefined value

// Boolean data type
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'Liam');
console.log(typeof children);

javascriptIsFun = 'Changed value'; // we can change the value of a variable but we cannot change the type of a variable.


children = 3;
console.log(typeof children);

console.log(typeof null);



// 🎯let, const and var

// var old way of declaring a variables
// we use let for variables that we want to change their value and const for variables that we don't want to change their value
// const is a constant variable and we cannot change its value once it is assigned
// we should completely avoid var


let age = 17;
const birthYear = 2008;
const name = 'Liam'; // this is declaring in a global scope
console.log(age, birthYear);

// The best practice is to use const



// 🎯Basic Operators

const currentYear = 2026;
const ageLiam = currentYear - 2008;
const ageSarah = currentYear - 2010;
console.log(ageLiam, ageSarah);

console.log(ageLiam * 2, ageSarah / 2, 2 ** 3); // 2 ** 3 means 2 to the power of 3
// concatination
const firstName = 'Liam';
const lastName = 'Araya';
console.log(firstName + ' ' + lastName);


// Assignment operators
let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10
console.log(x);
x *= 4; // x = x * 4
console.log(x);
x++; // x = x + 1
console.log(x);
x--;
console.log(x);

// Comparison operators
console.log(ageLiam > ageSarah); // the result is boolean value
console.log(ageSarah >= 18);


const isFullAge = ageSarah >= 18;



// 🎯Operator Precedence


const currentYear = 2026;
const ageLiam = currentYear - 2008;
const ageSarah = currentYear - 2010;

console.log(currentYear - 2008 > currentYear - 2010);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const avgAge = (ageLiam + ageSarah) / 2;
console.log(avgAge); // The avg is 17



// 🎯Strings and Template Literals

const firstName = 'Liam';
const job = 'student';
const birthYear = 2008;
const currentYear = 2026;


// $ the sign helps us to insert a variable in the string and the curly braces helps us to insert an expression in the string
const liam = `I'm ${firstName}, a ${job} born in ${birthYear}, and I'm ${currentYear - birthYear} years old.`;
console.log(liam);

console.log(`Just a regular string...`);

// \n means a new line
console.log('Stings with \n multiple \n lines');




// 🎯Taking Decisions: if / else Statements

const age = 17;
const isOldEnough = age >= 18;

// control structure
if (isOldEnough) { // a boolean value is expected in the condition
    console.log(`Sarah is old enough to start driving 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young to start driving. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2008;

let cuntury; // this variable is declared in the global scope and it can be accessed anywhere in the code
if (birthYear <= 2000) {
    let century = 20;
} else {
    let cetrury = 21;
}

console.log(century); // this will give an error because the variable century is only defined in the if and else blocks and it is not defined outside of them. This is called block scope.




// 🎯Type Conversion and Coercion

// Type conversion is when we manually convert a value from one type to another type. For example, we can convert a string to a number or a number to a string.
// Type coercion is when JavaScript automatically converts a value from one type to another type. For example, when we use the + operator with a string and a number, JavaScript will convert the number to a string and concatenate them.



const inputYear = '1991';
console.log(Number(inputYear) + 18); // this will convert the string '1991' to the number 1991
console.log(inputYear + 18); // this will give us '199118' because the + operator with a string will concatenate the string and the number


console.log(Number('Liam')); // this will give us NaN because 'Liam' cannot be converted to a number
console.log(typeof NaN); // the type of NaN is number

// we can also convert a number to a string
console.log(String(23)); // this will convert the number 23 to the string '23'


// Type coercion

console.log('I am ' + 23 + ' years old'); // this will give us 'I am 23 years old' because the + operator with a string will concatenate the string and the number
console.log('23' - '10' - 3); // this will give us 10 because the - operator will convert the strings to numbers and then perform the subtraction
console.log('23' * '2'); // this will give us 46 because the * operator will convert the strings to numbers and then perform the multiplication
console.log('23' / '2'); // this will give us 11.5 because the / operator will convert the strings to numbers and then perform the division


let n = '1' + 1; // this will give us '11' because the + operator with a string will concatenate the string and the number
n = n - 1; // this will give us 10 because the - operator will convert the string '11' to the number 11 and then perform the subtraction
console.log(n);



// 🎯Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // this will give us false because 0 is a falsy value   
console.log(Boolean(undefined)); // this will give us false because undefined is a falsy value
console.log(Boolean('Liam')); // this will give us true because 'Liam' is a truthy value
console.log(Boolean({})); // this will give us true because an empty object is a truthy value


const money = 0;
if (money) { // coercion happens automatically here..
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if(height) { // This won't work because height is undefined and undefined is a falsy value
    console.log(`YAY! Height ids defiened`);
} else{
    console.log(`Height is UNDEFINED`);
}




// 🎯Equality Operators: == vs. ===

const age = 18;
if (age === 18) console.log(`You just became an adult :D (strict equality)`); // this will give us 'You just became an adult :D' because the === operator checks for both value and type and in this case, age is a number and 18 is also a number, so they are equal in both value and type.

if (age == '18') console.log(`You just became an adult :D (loose equality)`); // this will also give us 'You just became an adult :D' because the == operator only checks for value and it does type coercion, so it will convert the string '18' to the number 18 and then compare them, and they are equal in value.
// const favourite = Number(prompt('What is your favorite number?')); // this will give us a number value

// === this does not do type coercion and it checks for both value and type
// == this does type coercion and it only checks for value

const favourite = 23;
console.log(typeof favourite);

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}



// 🎯Logical Operators

// Logical operators are used to combine multiple conditions. The logical operators are: && (and), || (or), ! (not)


const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // this will give us false because both conditions are not true
console.log(hasDriversLicense || hasGoodVision); // this will give us false because neither of the conditions is true
console.log(!hasDriversLicense); // this will give us false because hasDriversLicense is true and the ! operator negates it to false


// const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log(`Sarah is able to drive!`)
// } else {
//     console.log(`Someone else should drive...`)
// }


const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && !isTired); // this will give us false because isTired is true and the ! operator negates it to false, so the whole expression is false

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`)
} else {
    console.log(`Someone else should drive...`)
}

*/
