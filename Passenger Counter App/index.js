///document.getElementById("count-el").innerText = 5

// let count = 45
// console.log(count)

// let myAge = 23
// console.log(myAge)

// let lapsCompleted = 0

// function laps(){
//     console.log("hello world")
// }
let countEl = document.getElementById("count-el")

let count = 0

function increment(){
  count += 1 
 countEl.innerText = count
}

function decrease(){
count -= 1  
countEl.textContent = count
}

function save(){
 let  new_save = document.getElementById("save-el")
 let display = count + " - "
 new_save.textContent += display
 countEl.textContent = 0
 count = 0
    // alert( count + " Passengers  Recorded")
}

let myPoints = 3
 
function add3Points(){
  myPoints +=3
  
}

function remove1Point(){
  myPoints -=1
  
}
add3Points()
add3Points()
remove1Point()
add3Points()
remove1Point()
console.log(myPoints)


// let firstName = "Francis"
// let lastName = " Darko"
// let fullName = firstName + " " + lastName
// console.log(fullName)

// let name_2 = "linda"
// let greetings_2 = "Hi there"
// let norm_greet = greetings_2 +"," + " " + name_2 + "!"
//  function new_greetings(){
//   console.log(norm_greet)
//  }
//  new_greetings()

// let name = "Francis"
// let greetings = "Hi, good morning to you, "
// let myGreatings = greetings + name

// console.log(myGreatings)
 


