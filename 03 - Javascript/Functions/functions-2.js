// Write a function named getDescription that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your statement to the console like so: "I am currently a X living in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

const getDescription = (partner, amountOfChildren, location, jobTitle) => {
    const message = "I am currently a" + (jobTitle) + "living in" + (location) + "and married to" + (partner) + "with" + (amountOfChildren) + "kids."
// alternative option using a template literal 
    const message = `I am currently a ${jobTitle} living in ${location} and married to ${partner} with ${amountOfChildren} kids.`
    console.log(message)
}

getDescription("Tom", 0, "London", "PR Account Executive")

// **The Lifetime Supply of Snickers**

// Ever wonder how much a lifetime supply of Snickers would actually be? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculate the amount consumer for the rest of your life (based on a constant max age).
// outputs the result to the console like so: "You will need X to last you until the ripe old age of Y"
// Call that function three times, passing in different values each time.

const calculateSupply = (currentAge, amountOfSnickersPerDay) => {
    const maxAge = 90;
    const amountOfSnickersPerLifetime = (amountOfSnickersPerDay + 365) * (maxAge - currentAge);
    const message = 'You will need' + amountOfSnickersPerLifetime + 'bars of Snickers to last you until the ripe old age of' + maxAge
    console.log(message);
}
calculateSupply(28, 4);
calculateSupply(28, 2.5);
calculateSupply(28, 12);


// **The Temperature Converter**
// Let's make a celcius/farenheit convertor...

const celciusToFarenheit = (celcius) => {
    const celciusInF = (celcius * 9) / 5 + 32;
    console.log(celcius + 'oC is' + celciusInF + "oF");
}
celciusToFarenheit(21);

// **The Puppy Age Calculator**
// You know how old your dog is in human years, but what about in dog years?

const calculateAgeInDogYears = (humanAge) => {
    const ageInDogYears = humanAge * 7;
    console.log('Your dog is' + ageInDogYears + 'years old in dog years!');
}
 calculateAgeInDogYears(3);
 calculateAgeInDogYears(7);
 calculateAgeInDogYears(10);