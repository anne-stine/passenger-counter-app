// Render a welcome message

let welcomeEl = document.getElementById("welcome-el")

let name = "Anne-Stine"
let greeting = "Welcome, "

welcomeEl.innerText = greeting + name + "!"

console.log(welcomeEl.innerText)

welcomeEl.innerText += "👋"


// Increment count on button-click

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


// Save into "previous entries" and reset "people entered"

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
