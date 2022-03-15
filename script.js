let inputs = ['rock', 'paper', 'scissors']
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

    let playerChoice = document.getElementById('player-choice');
    let computerChoice = document.getElementById('computer-choice');
    let banner = document.querySelector('.message');
    let player = document.getElementById('player-score')
    let computer = document.getElementById('computer-score')

    playerChoice.innerText = playerSelection.toUpperCase();
    computerChoice.innerText = computerSelection.toUpperCase();
    
    if(playerSelection == computerSelection) {
        banner.innerText = 'It\'s a tie!';
        playerScore, computerScore += 0;
    } else if(playerSelection == 'rock' && computerSelection == 'scissors') {
        banner.innerText = 'You win, rock beats scissors';
         playerScore ++;
    } else if(playerSelection == 'rock' && computerSelection == 'paper') {
        banner.innerText = 'You lose, paper beats rock';
         computerScore ++;
    } else if(playerSelection == 'scissors' && computerSelection == 'paper') {
        banner.innerText = 'You win, scissors beats paper';
         playerScore ++;
    } else if(playerSelection == 'scissors' && computerSelection == 'rock') {
        banner.innerText = 'You lose, rock beats scissors';
         computerScore ++;
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        banner.innerText = 'You win, paper beats rock';
         playerScore ++;
    } else if(playerSelection == 'paper' && computerSelection == 'scissors') {
        banner.innerText = 'You lose, scissors beats paper';
         computerScore ++;
    }
    player.innerText = playerScore;
    computer.innerText = computerScore;
}

// Selectors
let buttons = document.querySelectorAll('button');
console.log(buttons);

buttons.forEach(function(button) {
    button.addEventListener('click', buttonClick);
});

function buttonClick (e) {
    // Passed the e as an argument to the playRound function for our playerSelection
    playRound(e)
}
