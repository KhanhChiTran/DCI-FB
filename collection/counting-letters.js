// # Count the Letters and Digits
// ​
// Write a function that takes a string and calculates the number of letters and digits within it. Return the result as an object.
// ​
// ## Examples
// ​
function countAll(str) {
  const obj = { LETTERS: 0, DIGITS: 0 };
  for (let char of str) {
    if (char.trim()) {
      if (Number(char) === 0 || Number(char)) {
        obj["DIGITS"] += 1;
      } else {
        obj["LETTERS"] += 1;
      }
    }
  }
  return obj;
}

// ```js
console.log(countAll("Hello World")); //➞ { "LETTERS":  10, "DIGITS": 0 }
// ​
console.log(countAll("H3ll0 Wor1d")); //➞ { "LETTERS":  7, "DIGITS": 3 }
// ​
console.log(countAll("149990")); // ➞ { "LETTERS": 0, "DIGITS": 6 }
// ```
// ​
// ## Notes
// ​
// - containing only alphanumeric characters
// - Spaces are not letters
// - containg valid strings
