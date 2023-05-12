class car{
     constructor(power) {
        this._gas = 400
        this._power = power
     }

     get gas() {
        return console.log(this._gas)
     }
}

let carro = new car(600)
carro.gas
