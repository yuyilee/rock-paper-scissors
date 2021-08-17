// const computerSelection = computerPlay();
// const playerSelection = "Rock";
let score = 0;
let computer = 0;

const playerSelection = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

const player = document.querySelector(".player");
const computerRev = document.querySelector(".computer");

const playerScore = document.querySelector(".playertext");
const computerScore = document.querySelector(".computertext");

const explanation = document.querySelector(".explanation");

const reset = document.querySelector("#reset");

reset.addEventListener("click", resetGame);

playerSelection.forEach(btn => btn.addEventListener("click", () => { 

    player.innerHTML = `<i class="far fa-hand-${btn.id} fa-10x"></i>`;
    
    game(btn.id);

    playerScore.textContent = `You: ${score}`;
    computerScore.textContent = `Computer: ${computer}`;
    
}));

function computerPlay() {
    let turn = Math.floor(Math.random()*3)+1;

    if(turn === 1){
        return "rock";
    } 
    else if(turn === 2){
        return "paper";
    } 
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    switch(computerSelection) {
    case "rock":
        if (playerSelection == "rock") {
            explanation.textContent = "Its a draw!";
        } 
        else if (playerSelection == "paper") {
            explanation.textContent = "Congrats! Paper beats Rock!";
            score++;
            
        } 
        else if (playerSelection == "scissors") {
            explanation.textContent = "Sorry, Rock beats Scissors";
            computer++;
        } 
        else {
            explanation.textContent = "Only rock paper or scissors";
        }
        break;
    case "paper":
        if (playerSelection == "rock") {
            explanation.textContent = "Sorry, Paper beats Rock";
            computer++;
        } 
        else if (playerSelection == "paper") {
            explanation.textContent = "Its a draw!";
        } 
        else if (playerSelection == "scissors") {
            explanation.textContent = "Congrats! Scissors beats Paper";
            score++;
        } 
        else {
            explanation.textContent = "Only rock paper or scissors";
        }
        break;
    case "scissors":
        if (playerSelection == "rock") {
            explanation.textContent = "Congrats! Rock beats Scissors";
            score++;
        }
        else if (playerSelection == "paper") {
            explanation.textContent = "Sorry, Scissors beats paper";
            computer++;
        } 
        else if (playerSelection == "scissors") {
            explanation.textContent = "Its a draw";
        } 
        else {
            explanation.textContent = "Only rock paper or scissors";
        }
        break;
    default: 
        explanation.textContent = "Something went wrong";
        return "invalid";
        break;
    }
}

function game(playerSelection) {

   if(score < 5 && computer < 5) {

        let computerSelection = computerPlay();
        computerRev.innerHTML = `<i class="far fa-hand-${computerSelection} fa-10x"></i>`

        playRound(playerSelection, computerSelection);
        
    } else {

        gameOver();

    }
}

function gameOver() {
        if(score < computer) {
            result.textContent = `You loose ${score} vs ${computer}`;
            reset.style.cssText = "visibility: visible;";
  
        } else if (score == computer) {
            result.textContent = `It was a draw. Your score: ${score}, Computer: ${computer}`;
            reset.style.cssText = "visibility: visible;";
   
        } else {
            result.textContent = `You WIN! ${score} vs ${computer}`;
            reset.style.cssText = "visibility: visible;";
     
        }
}

function resetGame() {
    result.textContent = "";
    playerScore.textContent = "";
    computerScore.textContent = "";
    explanation.textContent = "";

    computerRev.innerHTML = "";
    player.innerHTML = "";

    reset.style.cssText = "visibility: hidden;";

    score = 0;
    computer = 0;

}