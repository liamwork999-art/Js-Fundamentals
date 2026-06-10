// This Contains the assignment for section 01 of js-fundamentals

/*

// 🎯Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK 😀

*/

/*

// ✔️Challenge Done 1#

const markMass = 95;
const markHieght = 1.88;
const johnMass = 85;
const johnHieght = 1.76;

const markBMI = markMass / markHieght ** 2;
const johnBMI = johnMass / johnHieght ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, ' > ', johnBMI, ' = ', markHigherBMI);

*/

/*

// 🎯Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.


Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"


2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement 😉
GOOD LUCK 

*/

/*

// ✔️Challenge Done 2#


const markMass = 95;
const markHieght = 1.88;
const johnMass = 85;
const johnHieght = 1.76;

const markBMI = markMass / markHieght ** 2;
const johnBMI = johnMass / johnHieght ** 2;

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`);
} else {
    console.log(`Mark's BMI (${markBMI}) is equal to John's BMI (${johnBMI})!`);
}

*/

/*
//  🎯Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each 
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:

1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, 
and print it to the console. Don't forget that there can be a draw, so test for that 
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points. Hint: Use a logical operator to test for minimum 
score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

          GOOD LUCK 😇
*/

/*

// ✔️Challenge Done 3#

const dolphinsScore = [97, 112, 101];
const koalasScore = [109, 95, 106];
const dolphinsSum = dolphinsScore[0] + dolphinsScore[1] + dolphinsScore[2];
const koalasSum = koalasScore[0] + koalasScore[1] + koalasScore[2];
const avgDol = dolphinsSum / 3;
const avgKoa = koalasSum / 3;


if (avgDol > avgKoa && avgDol > 100){
    console.log(`Team Dolphin is the winner🏆 with '${avgDol}' score!`);
}else if (avgKoa > avgDol && avgKoa > 100){
    console.log(`Team Koala is the winner 🏆 with '${avgKoa}' score!`);
} else if(avgDol === avgKoa && avgDol > 100 || avgKoa > 100){
    console.log(`The Game Ended in a Draw!`);
} else {
    console.log(`Non of the Teams Won!`);
}


*/

/*
// 🎯Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK �
*/

/*

// ✔️Challenge Done 4#

// tip 15% if the value is b/n 50 and 300 if not the tip is 20%

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill*(15/100) : bill*(20/100);
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/

// End of the challenges for section 01 of js-fundamentals🏆.
