// random num to represent computer choice
const computerChoice = () => {
  let arr = ['rock', 'paper', 'scissor'];
  let i = Math.floor(Math.random() * 3);
  return  arr[i]; 
}

// eventlisteners to btn that assigns the click event to the selected icon then runs the playRound fn with the selected click event target
const playerChoice = () => {
  let pChoice;

  document.querySelectorAll('.player-icon').forEach((icon) => icon.addEventListener('click', (e) => {
    //click will call our playRound fn
    let cChoice = computerChoice()
    pChoice = e.target.id
    playRound(pChoice, cChoice)
    updateBanner(pChoice, cChoice)
  }))
}

const updateBanner = (playerIcon, computerIcon) => {
  let player = document.getElementById('player-choice')
  let computer = document.getElementById('computer-choice')

  player.src = `./svg/${playerIcon}.png`
  computer.src = `./svg/${computerIcon}.png`
}

const playRound = (getplayerChoice, getComputerChoice) => {
  let playerScore
  let computerScore
  console.log(getComputerChoice)
  if(getComputerChoice == getplayerChoice) {
    console.log('same')
    return 'Same'
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
