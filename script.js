function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random =
    rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(
  playerSelection,
  computerSelection
) {
  if (playerSelection === computerSelection) {
    return "Tie Game!";
  } else if (
    playerSelection === "rock" &&
    computerSelection === "paper"
  ) {
    return "You lose! Paper beats Rock";
  } else if (
    playerSelection === "paper" &&
    computerSelection === "scissors"
  ) {
    return "You lose! Scissors beats Paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "rock"
  ) {
    return "You lose! Rock beats Scissors";
  } else {
    return "You win!";
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(
  playRound(playerSelection, computerSelection)
);
