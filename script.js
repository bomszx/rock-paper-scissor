let inputs = ['rock', 'paper', 'scissor']
let playerScore = 0;
let computerScore = 0;

/* computer rock paper input randomization */

function computerPlay() {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
}

/* rockpaperscissors logic & player scoring */

function playRound (playerSelection, computerSelection) {
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



// selecting the buttons
let buttons = document.querySelectorAll('.button');

// loop through nodelist of buttons, then added an event listener to listen for licks, after a click event it would run the playRound function that would take the id of the button that was clicked as its parameter/player choice
buttons.forEach(button => button.addEventListener('click', function() {
    playRound(button.id)
}))



/*game function, run the game with 5 rounds */

function game() {
    for(let i = 0; i < 5; i++) {
        playRound()
        
        if(playerScore > computerScore) {
            console.log(`Player wins`)
        } else if (computerScore > playerScore) {
            console.log(`Computer wins`)
        } else {
            console.log(`It's a tie`)
        }
    }
    console.log(playerScore, computerScore)
}

