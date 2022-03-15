let inputs = ['rock', 'paper', 'scissor']
let playerScore = 0;
let computerScore = 0;

// computer rock paper input randomization 

function computerPlay() {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
}

// rockpaperscissors logic & player scoring 

function playRound (e) {
    computerSelection = computerPlay();
    playerSelection = e.target.id;

    console.log(playerSelection)

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

// Selectors
let buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(function(button) {
    button.addEventListener('click', buttonClick);
});

function buttonClick (e) {
    console.log(e.target.id);

    playRound(e)
}
