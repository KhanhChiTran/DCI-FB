// Our function should:
// Take in data in the form of an array of objects (collection)
// Take in a target object (source)
// Find any number of objects that match our target in the collection
// Return any found objects in an array
// If we found none then return an empty array

function whatIsInAName(arr, target) {
  let found = [];
  for (let { first, last } of arr) {
    if (first === target.first || last === target.last) {
      found.push({ first, last });
    }
  }
  return found;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
function whatIsInAName(arr, target) {
  let found = [];
  for (let { first, last } of arr) {
    if (first === target.first || last === target.last) {
      found.push({ first, last });
    }
  }
  return found;
}
