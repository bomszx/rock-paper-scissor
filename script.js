

/*
rock > scissor
scissor > paper
paper > rock

no global variables
use the module method, in IIFE

1. add event listerners on the player & computer icons
    1.1 update results icon depending on the chioce
    1.2 add class that would higzhlight icon of choice
    1.3 append result icon with player/computer choice
2.

*/

// Computer actions, should return computer choice for our playRound func
const computer = (() => {
    let choice;
    const inputs = ['rock', 'paper', 'scissors']

    const computerChoice = () => {
        let x = Math.floor(Math.random() * inputs.length);
        choice = inputs[x];
        return choice;
    }

    return {
        computerChoice
    }
})()

// Player actions, should return player choice for our playRound func
const player = (() => {
    let choice;
    const img = document.querySelector('.player-div')
})()

const clickListener = ((e) => {
    const img = document.querySelector('.player-div');
    img.addEventListener('click', function(e) {
        console.log('hi')
    })
})()

// const playRound = ()