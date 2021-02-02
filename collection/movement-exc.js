// Write a function called printMovements that prints to the console 'Movement X: You deposited X amount' if the movement is a postive number or 'Movement X: You withdrew X amount'
// Write another function called printDeposits that prints an array of the deposited amounts to the console.
// Write a function called convertToUSD that prints an array of the movements converted to USD based on a conversion rate of 1 to 1.2
// Write a function that prints the total value of all the movements to the console.
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
function printMovements(arr) {
  for (let movement of arr) {
    movement > 0
      ? console.log("Movement X: You deposited X amount")
      : console.log("Movement X: You withdrew X amount");
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
  return console.log(depositedArr);
}
printDeposits([200, 450, -400, 3000, -650, -130, 70, 1300]);

function convertToUSD(arr) {
  let usdArr = [];
  let rate = (Math.random() * 1.2 + 1).toFixed(2);
  for (let movement of arr) {
    usdArr.push(Math.floor(Math.abs(movement) * rate));
  }
  return console.log(usdArr);
}
convertToUSD([200, 450, -400, 3000, -650, -130, 70, 1300]);

function getTotal(arr) {
  let total = 0;
  for (let movement of arr) {
    total += movement;
  }
  return console.log(total);
}
getTotal([200, 450, -400, 3000, -650, -130, 70, 1300]);
