/*
rock > scissor
scissor > paper
paper > rock

no global variables
use the module method, in IIFE

*/

// const player = (() => {
//     const iconsDiv = document.querySelector('.player-div')
//     let playerChoice 

//     iconsDiv.addEventListener('click', function(e) {
//         playerChoice = e.target.id
//         console.log(playerChoice)
//     })
// })();

// const computer = (() => {

// })();

//how to get playerSelection to from click event and, playRound to run
const playerSelection = (() => {
    const icons = document.querySelector('.player-div')
    let playerInput;

    icons.addEventListener('click', playRound)

    return playerInput
})


const getComputerChoice = (() => {
    const inputs = ['rock', 'paper', 'scissors']
    const x = Math.floor(Math.random() * 3)
    let computerInput = inputs[x].toString()

    return computerInput
})

const playRound = ((a, b) => {
    a = getComputerChoice()
     b = 'rock' 
    console.log(a, b)
})

playRound()