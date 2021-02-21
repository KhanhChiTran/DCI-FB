// const randomNumber = new Promise((resolve, reject) => {
//   const num = (Math.random() * 10) | 0;
//   if (num % 2 === 0) {
//     resolve(num);
//   } else {
//     reject(num);
//   }
// });
// randomNumber
//   .then((result) => {
//     console.log(`The resolve number is : ${result}`);
//   })
//   .catch((error) => console.error(`The reject number is : ${error}`));

// const picDog = document.getElementById("dog");

// const getDog = () => {
//   fetch("https://dog.ceo/api/breeds/image/random")
//     .then((data) => {
//       console.log("fetching daata ...");
//       return data.json();
//     })
//     .then((result) => {
//       //   picDog.setAttribute("src", result.message);
//       //   return 7;
//       console.log(result);
//     })
//     .then((x) => "hehehee")
//     .then((data) => console.log(data))

//     .catch((err) => console.error(err));
// };
// getDog();

// setTimeout(() => console.log("Here is setTimeout function"), 0);

// console.log("Starting .....");

// const getEvenNumber = (x) =>
//   new Promise((resolve, reject) => {
//     // DO something .....
//     const randomNumber = (Math.random() * x) | 0;
//     console.log(randomNumber);
//     randomNumber % 2 === 0
//       ? resolve(randomNumber)
//       : reject(`This number ${randomNumber} is not even `);
//   });

// getEvenNumber(6)
//   .then((data) => console.log(`The even Number is ${data}`))
//   .catch((error) => console.error(error));

// console.log("do something else....");

// const x = () => {
//   const data = getEvenNumber;
//   console.log(data);
// };

// x();
// const fs = require("fs");

// function readFile(path) {
//   return new Promise(function (resolve, reject) {
//     fs.readFile(path, { encoding: "utf-8" }, function (err, data) {
//       err ? reject(err) : resolve(data);
//     });
//   });
// }
// readFile("song.txt")
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
// https://pokeapi.co/api/v2/pokemon/ditto

console.log(document.styleSheets[0].rules[0].cssText);
const app = document.getElementById("app");

function getPikachu(path) {
  fetch(path)
    .then((data) => data.json())
    .then((data) => {
      renderPikachu(data);
    })
    .catch((err) => console.log(err));
}

function renderPikachu(data) {
  let objs = data.results;
  const stringHTML = `
      <h1>Hello World</h1>
      <ol>
      
      ${objs
        .map(
          (item) => `<li class='item-name'>
      ${item.name}
      </li>`
        )
        .join("")}
      
  
  </ol>
    `;

  app.innerHTML = stringHTML;
}

getPikachu("https://pokeapi.co/api/v2/pokemon");
