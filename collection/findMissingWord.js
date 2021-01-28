// # Sum of Missing Numbers​
// Create a function that returns the sum of missing numbers from the given array.
// ## Notes
// The numerical range to consider when searching for the missing numbers in the array is the sequence of consecutive numbers between the minimum and maximum of the numbers (inclusive).
// ## Examples
//<<<<<< Solution 1 >>>>>>
function sumMissingNumbers(arr) {
  let sum = 0;
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  for (let i = minNum; i <= maxNum; i++) {
    if (!arr.includes(i)) sum += i;
  }
  return sum;
}
//<<<<< Solution 2>>>>>>>>>
function sumMissingNumbers(arr) {
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);
  return minNum !== 1
    ? (maxNum * (maxNum + 1)) / 2 - (minNum * (minNum + 1)) / 2 + minNum - sum
    : (maxNum * (maxNum + 1)) / 2 - sum; // sum of 1,2,3,..,n = n(n+1)/2
}

console.log(sumMissingNumbers([1, 2, 3, 4, 5])); // 0
console.log(sumMissingNumbers([4, 3, 8, 1, 2])); // 18
console.log(sumMissingNumbers([17, 16, 15, 10, 11, 12])); // 27
console.log(sumMissingNumbers([-1, -4, -3, -2, -6, -8])); // -12
