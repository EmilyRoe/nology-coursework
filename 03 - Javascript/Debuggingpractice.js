// 1. Let's  do something with some headlines
let currentHeadline = "News in the world today"
const currentArticle = "Lorem ipsum ...."

const isFakeNews = false;
const amountOfWords = 957;

// 2. Before we start we need to make sure the headline isn't too long
if (currentHeadline.length > 15) {
    currentHeadline = currentHeadline.substring(0, 15) + "...";
}

// 3. Show it to the user
console.log("Nology Post 2021")
console.log(`Headline: ${currentHeadline}`)
console.log(currentArticle);

// 4. Example of a meaningful function name.. getDate() is vague :(
function getPost() {
    //Get your post in here...
}