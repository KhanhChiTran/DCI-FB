// # Find First Character That Repeats
// ​
// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".
function firstRepeat(str) {
  let result = null;
  for (let char of str) {
    if (str.indexOf(char) !== str.lastIndexOf(char)) {
      result = char;
    }
  }
  return result ? result : -1;
}
// ```js
console.log(firstRepeat("legolas")); //➞ "l"
// ​
console.log(firstRepeat("Gandalf")); //➞ "a"
// ​
console.log(firstRepeat("Balrog")); //➞ "-1"
// ​
console.log(firstRepeat("Isildur")); //➞ "-1"
// // Case sensitive "I" not equal to "i"
// ```
// ​
// ## Notes
// ​
//The funtion should be case sensitive.
function firstRepeat(str) {
  const obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char] = char;
      break;
    } else {
      obj[char] = -1;
    }
  }
  return obj;
}
