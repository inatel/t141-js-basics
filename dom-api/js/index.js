
const form = document.getElementById("frm-name")
const inputName = document.getElementById("name")

function getName() {
    return inputName.value
}

function clearInput() {
    inputName.value = ""
}

function addName(name) {
    const ul = document.getElementById("namesList")
    const li = document.createElement("li")
    li.innerHTML = name
    ul.appendChild(li)
}

function onSubmit(event) {
    event.preventDefault() //I want to stop the default event for this form
    console.log("Form submitted")
    addName(getName())
    clearInput()
}
form.addEventListener("submit", onSubmit)