// This is Part-01 JavaScript fundamentals

/* 
    The code is commented out because it is not necessary to run all the code at once, and it will help us to focus on one topic at a time. 
    You can uncomment the code to see the output and understand the concepts better.
*/

'use strict'; // This will strict our coding

//  🎯Function

function logger() {
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

    