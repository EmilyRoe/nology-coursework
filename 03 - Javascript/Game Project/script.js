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