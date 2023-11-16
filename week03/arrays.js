// Activity 1
let numArray = ['one','two','three']
let HtmlNumArray = numArray.map((num) => `<li>${num}</li>`)
document.getElementById("myList").innerHTML =  HtmlNumArray.join("")


// Activity 2
function letterToGpa(grade)
{
        if (grade === "A")
            return 4
        else if (grade === "B")
            return 3
        else if (grade === "C")
            return 2
        else if (grade === "D")
            return 1
        else if (grade === "F")
            return 0
    }

let letterGradeArray = ['A','B','A']
let gpaArray = letterGradeArray.map(letterToGpa)
console.log(gpaArray)

// Activity 3
let gpa = gpaArray.reduce((total,points) => total + points) / gpaArray.length
console.log(gpa)


// Activity 4
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']
fruits = fruits.filter((fruit) => fruit.length > 6)
console.log(fruits)


// Activity 5
let numbers = [12, 34, 21, 54]
let luckyNumber = 21
let luckyNumIndex = numbers.indexOf(luckyNumber)
console.log(luckyNumIndex)
