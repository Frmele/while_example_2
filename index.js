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