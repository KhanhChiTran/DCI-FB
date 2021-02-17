// // Create a function that will return a sequence of numbers as an array.
// // ​
// // When using the function, you must specify how many numbers to be included in the sequence.
// // ​
// // When using the function, you could specify starting number for the sequence. If it is not specified, 1 is the default.
// // ​
// // When using the function, you could specify a step for the next number. If it is not specified, 1 is used by default.
// // ​
// // For example, `numSequence(4, 0, 2);` should return the sequence `[ 0, 2, 4, 6 ]` - 4 numbers, starting from 0, in a step of 2.
// // function numSequence(num, startNum = 1, step = 1) {
// //   let newArr = [];
// //   newArr.push(startNum);
// //   for (let i = 1; i < num; i++) {
// //     startNum += step;
// //     newArr.push(startNum);
// //   }
// //   console.log(newArr);
// //   return newArr;
// // }
// // numSequence(5, 0, 2);
// // function myArr(count, start = 1, step = 1) {
// //   let nwArr = [];
// //   let i = start;
// //   nwArr.push(i);
// //   while (nwArr.length < count) {
// //     i += step;
// //     nwArr.push(i);
// //   }
// //   return nwArr;
// // }
// // console.log(myArr(3, 0, 10));

// //# Lowercase and Uppercase Map
// // Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.
// // ​
// // ## Examples
// // mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
// // ​
// // mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
// // ​
// // mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
// function mapping(arr) {
//   let lettersObj = {};
//   for (let char of arr) {
//     lettersObj[char] = char.toUpperCase();
//   }
//   console.log(lettersObj);
//   return lettersObj;
// }
// mapping(["p", "s"]);
// mapping(["a", "v", "y", "z"]);

// function uncensor(str, vowels) {
//   let newArr = str.split("");
//   let j = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === "*") {
//       newArr[i] = vowels[j];
//       j += 1;
//     }
//   }
//   return newArr.join("");
// }
// console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
// console.log(uncensor("abcd", ""));
// console.log(uncensor("*PP*RC*S*", "UEAE"));

// //https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8/train/javascript/600f21e2aa3655002ed207f2
// // The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// // Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// // Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// // Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO
// function tickets(peopleInLine) {
//   if (peopleInLine[0] != 25) return "NO";
//   let holdCoin = {
//     bank25: 1,
//     bank50: 0,
//   };
//   for (let i = 1; i < peopleInLine.length; i++) {
//     switch (peopleInLine[i]) {
//       case 25:
//         holdCoin["bank25"]++;
//         break;

//       case 50:
//         holdCoin["bank50"]++;
//         holdCoin["bank25"]--;
//         break;

//       case 100:
//         holdCoin["bank50"] ? holdCoin["bank50"]-- : (holdCoin["bank25"] -= 2);
//         holdCoin["bank25"]--;
//         break;

//       default:
//         break;
//     }
//     if (holdCoin["bank25"] < 0) return "NO";
//   }
//   return "YES";
//   //     if (peopleInLine[i] === 25) {
//   //       holdCoin["25"] += 1;
//   //     } else if (peopleInLine[i] == 50) {
//   //       holdCoin["50"] += 1;
//   //       holdCoin["25"] -= 1;
//   //
//   //     } else {
//   // holdCoin['50'] > 0 ? (holdCoin['50'] -= 1) : (holdCoin['25'] -= 2)
//   // holdCoin["bank25"] -= 1
//   //     }
//   //       if (holdCoin["25"] < 0) return "NO";
//   //   }
//   //   return "YES";
//   // }
// }
// // Bulls and Cows
// // Get library for user input
// // we need to keep the next line, so we can prompt the user for input
// const prompt = require("prompt-sync")({ sigint: true });
// //GENERATING COMPUTER'S RANDOM UNIQUE NUMBER:
// //////////////////////////////////////////
const computerRandomNumber = function () {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let arr = [];
  let randomNum;
  for (let i = 0; i < 4; i++) {
    do randomNum = Math.floor(Math.random() * digits.length);
    while (arr.indexOf(randomNum) !== -1);
    arr[i] = randomNum;
  }
  num = arr.join("");
  return num;
};
let computer = computerRandomNumber().toString();

console.log(`Computer's random generated number: ${computer}`); // WILL HIDE IT LATER

//Check if user's number is unique:
//////////////////////////////////////////
function validateUser(number) {
  if (number.length !== 4) {
    player = prompt("There should be exactly four digits entered. Try again ");
    return false;
  }
  for (let digit of number) {
    if (number.indexOf(digit) !== number.lastIndexOf(digit)) {
      player = prompt("Digits are repeating! Each number should be unique ");

      validateUser(player);
      break;
    }
    if (!Number(digit) && digit !== "0") {
      player = prompt("Only digits are acceptable, no other symbols! ");
      validateUser(player);
      break;
    }
  }
  return true;
}
//The game begins:
//////////////////////////////////////////
let player = prompt(
  "Welcome to the game! Please choose 4-digit number. Remember that digit number has to be unique.  "
);
// console.log(validateUser(player));
validateUser(player);
//when player has won:
//////////////////////////////////////////
const afterWinning = function () {
  let keepPlaying = prompt(
    "If you want to play again hit " /
      "y" /
      " letter, if no, press any other key and hit ENTER   "
  );
  if (keepPlaying === "y") {
    computerRandomNumber();
    keepPlaying = prompt("Good to see you back. Choose your number again   ");
    computer = computerRandomNumber().toString();
    console.log(`Computer's random generated number: ${computer}`);
    // player;
    // validateUser(player);
    game();
  } else {
    console.log("Sad to see you going :( ");
    return;
  }
};
//Get hint:
//////////////////////////////////////////
function hint() {
  let cow = 0;
  let bull = 0;
  //counting cows and bulls
  let bullOrCow = computer.split("").filter((digit) => player.includes(digit));
  console.log(bullOrCow);
  for (let each of bullOrCow) {
    if (bullOrCow.length && computer.indexOf(each) === player.indexOf(each)) {
      bull++;
    } else {
      cow++;
    }
  }
  if (cow === 0 && bull === 0) {
    console.log(
      `None of your chosen digits is matching with computer...Keep trying!`
    );
  }

  let result = `Hints: cows: ${cow}, bulls: ${bull}, keep trying so you guess the exact number.`;
  console.log(result);
}

//The actual game:
//////////////////////////////////////////
function game() {
  //in case user's input is not valid:
  if (validateUser(player)) {
    if (player === computer) {
      console.log(
        `Bravo! You guessed computer's number: ${computer}! Wasn't that hard, was it? :) `
      );
      //go to function asking if the player wants to play again
      afterWinning();
    } else {
      hint();
      player = prompt("Keep trying:   ");
      game();
    }
  }
}
game();
