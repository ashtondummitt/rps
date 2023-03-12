function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random =
    rps[Math.floor(Math.random() * rps.length)];
  return random;
}

const computerSelection = getComputerChoice();
const playerSelection = prompt(
  'Please choose "rock", "paper", or "scissors".'
);

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
    return "You lose!";
  } else if (
    playerSelection === "paper" &&
    computerSelection === "scissors"
  ) {
    return "You lose!";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "rock"
  ) {
    return "You lose!";
  } else {
    return "You win!";
  }
}

console.log(computerSelection);
console.log(playerSelection);
console.log(
  playRound(playerSelection, computerSelection)
);
