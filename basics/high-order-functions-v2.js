const students = require("./students.json")

// console.log(students[0].code)
// console.log(students[0].name)
// console.log("Total students: " + students.length)

let lookFor40031 = function (student) {
    let code = 40031
    return student.code === code
}

let student = students.find(lookFor40031)

console.log(student)
