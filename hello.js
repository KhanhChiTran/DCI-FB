// for (let i = 0; i < word.length; i++) {
//   if (vowels.includes(word[i])) {
//     console.log(i);
//     break;
//   }
// }
// let vowels = ["a", "e", "i", "o", "u"];
// let words = ["apple", "strawberry", "orange"];
// for (let i = 0; i < words.length; i++) {
//   for (let j = 0; j < words[i].length; j++) {
//     if (vowels.includes(words[i][j])) {
//       console.log(j);
//       break;
//     }
//   }
// }

// var chess = "";
// var length = 8;

// for (var i = 0; i < length; i++) {
//   for (var j = 0; j < length; j++) {
//     if ((i + j) % 2 == 0) {
//       chess += "-";
//     } else {
//       chess += "#";
//     }
//   }
//   chess += "\n";
// }
// console.log(chess);

//diagonal

// let l = 15;
// let diagonal = "";
// for (var i = 0; i < l; i++) {
//   diagonal += "|".repeat(i) + "=".repeat(l - i) + " \n";
// }
// console.log(diagonal);

//Solution 1
// let vowels = ["a", "e", "i", "o", "u"];
// let words = ["Celebration", "Rocket", "Prediction", "Thin"];

// for (let i = 0; i < words.length; i++) {
//   let count = 0;
//   for (let j = 0; j < words[i].length; j++) {
//     if (!vowels.includes(words[i][j])) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// //Another Solution

// // let words = ["Celebration", "Rocket", "Prediction", "Thin"];
// // let vowels = ["a", "e", "i", "o", "u"];

// // let consonants = words.map((word) => {
// //   let count = 0;
// //   for (let letter of word) {
// //     if (!vowels.includes(letter)) {
// //       count += 1;
// //     }
// //   }
// //   return count;
// // });
// // console.log(consonants);

// // # 3 Hacker speak

// let str = "javascript is cool";
// let splits = str.split("");
// let length = splits.length;

// for (let i = 0; i < length; i++) {
//   if (splits[i] == "a") {
//     splits[i] = 4;
//   }
//   if (splits[i] == "e") {
//     splits[i] = 3;
//   }
//   if (splits[i] == "i") {
//     splits[i] = 1;
//   }
//   if (splits[i] == "o") {
//     splits[i] = 0;
//   }
//   if (splits[i] == "s") {
//     splits[i] = 5;
//   }
// }
// let codedStr = splits.join("");
// console.log(codedStr);

// // <<====  Switch case METHOD: ===>>>>>

// for (let i = 0; i < splits.length; i++) {
//   switch (str[i]) {
//     case "a":
//       splits[i] = 4;
//       break;
//     case "e":
//       splits[i] = 3;
//       break;
//     case "i":
//       splits[i] = 1;
//       break;
//     case "o":
//       splits[i] = 0;
//       break;
//     case "s":
//       splits[i] = 5;
//       break;
//     default:
//       break;
//   }
// }
// let codedStr = splits.join("");
// console.log(codedStr);

// <<====  Replace with RegExp METHOD : ===>>>>>

// let str = "javascript is cool";
// let newStr = str
//   .replace(/a/g, 4)
//   .replace(/e/g, 3)
//   .replace(/i/g, 1)
//   .replace(/o/g, 0)
//   .replace(/s/g, 5);
// console.log(newStr);

// function hello(...data) {
//   data.forEach((item) => {
//     console.log("item: " + item);
//   });
// }
// hello(1, 2, 3);

// var numbers = [1, 2, 3, 4, 5];
// var total = 0;
// let i = 0;
// function averageValue(numbers) {
//   var averageValue = 0;
//   if (numbers.length > 0) {
//     for (i = 0; i < numbers.length; i++) {
//       total += numbers[i];
//     }
//     averageValue = total / numbers.length;
//   }
//   return averageValue;
// }
// var average = averageValue(numbers);
// console.log(i);

// var text = "metaprogramming";
// var text1 = text.slice(4, 7);
// console.log(text1);
// var sum = 0.1 + 0.7;
// console.log(sum);

// const todos = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true,
//   },
//   {
//     userId: 1,
//     id: 5,
//     title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     completed: false,
//   },
//   {
//     userId: 1,
//     id: 6,
//     title: "qui ullam ratione quibusdam voluptatem quia omnis",
//     completed: false,
//   },
// ];
// const openTodos = [];
// const completedTodos = [];

// for (let i = 0; i < todos.length; i++) {
//   const todo = todos[i];
//   console.log(todo);
//   if (todo.completed) {
//     completedTodos.push(todo);
//   } else {
//     openTodos.push(todo);
//   }
// }
// console.log("Opened tasks are: ", openTodos.length);
// console.log("\n");
// console.log("Done tasks are: ", completedTodos.length);
//
// let myArray = [
//   {
//     firstName: "Joe",
//     lastName: "Smith",
//     age: "21",
//     room: 216,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Black",
//     age: "30",
//     room: 217,
//   },
//   {
//     firstName: "Joanna",
//     lastName: "Mayland",
//     age: "42",
//     room: 218,
//   },
// ];
// for (let i = 0; i < myArray.length; i += 1) {
//   console.log(myArray[i]);
// }

//2
let myObject = {};
let counter = 0;
for (let prop in myObject) {
  if (myObject.hasOwnProperty(prop)) {
    counter++;
  }
}
counter == 0 ? console.log(true) : console.log(false);

//Object.keys(myObject).length == 0 ? console.log(true) : console.log(false);
// Object.values(myObject).length == 0 ? console.log(true) : console.log(false);
//3

let obj = {
  id: 15,
  firstName: "Liana",
  lastName: "Gleason",
  courses: ["6.945", "6.814", "1.012", "6.813", "2.159J", "15.S50"],
};

console.log(Object.values(obj));
console.log(Object.keys(obj));

//# 4 Props count
const obj1 = {
  name: "Jane",
  age: 21,
  isEnrolled: true,
  courses: [],
  address: {
    street: "Boddinstr",
    houseNumber: 21,
    city: "Berlin",
  },
  grades: [],
};
const obj2 = {
  price: 1222,
  categories: [
    {
      id: 32,
      slug: "clothing",
      label: "Apparel",
    },
  ],
};
const obj3 = {
  title: "",
  author: "",
  createdAt: "",
  dateLastUpdated: "",
  isApproved: false,
};
const obj4 = {
  albumId: 1,
  id: 26,
  title: "asperiores nobis voluptate qui",
  url: "https://via.placeholder.com/600/474645",
  thumbnailUrl: "https://via.placeholder.com/150/474645",
};
const obj5 = {
  postId: 1,
  id: 1,
  userId: 1,
  name: "id labore ex et quam laborum",
  email: "Eliseo@gardner.biz",
  title: "quidem molestiae enim",
  body:
    "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
};
let newArr = [obj1, obj2, obj3, obj4, obj5];
let count = [];
for (let obj of newArr) {
  let n = Object.keys(obj).length;
  count.push(n);
}
let maxN = Math.max(...count);
let index = count.indexOf(maxN);
console.log(newArr[index]);
console.log(maxN);
// let tempMax = 0;
// for (let number of count) {
//   if (number > tempMax) {
//     tempMax = number;
//   }
// }
//Now we got the largest number of count
// console.log(tempMax);
// let index = count.indexOf(tempMax);
// console.log(newArr[index]);

const allObj = [obj1, obj2, obj3, obj4, obj5];
let highestNumber = 0;
let objMostProps = null;
// for each object count the properties, and then check if it's higher than the highest number
// if highest, update to highest number or skip
for (let item of allObj) {
  let counter = 0;
  for (let prop in item) {
    if (item.hasOwnProperty(prop)) {
      counter++;
    }
  }
  if (highestNumber < counter) {
    highestNumber = counter;
    objMostProps = item;
    // console.log()
  }
}
console.log(highestNumber, objMostProps);
