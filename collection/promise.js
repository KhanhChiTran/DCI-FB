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

const picDog = document.getElementById("dog");

const getDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((data) => {
      console.log("fetching daata ...");
      return data.json();
    })
    .then((result) => {
      picDog.setAttribute("src", result.message);
      return 7;
    })
    .then((x) => "hehehee")
    .then((data) => console.log(data))

    .catch((err) => console.error(err));
};
getDog();
setTimeout(() => console.log("Here is setTimeout function"), 0);
// const getEvenNumber = new Promise((resolve, reject) => {
//   // DO something .....
//   const randomNumber = (Math.random() * 10) | 0;
//   console.log(randomNumber);
//   randomNumber % 2 === 0
//     ? resolve(randomNumber)
//     : reject(`This number ${randomNumber} is not even `);
// });

// getEvenNumber
//   .then((data) => console.log(`The even Number is ${data}`))
//   .catch((error) => console.error(error));

// console.log("This is the last line");
