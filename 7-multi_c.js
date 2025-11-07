#!/usr/bin/node
const x = parseInt(process.argv[2], 10);

if (!process.argv[2] || isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < x; i++) {
    console.log('C is fun');
  }
}