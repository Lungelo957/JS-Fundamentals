#!/usr/bin/node

// Get the input argument and cast to integer
const num = parseInt(process.argv[2]);

// Define recursive factorial function
function factorial(n) {
  if (isNaN(n) || n < 0) return 1; // Handle NaN and negative cases
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

// Print the result
console.log(factorial(num));
