class Animal{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class Rabbit extends Animal{
   constructor(name,age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
   }
}

class Fish extends Animal{
    constructor(name,age, Swimspeed) {
        super(name, age);
        this.Swimspeed = Swimspeed;
       }
}

class Hawk extends Animal{
    constructor(name,age, Flyspeed) {
        super(name, age);
        this.Flyspeed = Flyspeed;
       }

}

const rabbit = new Rabbit("rabbit",1,40)
const fish = new Fish("fish",2,80)
const hawk = new Hawk("hawk",3,200)

console.log(rabbit.name)
console.log(rabbit.age)
console.log(rabbit.runSpeed)
console.log(hawk.name)
console.log(hawk.age)
console.log(hawk.Flyspeed)

