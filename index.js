let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let numOne = document.getElementById("num1-el")
console.log(numOne)

let numTwo = document.getElementById("num2-el")
console.log(numTwo)

// new section 

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

function add(){
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract(){
    let result2 = num1 - num2
    sumEl.textContent = "Sum: " + result2
}

function multiply(){
    let result3 = num1 * num2
    sumEl.textContent = "Sum: " + result3
}

function divide(){
    let result4 = num1 / num2
    sumEl.textContent = "Sum: " + result4
}


// First Solution
// function multiply(){
 //   console.log("x")
 //   sumEl.innerText = num1 * num2
//}

//function divide(){
  //  console.log("/")
    //sumEl.innerText = num1 / num2
//}

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
