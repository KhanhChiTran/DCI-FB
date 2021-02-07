// # Map, Filter, Reduce
// #### 1. Get total orders
// * Return the total amount of orders.
// ​
// ```javascript
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
// ```

const getTotal = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
};

console.log(getTotal(orders));

// #### 2. Increment by 1
// ```javascript
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// * Create a function that increments each element in the `arrayOfNumbers` by 1. Return the a new array of modified elements.

const getNewArr = (arr) => {
  return arr.map((value) => value + 1);
};
console.log(getNewArr(arrayOfNumbers));
// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

const filterEvens = (arr) => {
  return arr.filter((value) => value % 2 === 0);
};

// * Examples:
// ```javascript
console.log(filterEvens([1, 2, 3, 11, 12, 13])); //returns [2,12]
console.log(filterEvens([22, 2, 31, 110, 6, 13])); //returns [22,2,110,6]
// ```
// ​
// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

const filterItems = (arr, str) => {
  return arr.filter((value) => value.includes(str));
};
// * Examples
// ​
// ```javascript
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
console.log(filterItems(friends, "ka")); // ["Rika"];
console.log(filterItems(friends, "e")); // ["Jenna", "Bleda", "Oliver"];
// ```
// ​
// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

const sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

// * Examples:
// ```javascript
console.log(sum([1, 2, 3, 4, 5])); //returns 15
console.log(sum([6, 7, 7])); //returns 20
// ```
// ​
// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const getSqrt = (arr) => {
  return arr.filter((value) => value >= 0).map((value) => Math.sqrt(value));
};
const numbers = [4, -9, 9, 0, 16, 25];
console.log(getSqrt(numbers));

///////
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
    grade: 226,
  },
];
//<<<<Solution 1>>>>>
const obj = (arr) => {
  return arr.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});
};
//<<<<Solution 2>>>>>>>
const restructure = (arr, property) => {
  return arr.reduce((obj, acc) => {
    let key = acc[property];
    obj[key] = acc;
    return obj;
  }, {});
};
console.log(restructure(students, "grade"));
console.log(restructure(students, "firstName"));
//>>>>>Solution 3<<<<<<<
const toObj = (arr) => {
  let newObj = {};
  for (var i = 0; i < arr.length; i++) {
    let key = arr[i].id;
    newObj[key] = arr[i];
  }
  return newObj;
};

console.log(obj(students));
