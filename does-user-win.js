export function doesUserwin(player, computer) {

    if (player === computer ) {return 'draw'}
    else if (player === 'rock' && computer === 'scissors') {return 'win'}
    else if (player === 'rock' && computer === 'paper') {return 'loss'}
    else if (player === 'paper' && computer === 'rock') {return 'win'}
    else if (player === 'paper' && computer === 'scissors') {return 'loss'}
    else if (player === 'scissors' && computer === 'paper') {return 'win'}
    else if (player === 'scissors' && computer === 'rock') {return 'loss'}
    else {return 'error'}

}