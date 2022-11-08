/*
rock > scissor
scissor > paper
paper > rock

no global variables
use the module method, in IIFE

*/


// RECURSIONS
function countdown(n){
  let arr = [] // declare emptry array
  if(n < 1) { // base condition, if n(parameter) is less than 1 return arr
    return arr
  } else {
    // else -- 
    arr = countdown(n - 1) // assign functo our empty arr variable?
    arr.unshift(n) // add to the beginning of our arr
    console.log(arr)
    return arr
  }
}


const computerChoice = () => {
  let arr = ['rock', 'paper', 'scissor'];
  let i = Math.floor(Math.random() * 3);
  return arr[i]; 
}

const playerChoice = () => {
  let choices = document.querySelectorAll('.player-icon').forEach((choice => {
    choice.addEventListener('click', () => {
      console.log(choice.id)
    })
  }))
}
playerChoice()

const playRound = (getplayerChoice, getComputerChoice) => {
  getComputerChoice = computerChoice()
  if(getComputerChoice == playerChoice) {
    console.log('same')
    return 'Same'
  } else {
    console.log('not same')
    return 'Not same'
  }
 }

 playRound('rock', computerChoice)
// playRound('rock', computerChoice())
//  const game = () => {
//   for(let i = 0; i < 5; i++) {
//     playerChoice = prompt("What it'll be")
//     playRound(playerChoice, computerChoice)
//   }
//  }
// getComputerChoice() // this needs to be assigned to a variable so we can use it as a parameter but i don't wanna pollute my global scope
