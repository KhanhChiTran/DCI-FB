// Create a function that will return a sequence of numbers as an array.
// ​
// When using the function, you must specify how many numbers to be included in the sequence.
// ​
// When using the function, you could specify starting number for the sequence. If it is not specified, 1 is the default.
// ​
// When using the function, you could specify a step for the next number. If it is not specified, 1 is used by default.
// ​
// For example, `numSequence(4, 0, 2);` should return the sequence `[ 0, 2, 4, 6 ]` - 4 numbers, starting from 0, in a step of 2.
// function numSequence(num, startNum = 1, step = 1) {
//   let newArr = [];
//   newArr.push(startNum);
//   for (let i = 1; i < num; i++) {
//     startNum += step;
//     newArr.push(startNum);
//   }
//   console.log(newArr);
//   return newArr;
// }
// numSequence(5, 0, 2);
// function myArr(count, start = 1, step = 1) {
//   let nwArr = [];
//   let i = start;
//   nwArr.push(i);
//   while (nwArr.length < count) {
//     i += step;
//     nwArr.push(i);
//   }
//   return nwArr;
// }
// console.log(myArr(3, 0, 10));

//# Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// ​
// ## Examples
// mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// ​
// mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// ​
// mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
function mapping(arr) {
  let lettersObj = {};
  for (let char of arr) {
    lettersObj[char] = char.toUpperCase();
  }
  console.log(lettersObj);
  return lettersObj;
}
mapping(["p", "s"]);
mapping(["a", "v", "y", "z"]);

function uncensor(str, vowels) {
  let newArr = str.split("");
  let j = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "*") {
      newArr[i] = vowels[j];
      j += 1;
    }
  }
  return newArr.join("");
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));
