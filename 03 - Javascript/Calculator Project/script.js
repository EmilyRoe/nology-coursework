let currentNumber = "";
let operator = "";
let firstNumber = "";

const operatorButton = document.querySelectorAll (".operator-button")
operatorButton.forEach(button => {
    button.addEventListener ("click", () => {
        if (button.innerHTML == "+") { 
            operator = "+";
        } else if (button.innerHTML == "-") {
            operator = "-";
        } else if (button.innerHTML == "x") {
            operator = "x";
        } else if (button.innerHTML == "/") {
            operator = "/";
        }
        firstNumber = currentNumber
        currentNumber = "";
        display.innerHTML = currentNumber
    })
})

const numberButtons = document.querySelectorAll (".number-button")
console.log(numberButtons)

const display = document.querySelector (".calculator__display")
numberButtons.forEach(button => {
    button.addEventListener ("click", () => {
       currentNumber = currentNumber+button.innerHTML
        display.innerHTML = currentNumber
    })
}) 

const equalsButton = document.querySelector (".equals")
console.log(equalsButton);
equalsButton.addEventListener ("click", () => {
    if (operator == "+") {
        result = firstNumber + currentNumber
        display.innerHTML = result
    } else if (operator == "-") {
        result = firstNumber - currentNumber
        display.innerHTML = result
    } else if (operator == "x") {
        result = firstNumber * currentNumber
        display.innerHTML = result
    } else if (operator == "/") {
        result = firstNumber / currentNumber
        display.innerHTML = result
    }
})

const clearButton = document.querySelector ("#clear-button")
clearButton.addEventListener ("click", () => {
    currentNumber = 0;
    display.innerHTML = "";
})