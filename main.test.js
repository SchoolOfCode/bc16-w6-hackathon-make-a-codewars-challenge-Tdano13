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