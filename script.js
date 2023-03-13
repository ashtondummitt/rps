let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

const playGame = confirm("I want to play a game...");
if (playGame) {
  console.log(game());
} else {
  alert("That's too bad...");
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "We tied...";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lose this round...";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lose this round...";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lose this round...";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win this round...";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win this round...";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win this round...";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Choose carefully...or suffer the consequences...",
      "Rock, Paper, or Scissors?"
    );

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
    console.log(playerSelection);
  }

  if (playerScore > compScore) {
    alert("You won this time...");
  } else if (playerScore < compScore) {
    alert("You lost. It was all for not.");
  } else {
    alert("We tied. You are stronger than I expected...");
  }

  const playAgain = confirm("Play again?");
  if (playAgain) {
    location.reload();
  } else {
    alert("That's too bad...");
  }
}
