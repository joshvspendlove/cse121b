const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const img = document.createElement("img")
img.setAttribute("src","https://picsum.photos/200");
img.setAttribute("alt","A random stock photo");
document.body.appendChild(img)

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const sectionHeader = document.createElement("h2");
const sectionParagraph = document.createElement("p")
sectionHeader.innerText = "CSE 121b"
sectionParagraph.innerText = "Welcome to Javascript Language"
newSection.appendChild(sectionHeader)
newSection.appendChild(sectionParagraph)

document.body.appendChild(newSection);