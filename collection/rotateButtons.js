//https://www.hackerrank.com/challenges/js10-buttons-container/problem
let buttonContainer = document.getElementById("btns");
let numbers = [1, 2, 3, 6, 9, 8, 7, 4];
function click() {
  let lastNum = numbers.pop();
  numbers = [lastNum, ...numbers];
  [
    document.getElementById("btn1").innerText,
    document.getElementById("btn2").innerText,
    document.getElementById("btn3").innerText,
    document.getElementById("btn6").innerText,
    document.getElementById("btn9").innerText,
    document.getElementById("btn8").innerText,
    document.getElementById("btn7").innerText,
    document.getElementById("btn4").innerText,
  ] = numbers;
}
