// This is Part-02 JavaScript fundamentals

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

/*

// 🎯Objects

// just like dictionary's in python😇

const liamArray = ['Liam', 'Araya', 17, 'student', ['tigray', 'Mekelle', 'Lachi']];
const liamObj = {
    firstName: "Liam",
    lastName: "Araya",
    age: 17,
    job: 'Student',
    addres: ['tigray', 'Mekelle', 'Lachi']
};
console.log(liamObj.firstName);

*/

/*
// 🎯Dot vs Bracket Notation

// getting data from objects
const liamArray = ['Liam', 'Araya', 17, 'student', ['tigray', 'Mekelle', 'Lachi']];
const liamObj = {
    firstName: "Liam",
    lastName: "Araya",
    age: 17,
    job: 'Student',
    addres: ['tigray', 'Mekelle', 'Lachi'],
    friends: ['Michael', 'Lil uzi', 'Ray']
};
console.log(liamObj);

console.log(liamObj.lastName); // the dot notation
// or
console.log(liamObj['lastName']); // the bracket notation

const nameKey = 'Name';
console.log(liamObj[`first${nameKey}`]);

console.log(liamObj.job);

// Adding new prop
liamObj.location = 'Ethiopia';
liamObj['Gmail'] = '@gmail.com';
console.log(liamObj);

const numberOfFriends = liamObj.friends.length;
console.log(numberOfFriends);
const bestFriend = liamObj.friends[0];
console.log(bestFriend);

*/
/*

// 🎯Object Methods
const liam = {
    firstName: "Liam",
    lastName: "Araya",
    birthYear: 2008,
    job: 'Student',
    addres: ['tigray', 'Mekelle', 'Lachi'],
    friends: ['Michael', 'Lil uzi', 'Ray'],
    canDrive: false,
    // clacAge: function(birthYear){ // We can have a function inside an object, which were the key is the function's name
    //     return 2026 - birthYear; // and we will use the function expression b/z the object is waiting for expressions
    // }
    // clacAge: function(){ // this means the liam object it self that means 'this' = 'liam'
    //     return 2026 - this.birthYear;
    // }
    clacAge: function(){
        this.age = 2026 - this.birthYear;
        return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.clacAge()}-years old ${liam.job}, and he has ${this.canDrive ? 'a' : 'no'} drivers license.`;
    }
};

console.log(liam.clacAge());
console.log(liam.age);
console.log(liam.age);

console.log(liam.age);
console.log(liam.age);

// console.log(liam['clacAge'](liam.birthYear));

// Challenge
// "Liam is a 46-years old teacher, and he has a/no drivers license."
// if (liam.canDrive){
//     console.log(`${liam.firstName} is a ${liam.age}-years old ${liam.job}, and can drive.`)
// } else{
//     console.log(`${liam.firstName} is a ${liam.age}-years old ${liam.job}, and cann't drive.`)
// }

console.log(liam.getSummary());
// Fun fact arrays are also objects

*/

/*

// 🎯Iteration the for loop


// console.log(`Lifting weights repetition 1 💪`);
// console.log(`Lifting weights repetition 2 💪`);
// console.log(`Lifting weights repetition 3 💪`);
// console.log(`Lifting weights repetition 4 💪`);
// console.log(`Lifting weights repetition 5 💪`);
// console.log(`Lifting weights repetition 6 💪`);
// console.log(`Lifting weights repetition 7 💪`);
// console.log(`Lifting weights repetition 8 💪`);

// instead of this we can create a loop
// for loop keeps running while the condition is true
// for(let i = 1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i} 💪`);
// }
const liam = [
    'Liam', 
    'Araya', 
    17, 
    'student', 
    ['tigray', 'Mekelle', 'Lachi']
];
const types = [];

for(let i = 0; i < liam.length; i++){
    console.log(liam[i], typeof liam[i]);

    // types[i] = typeof liam[i];
    types.push(typeof liam[i]);
}

console.log(types);

const currentYear = 2026;
const years = [1991, 2007, 1986, 2020];
const clacAge = function(year){
    return currentYear - year;
};
const ages = [];
for(let i = 0; i < years.length; i++){
    ages.push(clacAge(years[i]));
}
console.log(years);
console.log(ages);

// continue and break
for(let i = 0; i < liam.length; i++){
    if (typeof liam[i] !== 'string') continue; // Only strings will be out putted for continue will jump an iteration who are not strings
    console.log(liam[i], typeof liam[i]);

}
for(let i = 0; i < liam.length; i++){
    if (typeof liam[i] === 'number') break; // as soon as number is found the loop will be exited
    console.log(liam[i], typeof liam[i]);

}

*/

/*

// 🎯Looping backwards and Looping in loops

const liam = [
    'Liam', 
    'Araya', 
    17, 
    'student', 
    ['tigray', 'Mekelle', 'Lachi'],
    true
];
// Loopping backwards

for(let i = liam.length - 1; i >= 0; i--){
    console.log(i, liam[i]);
}

// Looping inside a loop

for (let exr = 1; exr <= 3; exr++){
    console.log(`------Starting exr ${exr}.`);
    for(let rep = 1; rep <= 5; rep++){
        console.log(`   -> Reps per exercise ${rep} 💪!`);
    }
}

*/

/*
// 🎯While loop

// for(let i = 1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i} 💪`);
// }

// we can only take a condition

// console.log(`--------WHILE LOOP`);


let rep = 1;
while(rep <= 10){
    console.log(`Lifting weights repetition ${rep} 💪`);
    rep++;
}

let rollDice = Math.trunc(Math.random() * 6) + 1;
console.log(rollDice);

if(rollDice === 6) console.log(`You got 6, the loop is over`);
while(rollDice !== 6){
    console.log(`You rolled a ${rollDice}`);
    rollDice = Math.trunc(Math.random() * 6) + 1;
    if(rollDice === 6) console.log(`You got 6, the loop is over`);
}

*/

//   End of Part-02 JavaScript fundamentals🏆.