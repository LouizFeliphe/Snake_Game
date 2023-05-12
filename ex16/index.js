class student{

    constructor(name, age, gpa) {
        this.name = name
        this.age = age
        this.gpa = gpa
    }

    hello() {
        console.log(`${this.name} is ${this.age}`)
    }

}

let person = new student("Luiz","24");
person.hello();
