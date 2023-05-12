const myButton = document.getElementById("myButton");
const myanimation = document.getElementById("myDiv");

myButton.addEventListener("click", begin);

function begin () {
    let timerid = null;
    let scaleX = 1;
    let scaleY = 1;
    let x = 0;
    let y = 0;

    timerid = setInterval(() => {
        if(scaleY >= 2 || scaleX >= 2){
            clearInterval(timerid)
        }
        else {
            y += 2
            x += 2.5
            scaleX += 0.01
            scaleY += 0.01;
            myanimation.style.transform = "scale("+scaleX+","+scaleY+")"
            myanimation.style.left = x + "px"
            myanimation.style.top = y + "px"
        }


    }, 5);

    
}