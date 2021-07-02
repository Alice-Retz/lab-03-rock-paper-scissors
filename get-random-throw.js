export function randomNumber() {
    return Math.ceil(Math.random() * 3);
}

export function getRandomThrow(randomNum) {
    if (randomNum === 1) {
        return 'rock';
    }
    else if (randomNum === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

export function doesUserWin(userThrow, computerThrow) {
    let outcome = document.getElementById('outcome');
    let computerChoice = document.getElementById('computer-choice');
    if (userThrow === 'rock' && computerThrow === 'scissor') {
        //computerChoice.textContent = `Scissor!`;
        return 'win';
        //outcome.textContent = `You won!`;
    }
    else if (userThrow === 'rock' && computerThrow === 'paper') {
        computerChoice.textContent = `Paper!`;
        outcome.textContent = `You lost!`; 
    }
    else if (userThrow === 'rock' && computerThrow === 'rock') {
        computerChoice.textContent = `Rock!`;
        outcome.textContent = `It's a draw!`;
    }
    else if (userThrow === 'paper' && computerThrow === 'rock') {
        computerChoice.textContent = `Rock!`;
        outcome.textContent = `You win!`;
    }
    else if (userThrow === 'paper' && computerThrow === 'paper') {
        computerChoice.textContent = `Paper!`;
        outcome.textContent = `It's a draw!`;
    }
    else if (userThrow === 'paper' && computerThrow === 'scissor') {
        computerChoice.textContent = `Scissor!`;
        outcome.textContent = `You lost!`;
    }
    else if (userThrow === 'scissors' && computerThrow === 'rock') {
        computerChoice.textContent = `Rock!`;
        outcome.textContent = `You lost!`;
    }
    else if (userThrow === 'scissors' && computerThrow === 'paper') {
        computerChoice.textContent = `Paper!`;
        outcome.textContent = `You win!`;
    }
    else if (userThrow === 'scissors' && computerThrow === 'scissor') {
        computerChoice.textContent = `Scissor!`;
        outcome.textContent = `It's a draw!`;
    }
    else {
        outcome.textContent = `Whoops! Something weird happened, let's try again!`;
    }}