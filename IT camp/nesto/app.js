let randomNumber = Math.floor(Math.random() * 100) + 1;
const pokusaji = document.querySelector(".pokusaji");
const poslednjipokusaj = document.querySelector(".poslednjipokusaj");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    pokusaji.textContent = "Prethodni pokusaji ";
  }

  pokusaji.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    poslednjipokusaj.textContent = "Bravo,pogodio si";
    poslednjipokusaj.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    poslednjipokusaj.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    poslednjipokusaj.textContent = "Pogresno";
    poslednjipokusaj.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Uneti broj je manji";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Uneti broj je veci";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
