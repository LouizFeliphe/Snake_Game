const myButton = document.getElementById("mybutton");
const myimg = document.getElementById("myimg");
myButton.addEventListener("click", () => {

    if(myimg.style.visibility == "hidden") {
        myimg.style.visibility = "visible";
    } else {
        myimg.style.visibility = "hidden";
    }

} )