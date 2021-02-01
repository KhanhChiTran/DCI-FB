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
function getTotalPrice(obj) {
  const [{ product, quantity, price }] = {};
  let mul = 1;
  return (mul *= quantity * price);
}
// ​
// ## Examples
// ​
// ​
// ```js
// // 1 bottle of milk:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 }
// ]) ➞ 1.5
// ​
// // 1 bottle of milk & 1 box of cereals:
// getTotalPrice([
//   { product: "Milk", quantity: 1, price: 1.50 },
//   { product: "Cereals", quantity: 1, price: 2.50 }
// ]) ➞ 4
