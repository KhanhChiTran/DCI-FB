// let dog = {
//   dogName: "quick",
//   sleep() {
//     return `${this.dogName} is my dog`;
//   },
// };
// console.log(dog.sleep());

// let meeting = {
//   day: "Monday",
//   meetings: 0,
//   meetingsDone: 0,
//   addMeeting() {
//     this.meetings++;
//   },
//   removeMeeting() {
//     if (this.meetings > 0) {
//       this.meetings--;
//       this.meetingsDone++;
//     } else {
//       return "There is not any meeting at the moment";
//     }
//   },
//   summary() {
//     return `You have ${this.meetings} meetings today`;
//   },
//   completed() {
//     return `You have completed ${this.meetings} meetings today`;
//   },
//   reset() {
//     this.meetings = 0;
//     this.meetingsDone = 0;
//   },
// };
// meeting.addMeeting();
// meeting.addMeeting();
// meeting.addMeeting();
// meeting.addMeeting();
// console.log(meeting.meetings);

// meeting.removeMeeting();
// console.log(meeting.meetings);
// console.log(meeting.meetingsDone);

// let helon = {
//   firstName: "helon",
//   sayHi() {
//     return `Hi ${this.firstName}`;
//   },
//   addNumbers(a, b, c, d) {
//     return `${this.firstName} calculated ${a + b + c + d}`;
//   },
// };
// let nic = {
//   firstName: "nic",
// };
// console.log(helon.sayHi());
// console.log(helon.addNumbers(1, 2, 3, 4));
// console.log(helon.addNumbers.call(nic, 1, 2, 3, 4));
// console.log(helon.addNumbers.apply(nic, [1, 2, 3, 4])); // apply passed an array
// console.log(helon.sayHi.call(nic));
let obj = {
  fullName: "Harry Potter",
  person: {
    sayHi: function () {
      return "This person's name is " + obj.fullName;
    },
  },
};
console.log(obj.person.sayHi());

const sumEvenArguments = (...args) => {
  return args.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur);
};
console.log(sumEvenArguments(1, 2, 3, 4)); // 6
console.log(sumEvenArguments(1, 2, 6)); // 8
console.log(sumEvenArguments(1, 2)); // 2

const arrayFrom = (arrObj) => {
  return Array.form(arrObj);
};
function sample() {
  let arr = arrayFrom(arguments);
  if (!arr.reduce) throw "This is not an array!";
  return arr.reduce(function (acc, next) {
    return acc + next;
  }, 0);
}
let add = (a, b) => {
  return a + b;
};
const invokeMax = (max) => {
  let count = 0;
  count++;
  if (count === max) {
    return console.log("Maxed Out!");
  }
};

// let addOnlyThreeTimes = invokeMax(add, 3);
// addOnlyThreeTimes(1, 2); // 3
// addOnlyThreeTimes(2, 2); // 4
// addOnlyThreeTimes(1, 2); // 3
// addOnlyThreeTimes(1, 2); // "Maxed Out!"

// Run this code, and you will see there is an issue. How would you fix it?
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};

const giveMeTheCharacterNOW = character.getCharacter();
console.log(giveMeTheCharacterNOW);

// Fix this code so that the this keyword points to the object
let object = {
  data: [1, 2, 3],
  double: function () {
    this.data.forEach(
      function () {
        // Get this to point to object.

        console.log(this);
      }.bind(this)
    );
  },
};
object.double();

let Counter = {
  count: 0,
  add: function () {
    this.count++;
  },
};
Counter.add();
console.log(Counter.count);
var addToCount = Counter.add();
addToCount;
console.log(Counter.count);

let player1 = {
  firstName: "Jack",
  lastName: "Black",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let player2 = {
  firstName: "Bunny",
  lastName: "Rabbit",
  getName: function () {
    return this.firstName + " " + this.lastName;
  },
};
let game = {
  players: [],
  listPlayers: function () {
    this.players.forEach(function (player) {
      console.log(player.getName());
    });
  },
};
game.players.push(player1, player2);
game.listPlayers();
// use call to llog the zip code to the console
// let updateZipCode = function () {
//   console.log(this.zip);
// };
// let zipCode = {
//   zip: "11787",
// };

// updateZipCode.call(zipCode);
// use apply to log a zip code and country to the console
let updateZipCode = function (newZip, country) {
  console.log(
    `The older ZIP is${this.zip} and the new ZIP is ${newZip} of ${country}`
  );
};
let zipCode = {
  zip: "11787",
};

let arr = [12345, "USA"];
updateZipCode.apply(zipCode, arr);

// Example from MDN about bind method

const bag = {
  hello: "I am god",
};
const anoy = {
  x: 42,
  getX: function () {
    return this.hello;
  },
};

const unboundGetX = anoy.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(bag);
console.dir(boundGetX());
// expected output: 42

// Example about this keyword

function niceFunction() {
  console.log(this);
}

niceFunction();
