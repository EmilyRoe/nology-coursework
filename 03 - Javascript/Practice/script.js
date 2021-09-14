function number(event) {

    const number = 3;
    if (number >= 0) {
        console.log("Positive")
    } else {
        console.log("Negative")
    }
}

switch(new Date().getDay()) {
    case 0:
        console.log("It's already the weekend")
        break;
    case 1:
        console.log("4 days left")
        break;
    case 2:
        console.log("3 days left")
        break;
    case 3:
        console.log("2 days left")
        break;
    case 4:
        console.log("1 day left")
    case 5:
        console.log("0 days left")
    case 6:
        console.log("It's already the weekend")
}

const vegetable = "carrot";
switch(vegetable) {
    case "potato":
    case "carrot":
        console.log("1.29 per kg")
        break;
    case "brocolli":
        console.log("1.00 per kg")
        break;
}
