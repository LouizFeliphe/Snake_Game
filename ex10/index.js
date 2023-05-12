let b = 1
let c = 3
let a = 2


console.log(sum());

function sum(...number){
    let total = 0;
    for(let number1 of number) {
        total += number1
    }
    return total
}