const container = document.querySelector(".game-container");
const canvas = document.querySelector('canvas');

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
board[8].classList.add("canvas");
board[8].appendChild(canvas);

// Sprite - NOTE you need to make the sprite bigger
const SPRITE_WIDTH = 13;
const SPRITE_HEIGHT = 14;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}

var context = canvas
              .getContext('2d');

var spriteSheetURL = 'https://codehs.com/uploads/e4cfb06e001bd92cf41139928e88819a';
var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var karelright0 = spritePositionToImagePosition(0, 0);
var karelright1 = spritePositionToImagePosition(0, 1);
var karelright2 = spritePositionToImagePosition(0, 2);
var karelleft0 = spritePositionToImagePosition(1, 0);
var karelleft1 = spritePositionToImagePosition(1, 1);
var karelleft2 = spritePositionToImagePosition(1, 2);

var walkCycle = [
    karelright0,
    karelright1,
    karelright2,
    karelright1,
];

var frameIndex = 0;
var frame;
function animate() {
    if (frameIndex === walkCycle.length) {
        frameIndex = 0;
    }
    frame = walkCycle[frameIndex];
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        frame.x,
        frame.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    frameIndex += 1;
}

image.onload = function() {
    setInterval(animate, 500);
};

// I think I need to add a line in here somewhere which removes the animation when in div 4.
// Need to make the jump flow...
window.addEventListener ("keyup", (e) => {
    if (e.key == 'ArrowUp') {
        console.log(canvas);
        board[8].removeChild(canvas);
        board[8].classList.remove("canvas");
        setTimeout( () => {
            board[4].classList.add ("canvas");
            board[4].appendChild(canvas);
        } ,250);
        setTimeout( () => {
            board[4].classList.remove ("canvas");
            board[4].removeChild(canvas);
        } , 500);
        setTimeout( () => {
            board[8].classList.add ("canvas");
            board[8].appendChild(canvas);
        } , 750);
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