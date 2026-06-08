// This is Part-01 JavaScript fundamentals

/* 
    The code is commented out because it is not necessary to run all the code at once, and it will help us to focus on one topic at a time. 
    You can uncomment the code to see the output and understand the concepts better.
*/

'use strict'; // This will strict our coding
/*

//  🎯Function

function logger() {// function declaration
    console.log('My name is liam');
}

logger(); // calling / running / invoking functions

function fruitP(apples, mangos) { // This one way of assigning a function
    // console.log(apples, mangos);
    const juice = `Juice with ${apples} apples and ${mangos} mangos.`;
    return juice; // This returns the value of juice.
}

const juice = fruitP(2, 3); // This returns the value of juice.
console.log(juice);


const appleMangoJuice = fruitP(2, 4);
console.log(appleMangoJuice);
*/
/*

// 🎯Functions Declaration and Expressions

// Function Declaration
function calcAge1(birthYear) { // perameter
    return 2037 - birthYear;
}

const age1 = calcAge1(2008);
console.log(age1);

// Function Expression


const age2 = clacAge2(2008);
console.log(age1, age2);

// The difference is that we can call function declaration before they are defined but not with Expressions

*/

/*


// 🎯Arrow Function


const calcAge3 = birthYear => 2037 - birthYear; // This is an Arrow function
// This is good in simpler one line functions
const age3 = calcAge3(2008);
console.log(age3);

const yearsUntilRetiremnt = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetiremnt(2008, 'Liam'));

*/
/*

// 🎯Functions calling other functions

// function cutFruit(fruit){
//     return fruit * 4;
// }

const cutFruit = fruit => fruit * 4;

function fruitP(apples, mangos) { // This one way of assigning a function
    const applePieces = cutFruit(apples);
    const mangoPieces = cutFruit(mangos);
    // console.log(apples, mangos);
    const juice = `Juice with ${applePieces} apples pieces and ${mangoPieces} mangos pieces.`;
    return juice; // This returns the value of juice.
}

console.log(fruitP(2, 3));

*/

/*

// 🎯Intro to Arrays

// Arrays & objects are a data structure
const friends = ['liam', 'john', 'peter'];
console.log(friends);

// const years = new Array(1192, 9182, 8394);
// console.log(years);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);
console.log(friends);

friends[2] = 'ray';
console.log(friends);

// An array can hold a diffent values at the same time
const firstName = 'liam';
const liam = [firstName, 17, 'araya'];
console.log(liam);

const clacAge = function (birthYear){
    return 2026 - birthYear;
}
const years = [1990, 1967, 2002, 2004, 1980];

let i;
const ages = [];

for(i in years){
    ages.push(clacAge(years[i]));
}
console.log(ages);

*/
/*

// 🎯Basic Array Operations[Methods]


const years = [1990, 1967, 2002, 2004, 1980];
console.log(years);
years.push(9000);
console.log(years);
// Push appends a value to the end of the array, and it's a function

years.unshift(1022);
console.log(years)
// Unshift appends a value to the begining of the array

years.pop(); // pop will remove the last element , the opposite of push function
console.log(years);

years.shift(); // First element is deleted
console.log(years);

console.log(years.indexOf(1967));
console.log(years);

console.log(years.includes(1967)); // uses a strict equality, and boolane

*/

// 🎯Objects
