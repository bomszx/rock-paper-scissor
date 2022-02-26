let inputs = ['rock', 'paper', 'scissor']

function computerPlay () {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
}

/*
rock > scissor
scissor > paper
paper > rock

*/

function playRound (playerSelection, computerSelection) {
    playerSelection = prompt('choose your method', '');
    computerSelection = computerPlay()

    console.log(playerSelection)
    console.log(computerSelection)
    
    if(playerSelection == computerSelection) {
        console.log('It\'s a tie!')
    } else if(playerSelection == 'rock' && computerSelection == 'scissor') {
        console.log('Player wins, rock beats scissor')
    } else if(playerSelection == 'rock' && computerSelection == 'paper') {
        console.log('You lose, paper beats rock')
    } else if(playerSelection == 'scissor' && computerSelection == 'paper') {
        console.log('Player wins, scissor beats paper')
    } else if(playerSelection == 'scissor' && computerSelection == 'rock') {
        console.log('You lose, rock beats scissor')
    } else if(playerSelection == 'paper' && computerSelection == 'rock') {
        console.log('Player wins, paper beats rock')
    } else if(playerSelection == 'paper' && computerSelection == 'scissor') {
        console.log('You lose, scissor beats paper')
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        playRound()
    }
}