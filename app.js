//import documents
import { getRandomThrow } from './get-random-throw.js';
import { doesUserWin } from './does-user-win.js';
//DOM elements
const submitBtn = document.getElementById('submit');
const computerThrow = document.getElementById('computer-choice');
const gameResults = document.getElementById('outcome');
const winSpan = document.getElementById('total-wins');
const lossSpan = document.getElementById('total-loss');
const drawSpan = document.getElementById('total-draws');
const resetSpan = document.getElementById('reset-total');
const resetBtn = document.getElementById('reset-button');

let win = 0;
let loss = 0;
let draw = 0;
let reset = 0;


submitBtn.addEventListener('click', () => {
    const userInput = document.querySelector('input[type=radio]:checked');
    const userThrow = userInput.value;
    let computerThrow = getRandomThrow();
    const results = doesUserWin(userThrow, computerThrow);
    if (results === 'win') {
        win++;
        gameResults.textContent = `You won!`;
    } else if (results === 'loss') {
        loss++;
        gameResults.textContent = `You lost!`;
    }
    else if (results === 'draw') {
        draw++;
        gameResults.textContent = `It's a draw!`;
    } else {
        gameResults.textContent = `Whoops, something went wrong! Let's try again.`;
    }
})