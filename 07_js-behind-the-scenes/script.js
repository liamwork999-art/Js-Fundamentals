'use strict';

// Defined in a Global scope
function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function printAge() {
    const outPut = `You are ${age}, born in ${birthyear}`;
    console.log(outPut);
  }

  printAge();
  return age;
}

const firstName = 'jonas';
calcAge(1991);
