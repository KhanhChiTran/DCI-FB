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
// let vowels = ["a", "e", "i", "o", "u"];
// let words = ["Celebration", "Rocket", "Prediction", "Thin"];

// for (let i = 0; i < words.length; i++) {
//   let count = 0;
//   for (let j = 0; j < words[i].length; j++) {
//     if (!vowels.includes(words[i][j])) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// //Another Solution

// // let words = ["Celebration", "Rocket", "Prediction", "Thin"];
// // let vowels = ["a", "e", "i", "o", "u"];

// // let consonants = words.map((word) => {
// //   let count = 0;
// //   for (let letter of word) {
// //     if (!vowels.includes(letter)) {
// //       count += 1;
// //     }
// //   }
// //   return count;
// // });
// // console.log(consonants);

// // # 3 Hacker speak

// let str = "javascript is cool";
// let splits = str.split("");
// let length = splits.length;

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

// // <<====  Switch case METHOD: ===>>>>>

// for (let i = 0; i < splits.length; i++) {
//   switch (str[i]) {
//     case "a":
//       splits[i] = 4;
//       break;
//     case "e":
//       splits[i] = 3;
//       break;
//     case "i":
//       splits[i] = 1;
//       break;
//     case "o":
//       splits[i] = 0;
//       break;
//     case "s":
//       splits[i] = 5;
//       break;
//     default:
//       break;
//   }
// }
// let codedStr = splits.join("");
// console.log(codedStr);

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

// var numbers = [1, 2, 3, 4, 5];
// var total = 0;
// let i = 0;
// function averageValue(numbers) {
//   var averageValue = 0;
//   if (numbers.length > 0) {
//     for (i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     averageValue = total / numbers.length;
//   }
//   return averageValue;
// }
// var average = averageValue(numbers);
// console.log(i);

// var text = "metaprogramming";
// var text1 = text.slice(4, 7);
// console.log(text1);
// var sum = 0.1 + 0.7;
// console.log(sum);

// const todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
// ];
// const openTodos = [];
// const completedTodos = [];

// for (let i = 0; i < todos.length; i++) {
//   const todo = todos[i];
//   console.log(todo);
//   if (todo.completed) {
//     completedTodos.push(todo);
//   } else {
//     openTodos.push(todo);
//   }
// }
// console.log("Opened tasks are: ", openTodos.length);
// console.log("\n");
// console.log("Done tasks are: ", completedTodos.length);
//
// let myArray = [
//   {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: "21",
//     room: 216,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Black",
//     age: "30",
//     room: 217,
//   },
//   {
//     firstName: "Joanna",
//     lastName: "Mayland",
//     age: "42",
//     room: 218,
//   },
// ];
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//2
// let myObject = {};
// let counter = 0;
// for (let prop in myObject) {
//   if (myObject.hasOwnProperty(prop)) {
//     counter++;
//   }
// }
// counter == 0 ? console.log(true) : console.log(false);

// //Object.keys(myObject).length == 0 ? console.log(true) : console.log(false);
// // Object.values(myObject).length == 0 ? console.log(true) : console.log(false);
// //3

// let obj = {
//   id: 15,
//   firstName: "Liana",
//   lastName: "Gleason",
//   courses: ["6.945", "6.814", "1.012", "6.813", "2.159J", "15.S50"],
// };

// console.log(Object.values(obj));
// console.log(Object.keys(obj));

// //# 4 Props count
// const obj1 = {
//   name: "Jane",
//   age: 21,
//   isEnrolled: true,
//   courses: [],
//   address: {
//     street: "Boddinstr",
//     houseNumber: 21,
//     city: "Berlin",
//   },
//   grades: [],
// };
// const obj2 = {
//   price: 1222,
//   categories: [
//     {
//       id: 32,
//       slug: "clothing",
//       label: "Apparel",
//     },
//   ],
// };
// const obj3 = {
//   title: "",
//   author: "",
//   createdAt: "",
//   dateLastUpdated: "",
//   isApproved: false,
// };
// const obj4 = {
//   albumId: 1,
//   id: 26,
//   title: "asperiores nobis voluptate qui",
//   url: "https://via.placeholder.com/600/474645",
//   thumbnailUrl: "https://via.placeholder.com/150/474645",
// };
// const obj5 = {
//   postId: 1,
//   id: 1,
//   userId: 1,
//   name: "id labore ex et quam laborum",
//   email: "Eliseo@gardner.biz",
//   title: "quidem molestiae enim",
//   body:
//     "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
// };
// let newArr = [obj1, obj2, obj3, obj4, obj5];
// let count = [];
// for (let obj of newArr) {
//   let n = Object.keys(obj).length;
//   count.push(n);
// }
// let maxN = Math.max(...count);
// let index = count.indexOf(maxN);
// console.log(newArr[index]);
// console.log(maxN);
// let tempMax = 0;
// for (let number of count) {
//   if (number > tempMax) {
//     tempMax = number;
//   }
// }
//Now we got the largest number of count
// console.log(tempMax);
// let index = count.indexOf(tempMax);
// console.log(newArr[index]);

// const allObj = [obj1, obj2, obj3, obj4, obj5];
// let highestNumber = 0;
// let objMostProps = null;
// // for each object count the properties, and then check if it's higher than the highest number
// // if highest, update to highest number or skip
// for (let item of allObj) {
//   let counter = 0;
//   for (let prop in item) {
//     if (item.hasOwnProperty(prop)) {
//       counter++;
//     }
//   }
//   if (highestNumber < counter) {
//     highestNumber = counter;
//     objMostProps = item;
//     // console.log()
//   }
// }
// console.log(highestNumber, objMostProps);

// const secondInteger = 4.32;

// const floatingSum = secondInteger + parseInt(secondInteger);
// console.log(`${floatingSum}`);

// function isPositive(a) {
//   if (a > 0) {
//     return "YES";
//   } else if (a == 0) {
//     return "Zero Error";
//   } else {
//     return "Negative Error";
//   }
// }

// function isValidPassword(password, username) {
//   if (
//     password.length >= 8 &&
//     password.indexOf(" ") == -1 &&
//     !password.includes(username)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isValidPassword("dogLuvr123!", "dogLuvr"));

// //# Find the Average
// function avg(arr) {
//   let sum = 0;
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum / arr.length;
// }
// console.log(avg([75, 76, 80, 95, 100]));

//
//# Pangram Exercise
// function isPangram1(str) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   const lower = str.toLowerCase();
//   for (let letter of alphabet) {
//     if (lower.indexOf(letter) == -1) return false;
//   }
//   return true;
// }
// console.log(isPangram1("The five boxing wizards jump quickly"));

// //Get Card
// values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
// suits = ["clubs", "spades", "hearts", "diamonds"];
// function getCard() {
//   let index = Math.floor(Math.random() * values.length);
//   let index2 = Math.floor(Math.random() * suits.length);
//   let pickedCard = {
//     value: values[index],
//     suit: suits[index2],
//   };
//   return pickedCard;
// }
// console.log(getCard());

// function descendingOrder(n) {
//   return (newArr = n
//     .toString()
//     .split("")
//     .sort((a, b) => b - a)).join("");
// }
// console.log(descendingOrder(1234567));

// function isIsogram(str) {
//   let newStr = str.toLowerCase();

//   for (let letter of newStr) {
//     console.log(newStr.lastIndexOf(letter));
//     if (newStr.indexOf(letter) !== newStr.lastIndexOf(letter)) {
//       return false;
//     }
//
//   }
//  return true;
// }

//1
function myName() {
  let fullName = "Nic Cage";
  console.log(fullName);
}
myName();
//2
let favouriteFoods = ["pizza", "ice cream", "donut", "hamburger"];
function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
function randomFood() {
  return favouriteFoods[randomIndex(favouriteFoods)];
}
console.log(randomFood());
//3
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function displayOddNumbers() {
//   for (number of numbers) {
//     if (number % 2 !== 0) {
//       console.log(number);
//     }
//   }
// }
// displayEvenNumbers();
//4

// function displayEvenNumbers() {
//   for (number of numbers) {
//     if (number % 2 == 0) {
//       console.log(number);
//     }
//   }
// }
// displayEvenNumbers();
//5
// function returnFirstOddNumber() {
//   for (number of numbers) {
//     if (number % 2 !== 0) {
//       console.log(number);
//       break;
//     }
//   }
// }
// returnFirstOddNumber();
//6
function returnFirstEvenNumber() {
  for (number of numbers) {
    if (number % 2 == 0) {
      return number;
    }
  }
}
console.log(returnFirstEvenNumber());
//7
function returnFirstHalf(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    console.log(arr[i]);
  }
}
returnFirstHalf(numbers);
//
function returnSecondHalf(arr) {
  let n = arr.length;
  for (let i = n / 2; i < n; i++) {
    console.log(arr[i]);
  }
}
returnSecondHalf(numbers);

//Functions - Parameters & Scope
//1
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
//2
let myFirstName = "Chi";
function sayHello(str) {
  if (str == myFirstName) {
    console.log("Hello Boss");
  } else {
    console.log(`Hello ${str}`);
  }
}
sayHello(myFirstName);
sayHello("Anna");
//3
function average(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  console.log(sum / arr.length);
}
average([1, 2, 3, 4, 5, 6]);
//4
// function createStudent(str1, str2) {
//   let studentName = {
//     firstname: str1,
//     lastName: str2,
//   };
//   return studentName;
// }
// let nic = createStudent("Nic", "Cage");
// let steven = createStudent("Steven", "Segal");
// let maria = createStudent("Mariah", "Carey");
// let students = [nic, steven, maria];
// console.log(students);
//5
let students = ["Tim", "Elie", "Janet", "Matt"];
function findStudentByFirstName(name) {
  for (let student of students) {
    let newName = name.toLowerCase();
    let newStudentname = student.toLowerCase();
    if (newName == newStudentname) {
      return true;
    }
  }
  return false;
}
console.log(findStudentByFirstName("janet"));

//6 : count Even and Odd
function countEvensAndOdds(arr) {
  let even = 0;
  let odd = 0;
  for (let number of arr) {
    number % 2 == 0 ? even++ : odd++;
  }
  let count = {
    oddCount: odd,
    evenCount: even,
  };
  return count;
}
console.log(countEvensAndOdds([1, 2, 3, 4]));
console.log(countEvensAndOdds([1, 2, 3, 4, 5, 6, 7]));
//7 - Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.
function extractEveryThird(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % num === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(extractEveryThird([1, 2, 3, 4, 5, 6], 3));

//8**bonus**Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string
function onlyCapitalLetters(str) {
  for (let letter of str) {
    let capStr = str.toUpperCase();
    capStr.includes(letter) ? console.log(letter) : "";
  }
}

onlyCapitalLetters("DCI");

//
//## printDay
// this function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return undefined
// let weekDay = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// function getWeekDay(num) {
//   let getDay = null;
//   if (num > 0 && num <= 7) {
//     getDay = weekDay[num - 1];
//   } else {
//     getDay = undefined;
//   }
//   return getDay;
// }
// console.log(getWeekDay(4));

// //## lastElement
// //this function takes in one parameter (an array) and returns the last value in the array. It should return undefined if the array is empty
// function lastElement(arr) {
//   let n = arr.length;
//   if (n === 0) {
//     return undefined;
//   } else {
//     console.log(arr[arr.length - 1]);
//   }
// }
// lastElement([1, 2, 3, 4]);
//## number Compare

// let count = 0;
// function persistence(num) {
//   if (num < 10) {
//     return count;
//   } else {
//     count++;
//     let x = num
//       .toString()
//       .split("")
//       .reduce((a, b) => parseInt(a) * parseInt(b), 1);
//     return persistence(x);
//   }
// }

// console.log(persistence(2));
function hello() {
  let n = 10;
  while (n > 0) {
    n--;
    console.log(`this is number ${n}`);
  }
}
hello();
const x32 = "234".split("").reduce((a, b) => a * b);
console.log(x32);
const xo1 = "";
console.log(typeof "6");

function getMiddle(s) {
  // console.log(s.length);
  // let n = s.length - 1;
  // return n % 2 === 0
  //   ? s[(s.length - 1) / 2]
  //   : s[s.length / 2] + s[s.length / 2 + 1];
  console.log("hi");
}

const str = "This is a string";
const strArr = str.split(" ").join("-");

console.log(strArr);

const x = ["a", "b"];
const y = "c";
if (x.includes(y)) {
  console.log("yes");
} else {
  console.log("no");
}
