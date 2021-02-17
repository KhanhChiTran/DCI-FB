// # Array methods: employees
// ​
// Create the following functions:
// ​
// - write a function that returns an array of employees that belong to a certain company - for example `DCI`
// - write a function that returns an array of users that have website with a particular tld - for example `de`
// - write a function that returns one user object according to the provided id || undefined
// - write a function that returns one user object according to the provided email
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    country: "UK",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.de",
    company: "DCI",
  },
  {
    id: 2,
    name: "Ervin Smith",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    country: "Germany",
    phone: "010-692-6593 x09125",
    website: "anastasia.de",
    company: "DCI",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    country: "Iran",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: "Apple",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    country: "Japan",
    phone: "493-170-9623 x156",
    website: "kale.de",
    company: "DCI",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    country: "USA",
    phone: "(254)954-1289",
    website: "demarco.info",
    company: "DCI",
  },
];
const findCompany = (arr, company) => {
  return arr.filter((item) => item.company === company);
};
// console.log(findCompany(users, "Apple"));
// console.log(findCompany(users, "DCI"));

const findWeb = (arr, website) => {
  return arr.filter((item) => item["website"].includes(website));
};
// console.log(findWeb(users, ".de"));
// console.log(findWeb(users, ".info"));

const findId = (arr, id) => {
  let found = arr.filter((item) => item.id === id);
  return found.length ? found[0] : undefined;
};
console.log(findId(users, 5));

const findEmail = (arr, email) => {
  return arr.filter((item) => item.email === email);
};
// console.log(findEmail(users, "Sincere@april.biz"));
