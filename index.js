const PopupClose = document.querySelector('.popup__close');
const Popup = document.querySelector('.popup');

PopupClose.addEventListener('click', () => Popup.classList.add('popup_hide'));

const weaponChoice = ['Rock', 'Paper', 'Scissors'];
const weaponRock = document.querySelector('.button_type_rock');
const weaponPaper = document.querySelector('.button_type_paper');
const weaponScissors = document.querySelector('.button_type_scissors');

weaponRock.addEventListener('click', () => {
    playerSelection = weaponChoice[0];
    playRound();
});
weaponPaper.addEventListener('click', () => {
    playerSelection = weaponChoice[1];
    playRound();
});
weaponScissors.addEventListener('click', () => {
    playerSelection = weaponChoice[2];
    playRound(); 
});

let computerSelection;
let playerSelection;
let playerWin = 5; // Every player has five lives
let computerWin = 5;

function computerPlay() {
    return weaponChoice[Math.floor(Math.random() * weaponChoice.length)];
}

function playRound() { // Start new round of game
    computerSelection = computerPlay();
    
    let result = checkWinner(playerSelection, computerSelection);
    console.log(result);
    console.log(computerSelection);

    if (result.match('Win')) {
        computerWin--;
        window.alert(`${result}. ${playerWin} : ${computerWin}`); // Computer lose one live
        checkCount();
    } else if (result.match('Lose')) {
        playerWin--;
        window.alert(`${result}. ${playerWin} : ${computerWin}`); // Player lose one live
        checkCount();
    } else return window.alert(result);
}

function checkWinner(player, computer) { // Check the winner of a round
    if ((player === weaponChoice[0] && computer === weaponChoice[1]) || 
    (player === weaponChoice[1] && computer === weaponChoice[2]) ||
    (player === weaponChoice[2] && computer === weaponChoice[0])) {
        return `You Lose! ${computer} beats ${player}`;
    } else if ((player === weaponChoice[1] && computer === weaponChoice[0]) || 
    (player === weaponChoice[2] && computer === weaponChoice[1]) ||
    (player === weaponChoice[0] && computer === weaponChoice[2])) {
        return `You Win! ${player} beats ${computer}`;
    } else return `Match! ${computer} and ${player} have same power`;
}

function checkCount() {
    if (computerWin === 0 || playerWin === 0) {
        return gameCount(); 
    }
}

function gameCount() { // Count game result
    if (playerWin > computerWin) {
        window.alert(`${playerWin} : ${computerWin}. You Win! Computer is defeated!`)
    } else window.alert(`${playerWin} : ${computerWin}. You Lose! Try one more time:(`);
    return Popup.classList.remove('popup_hide');
}