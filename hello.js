// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//     console.log(i);
//     break;
//   }
// }
// let vowels = ["a", "e", "i", "o", "u"];
// let words = ["apple", "strawberry", "orange"];
// for (let i = 0; i < words.length; i++) {
//   for (let j = 0; j < words[i].length; j++) {
//     if (vowels.includes(words[i][j])) {
//       console.log(j);
//       break;
//     }
//   }
// }

// var chess = "";
// var length = 8;

// for (var i = 0; i < length; i++) {
//   for (var j = 0; j < length; j++) {
//     if ((i + j) % 2 == 0) {
//       chess += "-";
//     } else {
//       chess += "#";
//     }
//   }
//   chess += "\n";
// }
// console.log(chess);

//diagonal

// let l = 15;
// let diagonal = "";
// for (var i = 0; i < l; i++) {
//   diagonal += "|".repeat(i) + "=".repeat(l - i) + " \n";
// }
// console.log(diagonal);

//Solution 1
let vowels = ["a", "e", "i", "o", "u"];
let words = ["Celebration", "Rocket", "Prediction", "Thin"];

for (let i = 0; i < words.length; i++) {
  let count = 0;
  for (let j = 0; j < words[i].length; j++) {
    if (!vowels.includes(words[i][j])) {
      count += 1;
    }
  }
  console.log(count);
}

//Another Solution

// let words = ["Celebration", "Rocket", "Prediction", "Thin"];
// let vowels = ["a", "e", "i", "o", "u"];

// let consonants = words.map((word) => {
//   let count = 0;
//   for (let letter of word) {
//     if (!vowels.includes(letter)) {
//       count += 1;
//     }
//   }
//   return count;
// });
// console.log(consonants);

// # 3 Hacker speak

let str = "javascript is cool";
let splits = str.split("");
let length = splits.length;

// <<====  Else if METHOD : ===>>>>>

// for (let i = 0; i < length; i++) {
//   if (splits[i] == "a") {
//     splits[i] = 4;
//   }
//   if (splits[i] == "e") {
//     splits[i] = 3;
//   }
//   if (splits[i] == "i") {
//     splits[i] = 1;
//   }
//   if (splits[i] == "o") {
//     splits[i] = 0;
//   }
//   if (splits[i] == "s") {
//     splits[i] = 5;
//   }
// }
// let codedStr = splits.join("");
// console.log(codedStr);

// <<====  Switch case METHOD: ===>>>>>

for (let i = 0; i < splits.length; i++) {
  switch (str[i]) {
    case "a":
      splits[i] = 4;
      break;
    case "e":
      splits[i] = 3;
      break;
    case "i":
      splits[i] = 1;
      break;
    case "o":
      splits[i] = 0;
      break;
    case "s":
      splits[i] = 5;
      break;
    default:
      break;
  }
}
let codedStr = splits.join("");
console.log(codedStr);

// <<====  Replace with RegExp METHOD : ===>>>>>

// let str = "javascript is cool";
// let newStr = str
//   .replace(/a/g, 4)
//   .replace(/e/g, 3)
//   .replace(/i/g, 1)
//   .replace(/o/g, 0)
//   .replace(/s/g, 5);
// console.log(newStr);

// function hello(...data) {
//   data.forEach((item) => {
//     console.log("item: " + item);
//   });
// }
// hello(1, 2, 3);

var numbers = [1, 2, 3, 4, 5];
var total = 0;
let i = 0;
function averageValue(numbers) {
  var averageValue = 0;
  if (numbers.length > 0) {
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    averageValue = total / numbers.length;
  }
  return averageValue;
}
var average = averageValue(numbers);
console.log(i);

var text = "metaprogramming";
var text1 = text.slice(4, 7);
console.log(text1);
var sum = 0.1 + 0.7;
console.log(sum);
