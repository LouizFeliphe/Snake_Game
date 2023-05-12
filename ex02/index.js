
let count = 0

function Increase() {
    count += 1
    document.getElementById("number").innerHTML = count

}
function Decrease() {
    count -= 1
    document.getElementById("number").innerHTML = count

}
function Reset() {
    count = 0
    document.getElementById("number").innerHTML = count

}

