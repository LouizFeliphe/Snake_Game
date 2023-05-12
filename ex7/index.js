document.getElementById("button1").onclick = function () {
    
    let temp = document.getElementById("textBox");
    if (isNaN(Number(temp.value) + 2) || temp.value == "") {
        alert("Digito invalido", temp.value)
    } else {
        if (document.getElementById("cbutton").checked) {
            document.getElementById("tempLabel").innerHTML = toCelsius(temp.value).toFixed(2);
        }
        if (document.getElementById("fbutton").checked) {
            document.getElementById("tempLabel").innerHTML = toFahrenheit(temp.value).toFixed(2);
        } 
        
    }
    

}




function toCelsius(temp) {
    return (temp - 32) * (5 / 9)
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}