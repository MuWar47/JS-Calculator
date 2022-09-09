var playerScore = 0;
var computerScore = 0;
let playerSelection;
let computerSelection;
const btns = document.querySelectorAll(".btns");

btns.forEach(button => button.addEventListener("click", () => {
    if (playerScore == 5 || computerScore == 5) {
        endResult.textContent = game();
    }
    else {
        playerSelection = button.textContent.toLowerCase();
        computerPlay();
        playerChoice.textContent = `You Chose: ${playerSelection}`;
        computerChoice.textContent = `Computer Chose: ${computerSelection}`;
        result.textContent = playRound();
    }
    playerScoring.textContent = `Your Score: ${playerScore}`;
    computerScoring.textContent = `Computer Score: ${computerScore}`;

}));

function computerPlay() {
    const option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * option.length);
    computerSelection = option[random];
}


function playRound() {
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    }
    else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++ ;
        return "You Lose!"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
             playerSelection == "paper" && computerSelection == "rock" ||
             playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++ ;
        return "You Win!"
    }
}

function game() {
    if (playerScore > computerScore) {
        return "YOU WIN!!"
    }
    else if (playerScore == computerScore) {
        return "It's a Draw!"
    }
    else {
        return "You Lose!!!"
    }
}
