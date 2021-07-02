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
    else if (randomNum === 3) {
        return 'scissors';
    }
    else {
        return 'error';
    }
}