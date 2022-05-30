function computerPlay() {
    let compMove = Math.floor(Math.random() * 3) + 1;
    switch(compMove) {
        case 1: return "Rock";
        break;
        case 2: return "Paper";
        break;
        case 3: return "Scissors";
        break;
    }
}

let computerSelection = "";
let playerSelection = "";
let playerWin = 0;
let computerWin = 0;

//if(playerSelection === String) {
//    let x = playerSelection.slice(1).toLowerCase();
//    let y = playerSelection.slice(0, 1).toUpperCase();
//    playerSelection = y + x;
//} else playerSelection;

function playRound() {
    if (playerSelection === computerSelection) {
        return "Match";
    } else if(playerSelection == "Rock" && computerSelection == "Scissors") {
        return `You Win! ${playerSelection} beats ${computerSelection}`; 
    } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "Scissors" && computerSelection == "Rock") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "Paper" && computerSelection == "Rock") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if(playerSelection == "Rock" && computerSelection == "Paper") {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    for (let index = 0; index < 5; index++) {
        let result = playRound(playerSelection = prompt("Rock, Paper or Scissors?"), computerSelection = computerPlay());
        console.log(playRound());
        console.log(computerSelection);
        if (result.match("Match")) {
            index--;
        } else if (result.match("Win")) {
            playerWin++;
        } else computerWin++;
        window.alert(`${result}. ${playerWin} : ${computerWin}`);
    }
    if (playerWin > computerWin) {
        window.alert(`${playerWin} : ${computerWin}. You Win!`)
    } else window.alert(`${playerWin} : ${computerWin}. You Lose!`) 
}

let startGame = prompt("Start the Game? Yes or No?");
startGame === "Yes" ? game() : null;