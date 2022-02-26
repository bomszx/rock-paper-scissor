let inputs = ['rock', 'paper', 'scissor']

function computerPlay () {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
}
console.log(computerPlay())