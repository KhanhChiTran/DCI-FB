// # Calculate the Total Price of Groceries
// ​
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:
// ​
// ```js
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }
// ```
function getTotalPrice(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item.quantity * item.price;
  }
  console.log(sum);
  return sum;
}

// // 1 bottle of milk:
getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }]); // ➞ 1.5
// ​
// // 1 bottle of milk & 1 box of cereals:
getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Cereals", quantity: 1, price: 2.5 },
]); // ➞ 4
