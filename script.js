let playerScore = 0;
let computerScore = 0;

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
    let cChoice = computerChoice();
    pChoice = e.target.id
    highLight(cChoice)
    playRound(pChoice, cChoice)
    updateBanner(pChoice, cChoice)
    return cChoice
  }))
}

const highLight = (target) => {
  document.getElementById(`comp-${target}`).classList.add('compChoice');
  setTimeout(() => {
    document.getElementById(`comp-${target}`).classList.remove('compChoice');
  }, "300")
}
// fn to update player/comp icon on the result banner
const updateBanner = (playerIcon, computerIcon) => {
  let player = document.getElementById('player-choice');
  let computer = document.getElementById('computer-choice');

  player.src = `./svg/${playerIcon}.png`;
  computer.src = `./svg/${computerIcon}.png`;
}

// fn to update the player/comp score, we pass the variables from playRound
const updateScore = () => {
  document.getElementById('pScore').innerText = playerScore;
  document.getElementById('compScore').innerText = computerScore;
}


// fn to update result banner
const updateResult = (text) => {
  let resultText = document.getElementById('resultText');
  resultText.innerText  = `${text}`;
}

const showModal = () => {
  const p = document.getElementById('modal-message');
  document.querySelector('.modal').style.display = 'block';
  document.querySelector('.modal-content').style.display = 'block';

  if(playerScore > computerScore) {
    p.innerText = 'You won!'
  } else {
    p.innerText = 'You lost :('
  }
}

const hideModal = () => {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.modal-content').style.display = 'none';
}

// endgame fn to disable the clickevents on the playerDiv
const endGame = () => {
  const playerDiv = document.querySelector('.player-div')
  playerDiv.classList.add('endGame')
  showModal()
}

// restartGame fn, sets score variables to zero, hides modal, and enables the player div
const restartGame = () => {
  document.getElementById('modal-btn').addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    hideModal()
    const playerDiv = document.querySelector('.player-div')
    playerDiv.classList.remove('endGame') //should this be restart game?
    updateScore()
  })
}

// end game func
const checkScore = () => {
  if(playerScore == 5) {  
    updateResult(`You win with a score of ${playerScore}`)
    endGame();
  } else if(computerScore == 5) {
    updateResult(`Computer wins with a score of ${computerScore}`)
    endGame();
  } 
}

// playRound funct gets playerChoice from playerChoice fn adn getComputerChoice from computerChoice fn
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
    updateScore();
  }
  checkScore()
}

playerChoice();
restartGame()