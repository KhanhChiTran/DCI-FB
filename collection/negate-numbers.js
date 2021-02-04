// # Negate the Array of Numbers
// ​
// Given an array of numbers, negate all elements contained within.
// ​
// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

const negate = (arr) => {
  return arr.map((num) => num * -1);
};

console.log(negate([1, 2, 3, 4])); // ➞ [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4])); // ➞ [-1, -2, -3, -4]
console.log(negate([])); // ➞ []

// ## Notes
// If you get an empty array, return an empty array: []

// # Unlucky 13
// ​
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

const unlucky13 = (arr) => {
  return arr.filter((num) => num % 13 !== 0);
};

console.log(unlucky13([53, 182, 435, 591, 637])); //➞ [53, 435, 591]
// 182 and 637 are divisible by 13.
console.log(unlucky13([24, 316, 393, 458, 1279])); //➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.
console.log(unlucky13([104, 351, 455, 806, 871])); //➞ []
// All numbers in the array are divisible by 13
