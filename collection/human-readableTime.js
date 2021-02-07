// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures
function humanReadable(seconds) {
  const obj = {
    HH: 0,
    MM: 0,
    SS: 0,
  };

  while (seconds > 3600) {
    obj.HH += 1;
    seconds -= 3600;
  }
  while (seconds > 60) {
    obj.MM += 1;
    seconds -= 60;
  }
  obj.SS = seconds;
  for (let [key, value] of Object.entries(obj)) {
    obj[key] = value < 10 ? "0" + value.toString() : value.toString();
  }
  return obj.HH + ":" + obj.MM + ":" + obj.SS;
}
console.log(humanReadable(3634409));
console.log(humanReadable(0)); //, "00:00:00", "humanReadable(0)");
console.log(humanReadable(5)); //, "00:00:05", "humanReadable(5)");
console.log(humanReadable(60)); //, "00:01:00", "humanReadable(60)");
console.log(humanReadable(86399)); //, "23:59:59", "humanReadable(86399)");
