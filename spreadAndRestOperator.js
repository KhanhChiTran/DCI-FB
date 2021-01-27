// let asianCountries = ["singapore", "korea", "japan"];
// let euroCountries = ["germany", "spain", "french", ...asianCountries];
// console.log(euroCountries);
// let countries = [...euroCountries, ...asianCountries];
// console.log(countries);
// let myCountry = [...asianCountries];
// console.log(myCountry);

// //Create a function to find the largest number in an array.
// //Using Math function
// function isLargest(...args) {
//   return Math.max(...args);
// }
// console.log(isLargest(1, 2, 199));
// //Using for loop
// function findLargest(...args) {
//   let maxNum = 0;
//   for (let arg of args) {
//     if (arg > maxNum) {
//       maxNum = arg;
//     }
//   }
//   return maxNum;
// }
// console.log(findLargest(3, 333, 9));

// //Create a function to find the smallest number in an array.
// function isSmallest(...args) {
//   return Math.min(...args);
// }
// console.log(isSmallest(1, 2, 199));

// //Clone and Merge
// const person = { name: "John" };
// const job = { role: "Teacher" };

// const person1 = { ...person };
// console.log(person1);
// const employee = { ...person, ...job };
// console.log(employee);

// //Is the average a whole number?
// function isWhole(...args) {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum % args.length === 0;
// }
// console.log(isWhole(1, 2, 3, 4, 1, 7)); //true
// console.log(isWhole(9, 2, 2, 5)); //false

// const courseCatalogMetadata = [
//   {
//     title: "Linear Algebra II",
//     description: "Advanced linear algebra.",
//     texts: [
//       {
//         author: "James Smith",
//         price: 120,
//         ISBN: "912-6-44-578441-0",
//       },
//     ],
//   },
// ];

// const [course] = [...courseCatalogMetadata];
// const { title, texts, description } = course;
// const textbooks = texts;
// const [textbook] = [...textbooks];
// const { ISBN } = textbook;

// console.log(ISBN);

// //Classroom Attendance
// const classRoom = {
//   hasTechingAssistant: true,
//   classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
// };
// function attendace({ hasTechingAssistant, classList }) {
//   let [teacher, assistantTeacher, ...students] = classList;
//   return hasTechingAssistant ? students : [assistantTeacher, ...students];
// }
// attendace(classRoom);
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 },
// ];
// function getUser(users) {
//   for (let { user, age = 1 } of users) {
//     console.log(`User :  ${user} , age is ${age}`);
//   }
// }

// getUser(users);

// const x = Object.entries(users);
// console.log(x);

// function chunkArray(arr, num) {
//   let length = arr.length;
//   let x = Math.floor(length / num);
//   let remain = length % num;
//   if (x < 1) return arr;
//   let result = [];
//   for (let i = 0; i < x; i++) {
//     const [innerArray, ...restArray] = arr;
//     result.push(innerArray);
//   }
//   console.log(result);
//   return result;
// }
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);

// function chunkArray(arr, num) {
//   let newArr = [...arr];
//   for (let number of newArr) {
//     newArr = [number[5]];
//   }
//   console.log(newArr);
// }
// chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] = game.players;

const [gk, ...fieldPlayers] = players1;
const allPlayers = [...players1, ...players2];

const players1Final = ["Thiago", "Coutinho", "Perisic", ...players1];

for (const [team, value] of Object.entries(game.odds)) {
  let teamName = team === "x" ? "draw" : `${team}`;
  console.log(`${teamName} : ${value}`);
}

const scores = {};

for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
// console.log(scores);
function printGoalds(...players) {
  for (const player of players) {
    // if (scores.hasOwnProperty(player))
    if (scores[player]) {
      console.log(`${player} has ${scores[player]} goal  `);
    }
  }
}

printGoalds("Davies", "Muller", "Lewandowski", "Kimmich");

// console.log(players1Final);
