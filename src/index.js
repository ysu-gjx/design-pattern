class Person {
  constructor (name) {
    this.name = name
  }
  getName() {
    return this.name
  }
}

let p = new Person('lee')

alert(p.getName())