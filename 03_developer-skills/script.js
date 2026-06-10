// This is Part-03 Developer-Skills and Editor-Setups

/* 
    The code is commented out because it is not necessary to run all the code at once, and it will help us to focus on one topic at a time. 
    You can uncomment the code to see the output and understand the concepts better.
*/

'use strict';

/*

const x = 23;
if (x === 23) console.log(23);

const calcAge = (birthYear) => {
  return 2037 - birthYear;
}; // An arrow function
console.log(calcAge(2000));
console.log('high'); // cl for console.log
console.log('localy');

*/

/*

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recebt task is this:
// "drive an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -1, -6, -1, 'error', 9, 74, 17, 6.6, 14, 7.1, 5];
// 1, Unerstand the problem

// - What is temp amplitude?  answer: difference between highest and lowest temp

// - How to compute max and min temps?
// - What does a sensor error? and what to do?

// 2, Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in the array
// - find min value in the array
// - substract min from max and return it

// 3, Problem Solved

const clearTemp = []; // This will then store the error ignored temperature
let max;
let min;
let amplitude; // the value of (max - min)

const merging = function (array1, array2) {
  let merged = array1.concat(array2);
  return merged;
};
const calcTempAmplitude = function (temperatures) {
  // Clearing the temperatures array
  for (let i = 0; i <= temperatures.length - 1; i++) {
    // ignoring error inputs
    if (typeof temperatures[i] === 'number') {
      clearTemp.push(temperatures[i]);
    } else {
      continue;
    }
  } // Successfully ignored sensor errors

  // Assigning the min and the max variables with the min value of the array and max respectivly

  for (let i = 0; i <= clearTemp.length - 1; i++) {
    if (typeof max === 'undefined' && typeof min === 'undefined') {
      max = clearTemp[i];
      min = clearTemp[i];
    } else if (clearTemp[i] > max) {
      max = clearTemp[i];
    } else if (clearTemp[i] < min) {
      min = clearTemp[i];
    } else {
      continue;
    }
  }

  // Assighning the amplitude
  amplitude = max - min;
  return amplitude;
};

calcTempAmplitude(merging(temperatures1, temperatures2)); // Calling the function
console.log(temperatures1);
console.log(temperatures2);
console.log(merging(temperatures1, temperatures2));
console.log(clearTemp);
console.log(
  `The minimum value is '${min}' While the maximum value is '${max}' and the amplitude is '${amplitude}'`,
);

// PROBLEM 2:
// Function should now receive 2 arrays of temp
// We need to merge two arrays

*/

/*
// Debugging

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: 10,
  };
  // console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// We can use the debugger; 
console.log(measureKelvin());
*/

//   End of Developer-skills and Editor-setups🏆.
