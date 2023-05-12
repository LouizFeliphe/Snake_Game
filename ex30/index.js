
const mydiv = document.getElementById("myDiv")
window.addEventListener("keydown", move)
let x = 0
let y = 0

function move(event) {
    switch(event.key) {
        case "ArrowDown":
            y += 5
            mydiv.style.top = y + "px";
            break;
        case "ArrowUp":
            y -= 5
            mydiv.style.top = y + "px";
            break;
        case "ArrowRight":
            x += 5
            mydiv.style.left = x + "px";
            break;
        case "ArrowLeft":
            x -= 5
            mydiv.style.left = x + "px";
            break;
            case "s":
                y += 5
                mydiv.style.top = y + "px";
                break;
            case "w":
                y -= 5
                mydiv.style.top = y + "px";
                break;
            case "d":
                x += 5
                mydiv.style.left = x + "px";
                break;
            case "a":
                x -= 5
                mydiv.style.left = x + "px";
                break;
    }
}