#!/usr/bin/node

function factorial(n) {
  n = parseInt(n, 10);
  if (isNaN(n) || n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = process.argv[2];
console.log(factorial(arg));