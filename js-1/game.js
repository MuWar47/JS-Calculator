// const prompt = require('prompt-sync')();    //delete later

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
        var str = "It's a draw!"
        return str
    }
}

var computerSelection = computerPlay();
var playerSelection = userPlay();
console.log(playRound(playerSelection, computerSelection));

