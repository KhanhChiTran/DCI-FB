//# Rock Paper Scissors
// Let's create a simple version of the game **Rock, Paper, Scissors** using JavaScript.
// ​
// This is a 2 player game. Each player would choose one of the 3 options and then both reveal their choice simultaneuosly.
// ​
// Since we cannot get input from the user (for now), we will resolve to generating the choices for each player.
// ​
// Next, we need to decide who is the winner. The rules are the following:
// ​
// - rock beats scissors
// - paper beats rock
// - scissors beats paper
//Once we have the winner, we need to print to the console a message congratulating the winner, for example: `Computer wins. Rock beats paper. Congratulations, machine!`.
const game = {
  computer: getComputerChoice(),
  player: "S",
};
function getComputerChoice() {
  const choices = ["R", "P", "S"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function play({ computer, player }) {
  let result = "";
  if (computer == player) {
    result = "It's a tie !";
  }
  if (computer == "R") {
    if (player == "S") {
      result = "Computer wins. Rock beats scissors. Congratulations, machine!";
    } else {
      result = "Player wins. Paper beats rock. Congratulations, player!";
    }
  }
  if (computer == "S") {
    if (player == "P") {
      result = "Computer wins. Scissors beats paper. Congratulations, machine!";
    } else {
      result = "Player wins. Rock beats scissors. Congratulations, player!";
    }
  }
  if (computer == "P") {
    if (player == "R") {
      result = "Computer wins. Paper beats rock. Congratulations, machine!";
    } else {
      result = "Player wins. Scissors beats paper. Congratulations, player!";
    }
  }
  return result;
}

console.log(play(game));
