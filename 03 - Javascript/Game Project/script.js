const container = document.querySelector(".game-container")

const board = []
const createGrid = () => {
    for(let i = 0; i<16;i++){
        const grid = document.createElement('div');
        if (i < 4) {
            grid.classList.add("background-1")
        } else if (i < 8) {
            grid.classList.add("background-2")
        } else if (i < 12) {
            grid.classList.add("background-3")
        } else grid.classList.add("background-4");
        container.appendChild(grid)
        board.push(grid)
    }
}
createGrid ()
board[9].classList.add("box");


// // EVENT LISTENER TO REMOVE AVATAR FROM DIV AND RETURN ON A TIMER
window.addEventListener ("keyup", (e) => {
    if (e.keyCode == 38) {
        board[9].classList.remove("box");
        setTimeout( () => {
            board[5].classList.add ("box")} ,1000);
        setTimeout( () => {
            board[5].classList.remove ("box")} , 2000);
        setTimeout( () => {
            board[9].classList.add ("box")} , 3000);
    }
})

// // Here you need to add an eventListener so that the avatar appears in the above div for x milliseconds
// // OR does do you just add it in above...?
// const jumpingAvatar = document.getElementById ("jumpingAvatar")
// //Add in line to tell id to be hidden until key press
// jumpingAvatar.style.display = 'block';
// // Then add EventListener to appear x milliseconds after key press
// jumpingAvatar.addEventListener ("keyUp", () => {
//     if (keypress == "upArrow") {
//         jumpingAvatar.style.display = 'show';
//         setTimeout(jumpingAvatar(){jumpingAvatar.add()},1000);
//     }
// })

// // NOTE: you need to figure out how to get the up arrow button to apply to the div and not the webpage as a whole 
// // as it is currently functioning as a scroll


// // OBSTACLES - this is an attempt to get the img to move across the div on repeat
// let state = 1;

// function moveObstacle(){
	
// let thisObstacle = document.querySelectorAll (".obstacle");
//     if (state == 1){
//         thisObstacle += 100;
//     } else if (state == 2){ // i.e. if img is on the left
//         // return to state 1
//     }

// function obstacleMove(){
//     obstacle=setInterval(obstacle, 1000);
//     }


// // You want the img to move from right to left across the div and for the next div to only appear once the first one reaches the 
// //end of the div

// // (function obstacleMove() {
// //     var elem = document.querySelectorAll('obstacle'), pos = 0,
// //         timer = setInterval(function() {
// //             pos++;
// //             elem.style.left = pos+"px";
// //             if( pos == 200) clearInterval(timer);
// //         },25);
// // })();

// // NEXT STEPS:
// // Hiding the images in the divs so that it appears the avatar is running towards them when the game starts
// // Telling the images to appear at intervals for when the game start