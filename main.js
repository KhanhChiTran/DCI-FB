function calculateScore(games) {
  console.log(games);
  let Abigail = 0;
  let Benson = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] !== games[i][1]) {
      if (games[i][0] == "R") {
        if (games[i][1] == "S") {
          Abigail += 1;
        } else if (games[i][1] == "P") {
          Benson += 1;
        }
      }
      if (games[i][0] == "S") {
        if (games[i][1] == "P") {
          Abigail += 1;
        } else if (games[i][1] == "R") {
          Benson += 1;
        }
      }
      if (games[i][0] == "P") {
        if (games[i][1] == "R") {
          Abigail += 1;
        } else if (games[i][1] == "S") {
          Benson += 1;
        }
      }
    }
  }
  console.log(Abigail);
  console.log(Benson);
  if (Abigail == Benson) {
    return "Tie";
  } else if (Abigail > Benson) {
    return "Abigail";
  } else {
    return "Benson";
  }
}
console.log(
  calculateScore([
    ["R", "R"],
    ["S", "R"],
    ["S", "S"],
  ])
);
