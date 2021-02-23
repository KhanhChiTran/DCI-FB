// class Person {
//   constructor(personName, personAge) {
//     this.name = personName;
//     this.age = personAge;
//   }
//   describe() {
//     return `${this.name}, ${this.age} years old`;
//   }
// }
// const student1 = new Person("John", 19);
// console.log(student1.describe());

// class Tv {
//   constructor(brand, channel = 1, volume = 50) {
//     this.brand = brand;
//     this.channel = channel;
//     this.volume = volume;
//   }
//   info() {
//     return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
//   }
//   increase() {
//     return this.volume < 100 ? this.volume++ : "No Signal";
//   }
//   decrease() {
//     return this.volume > 0 ? this.volume-- : "No Signal";
//   }
//   randomChannel() {
//     return (this.channel = Math.ceil(Math.random() * 50));
//   }
//   reset() {
//     this.channel = 1;
//     this.volume = 50;
//     return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
//   }
// }

// const tv1 = new Tv("Panasonic", 9, 100);
// console.log(tv1.info());

// console.log(tv1.increase());
// tv1.increase();
// tv1.increase();
// console.log(tv1.info());
// console.log(tv1.increase());
// console.log(tv1.reset());
// const tv2 = new Tv("Samsung");
// console.log(tv2.info());

//#3
// class Cylinder {
//   constructor(radius, height) {
//     this.radius = radius;
//     this.height = height;
//   }
//   getVolume() {
//     let volume = Math.PI * this.radius * this.radius * this.height;
//     return volume.toFixed(1);
//   }
// }
// const cylinder1 = new Cylinder(2.5, 10);
// console.log(cylinder1.getVolume());
// //#4
// class Employee {
//   constructor(
//     firstName = "",
//     lastName = "",
//     title = "Employee",
//     company = "Samsung",
//     phone = []
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.title = title;
//     this.company = company;
//     this.phone = phone;
//   }
//   createEmail() {
//     return `${this.firstName}.${this.lastName}@${this.company}.com`;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   addPhoneNumber(...numbers) {
//     this.phone = this.phone.concat(numbers);
//     return this.phone;
//   }
//   getEmailSignature() {
//     return `
//      ${this.firstName} ${this.lastName}
//      ${this.title} at ${this.company}
//      -----------------------
//      E : ${this.createEmail()}
//      T : ${this.phone}
//     `;
//   }
// }

// const employee1 = new Employee("Jessica", "Smith");
// employee1.addPhoneNumber("03045678", "0912345678");
// employee1.addPhoneNumber("123567");

// console.log(employee1.getEmailSignature());
//# 5. Tick Tock
// // const template = "h:m:s";
// // let date = new Date();
// // let hours = date.getHours();
// // if (hours < 10) hours = "0" + hours;
// // let mins = date.getMinutes();
// // if (mins < 10) mins = "0" + mins;
// // let secs = date.getSeconds();
// // if (secs < 10) secs = "0" + secs;
// // let output = template.replace("h", hours).replace("m", mins).replace("s", secs);
// // console.log(output);
// class Template {
//   constructor() {
//     this.date = new Date();
//     this.hours = "";
//     this.mins = "";
//     this.secs = "";
//   }

//   getTime() {
//     this.hours =
//       this.date.getHours() < 10
//         ? "0" + this.date.getHours()
//         : this.date.getHours();

//     this.mins =
//       this.date.getMinutes() < 10
//         ? "0" + this.date.getMinutes()
//         : this.date.getMinutes();
//     this.secs =
//       this.date.getSeconds() < 10
//         ? "0" + this.date.getSeconds()
//         : this.date.getSeconds();

//     return `${this.hours}:${this.mins}:${this.secs}`;
//   }
// }

// const time = new Template();
// console.log(time.getTime());

// class Time {
//   constructor(template = "h:m:s") {
//     this.template = template;
//   }
//   getTime() {
//     const date = new Date();
//     const hours = date.getHours().toString().padStart(2, "0");
//     const mins = date.getMinutes().toString().padStart(2, "0");
//     const secs = date.getSeconds().toString().padStart(2, "0");
//     return this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);
//   }
// }
// const time1 = new Time();
// const time2 = new Time("h:m");
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.
// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows
class IceCream {
  constructor(flavor, sprinkle) {
    const flavors = {
      Plain: 0,
      Vanilla: 5,
      ChocolateChip: 5,
      Strawberry: 10,
      Chocolate: 10,
    };
    this.flavor = flavors[flavor];
    this.sprinkle = sprinkle;
  }
  getSweet() {
    return this.flavor + this.sprinkle;
  }
}

const ice1 = new IceCream("Chocolate", 13); // value of 23
const ice2 = new IceCream("Vanilla", 0); // value of 5
const ice3 = new IceCream("Strawberry", 7); // value of 17
const ice4 = new IceCream("Plain", 18); // value of 18
const ice5 = new IceCream("ChocolateChip", 3); // value of 8
sweetestIcecream = (ices) => {
  let arr = [];
  for (let ice of ices) {
    arr = [...arr, ice.getSweet()];
  }
  return Math.max(...arr);
};
console.log(sweetestIcecream([ice1, ice2, ice3, ice4, ice5]));
console.log(sweetestIcecream([ice3, ice5]));

// Write a function that takes time t1 and time t2 and returns the numbers of hours passed between the two times.
const hoursPassed = (t1, t2) => {
  const time1 = t1.split(":00 ");
  const time2 = t2.split(":00 ");

  const startHour =
    time1[1] === "PM" ? Number(time1[0]) + 12 : Number(time1[0]);

  const endHour = time2[1] === "PM" ? Number(time2[0]) + 12 : Number(time2[0]);

  const numberOfHours = endHour - startHour;

  return numberOfHours > 0 ? `${numberOfHours} hours` : "No time has passed.";
};
// Examples
console.log(hoursPassed("3:00 AM", "9:00 AM")); //➞ "6 hours"
console.log(hoursPassed("2:00 PM", "4:00 PM")); // ➞ "2 hours"
console.log(hoursPassed("1:00 AM", "3:00 PM")); // ➞ "14 hours"
console.log(hoursPassed("3:00 PM", "3:00 PM")); // ➞ "No time has passed"
// Notes
// Time t1 will always be the starting time and t2, the ending time.
// Return the string "No time has passed." if t1 is equal to t2.
