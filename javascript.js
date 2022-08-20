function getComputerChoice() {
    
    return(random(3));
}

function playerChoice() {

    let playerChoice = prompt("Whats your move?");

    let playerChoiceCI = playerChoice.toUpperCase();

    if (playerChoiceCI == "ROCK") {
        return 1;
    } else if (playerChoiceCI == "PAPER") {
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
            return "Player wins";
        }
    else if (computerChoice == 1 && playerChoice == 3 ||
        computerChoice == 2 && playerChoice == 1 ||
        computerChoice == 3 && playerChoice == 2) {
            return "Computer Wins";
        } else {
            return "Tie!"
        }
}

function random(number) {

    return Math.floor(Math.random() * number) + 1;
}

function game() {

    let playerWins = 0
    ,   computerWins = 0;

    for (let i = 0; i < 5; i++) {
        let currentRun = playRound(playerChoice(), getComputerChoice());
        console.log(currentRun);

        if (currentRun == "Player wins") {
            playerWins++;
        } else if (currentRun == "Computer Wins") {

            computerWins++;
        }

        console.log(playerWins);
        console.log(computerWins);
    }

    if (playerWins > computerWins) {
        return "Player Wins Game!";
    } else if (computerWins > playerWins) {
        return "Computer Wins Game!";
    } else {
        return "Tie!";
    }

}

let run = game();

console.log(run);