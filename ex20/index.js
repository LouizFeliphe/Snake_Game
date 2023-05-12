try{
let x = window.prompt("Enter a #")
x = Number(x);
if (isNaN(x)) {
    throw "That wasnt a njmber!"
}

console.log(`your number is $${x}`)

}catch(error){
    console.log(error);
}