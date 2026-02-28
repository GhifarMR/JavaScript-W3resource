const randomNum = Math.ceil(Math.random() * 10);

const guess = prompt("Guess the number between 1 - 10");

guess === randomNum
  ? alert("Matched")
  : alert(`Not matched, the number was ${randomNum}`);
