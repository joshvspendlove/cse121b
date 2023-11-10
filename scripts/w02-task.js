/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Josh Spendlove"
let currentYear = "2023"
let profilePicture = "images/me.jpeg"

/* Step 3 - Element Variables */
let nameElement = document.getElementById("name")
let foodElement = document.getElementById("food")
let yearElement = document.querySelector("#year")

let homeElement = document.querySelector("#home")
let imageElement = document.querySelector("img")


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear
imageElement.setAttribute("src", profilePicture)
imageElement.setAttribute("alt", `Profile image of ${fullName}`)

/* Step 5 - Array */
let favortieFoods = ["French Fries","Street Tacos"]
foodElement.innerText = favortieFoods

let newFood = "Steak"
favortieFoods.push(newFood)
foodElement.innerHTML += `<br>${favortieFoods}`

favortieFoods.shift()
foodElement.innerHTML += `<br>${favortieFoods}`

favortieFoods.pop()
foodElement.innerHTML += `<br>${favortieFoods}`




