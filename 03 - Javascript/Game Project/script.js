// EVENT LISTENER TO REMOVE AVATAR FROM DIV AND RETURN ON A TIMER
const avatar = document.querySelector (".avatar")
avatar.addEventListener ("keyUp", () => {
    if (keypress == "upArrow") {
        //remove avatar class i.e. $(this).removeClass("saved"); ?
        avatar.classList.remove("avatar");
        //setTimeout for class to be removed for x milliseconds
        setTimeout(avatar(){avatar.remove()},1000);
    }
})

// Here you need to add an eventListener so that the avatar appears in the above div for x milliseconds
// OR does do you just add it in above...?
const jumpingAvatar = document.getElementById ("jumpingAvatar")
//Add in line to tell id to be hidden until key press
jumpingAvatar.style.display = 'block';
// Then add EventListener to appear x milliseconds after key press
jumpingAvatar.addEventListener ("keyUp", () => {
    if (keypress == "upArrow") {
        jumpingAvatar.style.display = 'show';
        setTimeout(jumpingAvatar(){jumpingAvatar.add()},1000);
    }
})

// NOTE: you need to figure out how to get the up arrow button to apply to the div and not the webpage as a whole 
// as it is currently functioning as a scroll


// OBSTACLES
let state = 1;

function moveObstacle(){
	
let thisObstacle = document.querySelectorAll (".obstacle");
    if (state == 1){
        thisObstacle += 100;
    } else if (state == 2){ // i.e. if img is on the left
        // return to state 1
    }

function obstacleMove(){
    obstacle=setInterval(obstacle, 1000);
    }


// You want the img to move from right to left across the div and for the next div to only appear once the first one reaches the 
//end of the div

// NEXT STEPS:
// Hiding the images in the divs so that it appears the avatar is running towards them when the game starts
// Telling the images to appear at intervals for when the game starts