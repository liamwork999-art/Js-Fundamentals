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


// 🎯Functions Declaration and Expressions

// Function Declaration
function calcAge1(birthYear) { // perameter
    return 2037 - birthYear;
}

const age1 = calcAge1(2008);
console.log(age1);

// Function Expression
const clacAge2 = function (birthYear){
    return 2037 - birthYear;
}

const age2 = clacAge2(2008);
console.log(age1, age2);

// The difference is that we can call function declaration before they are defined but not with Expressions




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

// 🎯Intro to Arrays
