// we need to keep the next line, so we can prompt the user for input
// const prompt = require("prompt-sync")({ sigint: true });

// GET RANDOM NUMBER FOR COMPUTER
function getRandom() {
  let randomNumber = Math.floor(Math.random() * 9000 + 1000);
  let strNumber = randomNumber.toString();
  return new Set(strNumber).size === 4
    ? randomNumber
    : (randomNumber = getRandom());
}

let computer = getRandom().toString();

console.log(computer);

// KEEP TRACKING ATTEMPS UNTIL PLAYER SOLVED THE PUZZLE
let attemps = 0;

// GET USER NAME
let playerName = prompt("Hello! What is your name? ") || "player";

//SET GAME LEVEL
let hardMode = 3;
let gameMode = prompt("Select a game mode: Easy or Difficult ? (E / D):  ");
let maxAttemps = null;

checkGameMode();

let playerInputNumber = prompt(`Hi ${playerName}! Take a guess: `);

validInput(playerInputNumber);

function checkGameMode() {
  if (gameMode.toLowerCase() === "e") {
    maxAttemps = 1000;
  } else if (gameMode.toLowerCase() === "d") {
    maxAttemps = hardMode;
  } else {
    gameMode = prompt("Please enter : E(e) or D(d)  ");
    checkGameMode();
  }
}

// CHECK VALID INPUT
function validInput(number) {
  for (let num of number) {
    if (
      number.length !== 4 ||
      number.indexOf(num) !== number.lastIndexOf(num) ||
      !"0123456789".includes(num) // numbers Only
    ) {
      playerInputNumber = prompt(
        "Please enter 4 - digit number with unique digits:  "
      );
      validInput(playerInputNumber);
      break;
    }
  }
}
// GIVE HINTS
function getHint() {
  let bulls = 0;
  let cows = 0;
  let found = computer
    .split("")
    .filter((item) => playerInputNumber.includes(item));
  for (let num of found) {
    found.length && computer.indexOf(num) === playerInputNumber.indexOf(num)
      ? bulls++
      : cows++;
  }
  /// MESSAGES WHEN PLAYER HITS NO DIGITS
  const messages = [
    "That was impressive!",
    "That's a great job!",
    "You're doing awesome!",
    "You must have been practicing!",
    "You're smarter than you think!",
  ];
  if (bulls === 0 && cows === 0) {
    let randomMes = Math.floor(Math.random() * messages.length);
    console.log(messages[randomMes]);
  }
  let result = `Hint: ${bulls}  bulls ${cows} cows`;
  console.log(result);
}
// NOTICE HOW MANY TIMES LEFT IN HARD MODE
function getNotice() {
  let notice =
    maxAttemps !== hardMode
      ? `${attemps} attemps`
      : `${attemps} attemps. You have ${maxAttemps - attemps} times left!`;
  console.log(notice);
  console.log("====================================================");
}
//CONTINUE PLAYING AND GO TO THE NEXT ROUND
function toNextRound() {
  let nextRound = prompt("Do you want to play again? (Y/N):  ");
  if (nextRound === "Y" || nextRound === "y") {
    attemps = 0;
    getRandom();
    computer = getRandom();
    console.log(computer);
    gameMode = prompt(
      "Select a game mode: Easy or Difficult(Required)? (E / D):  "
    );
    checkGameMode();
    play(playerInputNumber);
  } else {
    console.log("See you later");
    return;
  }
}
//START GAME

function play(player) {
  attemps++;
  //// COMPARE INPUT TO COMPUTER'S VALUE
  if (player === computer) {
    console.log(`Incredible ${playerName}! You win`);
    /// ASK IF PLAYER WANT TO PLAY AGAIN
    toNextRound();
    return;
  }
  //CHECK GAME OVER CONDITION ON HARD MODE
  if (attemps === maxAttemps) {
    console.log(`Opps!! GameOver ..Correct answer is ${computer}. `);
    toNextRound();
    return;
  }
  // CASE : NOT MATCH => GIVE HINT TO PLAYER
  console.log(`You have chosen : ${playerInputNumber}`);
  getHint();
  // POP UP COUNTDOWN NOTICE IF PLAYER CHOOSE HARD MODE
  getNotice();
  // CONTINUE GAME IF ANSWER WRONG IS
  player = prompt(` ${playerName}, guess again?:   `);
  validInput(player);
  play(player);
}

play(playerInputNumber);
