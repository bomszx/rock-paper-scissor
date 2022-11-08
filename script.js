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






let computerChoice = () => {
  let arr = ['rock', 'paper', 'scissor'];
  let i = Math.floor(Math.random() * 3);
  return arr[i]; 
}

let playerChoice = () => {
  let pChoice;
  document.querySelectorAll('.player-icon').forEach((icon) => icon.addEventListener('click', (e) => {
    pChoice = e.target.id
    playRound(pChoice, computerChoice())
  }))
}

const playRound = (getplayerChoice, getComputerChoice) => {
  console.log('player = '+ getplayerChoice, 'computer = ' + getComputerChoice)
  if(getComputerChoice == getplayerChoice) {
    console.log('same')
    return 'Same'
  } else {
    console.log('not same')
    return 'Not same'
  }
 }

playerChoice()








//  playRound(playerChoice(), computerChoice())

//  const game = () => {
//   for(let i = 0; i < 5; i++) {
//     playerChoice = prompt("What it'll be")
//     playRound(playerChoice, computerChoice)
//   }
//  }
// getComputerChoice() // this needs to be assigned to a variable so we can use it as a parameter but i don't wanna pollute my global scope
