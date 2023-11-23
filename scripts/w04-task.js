/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Josh Spendlove",
    photo: "images/me.jpeg",
    favoriteFoods: [
        "French Fries",
        "Street Tacos",
        "Steak",
        "Hamburgers"
    ],
    hobbies: [
        "Photography",
        "Programming",
        "Technology"
    ],
    placesLived: []
}

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({place:"Sandy, UT",length:"8 years"})
myProfile.placesLived.push({place:"Lehi, UT",length:"3 years"})
myProfile.placesLived.push({place:"Lancaster, PA",length:"1 year"})



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src",myProfile.photo)
document.querySelector("#photo").setAttribute("alt",myProfile.name)
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let food_li = document.createElement("li")
    food_li.textContent = food
    document.querySelector("#favorite-foods").appendChild(food_li)
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let hobby_li = document.createElement("li")
    hobby_li.textContent = hobby
    document.querySelector("#hobbies").appendChild(hobby_li)
})

/* Places Lived DataList */
myProfile.placesLived.forEach(loc => {
    let place_dt = document.createElement("dt")
    let len_dd = document.createElement("dd")

    place_dt.textContent = loc.place
    len_dd.textContent = loc.length

    document.querySelector("#places-lived").appendChild(place_dt)
    document.querySelector("#places-lived").appendChild(len_dd)
})

