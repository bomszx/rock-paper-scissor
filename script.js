// random num to represent computer choice
const computerChoice = () => {
  let arr = ['rock', 'paper', 'scissor'];
  let i = Math.floor(Math.random() * 3);
  return  arr[i]; 
}

let playerScore = 0;
let computerScore = 0;

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

// fn to update player/comp icon on the result banner
const updateBanner = (playerIcon, computerIcon) => {
  let player = document.getElementById('player-choice');
  let computer = document.getElementById('computer-choice');

  player.src = `./svg/${playerIcon}.png`;
  computer.src = `./svg/${computerIcon}.png`;
}

//fn to update the player/comp score, we pass the variables from playRound
const updateScore = () => {
  document.getElementById('pScore').innerText = playerScore;
  document.getElementById('compScore').innerText = computerScore;
}

const updateResult = (text) => {
  let resultText = document.getElementById('resultText');
  resultText.innerText  = `${text}`;
}

//end game func
const endGame = () => {
  if(playerScore == 5) {  
    updateResult(`You win with a score of ${playerScore}`) //how to put name of winner who scored 5?
  } else if(computerScore == 5) {
    updateResult(`Computer wins with a score of ${computerScore}`)
  }
}

const playRound = (getplayerChoice, getComputerChoice) => {
  if(getComputerChoice == getplayerChoice) {
    updateResult("It's a tie!");
  } else if(getplayerChoice == 'rock' && getComputerChoice == 'scissor') {
    updateResult("You win! Rock beats Scissors")
    playerScore += 1;
    updateScore()
  } else if(getplayerChoice == 'paper' && getComputerChoice == 'rock') {
    updateResult("You win! Paper beats Rock")
    playerScore += 1;
    updateScore()
  } else if(getplayerChoice == 'scissor' && getComputerChoice == 'paper') {
    updateResult("You win! Scissors beats Paper")
    playerScore += 1;
    updateScore()
  } else if(getplayerChoice == 'scissor' && getComputerChoice == 'rock') {
    updateResult("You lose! Rock beats Scissors")
    computerScore += 1;
    updateScore()
  } else if(getplayerChoice == 'rock' && getComputerChoice == 'paper') {
    updateResult("You lose! Paper beats Rock")
    computerScore += 1;
    updateScore()
  } else if(getplayerChoice == 'paper' && getComputerChoice == 'scissor') {
    updateResult("You lose! Scissor beats Paper")
    computerScore += 1
    updateScore
  }
  console.log(playerScore, computerScore)
  endGame();
}

playerChoice();








//  playRound(playerChoice(), computerChoice())

//  const game = () => {
//   for(let i = 0; i < 5; i++) {
//     playerChoice = prompt("What it'll be")
//     playRound(playerChoice, computerChoice)
//   }
//  }
// getComputerChoice() // this needs to be assigned to a variable so we can use it as a parameter but i don't wanna pollute my global scope
