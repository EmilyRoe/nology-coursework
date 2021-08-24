// Thoughts on how to code this...

// 1. You need to give each number it's value
// i.e. <button>1</button> = 1

// AC button code:
//document.getElementById("clear-button").addEventListener("click", (event) => {
  //  input.innerHTML = reset
//});

// put operator variable here
// Start with blank

const numberButtons = document.querySelectorAll (".number-button")
console.log(numberButtons)

const display = document.querySelector (".calculator__display")
numberButtons.forEach(button => {
    button.addEventListener ("click", () => {
        display.innerHTML = button.innerHTML
    })
}) 






// Focus first on the number buttons so they don't over write each time. 
//You need to make a variable for buttons that are pressed so that each buttons adds 
// Set innerHTML to the variable not button

// Next step is operators
// Repeat as above but you need a condition ie. if operator is == "+" 
// Operator button also needs to clear screen

// Later - the = button needs to know what to carry out