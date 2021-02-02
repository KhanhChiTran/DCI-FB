// Our function should:
// Take in an Array with two unsorted numbers
// Create a range of numbers between the two numbers
// Return the sum of all those numbers including the two passed in
function getSum(arr) {
  const start = arr[0];
  const end = arr[1];
  const numCount = Math.abs(start - end) + 1;
  const sum = ((start + end) * numCount) / 2;
  return sum;
}
console.log(getSum([5, 2]));
///<<<<solution 2>>>>>>>
function sumRange(arr) {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}
