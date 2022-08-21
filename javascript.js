let playerWins = 0;
let computerWins = 0;
let gamesPlayed = 0;

function getComputerChoice() {
    
    return(random(3));
}

function playerChoice(String) {

    let playerChoice = String.toUpperCase();

    if (playerChoice == "ROCK") {
        return 1;
    } else if (playerChoice == "PAPER") {
        return 2;
    } else {
        return 3;
    }

}

function playRound(playerChoice, computerChoice) {
    
    console.log(playerChoice);
    console.log(computerChoice);

    if (playerChoice == 1 && computerChoice == 3 ||
        playerChoice == 2 && computerChoice == 1 ||
        playerChoice == 3 && computerChoice == 2) {
            playerWins++;
            return "Player wins";
        }
    else if (computerChoice == 1 && playerChoice == 3 ||
        computerChoice == 2 && playerChoice == 1 ||
        computerChoice == 3 && playerChoice == 2) {
            computerWins++;
            return "Computer Wins";
        } else {
            return "Tie!"
        }
}


function random(number) {

    return Math.floor(Math.random() * number) + 1;
}

function updateScore() {
    const playerScore = document.querySelector(".playerWins");
    const computerScore = document.querySelector(".computerWins");

    playerScore.textContent = `Player: ${playerWins}`;
    computerScore.textContent = `Computer: ${computerWins}`;
}

const buttons = document.querySelectorAll(".buttonRPS");
buttons.forEach(button => button.addEventListener("click", function(e){

    if(gamesPlayed == 10) {
        
        const score = document.querySelector(".Score");
        if (playerWins > computerWins) {
            score.textContent = "Player Wins!"
            return;
        } else if (computerWins > playerWins) {
            score.textContent = "Computer Wins!"
            return;
        } else {
            score.textContent = "Tie!"
            return;
        }
    }
    let computerChoice = getComputerChoice();
    let playerMove = playerChoice(e.target.value);
    console.log(playRound(playerMove, computerChoice));
    updateScore();
    gamesPlayed++;

}));

