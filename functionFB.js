//# Lotto numbers
// function lotto() {
//   let arrNumbers = [];
//   let maxNumber = 49;
//   for (let i = 0; i < 6; i++) {
//     let number = Math.floor(Math.random() * maxNumber);
//     arrNumbers.push(number);
//   }
//   let specialNumber = Math.floor(Math.random() * 10);
//   arrNumbers.push(specialNumber);
//   return arrNumbers;
// }
// console.log(lotto());

//# Positive Dominant
// function isPositiveDominant(arr) {
//   let newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (!newArr.includes(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   let countPositive = 0;
//   let countNegative = 0;
//   for (let number of newArr) {
//     if (number > 0) {
//       countPositive++;
//     }
//     if (number < 0) {
//       countNegative++;
//     }
//   }
//   let result = countPositive - countNegative;
//   return result > 0;
// }
// console.log(isPositiveDominant([-1, -5, 5, 5, 5, 5, 3]));

//# First n vowels
function findVowels(str, num) {
  let vowels = ["a", "e", "i", "o", "u"];
  let foundVowels = [];
  for (let letter of str) {
    if (vowels.includes(letter)) {
      foundVowels.push(letter);
    }
  }
  return foundVowels.length >= num
    ? foundVowels.slice(0, num).join("")
    : "invalid";
}
console.log(findVowels("sharpening skills", 3)); // aei
console.log(findVowels("major league", 5)); // aoeau
console.log(findVowels("crabby patty", 2)); // aa
console.log(findVowels("shrimpy", 1)); // i
console.log(findVowels("shrimpy", 2)); // invalid
console.log(findVowels("hostess", 5)); // invalid
//# Numbers in Strings

function strContainingNumbers(arr) {
  let result = [];
  outerLoop: for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!isNaN(arr[i][j]) && arr[i][j] !== " ") {
        result.push(arr[i]);
        continue outerLoop;
      }
    }
  }
  return result;
}

console.log(strContainingNumbers(["1a", "a", "2b", "b"]));
console.log(strContainingNumbers(["this is a test", "test1"]));
console.log(strContainingNumbers(["1", "a", " ", "b"]));
console.log(strContainingNumbers(["rct", "ABC", "Test", "xYz"]));

//Create a function that takes any nonnegative number as an argument and return it with it's digits in descending order. Descending order is when you sort from highest to lowest
function sortDescending(num) {
  let arr = num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(arr);
}

//Create a function that takes a string and returns a string with its letters in alphabetical order
function AlphabetSoup(str) {
  return str.split("").sort().join("");
}
//Write a function that removes any non-letters from a string, returning a well-known film title.
function lettersOnly(str) {
  let alphabet = "abcdefgjhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return str
    .split("")
    .filter((x) => alphabet.includes(x))
    .join("");
}
//Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa
function reverseCase(str) {
  const newArr = str.split("");
  return newArr
    .map((word) =>
      word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()
    )
    .join("");
}
//Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************
function cardHide(card) {
  let n = card.length;
  let fourNumbers = card.slice(n - 4);
  return "*".repeat(n - 4).concat(fourNumbers);
}
//<<<<Solution 2>>>>>

function cardHide(card) {
 	card = card.split('');
	for (let i = 0; i < card.length - 4; i++) {
		card[i] = "*";
	}
	return card.join('');

  //You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

//If you can't find Nemo, return "I can't find Nemo :(".
function findNemo(sentence) {
	sentence1 = sentence.split(' ')
		if(sentence1.includes('Nemo')){
			return (`I found Nemo at ${sentence1.indexOf('Nemo') + 1}!`) 
		
	}
		return  "I can't find Nemo :("
}
//<<<<< Ternary Operator>>>>>
function findNemo(sentence) {
	sentence1 = sentence.split(' ')
	return	sentence1.includes('Nemo')? (`I found Nemo at ${sentence1.indexOf('Nemo') + 1}!`) : "I can't find Nemo :("
		 
}

//Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters
function getMiddle(str) {
	let n = str.length
	return n % 2 !== 0?(`${str[(n -1) / 2]}`):(`${str[n / 2 - 1]}${str[n / 2]}`)
}

//Given a string, reverse all the words which have odd length. The even length words are not changed.

// Examples
// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"
function reverseOdd(str) {
	let newStr = str.split(' ').map((word) => word.length % 2 !== 0? word.split('').reverse().join(''):word).join(' ')
	
	return newStr
}
  
//Write a function that takes a string and returns a string with the correct case for character titles in the Game of Thrones series.

// The words and, the, of and in should be lowercase.
// All other words should have the first character as uppercase and the rest lowercase.
// Examples
// correctTitle("jOn SnoW, kINg IN thE noRth.")
// ➞ "Jon Snow, King in the North."

// correctTitle("sansa stark, lady of winterfell.")
// ➞ "Sansa Stark, Lady of Winterfell."

// correctTitle("TYRION LANNISTER, HAND OF THE QUEEN.")
// ➞ "Tyrion Lannister, Hand of the Queen."
function correctTitle(str) {
	let isLowerCase = ['and','of','in','the']
	let correctedStr = str.toLowerCase().split(' ').map((word)=>
										!isLowerCase.includes(word)?
										word[0].toUpperCase().concat(word.slice(1)):word)
	                  .join(' ')
	}return correctedStr