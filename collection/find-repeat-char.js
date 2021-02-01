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
// function firstRepeat(str) {
//   const obj = {};
//   for (let char of str) {
//     if (obj[char]) {
//       obj[char] = char;
//       break;
//     } else {
//       obj[char] = -1;
//     }
//   }
//   return obj;
// }
const students = [
  {
    id: 15,
    firstName: "Liana",
    lastName: "Gleason",
    grade: 253,
  },
  {
    id: 6,
    firstName: "Olen",
    lastName: "Schmitt",
    grade: 831,
  },
  {
    id: 41,
    firstName: "Darryl",
    lastName: "Nicolas",
    grade: 247,
  },
  {
    id: 64,
    firstName: "Eladio",
    lastName: "Davis",
    grade: 967,
  },
  {
    id: 74,
    firstName: "Veda",
    lastName: "Kling",
    grade: 313,
  },
  {
    id: 2,
    firstName: "Vern",
    lastName: "Rippin",
    grade: 201,
  },
  {
    id: 21,
    firstName: "Antonio",
    lastName: "Huel",
    grade: 753,
  },
  {
    id: 58,
    firstName: "Jacky",
    lastName: "Reynolds",
    grade: 620,
  },
  {
    id: 26,
    firstName: "Kamryn",
    lastName: "Windler",
    grade: 605,
  },
  {
    id: 91,
    firstName: "Jerrold",
    lastName: "Stark",
    grade: 465,
  },
  {
    id: 5,
    firstName: "Macy",
    lastName: "Cole",
    grade: 984,
  },
  {
    id: 49,
    firstName: "Carole",
    lastName: "Kuhn",
    grade: 645,
  },
  {
    id: 147,
    firstName: "Carley",
    lastName: "Moen",
    grade: 791,
  },
  {
    id: 4,
    firstName: "Nicklaus",
    lastName: "Goldner",
    grade: 923,
  },
  {
    id: 876,
    firstName: "Avis",
    lastName: "Dickens",
    grade: 569,
  },
  {
    id: 92,
    firstName: "Hannah",
    lastName: "Stokes",
    grade: 419,
  },
  {
    id: 12,
    firstName: "Angus",
    lastName: "Jacobson",
    grade: 323,
  },
  {
    id: 29,
    firstName: "Adrienne",
    lastName: "Vidal",
    grade: 100,
  },
];
function findLowGrades(arr) {
  let failedStudents = [];
  for (let item of arr) {
    if (item.grade < 200) {
      failedStudents = [...failedStudents, item];
    }
  }
  return failedStudents;
}
console.log(findLowGrades(students));

function getGrades(arr) {
  let maxGrade = 0;
  let minGrade = 1000;
  for (let item of arr) {
    if (item.grade > maxGrade) {
      item.grade = maxGrade;
    }
  }
  return maxGrade;
}
console.log(getGrades(students));
