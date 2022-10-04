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

// Add an event listener to EACH icon/btn that would run playRound with the correct choice for the player
// const playerSelection = (() => {
//     //store icons in array/htmlcollection
//     const icons = document.getElementsByClassName('player-icon')
//     let playerChoice;

//     //loop through array & add eventlistener to each el in arr
//     for(let icon of icons) {
//         icon.addEventListener('click', function(e) {
//             playerChoice = e.target.id
//         })
//         return playerChoice
//     }

//     // ** find a way to pass the id to the playRound func
//     // *** pass the el.id as an argument to the playRound funct, funct('rock) > playRound('funct('rock')', compChoice)

//     //each el should pertain to specific icon
//     //run playRound funct when an icon is clicked
// })

const getComputerChoice = (() => {
    const inputs = ['rock', 'paper', 'scissors']
    const x = Math.floor(Math.random() * 3)
    let computerInput = inputs[x].toString()

    return computerInput
})
const playRound = ((a, b) => {
    b = getComputerChoice()
    console.log(a, b)
})

const paper = document.getElementById('paper')

paper.addEventListener('click', playRound)


// playerChoice()
// playRound()