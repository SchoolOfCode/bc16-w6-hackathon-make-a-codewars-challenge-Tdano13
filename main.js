// Problem:
// You're managing a budget for electronic music festival, and you need to track expenses. 
// You have a list of expenses, both positive (income) and negative (expenditure). 
// Your task is to calculate the total amount of money spent on items that incurred a cost.

// Solution:

// You'll use a function to iterate through the list of expenses and calculate the sum of all negative values. 
// This sum will represent the total amount spent on items that incurred a cost.

// MVP 1

function totalExpenses(expenses) {
    let totalSpent = 0;
    for (let expense of expenses) {
        if (expense < 0) {
            totalSpent += expense;
        }
    }
    return totalSpent;
}

// What am I going to test? 

// first if the test works -- need to fail first and then pass.

// An empty array of expenses.
// An array containing only positive expenses.
// An array containing only negative expenses.
// An array containing both positive and negative expenses.
// An array containing zero as an expense.
// Large arrays of expenses.

