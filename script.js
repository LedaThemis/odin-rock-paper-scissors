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
const statusDiv = document.querySelector("#status-div");
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

  statusDiv.innerText =
    `You played ${capitalizeFirstLetter(playerSelection)},` +
    ` Computer played ${capitalizeFirstLetter(computerSelection)}`;
  scoreDiv.innerText = `Current Score: ${playerScore}-${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    handleWin();
  }
}

function handleWin() {
  if (playerScore === 5) {
    resultsDiv.innerText =
      "You won!" + ` with a score of ${playerScore}-${computerScore}`;
  } else {
    resultsDiv.innerText =
      "Computer won!" + ` with a score of ${computerScore}-${playerScore}`;
  }
  scoreDiv.innerText = "";
  statusDiv.innerText = "";
  buttons.forEach((e) => e.removeEventListener("click", handleButtonClick));
}

function capitalizeFirstLetter(string) {
  return string.split("")[0].toUpperCase() + string.split("").slice(1).join("");
}
