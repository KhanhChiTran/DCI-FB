// # Age of majority​
// Let's create a function (using closures) to create an age of majority validator.
// The age of majority is the threshold of adulthood as recognized or declared in law. It is the moment when minors cease to be considered such and assume legal control over their persons, actions, and decisions, thus terminating the control and legal responsibilities of their parents or guardian over them.
// Different countries have a different age of majority, so it should be possible to specify the counry (as a short code) we want to check for.
// For example, with Germany, where the age of majority is 18:
// ```js
// const isAgeOfMajority = createAgeOfMajorityValidator('DE');
// const timeLeft = legalTime - new Date();
// let months = Math.floor(timeLeft / 60000 / 60 / 24 / 30);
// console.log(months);
// ```
// and then we can use it like so:
// - Myanmar (MM) - 15
// - United Kingdom (GB) - 16
// - Germany (DE) - 18
// - Canada (CA) - 19
// - Japan (JP) - 20
// function createAgeOfMajorityValidator(country) {
//   const countries = {
//     MM: 15,
//     GB: 16,
//     DE: 18,
//     CA: 19,
//     JP: 20,
//   };
//   return function (birthday) {
//     const birthYear = Number(birthday.slice(0, 4)) + countries[country];
//     const birthMonth = Number(birthday.slice(5, 7));
//     const birthDay = Number(birthday.slice(8, 10));
//     const legalTime = new Date(birthYear, birthMonth - 1, birthDay);
//     return new Date() >= legalTime;
//   };
// }

// const isAgeOfMajority = createAgeOfMajorityValidator("DE");
// console.log(isAgeOfMajority("2019-11-11")); //false
// console.log(isAgeOfMajority("2003-04-23")); //false, few months to go
// console.log(isAgeOfMajority("2003-02-23")); //false, one more day to go
// console.log(isAgeOfMajority("2003-02-22")); //true, they turn 18 today!
// console.log(isAgeOfMajority("1920-11-11")); // 'true

// // # Born on a weekend
// // ​
// // Write a function that accepts a date of birth.
// // ​
// // It returns a string: `Born on a weekend` if the person was born on a weekend.
// // ​
// // If the birth date was not on a weekend, it should return: `Born on a week day: Monday`, for example.

// function isWeekend(year, month, date) {
//   const birth = new Date(year, month, date);
//   const weekDays = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const day = new Date(birth).getDay();
//   return day === 0 || day === 6
//     ? "Born on a weekend"
//     : `Born on a week day: ${weekDays[day]} `;
// }

// console.log(isWeekend(2021, 02, 21));
// console.log(isWeekend(2021, 02, 22));
// console.log(isWeekend(1982, 07, 22));

// // # Date: future or past?
// // Write two functions: one should tell us if a date has already passed, the other one should tell us if a date is in the future.
// function isPastDate(date) {
//   const y = new Date(date).getFullYear();
//   const m = new Date(date).getMonth() - 1;
//   const t = new Date(date).getDate();
//   const givenDate = new Date(y, m, t);

//   return new Date() - givenDate < 24 * 3600;
// }

// function isFutureDate(date) {
//   const y = new Date(date).getFullYear();
//   const m = new Date(date).getMonth() - 1;
//   const t = new Date(date).getDate();
//   const givenDate = new Date(y, m, t);

//   return new Date() - givenDate > 24 * 3600;
// }

// console.log(isPastDate("2021-02-21")); //-> true
// // console.log(isPastDate("2021-02-25")); //-> false
// // console.log(isFutureDate("2021-02-25")); //-> true
// // console.log(isFutureDate("2021-02-20")); //-> false
// // // If the date is today - they date is not in the past and it is not in the future.
// // console.log(isPastDate("2021-02-23")); //-> false
// console.log(isFutureDate("2021-02-25")); // -> false
// # Friday the 13th
// ​
// Given the month and year as human readable numbers, return whether that month contains a Friday 13th.
// function hasFriday13(month, year) {
//   const time = new Date(year, month - 1, 13);
//   const weekDay = time.getDay();
//   return weekDay === 5;
// }
// console.log(hasFriday13(3, 2020)); //➞ true
// console.log(hasFriday13(10, 2017)); // ➞ true
// console.log(hasFriday13(1, 1985)); //➞ false
// var lastDigit = function (str1, str2) {
//   const getLastNumber = (num) => {
//     let x = num.split("");
//     return Number(x[x.length - 1]);
//   };
//   let lastNumStr1 = getLastNumber(str1);
//   let lastNumStr2 = getLastNumber(str2);
//   let num2 = Number(str2);
//   let temp = 1;

//   switch (lastNumStr1) {
//     case 5:
//     case 1:
//     case 6:
//     case 0:
//       return lastNumStr1;

//     default:
//       return 4;
//   }

//   while (num2 > 0) {
//     temp = getLastNumber(Math.pow(lastNumStr1, 2).toString());
//     num2--;
//   }
//   return temp;
// };
// const formatCur = (value, locale, currency) =>
//   new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency,
//   }).format(value);
// console.log(formatCur(5000, "ja-JP", "JPY"))
// # Friday the 13th
// Given the year as a number, return how many Friday the 13ths are in that year.

function fridaythe13thsIn(year) {
  let friday13th = 0;
  for (let month = 0; month < 12; month++) {
    new Date(year, month, 13).getDay() === 5 ? friday13th++ : friday13th;
  }
  return friday13th;
}
console.log(fridaythe13thsIn(2019)); //➞ 2
console.log(fridaythe13thsIn(2015)); //➞ 3

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  toString() {
    return `x = ${this.x}, y = ${this.y}, width = ${this.width}, height = ${this.height}`;
  }
}
const rectangle = new Rectangle(1, 2, 3, 4);
console.log(rectangle.toString());

class Calculator {
  constructor() {}
  add = (x, y) => x + y;
  subtract = (x, y) => x - y;
  multiply = (x, y) => x * y;
  divide = (x, y) => x / y;
}
const calculator = new Calculator();
console.log(calculator.add(10, 5)); //➞ 15
console.log(calculator.subtract(10, 5)); // ➞ 5
console.log(calculator.multiply(10, 5)); //➞ 50
console.log(calculator.divide(10, 5)); //➞ 2

class Player {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }
  getAge = () => `${this.name} is  ${this.age} age`;
  getHeight = () => `${this.name} is   ${this.height}cm`;
  getWeight = () => `${this.name} weight ${this.weight}kg`;
}

let p1 = new Player("David Jones", 25, 175, 75);
console.log(p1.getWeight());

const IceCream = (flavor, sprinkles) => {
  switch (flavor) {
    case "Plain":
      return sprinkles;
    case "Vanilla":
    case "ChocolateChip":
      return sprinkles + 5;
    case "Strawberry":
    case "Chocolate":
      return sprinkles + 10;
    default:
      return 0;
  }
};
ice1 = IceCream("Chocolate", 13); // value of 23
ice2 = IceCream("Vanilla", 0); // value of 5
ice3 = IceCream("Strawberry", 7); // value of 17
ice4 = IceCream("Plain", 18); // value of 18
ice5 = IceCream("ChocolateChip", 3); // value of 8

const sweetestIcecream = (arr) => Math.max(...arr);

console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
console.log(sweetestIcecream([ice3, ice1]));
console.log(sweetestIcecream([ice3, ice5]));

const convertTime = (str) => {
  //   if (!str.includes("AM") || !str.includes("PM") || !str.includes(":")) {
  //     throw new Error("Syntax is not correct");
  //   }
  let arr = str.split(":");
  return str.includes("AM") ? Number(arr[0]) : Number(arr[0]) + 12;
};
const hoursPassed = (t1, t2) =>
  convertTime(t2) - convertTime(t1) < 1
    ? "No time has passed"
    : `${convertTime(t2) - convertTime(t1)} hours`;

console.log(hoursPassed("1:00 AM", "3:00 PM"));
