/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1,number2)
{
    return number1 + number2
}

function addNumbers()
{
    let add1 = Number(document.querySelector("#add1").value)
    let add2 = Number(document.querySelector("#add2").value)

    document.querySelector("#sum").value = add(add1,add2)
}

document.querySelector("#addNumbers").addEventListener("click",addNumbers)

/* Function Expression - Subtract Numbers */

const subtract = function(subtract1,subtract2)
{
    return subtract1 - subtract2
}

const subtractNumber = function(){
    let subtract1 = Number(document.querySelector("#subtract1").value)
    let subtract2 = Number(document.querySelector("#subtract2").value)

    document.querySelector("#difference").value = subtract(subtract1,subtract2)
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumber)

/* Arrow Function - Multiply Numbers */
const multiply = (factor1,factor2) => {
    return factor1 * factor2
}

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector("#factor1").value)
    let factor2 = Number(document.querySelector("#factor2").value)

    document.querySelector("#product").value = multiply(factor1,factor2)
}

document.querySelector("#multiplyNumbers").addEventListener("click",multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divide = (dividend,divisor) => {
    return dividend / divisor
}

const divideNumbers = () => {
    let dividend = Number(document.querySelector("#dividend").value)
    let divisor = Number(document.querySelector("#divisor").value)

    document.querySelector("#quotient").value = divide(dividend,divisor)
}

document.querySelector("#divideNumbers").addEventListener("click",divideNumbers)

/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click",(event) =>{
    let subtotal = Number(document.querySelector("#subtotal").value)
    if (document.querySelector("#member").checked)
    {
        subtotal = subtotal * .85
    }
    document.querySelector("#total").innerText = `$${subtotal.toFixed(2)}`
})

/* ARRAY METHODS - Functional Programming */

/* Output Source Array */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector("#array").innerText = numArray.join()

/* Output Odds Only Array */
let oddArray = numArray.filter((num) => num % 2 === 1)
document.querySelector("#odds").innerText = oddArray.join()

/* Output Evens Only Array */
let evenArray = numArray.filter((num) => num % 2 === 0)
document.querySelector("#evens").innerText = evenArray.join()

/* Output Sum of Org. Array */
let sumOfArray = numArray.reduce((sum,num) => sum + num)
document.querySelector("#sumOfArray").innerText = sumOfArray

/* Output Multiplied by 2 Array */
let multipliedArray = numArray.map((num) => num * 2)
document.querySelector("#multiplied").innerText = multipliedArray.join()

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numArray.map((num) => num * 2).reduce((sum,num) => sum + num)
document.querySelector("#sumOfMultiplied").innerText = sumOfMultiplied
