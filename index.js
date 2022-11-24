'use strict';

//////////////////////////////////////////////////////
const low = 15;
const high = 30;
console.log(`Listing all numbers from ${low} up to ${high}`);

let current = low;
while (current < high) {
  console.log(current);
  current++; // Increment by 1
}

//////////////////////////////////////////////////////
// We could also use take bigger steps
const step = 3;
console.log(`Listing all numbers from ${low} up to ${high}, taking ${step} steps at a time.`);
current = low;
while (current < high) {
  console.log(current);
  current += step; // Increment by step
}

//Fork the previous  REPL and print out all multiples of 5 between 1200 and 1300.
const baseNumberOperand = 1200;
const secondNumberOperand = 1300;
let currentSteps = baseNumberOperand;

const stepOfFive = 5;
console.log(`Listing all multiples of 5 from ${baseNumberOperand} up to ${secondNumberOperand}.`);
currentSteps = baseNumberOperand;
while (currentSteps < secondNumberOperand) {
  console.log(currentSteps);
  currentSteps += stepOfFive; // Increment by step
}
