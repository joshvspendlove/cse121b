let lightList = []
let lightGrid = document.querySelector("#light-grid")

const getLights = async () => {
    const response = (await fetch("https://run.mocky.io/v3/90bece33-7462-420f-922c-8e9641035515")).json()
    lightList = await response

    displayLights(lightList)
}

const displayLights = (lights) => {
    lights.forEach(light => {
        let name = light.name.replaceAll(" ","-")

        let article = document.createElement("article")
            article.setAttribute("id",name)
        let lightName = document.createElement("h3")
        
        let slider = buildSlider(light)
        let icon = buildIcon(light)

        lightName.textContent = light.name
        article.appendChild(lightName)
        article.appendChild(icon)
        article.appendChild(slider)

        lightGrid.appendChild(article)
        
    });
    
}

function buildIcon(light)
{
    let name = light.name.replaceAll(" ","-")
    let icon = document.createElement("i")
            icon.classList.add("fa","fa-lightbulb-o")
            icon.id = `${name}-state`

        switch(light.state)
        {
            case true:
                icon.classList.add("on")
                icon.style.opacity = `${(light.level/2) + 50}%`
                break
            case false:
                icon.classList.add("off")
                icon.style.opacity = ""
                break
        }
    icon.onclick = (event) => {
        if (light.state == true)
        {
            light.state = false
            light.level = 0
        }
        else
        {
            light.state = true
            light.level = 100
        }
        filterLights(lightList)
    }
    return icon
}

function buildSlider(light)
{
    let slider = document.createElement("input")
    slider.type = "range"
    slider.min = "0"
    slider.max = "100"
    slider.value = light.level
    slider.classList.add("slider")
    slider.onchange = (event) => {
        let level = event.target.value
        let iconId = event.target.parentElement.id + "-state"
        light.level = level
        if (level > 0)
        {
            document.querySelector(`#${iconId}`).classList.remove("off")
            document.querySelector(`#${iconId}`).classList.add("on")
            document.querySelector(`#${iconId}`).style.opacity = `${(level/2) + 50}%`
            light.state = true
        }
        else
        {
            document.querySelector(`#${iconId}`).classList.add("off")
            document.querySelector(`#${iconId}`).classList.remove("on")
            document.querySelector(`#${iconId}`).style.opacity = ""
            light.state = false
        }
        filterLights(lightList)
    }
    return slider
}

function reset()
{
    lightGrid.innerHTML = ""
}

function filterLights(lights)
{
    reset()
    let filter = document.querySelector("#filter").value
    switch(filter)
    {
        case "on":
            displayLights(lights.filter((light) => light.state == true))
            break
        case "off":
            displayLights(lights.filter((light) => light.state == false))
            break
        default:
        case "all":
            displayLights(lights)
            break
    }
}

getLights()

document.querySelector("#filter").addEventListener("change",() => {
    filterLights(lightList)
})