// // IMPORT MODULES under test here:
// // import { example } from '../example.js';

const test = QUnit.test;

// test('time to test a function', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = true;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = true;
    
//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
import { getRandomThrow, doesUserWin } from '../get-random-throw.js';

test('does rock beat paper', (expect) => {
    
    const expected = 'win';
    const actual = doesUserWin('rock', 'scissor');
    expect.equal(actual, expected);
});


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

