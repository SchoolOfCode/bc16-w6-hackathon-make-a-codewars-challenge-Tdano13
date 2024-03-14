// Title: Watering Plants

// Description:
// You are given an array of integers representing the amount of water each plant needs. 
// You have a watering can that can hold a maximum of capacity milliliters of water. 
// You need to water the plants in the array while minimizing the number of refills needed. 
// Determine the minimum number of refills required to water all the plants.

// Write a function minRefills(plants, capacity) that takes in two parameters:

// plants: an array of integers representing the amount of water each plant needs.
// capacity: an integer representing the maximum capacity of the watering can.
// The function should return an integer representing the minimum number of refills required to water all the plants.

// For example:

// javascript
// Copy code
// minRefills([2, 4, 5, 1, 2], 6) // Output: 2

function minRefills(plants, capacity) {
    let refills = 0;
    let waterLeft = capacity;
    
    for (let i = 0; i < plants.length; i++) {
        if (waterLeft < plants[i]) { // If the current plant needs more water than remaining capacity
            refills++; // Refill the watering can
            waterLeft = capacity; // Reset the remaining capacity
        }
        
        waterLeft -= plants[i]; // Water the current plant
    }
    
    return refills;
}

// Example usage:
console.log(minRefills([2, 4, 5, 1, 2], 6)); // Output: 2
