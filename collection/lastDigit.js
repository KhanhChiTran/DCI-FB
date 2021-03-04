var lastDigit = function (str1, str2) {
  const getLastNumber = (num) => {
    let x = num.split("");
    return [
      Number(num.slice(num.length - 1)),
      Number(num.slice(num.length - 2)),
    ];
  };
  let lastNum = getLastNumber(str1)[0];
  let last2Num = getLastNumber(str2)[1];
  console.log(last2Num);
  console.log(lastNum, last2Num);
  let arr = new Array(9);
  arr[2] = [2, 4, 8, 6];
  arr[3] = [3, 9, 7, 1];
  arr[7] = [7, 9, 3, 1];
  arr[8] = [8, 4, 2, 6];
  if (getLastNumber(str1)[0] === 0) return 0;
  if (getLastNumber(str2)[0] === 0) return 1;

  switch (lastNum) {
    case 5:
    case 1:
    case 6:
    case 0:
      return lastNum;

    case 4:
      return last2Num % 2 !== 0 ? 4 : 6;
    case 9:
      return last2Num % 2 !== 0 ? 9 : 1;
    default:
      if (last2Num % 4 === 0) {
        return lastNum;
      } else {
        let x = (last2Num % 4) - 1;
        let y = arr[lastNum];
        console.log(arr[lastNum]);
        console.log([last2Num % 4] - 1);
        return y[x];
      }
  }
};
// console.log(lastDigit("2343247", "24432552581666761230"));
console.log(lastDigit("3", "51"));

console.log(342455555768 % 10);
