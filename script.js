const computerPlay = (() => {
    let x = Math.floor(Math.random() * inputs.length);
    return inputs[x]
})()

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

const clickListener = ((e) => {
    const img = document.querySelector('.player-div');
    img.addEventListener('click', function(e) {
        console.log('hi')
    })
})()
