const buttons = Array.from(document.querySelectorAll('#buttonContainer'));
buttons.forEach(button => button.addEventListener('click', playRound))

function computerPlay(){
    const playNum = Math.floor(Math.random()*3)+1;
    if(playNum === 1) {
        return "Rock";
    }else if(playNum === 2) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function playRound(playerSelection){
    let selection = playerSelection.target.getAttribute('class');
    let computerSelection = computerPlay();
    if(selection == computerSelection){ console.log("It's a tie!");}
    else if(selection == "rock" && computerSelection =="Scissors"){console.log("You win! Rock beats scissors");}
    else if(selection == "paper" && computerSelection == "Rock"){console.log("You win! Paper beats rock");}
    else if(selection == "scissors" && computerSelection == "Paper"){console.log("You win! Scissors beats paper}");}
    else {console.log(`You lose! ${computerSelection} beats ${selection}`);}
}

function game(rounds) {
    let playerScore = 0;
    let compScore = 0;
    for(let i = 0; i < rounds; i++){
        let playerSelection = prompt("Rock, paper, scissors, shoot!");
        let winner = playRound(playerSelection, computerPlay())
        console.log(winner)
        winner.substring(0,8) == "You win!" ? playerScore++ : winner.substring(0,9) == "You lose!" ? compScore++: compScore;
    }
    return playerScore > compScore ? `You win! ${playerScore} : ${compScore}` : playerScore < compScore ? `You lose! ${playerScore} : ${compScore}` : `You tie! ${playerScore} : ${compScore}`;
}



