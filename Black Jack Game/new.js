
let person = {
    name:"Per",
    age: 35,
    country: "Norway"
}

function logData(){
    console.log( person.name + " " + "is" + " " + person.age +
    " " + "years old and lives in " + person.country)
}

logData()

let age  = 50

if( age < 6){
    console.log("Free")
}
else if( age < 18){
    console.log("Child discount")
}
else if( age < 27){
    console.log("Student discount")
}
else if ( age <= 66)
{
    console.log(" Full Price ")
}
else if ( age > 66){
    console.log(" senior citizen discount")
}


let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
largeCountries.pop()
largeCountries.push("Paskistan")
console.log(largeCountries)
largeCountries.shift()
largeCountries.unshift("China")
console.log(largeCountries)

let hands = ["rock", "paper", "scissor"]

function getHand(){
    let rand = Math.floor(Math.random()*2) + 1 
    return hands[rand]
}

console.log( getHand() )

console.log("The 5 largext countries in the world")
for(let i = 0; i<largeCountries.length; i++){
    console.log(" - " + largeCountries[i])
}

let randomNumber = Math.floor(3.44575767)
console.log(randomNumber)


let player1Time = 700
let player2Time = 800
function totalfunc(){
let sum = player1Time + player2Time
return sum
}

let final = totalfunc()
console.log(final)
Arrays
let posts = []
posts = ["Frontend developer at Xeneta",  
"People counter for Norstat",
"CEO at Scrimba"
]
console.log(posts[0])
console.log(posts[1])
console.log(posts[2])


let sentence = ["Hello", "my", "name", "is", "Ada"]
let greetingEl = document.getElementById("greeting-el")
for(let i=0; i < sentence.length; i++){
   greetingEl.textContent += sentence[i] + " "
}

let messages = [
    "Hey, how's it going",
    "I am great, thank you! how about you",
    "All good. Been working on my portfolio lately"
]

for(i=1; i<5; i+=1){
    console.log(messages[i])
}

let spar = [7, 3, 9]
for(i=0; i < spar.length; i++){
    console.log(spar[i])
}
let newMessage = " Same here "
messages.push(newMessage)
console.log(messages)
loops
for(let count = 1; count<101; count +=10){
    console.log(count)
}

//logical operations
let hasSolvedChallenge = false
let hasHintsLeft = false


function showSolution(){
    console.log("Showing solution...")
}

if(hasSolvedChallenge === false && hasHintsLeft === false){
 showSolution()
}

let likesDocumentary = true
let likesStartups = false

function recommendMovie(){
    console.log("Hey! check out this new movie, you will love it..")
}

if(likesDocumentary === true || likesStartups === true){
    recommendMovie()
}

function add (num1, num2){
    return num1 + num2
    }
    
    console.log(add(3, 4))
    console.log(add(9, 102))
    







