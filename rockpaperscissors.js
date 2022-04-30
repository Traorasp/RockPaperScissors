const buttons = Array.from(document.querySelectorAll('#buttonContainer'));
buttons.forEach(button => button.addEventListener('click', playRound))

const displayWinner = document.querySelector('#winner');
const playerScoreDisplay = document.querySelector('.playerScore');
const computerScoreDisplay = document.querySelector('.compScore');

function computerPlay(){
    const playNum = Math.floor(Math.random()*3)+1;
    switch (playNum) {
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors'
    }
}

function playRound(playerSelection){
    updateScore(game(playerSelection));
}

function updateScore(scoreChange){
    let playerScore = +playerScoreDisplay.textContent;
    let compScore = +computerScoreDisplay.textContent;

    switch (scoreChange) {
        case -1: 
            computerScoreDisplay.textContent = compScore + 1;
            break; 
        case 0:
            break;
        case 1:
            playerScoreDisplay.textContent = playerScore + 1;
            break;
    }
    if(playerScoreDisplay.textContent >= 5 ){displayWinner.textContent = 'You win!'}
    else if(computerScoreDisplay.textContent >=5){displayWinner.textContent = 'You lose!'}
}

function game(playerSelection) {
    let select = playerSelection.target.getAttribute('class');
    let compSelect = computerPlay();
    console.log(compSelect);
    console.log(select);

    if(select == compSelect) return 0;
    else if(select == "rock" && compSelect =="scissors") return 1;
    else if(select == "paper" && compSelect == "rock") return 1;
    else if(select == "scissors" && compSelect == "paper") return 1;
    else return -1 ;
}



