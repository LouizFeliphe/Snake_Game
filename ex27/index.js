const element = document.getElementById("mydiv")
element.onmouseover = () => element.style.backgroundColor = "red";
element.onmouseout = dosomethingelse;

function dosomething() {
   element.style.backgroundColor = "red";
}
function dosomethingelse() {
    element.style.backgroundColor = "lawngreen"
}