// import functions and grab DOM elements
import { randomNumber, getRandomThrow, doesUserWin } from './get-random-throw.js';
// initialize state
const submit = document.getElementById('submit');
// set event listeners 
// get user input
// use user input to update state 
// update DOM to reflect the new state
submit.addEventListener('click', ()=>{
    let num = randomNumber();
    let computerThrow = getRandomThrow(num);
    const selected = document.querySelector('input[type=radio]:checked');
    const userThrow = selected.value; 
    doesUserWin(userThrow, computerThrow);
});
