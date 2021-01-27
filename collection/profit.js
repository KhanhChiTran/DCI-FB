// You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.

// Examples
// profit({
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// }) ➞ 14796

// profit({
//   costPrice: 225.89,
//   sellPrice: 550.00,
//   inventory: 100
// }) ➞ 32411

function profit({ costPrice, sellPrice, inventory }) {
  return Math.round((sellPrice - costPrice) * inventory);
}
console.log(
  profit({
    costPrice: 2.77,
    sellPrice: 7.95,
    inventory: 8500,
  })
); //  ➞ 44030

// using spread
function chunkArray(array, size) {
  let result = [];
  //   Because .splice() element manipulates the array in place (i.e it changes the received array directly), we use the spread operator … to create a copy which we call arrayCopy so that our operations do not affect the data that is received.
  let arrayCopy = [...array];
  //   It is from this copy that we continuously extract elements of the specified size using a while loop that will continue to execute for as long as the length of the arrayCopy is greater than 0.
  while (array.length > 0) {
    //   Each sub-array created is then added to the result by calling the .push() method
    result.push(array.splice(0, size));
  }
  //   At the end, we return the result which is an array of all the groups(sub-arrays) that were created.
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5));
