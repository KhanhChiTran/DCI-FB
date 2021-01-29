// # Random products list
// ​
// Let's create some random products.
// ​
// ## 1.
// ​
// Write a function that creates n number of products and returns the list of products as array.
// ​
// Each product should have a random name. The name is generated by putting together a random adjective and a random noun.
// ​
// There are two lists, one with nouns and one with adjectives, to pick from:
// ​
// ```js
// const nouns = ['Chair', 'Fish', 'Computer', 'Desk', 'Table Tennis', 'Salad', 'Shirt', 'Gloves', 'Bike', 'Pizza', 'Chips', 'Keyboard', 'Lamp', 'Book'];
// ​
// const adjectives = ['Unbranded', 'Wooden', 'Intelligent', 'Soft', 'Granite', 'Tasty', 'Handmade', 'Concrete', 'Sleek', 'Practical', 'Ergonomic', 'Fresh', 'Generic', 'Small', 'Fantastic', 'Licensed', 'Frozen', 'Unique', 'Fancy', 'Pink'];
// ```
// ​
// Each product should have a price - it should be a number randomly picked, but no more than 1000 and no less than 5.
// ​
// Each product should also have a designated amount that is available in store. The amount can be between 0 and 100.
// ​
// ## 2.
// ​
// Once you have created a list of random products with a minimum of 10 products, find the items that are running low. An item that is running low has less then 30 items left, but is not yet completely out of stock.
const nouns = [
  "Chair",
  "Fish",
  "Computer",
  "Desk",
  "Table Tennis",
  "Salad",
  "Shirt",
  "Gloves",
  "Bike",
  "Pizza",
  "Chips",
  "Keyboard",
  "Lamp",
  "Book",
];
const adjectives = [
  "Unbranded",
  "Wooden",
  "Intelligent",
  "Soft",
  "Granite",
  "Tasty",
  "Handmade",
  "Concrete",
  "Sleek",
  "Practical",
  "Ergonomic",
  "Fresh",
  "Generic",
  "Small",
  "Fantastic",
  "Licensed",
  "Frozen",
  "Unique",
  "Fancy",
  "Pink",
];
function getRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomName() {
  const pName = nouns[getRandomNumber(nouns.length)];
  const adject = adjectives[getRandomNumber(adjectives.length)];
  return (productName = `${adject} ${pName}`);
}
function getPrice() {
  return getRandomNumber(1000, 5);
}
function getAmount() {
  return getRandomNumber(100);
}
function getProducts(n) {
  let productLists = [];
  while (productLists.length < n) {
    let product = {
      productName: randomName(),
      price: getPrice(),
      amount: getAmount(),
    };
    productLists = [...productLists, product];
  }

  return productLists;
}
console.log(getProducts(10));
const items = getProducts(10);
function getRunningLowProducts(productLists) {
  let arr = [];
  for (let i = 0; i < productLists.length; i++) {
    if (productLists[i].amount < 30) {
      arr.push(productLists[i]);
    }
  }
  return arr;
}
console.log(getRunningLowProducts(items));