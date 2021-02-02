// Given an array, remove all falsy values from the array and return an array of only truthy values. E.g

function falsyBouncer(arr) {
  let truthyArr = [];
  for (let item of arr) {
    if (item) {
      truthyArr = [...truthyArr, item];
    }
  }
  return truthyArr;
}

console.log(falsyBouncer([1, true, false, 0, null, "", 5])); // should return [1,5]
