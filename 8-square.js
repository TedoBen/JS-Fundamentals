#!/usr/bin/node
const size = parseInt(process.argv[2], 10);

if (!process.argv[2] || isNaN(size) || size < 1) {
  console.log('Missing size');
} else {
  for (let i = 0; i < size; i++) {
    console.log('X'.repeat(size));
  }
}