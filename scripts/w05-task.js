/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples")
let templeList = []

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement("article")
        let templeName = document.createElement("h3")
        templeName.textContent = temple.templeName
        let templeImg = document.createElement("img")
            templeImg.setAttribute("src",temple.imageUrl)
            templeImg.setAttribute("alt",temple.location)

        article.appendChild(templeName)
        article.appendChild(templeImg) 
        templesElement.appendChild(article)
    });
    
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = (await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")).json()
    templeList = await response

    displayTemples(templeList)
}

/* reset Function */
const reset = function()
{
    templesElement.innerHTML = ""
}

/* sortBy Function */
const sortBy = function(temples)
{
    reset()
    let filter = document.querySelector("#sortBy").value
  
    switch(filter)
    {
        case "utah":
            displayTemples(temples.filter((temple) => temple.location.includes("Utah")))
            break
        case "notutah":
            displayTemples(temples.filter((temple) => !temple.location.includes("Utah")))
            break
        case "older":
            let oldDate = new Date(1950,0,1)
            displayTemples(temples.filter((temple) =>{
                let year = temple.dedicated.split(",")[0] 
                let templeDate = new Date(year,0,1)
                return oldDate > templeDate
            }))
            break
        case "all":
            displayTemples(temples)
            break
    }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change",() => {
    sortBy(templeList)
})