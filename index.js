const textArray = [ // Header options
    'Choose your weapon',
    'Fighting...',
    'Game results'
]

const popupClose = document.querySelector('.popup__close');
const popup = document.querySelector('.popup');

const weaponChoice = ['Rock', 'Paper', 'Scissors'];
const weaponRock = document.querySelector('.button_type_rock');
const weaponPaper = document.querySelector('.button_type_paper');
const weaponScissors = document.querySelector('.button_type_scissors');

const header = document.querySelector('.header');
const headerText = document.querySelector('.header__text');
const footer = document.querySelector('.footer');

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

    if (result.match('Win')) {
        computerWin--;
        addBattleText(`${result}. ${playerWin} : ${computerWin}`); // Computer lose one live
        checkCount();
    } else if (result.match('Lose')) {
        playerWin--;
        addBattleText(`${result}. ${playerWin} : ${computerWin}`); // Player lose one live
        checkCount();
    } else return addBattleText(result);

    changeHeaderText(textArray[0]);
}

function checkWinner(player, computer) { // Check the winner of the round
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
    changeHeaderText(textArray[2]);

    if (playerWin > computerWin) {
        window.alert(`${playerWin} : ${computerWin}. You Win! Computer is defeated!`)
    } else window.alert(`${playerWin} : ${computerWin}. You Lose! Try one more time:(`);

    computerWin = 5;
    playerWin = 5;
    
    const footerChildren = document.querySelectorAll('.footer__text'); // Clean battlefield
    footerChildren.forEach( item => item.remove());

    return popup.classList.remove('popup_hide');
}

function changeHeaderText(text) { // Change header text
    console.log(headerText);
    headerText.textContent = '';
    headerText.textContent = text;
}

function addBattleText(text) { // log battle
    const p = document.createElement('p');
    p.classList.add('footer__text');
    p.textContent = text;

    footer.appendChild(p);

    changeHeaderText(textArray[0]);
}

popupClose.addEventListener('click', () => {
    popup.classList.add('popup_hide');
    changeHeaderText(textArray[0]);
});

weaponRock.addEventListener('click', () => {
    playerSelection = weaponChoice[0];
    setTimeout(() => playRound(), 1000);
    changeHeaderText(textArray[1]);
});
weaponPaper.addEventListener('click', () => {
    playerSelection = weaponChoice[1];
    setTimeout(() => playRound(), 1000);
    changeHeaderText(textArray[1]);
});
weaponScissors.addEventListener('click', () => {
    playerSelection = weaponChoice[2];
    setTimeout(() => playRound(), 1000);
    changeHeaderText(textArray[1]);
});