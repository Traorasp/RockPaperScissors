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

        function playRound(playerSelection, computerSelection){
            let playerSelectionLower = playerSelection.toLowerCase();
            if(playerSelectionLower == computerSelection.toLowerCase()){
                return "It's a tie!"
            }else if(playerSelectionLower == "rock" && computerSelection =="Scissors"){
                return "You win! Rock beats scissors";
            }else if(playerSelectionLower == "paper" && computerSelection == "Rock"){
                return "You win! Paper beats rock"
            }else if(playerSelectionLower == "scissors" && computerSelection == "Paper"){
                return "You win! Scissors beats paper}"
            } else {
                return `You lose! ${computerSelection} beats ${playerSelectionLower}`
            }
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

        console.log(game(5))

