// function sum(n) {
//   if (n === 1) {
//     return n;
//   } else {
//     return sum(n - 1) + n;
//   }
// }
// console.log(sum(1)); //1
// console.log(sum(5)); //9
// console.log(sum(12));

function length(str) {
  const x = str.length;
  if (x < 1) {
    return 0;
  }
  return length(str.slice(0, x - 1)) + 1;
}

console.log(length("apple"));
console.log(length("make"));
console.log(length("a"));
console.log(length(""));

function search(arr, i) {
  const x = arr.length;
  if (!x) {
    return -1;
  } else {
    if (arr[x - 1] === i) {
      return x - 1;
    }

    return search(arr.slice(0, x - 1), i);
  }

  // if (!arr.length) {
  //   return -1;
  // } else {
  //   const num = arr.pop();
  //   if (num === i) {
  //     return arr.length;
  //   } else {
  //     return search(arr, i);
  //   }
  // }
}
console.log("--------");
console.log(search([1, 2, 3, 4], 3)); // 2
console.log(search([2, 4, 6, 8, 10], 8)); // 3
console.log(search([1, 3, 5, 7, 9], 11)); // -1
console.log(search([1, 5, 7, 11, 25, 100, 200, 350], 5)); //1

function reverse(str) {
  const x = str.length;
  if (str === "") {
    return "";
  }
  return str.charAt(x - 1) + reverse(str.slice(0, x - 1));
}
console.log("-----");
console.log(reverse("hello"));
console.log(reverse("a"));

function repetition(str, n) {
  if (n === 1) {
    return str;
  }
  return str + repetition(str, n - 1);
}
console.log(repetition("ab", 3));
console.log(repetition("kiwi", 1));
console.log(repetition("cherry", 2));

function countVowels(str) {
  if (!str.length) {
    return 0;
  }
  return "aeiou".includes(str.slice(-1))
    ? countVowels(str.slice(0, str.length - 1)) + 1
    : countVowels(str.slice(0, str.length - 1));
}
console.log(countVowels("appuiouioösadadle"));
