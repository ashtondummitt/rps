let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie Game!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lose!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lose!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lose!";
  } else {
    playerScore++;
    return "You win!";
  }
}


function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose carefully...or suffer the consequences...", "Rock, Paper, or Scissors?");

    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(computerSelection);
    console.log(playerSelection);
  }
  if (playerScore > compScore) {
    return "You win the game!";
  } else if (playerScore < compScore) {
    return "You lose the game!";
  } else {
    return "You tied with the computer!";
  }
}

const playGame = confirm(
    "I want to play a game..."
);
 if (playGame) {
    console.log(game());
 } else {
    alert("That's too bad...");
 }
