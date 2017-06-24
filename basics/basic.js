'use strict'

//ES5 and before
var name = "Edy Segura"

//ES6+
let courseName = "Cloud Computing"
const MAX_VALUE = 10
const COLOR = "Pink"

//ES5
function adder(a, b) {
    return a + b
}

//Literal Object
let Person = {
    firstName: "Thiago",
    lastName: "Pereira"
}

console.log("Name: " + name, typeof name)
console.log("Color: " + COLOR, "| Type: " + typeof COLOR)
console.log("Max value: " + MAX_VALUE, typeof MAX_VALUE)
console.log("5 + 9 = " + adder(5, 9))
console.log(Person.lastName + ", " + Person.firstName)
console.log(Person.firstName + " " + Person.lastName)
