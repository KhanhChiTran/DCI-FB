// // we need to keep the next line, so we can prompt the user for input
// // const prompt = require("prompt-sync")({ sigint: true });
// // Feel free to edit / remove the next lines, this is just to test the package

// function getRandomNunber() {
//   let num = Math.floor(Math.random() * 9000 + 1000);
//   //   Check the unique number
//   while (new Set(num.toString().split("")).size !== 4) {
//     num = Math.floor(Math.random() * 9000 + 1000);
//   }
//   return num;
// }
// getRandomNunber();
// const message = {
//   inputNumber: "Enter your number(4 unique number):  ",
//   invalidSyntax: "Opps! Incorrect syntax(4 unique number):  ",
//   wrongAnswer: "Wrong Answer....:  ",
//   moreAnswer: "Try 1 more times...",
//   rightAnswer: "You got it !!  Gut job Amazing..",
// };
// function checkValidInput(playerNumber, notice) {
//   while (new Set(playerNumber.split("")).size !== 4) {
//     playerNumber = prompt(notice);
//   }
// }
// function checkValidGameMode(input) {
//   console.log(input);
//   while (!"eh".includes(input.toLowerCase())) {
//     input = prompt("Incorrect Syntax. Enter E(e) for Easy, H(h) for Hard: ");
//   }
// }
// let attemps = 0;
// let maxAttemps;
// let playerName = prompt("Enter your Name:  ") || "Player";
// function startGame() {
//   let sceretNumber = getRandomNunber();
//   console.log(sceretNumber);
//   let gameMode = prompt("Enter E(e) for Easy, H(h) for Hard: ");
//   checkValidGameMode(gameMode);
//   gameMode === "e" ? (maxAttemps = 10000) : (maxAttemps = 3);
//   let playerNumber = prompt(message.inputNumber);
//   //   Check the unique number of player
//   checkValidInput(playerNumber, message.invalidSyntax);
//   while (Number(playerNumber) !== sceretNumber && attemps < maxAttemps) {
//     attemps++;
//     console.log(
//       message.wrongAnswer +
//         `You tried ${attemps} times` +
//         `${
//           gameMode.toLowerCase() === "h"
//             ? `You got only ${maxAttemps - attemps} times`
//             : ""
//         }`
//     );
//     playerNumber = prompt(message.wrongAnswer);
//     checkValidInput(playerNumber, message.invalidSyntax);
//   }
//   if (attemps >= maxAttemps) {
//     console.log("You lose ...");
//     return;
//   }
//   console.log(message.rightAnswer);
//   let playAgain = prompt("Play again? (Y)... ");
//   playAgain.toLowerCase() === "y"
//     ? startGame()
//     : console.log(`Thanks ${playerName}. See you again`);
// }
// startGame();
// function a(x) {
//   x++;
//   return function () {
//     console.log(++x);
//   };
// }

// a(1)();
// a(1)();
// a(1)();

// // a(1)  ;
// // console.log(a(1));
// let hello = a(1);

// hello();
// hello();
// hello();
// ==  a(1)()
// console.log(x);
// x();
// x();
// x();
// var tip = 100;

// (function () {
//   console.log(tip);
//   console.log("I have $" + husband());

//   function wife() {
//     return tip * 2;
//   }

//   function husband() {
//     return wife() / 2;
//   }
//   var tip = 10;
// })();
const counter = (a) => {
  let count = a;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    get() {
      return count;
    },
  };
};
let x = counter(566);

x.increment();
x.get();
