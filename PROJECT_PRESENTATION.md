##Disney Ideation 


When it reaches over 33 degrees outside the greenhouse ai automatically waters plants depending on the type of the plants., however all the plants are in one greenhouse and we must organise them into different sections by their type so they can get watered accordingly. Tropical plants must be placed in section 1 and watered for 15 minutes; every plant that contains the word subtropical plants will be placed in section 2 and watered for 9 minutes and every desert plants must go in the section 3 and not watered.

How can I make this a problem though????

##Critic Room


Each plant requires a different amount of water, and they need to be sorted into three main sections — tropical, subtropical, and arid depending on how much water they need. Tropical plants need more than 200ml of water each week, subtropical plants need more than 80ml but less than 200ml and arid below 80ml of water. 

[ monstera: 234, chilean palm: 17, thyme: 61, rosemary- 35, banana- 320, chili: 120, hibiscus: 200, oregano:78, cumin: 100, coriander: 109, tomato:199, snakeplant: 13, yucca- 35, crocus: 73, garlic: 60 ]

##Realist / MVP 1

I have limited time so need something that I can actually achieve and solve the kata myself in a reasonable time. MVP1 to have finished this problem with right tests only then I can move onto MVP2.

The problem would be adding all negative numbers together -- to put it in a context they would be expenses.

### Problem:

// You're managing a local greenhouse, and you need to track expenses. 
// You have a list of expenses, both positive (income) and negative (expenditure). 
// Your task is to calculate the total amount of money spent on items that incurred a cost.

### Solution:

// You'll use a function to iterate through the list of expenses and calculate the sum of all negative values. 
// This sum will represent the total amount spent on items that incurred a cost.

### Plan

1. Start writing the bare bone test just to test 
the vitest is working and I can test going further

2. Write the function 

3. What am I going to test? 

// 

// An empty array of expenses = emty string, no numbers just [],

// An array containing only positive expenses -- this should return zero as positive expenses are classed as income so won't need to be added together 

// An array containing only negative expenses -- as these are the expenditures, the money we will need to count together. The resulkt should give us a negative sum.

// An array containing both positive and negative expenses. -- this should only count negative numbers for the total of expenditure and ignore the positive numbers as intended. 

// An array containing zero as an expense -- this should return zero as well. 

## MVP 2 

Test if it accepts decimal numbers as so far it only counts whole numbers.

// An array containing decimal numbers both positive and 
negative and with a zero inside 


## MVP 3


Make a more complex kata, counting all the expenditures received in the last year only.  

### Problem MVP 3

You're managing a local greenhouse and need to track expenses. You have a list of expenses, both positive (income) and negative (expenditure). Your task is to calculate the total amount of money spent on items that incurred a cost, considering only the expenditures received in the last year.

// An array of objects, where each object represents an expense.
// Each object has two properties: amount (number), and date (string)
The date property represents the date when the expense was received, in the format "DD-MM-YY".

calculateLastYearExpenditure([
    { amount: 100, date: '15-03-23' },
    { amount: -50, date: '22-11-23' },
])

### Plan

// test bare bones test
// write a function in js file/ export that function to the test file
// in the test file start writing unit tests for different scenarios

1 Test with expenses received in the last year -- this should give the total sum as we are counting the expenses accounted for only in last year
2 Test with expenses received in the current year -- this shouldn't give any number should be 0 as we are not considering expenses for this year
3 Test with expenses received in multiple years, including the last year, and the year before or a year from 10 years ago -- only should give the total
number of the expenses incured last year as we are considering those only


### Reflections

Worked amazingly as a team -- we did the Disney ideation together, feeding each other with our plans and also supported each 
other. When someone was struggling like setting up the test or struggling in any way we would make sure
that everyone was on the same page and hasn't been left behind. 




