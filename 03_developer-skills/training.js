/*
🔢 Variables & Basic MathTemperature Converter: 

- Create a function that converts Celsius to Fahrenheit using the formula \((C \times 9/5) + 32\).
- Tip Calculator: Write a function that accepts a bill total and a tip percentage, then returns the total amount to pay.

🔀 Conditionals (if/else)Even or Odd: 

- Take an input number and return whether it is even or odd using the remainder operator (%).
- Grade Calculator: Accept a numerical score (0 to 100) and return a letter grade (A, B, C, D, or F) using if and else if statements.
- Leap Year Checker: Write a program that checks if a specific year is a leap year (divisible by 4, but not by 100 unless also divisible by 400).

🔁 Loops (for & while)

- FizzBuzz: Loop through numbers from 1 to 50. Print "Fizz" if the number is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both.
- Factorial Finder: Create a function that calculates the factorial of a number (e.g., 5! is 5 × 4 × 3 × 2 × 1 = 120).
- Multiplication Table: Write a loop that prints the multiplication table for a specific number up to 10.
  
🧵 String ManipulationReverse a String: 

- Take a string like "hello" and return it backwards ("olleh").Vowel Counter: Write a function that counts how many vowels (a, e, i, o, u) are inside a given sentence.Palindrome Checker: Check if a word reads the same backward as forward (like "racecar").

📊 Arrays & Array MethodsFind the Maximum: 

- Create an array of numbers and write a script to find and return the largest number.Sum of Elements: Take an array of numbers and calculate their total sum.Remove Duplicates: Write a function that accepts an array with repeating items and returns a new array with only unique values.

🗃️ Object BasicsBook Tracker: 

- Create an object representing a book with properties like title, author, and isRead. Write a function that changes the isRead status.Shopping Cart Total: Create an array of items where each item is an object containing a name and a price. Calculate the combined total price.

*/

"use strict";

// 🎯First Testing

/*
const celsiusToFahrenheit = function (celsius) {
  return (celsius * 9) / 5 + 32;
};

console.log(celsiusToFahrenheit(100));
*/

// 🎯Second Testing

/*

const totalAmount = function (totalBill, percentageTip) {
  const tip = totalBill * percentageTip;
  return totalBill + tip;
};

console.log(totalAmount(100, 0.15));

*/

// 🎯Third Testing

/*

const oddOrEven = function (number) {
  if (number % 2 === 0) {
    return "It is an even number";
  } else {
    return "It is an odd number";
  }
};

console.log(oddOrEven(3));

*/

// 🎯Forth Testing

/*

const gradeCalc = function (grade) {
  if (grade >= 0 && grade <= 100) {
    if (grade >= 95) {
      return " Graded: A";
    } else if (grade >= 90 && grade < 95) {
      return " Graded: B";
    } else if (grade >= 85 && grade < 90) {
      return " Graded: C";
    } else if (grade >= 80 && grade < 85) {
      return " Graded: D";
    } else if (grade >= 75 && grade < 80) {
      return " Graded: E";
    } else if (grade < 75) {
      return " Graded: F";
    }
  } else {
    return "ERROR: The number should be with in 0 to 100..";
  }
};

console.log(gradeCalc(4));

*/

/*

function isLeapYear(year) {
  if (year % 400 === 0) {
    return `${year} is a leap year`;
  } else if (year % 100 === 0) {
    return `${year} is not a leap year`;
  } else if (year % 4 === 0) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

console.log(isLeapYear(1900));

*/

// 🎯Fifth Testing

/*

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i}: FIZZBUZZ`);
  } else if (i % 3 === 0) {
    console.log(`${i}: FIZZ`);
  } else if (i % 5 === 0) {
    console.log(`${i}: BUZZ`);
  }
}

*/

// 🐦‍🔥PROBLEM 1:

/*
1. Palindrome Checker

Prompt:

  Write a function that checks if a word reads the same forward and backward.

Example:

  "racecar" → true
  "hello" → false
 
What it helps you practice:

  strings
  loops or array methods
  conditionals

*/

// STEP 1: Understand the input and output

// The input is any english word
// The output is True if the word is the same forward and backward

// STEP 2: Write te logic words

/*
function isReversable(word):
if: word.forward is === to word.backward ->
 then retrun: ${word} -> true
elseif: word is !== to word.backward -> 
 then retrun: ${word} -> false

console.log(isReversable('Hello'))

OUTPUT:
'Hello' -> false

*/

// SOLUTION 1:

/*
const isReversable = function (word) {
  let wordArray;
  let reversedArray;
  let reversedWord;
  // This will reverse the word backwards
  if (typeof word === "string") {
    wordArray = word.split("");
    reversedArray = wordArray.reverse();
    reversedWord = reversedArray.join("");
  } else {
    return "The input is not a STRING";
  }

  // This will compare the original and reversed and gives us an output

  if (word === reversedWord) {
    return `${word} -> True`;
  } else {
    return `${word} -> False`;
  }
};

console.log(isReversable("racecar"));

*/

// 🐦‍🔥PROBLEM 2:

/*
2. Sum of Even Numbers

Prompt:

  Write a function that takes an array of numbers and returns the sum of only the even numbers.

Example:

 [1, 2, 3, 4, 5, 6] → 12

What it helps you practice:

  arrays
  loops
  conditionals
  math

 */

// STEP 1: Understand the input and output

// The input an array of numbers
// and outputs the sum of an even numbers only

// STEP 2: Write the logic in words

/*
function(array):

let sumOfEvenArrays;

  for [loop arrays]{
   if [i % 2 === 0]{
    sumOfEvenArrays += i;
   } else{
      continue;
    }
  }
  
 returns `${collectedArrays} --> ${sumOfEvenArra}`;
*/

// SOLUTION 2:

/*
const sumOfEvenNumbers = function (array) {
  let sumOfEvenArrays = 0;

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];

    if (currentValue % 2 === 0) {
      sumOfEvenArrays += currentValue;
    }
  }

  return `[${array}] --> ${sumOfEvenArrays}`;
};

const array = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenNumbers(array));
*/
