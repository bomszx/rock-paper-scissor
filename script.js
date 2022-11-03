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

const getComputerChoice = () => {
  let arr = ['Rock', 'Paper', 'Scissor']
  let i = Math.floor(Math.random() * 3);
  
  console.log(arr[i], i);
}

getComputerChoice()