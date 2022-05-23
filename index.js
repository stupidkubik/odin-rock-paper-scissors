const Rock = "Rock";
const Paper = "Paper";
const Scissors = "Scissors";

function computerPlay () {
    let compMove = Math.floor(Math.random() * 3) + 1;
    
    switch(compMove) {
        case 1: return Rock;
        break;
        case 2: return Paper;
        break;
        case 3: return Scissors;
        break;
    }

}







console.log(computerPlay());

