// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox(obj) {
  const { width, length, height } = obj;
  //   let multi = 1;
  //   for (const num of Object.values(obj)) {
  //     multi *= num;
  //   }
  //   console.log(multi);
  //   return multi;
  console.log(width * length * height);
}
volumeOfBox({ width: 2, length: 5, height: 1 });
volumeOfBox({ width: 4, length: 2, height: 2 });
volumeOfBox({ width: 2, length: 3, height: 5 });
