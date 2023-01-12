

let sum = 0
let hasBlackJack = false
let playerIsAlive = false
let message = " "
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("cards")
let messgeEl = document.getElementById("message-el")
let cards = []

let playerEl = document.getElementById("player-el")
let player = {
    name: "Francis",
    chips: 300
}

playerEl.textContent = player.name +": $" + player.chips
 
function getRandomCard(){
let randomNumber = Math.floor(Math.random()*13) + 1
if(randomNumber ===1){
    return randomNumber = 11
}
else if(randomNumber >=11){
    return randomNumber = 10
}
else{
    return randomNumber
}
}

function condition(){
    if(sum < 21){
        message = "Draw a new card!!"
    }

    else if(sum === 21){
        message = "You got a blackjack!!"
        hasBlackJack = true
    }
    else{
        message = "You are out of the game!!"
         playerIsAlive = false
    }
}
 

function startGame(){
    playerIsAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    cardEl.textContent = " Cards: "
    for(let i=0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent +=sum
    condition()
    messgeEl.textContent = message
}

function newCard(){
    if(playerIsAlive === true && hasBlackJack === false){
        let new_card = getRandomCard()
        cardEl.textContent = "Cards: "
        cards.push(new_card)
        for(let i=0; i < cards.length; i++){
         cardEl.textContent += cards[i] + " "
     }
        sum = sum + new_card
       
        sumEl.textContent += " " +  sum
        condition()
        messgeEl.textContent = message
    }
   
}






