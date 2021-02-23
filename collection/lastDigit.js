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
  console.log(lastNum, last2Num);
  let arr = [];
  arr[2] = [2, 4, 8, 6];
  arr[3] = [3, 9, 7, 1];
  arr[7] = [7, 9, 3, 1];
  arr[8] = [8, 4, 2, 6];

  if (getLastNumber(str2)[0] === 0) return 1;

  switch (lastNum) {
    case 5:
    case 1:
    case 6:
    case 0:
      return lastNum;

    default:
      console.log(arr[lastNum][last2Num % 4]);
      if (last2Num % 4) {
        return lastNum;
      } else {
        let x = last2Num % 4;
        let y = arr[lastNum];

        return arr[lastNum][last2Num % 4];
      }
  }
};
// console.log(lastDigit("2343247", "24432552581666761230"));
console.log(
  lastDigit(
    "3715290469715693021198967285016729344580685479654510946723",
    "68819615221552997273737174557165657483427362207517952651"
  )
);
