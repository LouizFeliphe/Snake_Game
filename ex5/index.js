document.getElementById("submit").onclick = function() {
    const mycheckbox = document.getElementById("mycheckbox")
    const visa = document.getElementById("visiButton")
    const Master = document.getElementById("mastercard")
    const Pay = document.getElementById("paypal")
    
    if(visa.checked) {
        console.log("Visa")
    } 
    if(Master.checked) {
        console.log("MASTER")
    } 
    if(Pay.checked) {
        console.log("Pay")
    } 

    if(mycheckbox.checked) {
        console.log("You are susbcribed")
    } else {
        console.log("You are not subscribed")
    }
}