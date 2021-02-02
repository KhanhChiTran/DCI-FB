function fizzBuzz() {
  let arrNum = [];
  for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      arrNum.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arrNum.push("Fizz");
    } else if (i % 5 === 0) {
      arrNum.push("Buzzz");
    } else {
      arrNum.push(i);
    }
  }
  return arrNum;
}

console.log(fizzBuzz());
