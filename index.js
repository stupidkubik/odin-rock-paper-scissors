const PopupClose = document.querySelector('.popup__close');
const Popup = document.querySelector('.popup');

PopupClose.addEventListener('click', () => Popup.classList.add('popup_hide'));





// function computerPlay() {
//     let compMove = Math.floor(Math.random() * 3) + 1;
//     switch(compMove) {
//         case 1: return "Rock";
//         break;
//         case 2: return "Paper";
//         break;
//         case 3: return "Scissors";
//         break;
//     }
// }

// let computerSelection = "";
// let playerSelection = "";
// let playerWin = 0;
// let computerWin = 0;

// function playRound(playerSelection, computerSelection) {

//     if (playerSelection.match(/rock/i) || playerSelection.match(/paper/i) || playerSelection.match(/scissors/i)) {
//         let x = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
//         playerSelection = x;
//     } else return "Wrong";

//     if(playerSelection == "Rock" && computerSelection == "Scissors") {
//         return `You Win! ${playerSelection} beats ${computerSelection}`; 
//     } else if(playerSelection == "Paper" && computerSelection == "Scissors") {
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else if(playerSelection == "Scissors" && computerSelection == "Rock") {
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else if(playerSelection == "Paper" && computerSelection == "Rock") {
//         return `You Win! ${playerSelection} beats ${computerSelection}`;
//     } else if(playerSelection == "Rock" && computerSelection == "Paper") {
//         return `You Lose! ${computerSelection} beats ${playerSelection}`;
//     } else if(playerSelection == "Scissors" && computerSelection == "Paper") {
//         return `You Win! ${playerSelection} beats ${computerSelection}`;
//     } else return "Match"; 
// }

// function game() {
//     for (let index = 0; index < 5; index++) {
//         let result = playRound(prompt("Rock, Paper or Scissors?"), computerPlay());

//         if (result.match("Match") || result.match("Wrong")) {
//             index--;
//         } else if (result.match("Win")) {
//             playerWin++;
//         } else computerWin++;
//         window.alert(`${result}. ${playerWin} : ${computerWin}`);
//     }
//     if (playerWin > computerWin) {
//         window.alert(`${playerWin} : ${computerWin}. You Win!`)
//     } else window.alert(`${playerWin} : ${computerWin}. You Lose!`) 
// }

// let startGame = prompt(`Start the Game? Enter Yes or No`);
// startGame === "Yes" ? game() : null;