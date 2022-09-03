var playerScore = 0;
var computerScore = 0;

function computerPlay() {
    const option = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * option.length);
    return option[random]
}

function userPlay() {
    let user_input = prompt("Rock, Paper or Scissors?: ")
    let usercase = user_input.toLowerCase(); 
    return usercase
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        var str = "Computer also played " + computerSelection + "\n" + "It's a draw!" + "\n";
        return str
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        var str = "Computer played " + computerSelection + "\n" + "You lose! Paper beats Rock!" + "\n";
        computerScore++ ;
        return str
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        var str = "Computer played " + computerSelection + "\n" + "You win! Rock beats Scissors!" + "\n";
        playerScore++ ;
        return str
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        var str = "Computer played " + computerSelection + "\n" + "You win! Paper beats rock!" + "\n";
        playerScore++ ;
        return str
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        var str = "Computer played " + computerSelection + "\n" + "You lose! Scissors beats Paper!" + "\n";
        computerScore++ ;
        return str
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        var str = "Computer played " + computerSelection + "\n" + "You lose! Rock beats scissors!" + "\n";
        computerScore++ ;
        return str
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        var str = "Computer played " + computerSelection + "\n" + "You win! Scissors beats Paper!" + "\n";
        playerScore++ ;
        return str
    }

}

function game() {
    for (let i = 0; i < 5; i++) {
        var computerSelection = computerPlay();
        var playerSelection = userPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        let str = "Your Score: " + playerScore + "\n" + "Computer Score: " + computerScore + "\n" + "YOU WIN!!";
        return str
    }
    else if (playerScore == computerScore) {
        let str = "Your Score: " + playerScore + "\n" + "Computer Score: " + computerScore + "\n" + "It's a Draw!";
        return str
    }
    else {
        let str = "Your Score: " + playerScore + "\n" + "Computer Score: " + computerScore + "\n" + "You Lose!!!";
        return str
    }
}

console.log(game());
