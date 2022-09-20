let inputs = ['rock', 'paper', 'scissor']
let playerScore = 0;
let computerScore = 0;

function computerPlay () {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
}

/*
rock > scissor
scissor > paper
paper > rock

no global variables
use the module method, in IIFE

*/

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('choose your method', '');
    computerSelection = computerPlay()

    console.log(playerSelection)
    console.log(computerSelection)

    if(playerSelection == computerSelection) {
        console.log('It\'s a tie!')
        playerScore, computerScore += 0;
    } else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('Player wins, rock beats scissor')
         playerScore += 1;
    } else if(playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose, paper beats rock')
         computerScore += 1;
    } else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('Player wins, scissor beats paper')
         playerScore += 1;
    } else if(playerSelection == 'scissor' && computerSelection == 'rock') {
        console.log('You lose, rock beats scissor')
         computerScore += 1
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Player wins, paper beats rock')
         playerScore += 1;
    } else if(playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log('You lose, scissor beats paper')
         computerScore += 1
    }
    return playerScore, computerScore;
}

function game() {
    for(let i = 0; i < 5; i++) {
        playRound()
        
        console.log(playerScore, computerScore)
        
        if(playerScore > computerScore) {
            console.log(`Player wins`)
        } else if (computerScore > playerScore) {
            console.log(`Computer wins`)
        } else {
            console.log(`It's a tie`)
        }
    }
}