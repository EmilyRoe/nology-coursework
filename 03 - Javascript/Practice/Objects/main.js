// // OBJECT SYNTAX

// const exampleObject = {
//     key : "value" , // Comma for other keys
//     types : "any" , // doesn't have to be a string, can be a number or boolean etc.
//     method() {
//         // Do something
//         // this keyword is to refer to the object
//         return this.key + " " + this.types;
//     }
// }

// // ACCESS OBJECTS
// // DOT NOTATION
// console.log(exampleObject.key)
// console.log(exampleObject.types)

// // CALLING A METHOD
// console.log(exampleObject.method())

// // SQUARE BRACKETS
// console.log(exampleObject["key"]);
// console.log(exampleObject["types"]);

// // ADDING A KEY TO AN OBJECT
// exampleObject.newKey = "new value";
// console.log(exampleObject);

//const studentContainer = document.querySelector(".students-container");

// studentContainer.style.border = "50px solid red";

const person = {
    firstName: "Charlie",
    lastName: "Richardson",
    quote: "It doesn't get easier, you just get faster.",
    skills: ["HTML", "CSS", "JavaScript"],
    imgURL: "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    },
    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        console.log(skillsHTML);
        return skillsHTML.join("\n");
    },
    getPersonHTML() {
        const personHTML = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>${this.getSkillsHTML()}</ul>
        </article>
        `
        return personHTML;
    },
}

// for(let index = 0; index <10; index++){
//    studentContainer.innerHTML += person.getPersonHTML();
//}

// studentContainer.innerHTML = `
// <article class="student-card">
//     <img src=${person.imgURL} />
//     <h2>${person.getFullName()}</h2>
//     <blockquote>${person.quote}</blockquote>
//     <h3>Skills</h3>
//     <ul>${person.getSkillsHTML()}</ul>
// </article>
// `;

// ADD A METHOD ONTO THE PERSON OBJECT THAT RETURNS THE SAME HTML 
// USE THE THIS KEY WORD
// NEXT, ADD IT TO THE HTML

// WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL
// E.G. <li>HTML</li>
// NEED TO RETURN A STRING -> ARRAY INTO A STRING

person.age = 30;
console.log(person.getSkillsHTML());

// FIRST AND LAST NAME ONTO THE CONSOLE
// console.log(person.firstName + " " + person.lastName)

// GET THE RESULT OF THE METHOD ON TO THE CONSOLE
// console.log(person.getFullName());



// CLASS SYNTAX

//PascalCase -> naming convention for classes
// class ExampleClass {
//     constructor(firstName, lastName, age){
//         (this.firstName = firstName),
//         (this.lastName = lastName),
//         (this.age = age);
//     }

//     greet() {
//         return `Hi, my name is ${this.firstName} ${this.lastName}`;
//     }
// }

// // CLASS INHERITANCE SYNTAX

// class ExtendedClass extends ExampleClass {
//     constructor(firstName, lastName, age, subject){
//         super(firstName, lastName, age), (this.subject = subject);
//     }

//     greet() {
//         return `Hi I am Mr ${this.lastName} and I teach ${this.subject}`;
//     }
// }

// console.log(new ExtendedClass("Charlie", "Richardson", "30", "Javascript").greet());

// const exampleOne = new ExampleClass("Charlie", "Richardson", 30);
// const exampleTwo = new ExampleClass("John", "Doe", 25);

// console.log(exampleOne.greet());
// console.log(exampleTwo.greet());

class Profile {
    constructor(firstName, lastName, quote, skills, imgURL){
        (this.firstName = firstName),
        (this.lastName = lastName),
        (this.quote = quote),
        (this.skills = skills),
        (this.imgURL = imgURL);
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getSkillsHTML() {
        const skillsHTML = this.skills.map(skill => `<li>${skill}</li>`)
        return skillsHTML.join("\n");
    }

    getProfileHTML() {
        const profileHTML = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>${this.getSkillsHTML()}</ul>
        </article>
        `;
        return profileHTML;
    }
}

class PremiumProfile extends Profile {
    constructor(firstName, lastName, quote, skills, imgURL, contactLink){
        super(firstName, lastName, quote, skills, imgURL),
        this.contactLink = contactLink
    }

    getProfileHTML() {
        const profileHTML = `
        <article class="student-card">
            <img src=${this.imgURL} />
            <h2>${this.getFullName()}</h2>
            <blockquote>${this.quote}</blockquote>
            <h3>Skills</h3>
            <ul>${this.getSkillsHTML()}</ul>
            <a href=${this.contactLink}>Let's get in touch!</a>
        </article>
        `;
        return profileHTML;
    }
}

const studentContainer = document.querySelector(".students-container");

const charlie = new PremiumProfile(
    "Charlie",
    "Richardson",
    "It doesn't get easier, you just get faster.",
    ["HTML", "CSS", "JavaScript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png",
    "https://www.google.com/?client=safari"
);

const examplesOne = new Profile(
    "John",
    "Doe",
    "It doesn't get easier, you just get faster.",
    ["HTML", "CSS", "JavaScript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);

const examplesTwo = new Profile(
    "Emily",
    "Roe",
    "It doesn't get easier, you just get faster.",
    ["HTML", "CSS", "JavaScript"],
    "https://www.searchpng.com/wp-content/uploads/2019/02/Deafult-Profile-Pitcher.png"
);

studentContainer.innerHTML += charlie.getProfileHTML();
studentContainer.innerHTML += examplesOne.getProfileHTML();
studentContainer.innerHTML += examplesTwo.getProfileHTML();

