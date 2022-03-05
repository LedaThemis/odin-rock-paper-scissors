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

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose: (Rock, Paper, Scissors)");
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

    if (result === "Player wins!") {
      playerScore++;
    } else if (result === "Computer wins!") {
      computerScore++;
    }
    // Clearning console
    console.clear();
    // Displaying current score
    console.log(
      `Player goes ${playerSelection.toLowerCase()}, Computer goes ${computerSelection.toLowerCase()}`
    );
    console.log(result);
    console.log(
      `Score:\n\nPlayer | Computer\n     ${playerScore} | ${computerScore}`
    );
  }

  // Clearning console
  console.clear();

  if (playerScore === computerScore) {
    console.log("\n\nMATCH RESULT | TIE");
  } else if (playerScore > computerScore) {
    console.log("\n\nMATCH RESULT | PLAYER WINS!");
  } else {
    console.log("\n\nMATCH RESULT | COMPUTER WINS!");
  }
}

game();
