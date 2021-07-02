const test = QUnit.test;

import { getRandomThrow } from '../get-random-throw.js';
import { doesUserWin } from '../does-user-win.js';


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
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does rock beat paper', (expect) => {

    const user = 'rock'; 
    const computer = 'paper';
    const expected = 'loss';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does paper beat rock', (expect) => {

    const user = 'paper'; 
    const computer = 'rock';
    const expected = 'win';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does paper beat scissors', (expect) => {

    const user = 'paper'; 
    const computer = 'scissors';
    const expected = 'loss';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does scissors beat paper', (expect) => {

    const user = 'scissors'; 
    const computer = 'paper';
    const expected = 'win';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does scissors beat rock', (expect) => {

    const user = 'scissors'; 
    const computer = 'rock';
    const expected = 'loss';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});

test('does scissors beat scissors', (expect) => {

    const user = 'scissors'; 
    const computer = 'scissors';
    const expected = 'draw';
    const actual = doesUserWin(user, computer); 
    expect.equal(actual, expected); 

});
