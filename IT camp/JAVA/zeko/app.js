const backgroundbtn = document.querySelector(".background-btn");
const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");
const h3 = document.querySelectorAll("h3");
const guess = document.getElementById("guess");
const guessp = document.getElementById("guessp");
const hr = document.querySelector("hr");
const block = document.querySelector(".block");
const input = document.querySelector("input");
const h1 = document.getElementsByTagName("h1")[1];
const h2 = document.getElementsByTagName("h2")[0];
const icons = document.querySelectorAll("#icon");
let color = 0;
backgroundbtn.parentElement.addEventListener("click", function (e) {
  e.preventDefault();
  if (color % 2 == 0) {
    backgroundbtn.parentElement.style.backgroundColor = "#222";
    backgroundbtn.parentElement.style.justifyContent = "right";
    backgroundbtn.style.marginRight = "4%";
    backgroundbtn.style.backgroundColor = "#999898";
    body.style.backgroundColor = "#999898";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#222";
      button.style.color = "#999898";
    });
    h3.forEach((el) => {
      el.style.color = "#222";
    });
    icons.forEach((el) => {
      el.style.color = "#222";
    });
    guess.style.color = "#222";
    guessp.style.color = "#222";
    hr.style.backgroundColor = "#222";
    block.style.backgroundColor = "#222";
    h1.style.color = "#999898";
    h2.style.color = "#222";
    input.style.backgroundColor = "#999898";
    input.style.color = "#222";
    input.style.borderColor = "#222";
    color++;
  } else {
    backgroundbtn.parentElement.style.backgroundColor = "#eee";
    backgroundbtn.parentElement.style.justifyContent = "left";
    backgroundbtn.style.marginLeft = "4%";
    backgroundbtn.style.backgroundColor = "#222";
    body.style.backgroundColor = "#222";
    buttons.forEach((button) => {
      button.style.backgroundColor = "#eee";
      button.style.color = "#222";
    });
    h3.forEach((el) => {
      el.style.color = "#eee";
    });
    icons.forEach((el) => {
      el.style.color = "#eee";
    });
    guess.style.color = "#eee";
    guessp.style.color = "#eee";
    hr.style.backgroundColor = "#eee";
    block.style.backgroundColor = "#eee";
    h1.style.color = "#222";
    h2.style.color = "#eee";
    input.style.backgroundColor = "#222";
    input.style.color = "#eee";
    input.style.borderColor = "#eee";
    color++;
  }
});

let number = Math.floor(Math.random() * 20) + 1;
let highscore = 0;
let score = 20;
console.log(number);
const gamestart = document.querySelector("#game");
const first = document.querySelector("#first-txt");
const second = document.querySelector("#second-txt");
const third = document.querySelector("#third-txt");
let flag = 0;
let prev = -1;
gamestart.addEventListener("click", function (e) {
  e.preventDefault();

  if (flag == 1) {
    first.innerHTML = "Click Again!";
  } else {
    let value = document.querySelector("input").value;
    if (value == "") first.innerHTML = "Enter a number!";
    else if (value == number) {
      body.style.backgroundColor = "#60b347";
      first.innerHTML = "Correct number!";
      first.style.fontSize = "2.2rem";
      second.innerHTML = `Score: ${score}`;
      flag = 1;
      backgroundbtn.parentElement.style.display = "none";

      if (score > highscore) {
        highscore = score;
        third.innerHTML = `Highcore: ${highscore}`;
      }
    } else if (score == 0) {
      body.style.backgroundColor = "#ec1919";
      first.innerHTML = "You lost the game!";
      flag = 1;
      backgroundbtn.parentElement.style.display = "none";
    } else {
      if (prev != value) {
        score--;
      }
      prev = value;
      second.innerHTML = `Score: ${score}`;
      if (value > number) {
        first.innerHTML = "Too high!";
      } else {
        first.innerHTML = "Too low!";
      }
    }
  }
});

const restart = document.querySelector("#restart");

restart.addEventListener("click", function (e) {
  e.preventDefault;
  if (color % 2 != 0) body.style.backgroundColor = "#999898";
  else {
    body.style.backgroundColor = "#222";
  }
  number = Math.floor(Math.random() * 20) + 1;
  score = 20;
  second.innerHTML = `Score: ${score}`;
  flag = 0;
  first.innerHTML = "Start guessing...";
  backgroundbtn.parentElement.style.display = "";
  document.querySelector("input").value = "";
});
