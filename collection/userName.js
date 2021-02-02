const account1 = {
  owner: "Nicholas Cage",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};
const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};
const account3 = {
  owner: "Bob Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};
const account4 = {
  owner: "Joey Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
const acounts = [account1, account2, account3, account4];
function getUserName(accounts) {
  for (const account of accounts) {
    const { owner } = account;
    const userName = owner.slice(0, 3).toLowerCase();
    return {
      userName,
      ...account,
    };
  }
}
const x = getUserName(acounts);
console.log(x);
