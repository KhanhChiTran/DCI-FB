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
function createAgeOfMajorityValidator(country) {
  const countries = {
    MM: 15,
    GB: 16,
    DE: 18,
    CA: 19,
    JP: 20,
  };
  return function (birthday) {
    const birthYear = Number(birthday.slice(0, 4)) + countries[country];
    const birthMonth = Number(birthday.slice(5, 7));
    const birthDay = Number(birthday.slice(8, 10));
    const legalTime = new Date(birthYear, birthMonth - 1, birthDay);
    return new Date() >= legalTime;
  };
}

const isAgeOfMajority = createAgeOfMajorityValidator("DE");
console.log(isAgeOfMajority("2019-11-11")); //false
console.log(isAgeOfMajority("2003-04-23")); //false, few months to go
console.log(isAgeOfMajority("2003-02-23")); //false, one more day to go
console.log(isAgeOfMajority("2003-02-22")); //true, they turn 18 today!
console.log(isAgeOfMajority("1920-11-11")); // 'true

// # Born on a weekend
// ​
// Write a function that accepts a date of birth.
// ​
// It returns a string: `Born on a weekend` if the person was born on a weekend.
// ​
// If the birth date was not on a weekend, it should return: `Born on a week day: Monday`, for example.

function isWeekend(year, month, date) {
  const birth = new Date(year, month, date);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(birth).getDay();
  return day === 0 || day === 6
    ? "Born on a weekend"
    : `Born on a week day: ${weekDays[day]} `;
}

console.log(isWeekend(2021, 02, 21));
console.log(isWeekend(2021, 02, 22));
console.log(isWeekend(1982, 07, 22));

// # Date: future or past?
// Write two functions: one should tell us if a date has already passed, the other one should tell us if a date is in the future.
function isPastDate(str) {
  const split = str.split("-");
  const year = Number(split[0]);
  const month = Number(split[1]);
  const date = Number(split[2]);
  const givenDate = new Date(year, month - 1, date);
  return new Date() - givenDate > 24 * 600;
}

function isFutureDate(str) {
  const split = str.split("-");
  const year = Number(split[0]);
  const month = Number(split[1]);
  const date = Number(split[2]);
  const givenDate = new Date(year, month - 1, date);
  return new Date() - givenDate < 24 * 600;
}

console.log(isPastDate("2021-02-20")); //-> true
console.log(isPastDate("2021-02-25")); //-> false
console.log(isFutureDate("2021-02-25")); //-> true
console.log(isFutureDate("2021-02-20")); //-> false
// If the date is today - they date is not in the past and it is not in the future.
console.log(isPastDate("2021-02-23")); //-> false
console.log(isFutureDate("2021-02-22")); // -> false
// # Friday the 13th
// ​
// Given the month and year as human readable numbers, return whether that month contains a Friday 13th.
function hasFriday13(month, year) {
  const time = new Date(year, month - 1, 13);
  const weekDay = time.getDay();
  return weekDay === 5;
}
// console.log(hasFriday13(3, 2020)); //➞ true
// console.log(hasFriday13(10, 2017)); // ➞ true
// console.log(hasFriday13(1, 1985)); //➞ false
