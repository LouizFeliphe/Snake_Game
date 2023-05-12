let number = [1,2,3,4,5,6,7,8];

let new_number = number.map(pow);

function pow(element) {
    return Math.pow(element, 2);
}

console.log(new_number)