let a;
let b;
let c;

document.getElementById("submitbutton").onclick = function() {
    a = Number(document.getElementById("atextbox").value);
    b = Number(document.getElementById("btextbox").value)
    c = Math.sqrt(a**2 + b**2);
    document.getElementById("clabel").innerHTML = "Side C: " + c;
}