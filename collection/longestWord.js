// Given a sentence, return the longest word in the string. E.g

//should return 'Development'
function longestWord(str) {
  const newStr = str.split(" ");
  let longestWord = "";
  for (let word of newStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("Tip Top Nic Cage Development Training"));
