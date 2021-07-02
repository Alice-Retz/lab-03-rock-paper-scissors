export function randomNumber() {
    Math.ceiling(Math.random() * 3);
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
    if (userThrow === 'rock' && computerThrow === 'scissor') {
        computerChoice.textContent = `Scissor!`;
        outcome.textContent = `You won!`;
    }
    else if (userThrow === 'rock' && computerThrow === 'paper') {
        computerChoice.textContent = `Paper!`;
        outcome.textContent = `You lost!`;

    }
    else {
        computerChoice.textContent = `Rock!`;
        outcome.textContent = `It's a draw!`;
    }
}

