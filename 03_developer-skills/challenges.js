// This Contains the assignment for Developer-skills and Editor-setups

/*

🎯 Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a 
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:

    1. Create a function 'printForecast' which takes in an array 'arr' and logs a 
        string like the above to the console. Try it with both test datasets.
    2. Use the problem-solving framework: Understand the problem and break it up 
        into sub-problems!
Test data:
    § Data 1: [17, 21, 23]
    § Data 2: [12, 5, -5, 0, 4]
                    
                GOOD LUCK 

*/

/*
// ✔️Challenge Done

// 1, Understand the problem:
// the temperature will give us an array of temperatures
// then we will print the arrays values like so: Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...".
// How many value does the array contain? we should use a loop and contain it in an another array

// 2, Divide and conquer:
// we should create a function called printForecast
// we should try using other array for containing the results

// 3, asking for google
// what to do if you don't know the number of values in an array but want to operate?
// how to join values of an array into one string?

const printForecast = function (array) {
  const lengthOfArray = array.length - 1;
  const printing = [];
  for (let i = 0; i <= lengthOfArray; i++) {
    printing.push(
      `... ${array[i]}°C in ${i + 1} ${i + 1 === 1 ? 'day' : 'days'} `,
    );
  }
  const forecast = printing.join(''); // This will join the values insinde the array into one string
  return forecast;
};
console.log(printForecast([17, 23, 21, -5, 6, 8]));
// now we don't even have to worry how many values does the array given to us is.

*/

//    End of the challenges for Developer-skills and Editor-setups🏆.
