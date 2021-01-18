// function calculateScore(games) {
//   console.log(games);
//   let Abigail = 0;
//   let Benson = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] !== games[i][1]) {
//       if (games[i][0] == "R") {
//         if (games[i][1] == "S") {
//           Abigail += 1;
//         } else if (games[i][1] == "P") {
//           Benson += 1;
//         }
//       }
//       if (games[i][0] == "S") {
//         if (games[i][1] == "P") {
//           Abigail += 1;
//         } else if (games[i][1] == "R") {
//           Benson += 1;
//         }
//       }
//       if (games[i][0] == "P") {
//         if (games[i][1] == "R") {
//           Abigail += 1;
//         } else if (games[i][1] == "S") {
//           Benson += 1;
//         }
//       }
//     }
//   }
//   console.log(Abigail);
//   console.log(Benson);
//   if (Abigail == Benson) {
//     return "Tie";
//   } else if (Abigail > Benson) {
//     return "Abigail";
//   } else {
//     return "Benson";
//   }
// }
// console.log(
//   calculateScore([
//     ["R", "R"],
//     ["S", "R"],
//     ["S", "S"],
//   ])
// );

function getLetter(s) {
  let letter;
  // Write your code here
  let A = ["a", "e", "i", "o", "u"];
  let B = ["b", "c", "d", "f", "g"];
  let C = ["h", "j", "k", "l", "m"];
  let D = ["n", "p", "q", "r", "s", "t", "v", "x", "w", "y", "z"];
  let firstLetter = s[0];
  switch (firstLetter) {
    case A[0]:
    case A[1]:
    case A[2]:
    case A[3]:
    case A[4]:
      return (letter = "A");
    case B[0]:
    case B[1]:
    case B[2]:
    case B[3]:
    case B[4]:
      return (letter = "B");
    case C[0]:
    case C[1]:
    case C[2]:
    case C[3]:
    case C[4]:
      return (letter = "C");
    case D[0]:
    case D[1]:
    case D[2]:
    case D[3]:
    case D[4]:
    case D[5]:
    case D[6]:
    case D[7]:
    case D[8]:
    case D[9]:
    case D[10]:
      return (letter = "D");
    default:
      return null;
  }
}
console.log(getLetter("edfgt"));

function getText(s) {
  let letter;
  let A = ["a", "e", "i", "o", "u"];
  let B = ["b", "c", "d", "f", "g"];
  let C = ["h", "j", "k", "l", "m"];
  let D = ["n", "p", "q", "r", "s", "t", "v", "x", "w", "y", "z"];
  let firstLetter = s[0].toLowerCase();
  switch (true) {
    case A.includes(firstLetter):
      return (letter = "a");
    case B.includes(firstLetter):
      return (letter = "B");
    case C.includes(firstLetter):
      return (letter = "C");
    case D.includes(firstLetter):
      return (letter = "D");

    default:
      break;
  }
}
console.log(getText("pasuaufbau"));

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];
  let splits = s.split("");
  let n = splits.length;
  let index = 0;
  for (let i = 0; i < n; i++) {
    if (vowels.includes(splits[i])) {
      [splits[index], splits[i]] = [splits[i], splits[index]];
      index += 1;
    }
  }
  for (let i = 0; i < n; i++) {
    console.log(splits[i]);
  }
}
vowelsAndConsonants("javascripttt");
