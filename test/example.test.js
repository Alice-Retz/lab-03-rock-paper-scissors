const test = QUnit.test;

import { getRandomThrow } from '../get-random-throw.js';


test('does 1 = rock', (expect) => {
    const num = 1;
    const expected = 'rock';
    const actual = getRandomThrow(num);
    expect.equal(actual, expected);
});
test('does 2 = paper', (expect) => {
    const num = 2;
    const expected = 'paper';
    const actual = getRandomThrow(num);
    expect.equal(actual, expected);
});
test('does 3 = scissors', (expect) => {
    const num = 3;
    const expected = 'scissors';
    const actual = getRandomThrow(num);
    expect.equal(actual, expected);
});


test('does rock beat scissors', (expect) => {

const user = 'rock'; 
const computer = 'scissors';
const expected = 'win';
const actual = 'doesUserWin(user, computer)'; 
expect.equal(actual, expected); 

})

