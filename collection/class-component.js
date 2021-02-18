class Person {
  constructor(personName, personAge) {
    this.name = personName;
    this.age = personAge;
  }
  describe() {
    return `${this.name}, ${this.age} years old`;
  }
}
const student1 = new Person("John", 19);
console.log(student1.describe());

class Tv {
  constructor(brand, channel = 1, volume = 50) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
  }
  info() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
  increase() {
    return this.volume < 100 ? this.volume++ : "No Signal";
  }
  decrease() {
    return this.volume > 0 ? this.volume-- : "No Signal";
  }
  randomChannel() {
    return (this.channel = Math.ceil(Math.random() * 50));
  }
  reset() {
    this.channel = 1;
    this.volume = 50;
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

const tv1 = new Tv("Panasonic", 9, 100);
console.log(tv1.info());

// console.log(tv1.increase());
tv1.increase();
tv1.increase();
console.log(tv1.info());
// console.log(tv1.increase());
// console.log(tv1.reset());
// const tv2 = new Tv("Samsung");
// console.log(tv2.info());

//#3
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }
  getVolume() {
    let volume = Math.PI * this.radius * this.radius * this.height;
    return volume.toFixed(1);
  }
}
const cylinder1 = new Cylinder(2.5, 10);
console.log(cylinder1.getVolume());
//#4
class Employee {
  constructor(
    firstName = "",
    lastName = "",
    title = "Employee",
    company = "Samsung",
    phone = []
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.company = company;
    this.phone = phone;
  }
  createEmail() {
    return `${this.firstName}.${this.lastName}@${this.company}.com`;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  addPhoneNumber(...numbers) {
    this.phone = this.phone.concat(numbers);
    return this.phone;
  }
  getEmailSignature() {
    return `
     ${this.firstName} ${this.lastName}
     ${this.title} at ${this.company}
     -----------------------
     E : ${this.createEmail()}
     T : ${this.phone}
    `;
  }
}

const employee1 = new Employee("Jessica", "Smith");
employee1.addPhoneNumber("03045678", "0912345678");
employee1.addPhoneNumber("123567");

console.log(employee1.getEmailSignature());
//# 5. Tick Tock
// const template = "h:m:s";
// let date = new Date();
// let hours = date.getHours();
// if (hours < 10) hours = "0" + hours;
// let mins = date.getMinutes();
// if (mins < 10) mins = "0" + mins;
// let secs = date.getSeconds();
// if (secs < 10) secs = "0" + secs;
// let output = template.replace("h", hours).replace("m", mins).replace("s", secs);
// console.log(output);
class Template {
  constructor() {
    this.date = new Date();
    this.hours = "";
    this.mins = "";
    this.secs = "";
  }

  getTime() {
    this.hours =
      this.date.getHours() < 10
        ? "0" + this.date.getHours()
        : this.date.getHours();

    this.mins =
      this.date.getMinutes() < 10
        ? "0" + this.date.getMinutes()
        : this.date.getMinutes();
    this.secs =
      this.date.getSeconds() < 10
        ? "0" + this.date.getSeconds()
        : this.date.getSeconds();

    return `${this.hours}:${this.mins}:${this.secs}`;
  }
}

const time = new Template();
console.log(time.getTime());
