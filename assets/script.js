// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Mir Ali" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')

    gb++
document.getElementById('qty-gb').textContent = gb
})

// TODO: Hook up event listeners for the rest of the buttons
document.getElementById('minus-gb').addEventListener('click', function() {

    gb--
document.getElementById('qty-gb').textContent = gb
})

document.getElementById('add-cc').addEventListener('click', function() {

    cc++
document.getElementById('qty-cc').textContent = cc
})

document.getElementById('minus-cc').addEventListener('click', function() {

    cc--
document.getElementById('qty-cc').textContent = cc
})

document.getElementById('add-sugar').addEventListener('click', function() {

    sugar++
document.getElementById('qty-sugar').textContent = sugar
})

document.getElementById('minus-sugar').addEventListener('click', function() {

    sugar--
document.getElementById('qty-sugar').textContent = sugar
})

document.getElementById('qty-total').textContent = total


