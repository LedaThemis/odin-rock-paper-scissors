function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  // To make function case-insensitive
  const pS = playerSelection.toLowerCase();
  const cS = computerSelection.toLowerCase();
  if (pS === cS) {
    return "It's a tie!";
  } else if (
    (pS === "rock" && cS === "scissors") ||
    (pS === "paper" && cS === "rock") ||
    (pS === "scissors" && cS === "paper")
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}

const buttons = document.querySelectorAll("button");
const scoreDiv = document.querySelector("#score-div");
const resultsDiv = document.querySelector("#results-div");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((b) => b.addEventListener("click", handleButtonClick));

function handleButtonClick(e) {
  const playerSelection = e.target.attributes["data-key"].value;
  const computerSelection = computerPlay();

  game(playerSelection, computerSelection);
}

function game(playerSelection, computerSelection) {
  const result = playRound(playerSelection, computerSelection);

  if (result === "Player wins!") {
    playerScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }

  scoreDiv.innerText = `Current Score: ${playerScore}-${computerScore}`;
}
