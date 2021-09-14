// Create a coaches array
// const coaches = ["Andy", "Sam", "Bex"];
// console.log(coaches[1]);

// coaches.forEach((coach) => {
//     console.log(coach);
// })

//Create an array of pets
const pets = ["Fido", "Rusty", "Jack"];
console.log(pets[2]);

// Create a sample for loop. Note: index is just the name of the variable, it call be called anything. Often people use i which is short for index. 
//for (let index = 0; index < 5; index++) {
//    console.log("The index on this loop was " + index);
//}

// Combined with arrays
    //for (let index = 0; index < pets.length; index++) {
      //  console.log(pets[index])
    //}


pets.forEach((pet) => {
    console.log(pet);
})


// Use a map to prepend the word coach to each coach
const newCoaches = coaches.map((coach) => {
    return "Coach - " + coach;
})
console.log(newCoaches);


// create a names array
const names = ["Andy", "Sam", "Bex"];

const coaches = names.filter((name) => {
    if (name.inlcudes("e")) {
        return true;
    } else{
        return false;
    }
})
console.log(coaches);


// Scores
const scores = [8, 9, 12];

const highScores = scores.filter((score) => {
    return score > 10; 
    // if (score > 10) {
    //        return true;
    //    } else {
    //        return false;
    //    }
})
console.log(highScores);

//or (same as above)
//const highScores = scores.filter((score) => score > 10);