function calculateYearsUntilRetirement(event) {
    const currentAge = event.target.value;

    const yearsLeft = 65 - currentAge;
    alert(yearsLeft)
}

function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
        alert('Bonjour')
    } else if (greeting == "Goodbye") {
        alert('Au Revoir')
    } else {
        alert('Not recognised')
    }
}

function getLovelyCompliment(event) {
    const compliment = event.target.value;

    if (compliment == "Give me a compliment") {
        alert("You're sick at coding")
    } else {
        alert('Not recognised')
    }
}

function budgetCalculator(event) {
    const totalBudget = event.target.value;

    const remainingBudget = 500 - totalBudget;
    alert(remainingBudget)
}
 

//let age = 50;
//if (age <65) {
//    console.log("You have x years until you can retire")
//} 