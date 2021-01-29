function solution(number) {
  let sum = 0;
  for (let i = number - 1; i >= 0; i--) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

//Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

//Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them

//change passed string to CamelCase and convert all dash , underscore
function toCamelCase(str) {
  let newArr = str.split("");
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == "_" || newArr[i] == "-") {
      newArr[i + 1] = newArr[i + 1].toUpperCase();
    }
  }
  return newArr.filter((x) => x !== "-" && x !== "_").join("");
}
