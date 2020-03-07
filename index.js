// Your code here
class Cat {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name){
        this.name = name
    }
    speak(){
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor(name, gender){
        this.name = name
        this.gender = gender
    }
    speak(){
        if (this.gender === "male") {
            return `It's me! ${this.name}, the parrot!`
        }
        return `${this.name} says squawk!`
    }
}