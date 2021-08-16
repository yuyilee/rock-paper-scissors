// const computerSelection = computerPlay();
// const playerSelection = "Rock";
let playTurn = 1;
let score = 0;
let computer = 0;

function computerPlay() {
    let turn = Math.floor(Math.random()*3)+1;

    if(turn === 1){
        return "Rock";
    } 
    else if(turn === 2){
        return "Paper";
    } 
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    switch(computerSelection) {
    case "Rock":
        if (playerSelection == "rock") {
            console.log("Its a draw!");
        } 
        else if (playerSelection == "paper") {
            console.log("Congrats! Paper beats Rock!");
            score++;
        } 
        else if (playerSelection == "scissors") {
            console.log("Sorry, Rock beats Scissors");
            computer++;
        } 
        else {
            console.log("Only rock paper or scissors");
        }
        break;
    case "Paper":
        if (playerSelection == "rock") {
            console.log("Sorry, Paper beats Rock");
            computer++;
        } 
        else if (playerSelection == "paper") {
            console.log("Its a draw!");
        } 
        else if (playerSelection == "scissors") {
            console.log("Congrats! Scissors beats Paper");
            score++;
        } 
        else {
            console.log("Only rock paper or scissors");
        }
        break;
    case "Scissors":
        if (playerSelection == "rock") {
            console.log("Congrats! Rock beats Scissors");
            score++;
        }
        else if (playerSelection == "paper") {
            console.log("Sorry, Scissors beats paper");
            computer++;
        } 
        else if (playerSelection == "scissors") {
            console.log("Its a draw");
        } 
        else {
            console.log("Only rock paper or scissors");
        }
        break;
    default: 
        console.log("Something went wrong");
        return "invalid";
        break;
    }
}

function game() {

    if(playTurn <= 5) {

        let playerSelection = prompt("Rock Paper Scissors");
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        playTurn++
        
    } else {
        gameOver();
    }
}

function gameOver() {
    if(score < computer) {
        console.log(`You loose ${score} vs ${computer}`);
        score = 0;
        computer = 0;
    } else if (score == computer) {
        console.log(`It was a draw. Your score: ${score}, Computer: ${computer}`);
        score = 0;
        computer = 0;
    } else {
        console.log(`You WIN! ${score} vs ${computer}`);
        score = 0;
        computer = 0;
    }
}

game();
game();
game();
game();
game();
game();
