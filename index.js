class Cat {
	constructor(name, sex){
		this.name = name;
		this.sex = sex;
	}

	speak(){
		return `${this.name} says meow!`
	}

}// Your code here

class Dog{
	constructor(name, sex){
		this.name = name;
		this.sex = sex;
	}

	speak(){
		return `${this.name} says woof!`
	}
}

class Bird {
	constructor(name, sex) {
		this.name = name; 
		this.sex = sex;
	}
	speak() {
		if (this.sex === "male") {
			return `It's me! ${this.name}, the parrot!`
		}
		else{
			return `${this.name} says squawk!`
		}
	}
}