// Your code here
class Pet {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Cat extends Pet {
  constructor(name, gender) {
    super(name, gender);
  }
  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog extends Pet {
  constructor(name, gender) {
    super(name, gender);
  }
  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird extends Pet {
  constructor(name, gender) {
    super(name, gender);
  }
  speak() {
    if (this.gender == "male") {
      return `It's me! ${this.name}, the parrot!`;
    } else {
      return `${this.name} says squawk!`;
    }
  }
}
