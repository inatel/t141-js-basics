const students = [
    "Lydia",
    "Chages",
    "Fernando"
]

//ES6
// printName = (name) => console.log(name)

//ES5
function printName(name) {
    console.log(name)
}

function fancyPrint(name) {
    console.log("*** " + name + " ***")
}

function extraName(name, runTask) {
    runTask(name)
}

// for (let i = 0; i < students.length; i++) {
//     let student = students[i]
//     console.log(student)
// }

students.forEach(printName)
extraName("Poli", printName)
extraName("Thiago", fancyPrint)





