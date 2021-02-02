// Write a function called printMovements that prints to the console 'Movement X: You deposited X amount' if the movement is a postive number or 'Movement X: You withdrew X amount'
// Write another function called printDeposits that prints an array of the deposited amounts to the console.
// Write a function called convertToUSD that prints an array of the movements converted to USD based on a conversion rate of 1 to 1.2
// Write a function that prints the total value of all the movements to the console.
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
function printMovements(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] > 0
      ? console.log(`Movement ${i + 1}: You deposited ${arr[i]} amount`)
      : console.log(`Movement ${i + 1}: You withdrew ${arr[i]} amount`);
  }
}
printMovements([200, 450, -400, 3000, -650, -130, 70, 1300]);

function printDeposits(arr) {
  let depositedArr = [];
  for (let movement of arr) {
    if (movement > 0) {
      depositedArr.push(movement);
    }
  }
  console.log(depositedArr);
}
printDeposits([200, 450, -400, 3000, -650, -130, 70, 1300]);

function convertToUSD(arr) {
  let usdArr = [];
  let rate = (Math.random() * 1.2 + 1).toFixed(2);
  for (let movement of arr) {
    usdArr.push(Math.floor(Math.abs(movement) * rate));
  }
  console.log(usdArr);
}
convertToUSD([200, 450, -400, 3000, -650, -130, 70, 1300]);

function getTotal(arr) {
  let total = 0;
  for (let movement of arr) {
    total += movement;
  }
  console.log(total);
}
getTotal([200, 450, -400, 3000, -650, -130, 70, 1300]);
