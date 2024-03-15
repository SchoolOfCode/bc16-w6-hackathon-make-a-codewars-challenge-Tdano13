// import test from vitest
import { expect, test } from 'vitest';
// import totalExpenses function
import { totalExpenses } from './main.js';

// test("MINUS operator", function (){
//     // ARRANGE
//     const operator = "-";
//     const firstNumber = 4;
//     const secondNumber = 6;
//     const expected = -2;
    
//     // ACT
//     const actual = calculate(operator, firstNumber, secondNumber);
    
//     // ASSERT
//     expect(actual).toBe(expected);
//     });
  
test('Total expenses for an empty array should be zero', () => {
    const emptyArray = [];
    const expected = 0;

    const actual = totalExpenses(emptyArray);

    expect(actual).toBe(expected);
});

// Write the test case
test('Total expenses for an array containing only positive expenses (income) -- this should be zero', () => {
    // Define an array containing only positive expenses
    const positiveExpenses = [50, 100, 150, 144, 39];
    const expected = 0;

    // Call the function with the array of positive expenses
    const actual = totalExpenses(positiveExpenses);

    // Assert that the result is zero
    expect(actual).toBe(expected);
});

// Write the test case
test('An array containing only negative expenses -- expenditures', () => {
    // Define an array containing only negative expenses
    const negativeExpenses = [-7, -100, -150, -144, -39];
    const expected = -440;

    // Call the function with the array of negative expenses
    const actual = totalExpenses(negativeExpenses);

    // Assert that the result is -440 as expected
    expect(actual).toBe(expected);
});

// Write the test case
test('An array containing both negaatsive and positive numbers -- expenditures and income', () => {
    // Define an array containing both positive and negative expenses
    const negativeAndPositiveExpenses = [-7, -100, -150, -144, -39, 65, 340, 8900984, 21, 17];
    const expected = -440;

    // Call the function with the array of positive and negative expenses/ income
    const actual = totalExpenses(negativeAndPositiveExpenses);

    // Assert that the result is -440 as expected
    expect(actual).toBe(expected);
});