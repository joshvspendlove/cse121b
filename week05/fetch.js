// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url,callback) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    callback(data);
  }
}
function doStuff(data) {
    results = data;
    console.log("first: ", results);
    let output = document.querySelector("#output")
    let html = `<h1>${results.name}</h1><img src="${results.sprites.front_default}" alt="Image of ${results.name}"><ul><li>Height: ${results.height}</li><li>Weight: ${results.weight}</li></ul>`
    output.innerHTML = html
}


function doStuffList(data) {
    let pokeList = data.results;
    
    let outputList = document.querySelector("#outputList")
    console.log(pokeList)
    let html = ""
    pokeList.forEach(pokemon => {
        html += `<li>${pokemon.name}</li>` 
    });
    outputList.innerHTML = html
}

getPokemon(url,doStuff);
console.log("second: ", results);
getPokemon(urlList,doStuffList)