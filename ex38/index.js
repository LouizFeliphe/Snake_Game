const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText")
const resetBtn = document.querySelector("#resetBtn")
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
let plate1 = [{x:475, y:0}]
let plate2 = [{x:0, y:0}]
let yVelocity = 25;
let yVelocity2 = 25;


   




gameStart();

window.addEventListener("keydown", yDirection)

function gameStart(){
    drawPlates()
    renewal()
};

function renewal(){
    setTimeout(() => {
        clearBoard()
        drawPlates()
        movePlate()
        movePlate2()
        renewal()
    }, 10);
}

function drawPlates(){
    console.log(plate1)
    ctx.fillStyle = "red"
    ctx.strokeStyle = "black"
    plate1.forEach(plate => {
    ctx.fillRect(plate.x,plate.y,25,75)})
    plate2.forEach(plate => {
        ctx.fillRect(plate.x,plate.y,25,75)})
    

    
    
}

function clearBoard(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,gameWidth,gameHeight);
};

function movePlate(){
    const head = {x: plate1[0].x, y:plate1[0].y + yVelocity}
    if(head.y < 0){
        head.y = 425;
    }
    if(head.y > 425){
        head.y = 0;
    }
    plate1.unshift(head);
    plate1.pop();
}
function movePlate2(){
    const head = {x: plate2[0].x, y:plate2[0].y + yVelocity2}
    if(head.y < 0){
        head.y = 425;
    }
    if(head.y > 425){
        head.y = 0;
    }
    plate2.unshift(head);
    plate2.pop();
}

function yDirection(event){
    const keyPressed = event.keyCode;
    const UP = 87;
    const DOWN = 83;
    const UP2 = 38;
    const DOWN2 = 40;

    switch(true) {
        case(keyPressed == DOWN):
            yVelocity = 25
            break;
        case(keyPressed == UP):
            yVelocity = -25
            break;
        case(keyPressed == DOWN2):
            yVelocity2 = 25
            break;
        case(keyPressed == UP2):
            yVelocity2 = -25
            break;
    }
}