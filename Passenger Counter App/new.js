
// function button(){
//     let display = document.getElementById("error")
//     display.innerText = "Something went wrong, please try again"
//  }

let num1=8
let num2=2
let comp = num1 + num2
let comp2 = num1 - num2
let comp3 = num1 / num2
let comp4 = num1 * num2
let  sumEl = document.getElementById("sum-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    comp
   sumEl.textContent = "Sum: " + comp
   
}

function subtract(){
    comp2
    sumEl.textContent = "Subtract: " + comp2
    
    
}

function multiply(){
    comp4
    sumEl.textContent = "Multiply: " + comp4
}

function divide(){
    comp3
    sumEl.textContent = "Division: " + comp3
    
}