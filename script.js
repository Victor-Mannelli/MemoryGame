let flippedCardsCounter = 0;
let moves = 0;
let checkedCounter = 0;

let gameName = document.querySelector('.game-name')
let gameModeScreen = document.querySelector('.choosing-game-mode')
let moveCounter = document.querySelector('.span')
const main = document.querySelector('main')

let numberOfCards = Number(prompt('How many cards do you want?'))

while (isNaN(numberOfCards) || numberOfCards > 14 || numberOfCards < 4 || numberOfCards % 2 !== 0){
    
    numberOfCards = Number(prompt('How many cards do you want? It has to be even and beetween 4 and 14!'))

}

function addingCardsParrots(){

    let parrots = ["boat", "bobross", "explody", "fiesta", "metal", "triplets", "unicorn"]
    let chosenCards = [];

    for(let i = 0; i < (numberOfCards / 2); i++){
        chosenCards.push(parrots[i])
        chosenCards.push(parrots[i])
    }
    chosenCards.sort(scramble);
    function scramble(){
        return Math.random() - 0.5; 
    }

    for(let i = 0; i < (numberOfCards); i++){
        main.innerHTML += `
        <div class="card" onclick="turningCards(this)"> 
            <div class="card-inner">
                <div class="flip-card-front">
                    <img class="parrot" src="./archives/parrot.png" alt=""></img>
                </div>
                <div class="flip-card-back">
                    <img class="cardImages ${chosenCards[i]}" src="./giffs/${chosenCards[i]}.gif" alt=""></img>
                </div>
            </div>
        </div>
        `;
    }

    gameModeScreen.classList.add('hidden')

}
function addingCardsFruits(){

    let fruits = ["banana", "berry", "kiwi", "orange", "strawberry", "watermelon", "avocado"];
    let chosenCards = [];

    for(let i = 0; i < (numberOfCards / 2); i++){
        chosenCards.push(fruits[i])
        chosenCards.push(fruits[i])
    }
    chosenCards.sort(scramble);
    function scramble(){
        return Math.random() - 0.5; 
    }

    for(let i = 0; i < (numberOfCards); i++){
        main.innerHTML += `
        <div class="card" onclick="turningCards(this)"> 
            <div class="card-inner">
                <div class="flip-card-front">
                    <img class="parrot" src="./archives/parrot.png" alt=""></img>
                </div>
                <div class="flip-card-back">
                    <img class="cardImages ${chosenCards[i]}" src="./archives/${chosenCards[i]}.png" alt=""></img>
                </div>
            </div>
        </div>
        `;
    }
    gameName.innerHTML = "FRUITS CARD GAME"

    gameModeScreen.classList.add('hidden')

}

function turningCards(element){

    if (flippedCardsCounter !== 2 && element.classList.contains('flippedCard') === false){
        element.classList.add('flippedCard');
        flippedCardsCounter++;
    } 
    if (flippedCardsCounter === 2){
        setTimeout(hidingCards, 1000);
    }
}
function hidingCards(){
    let flippedCard = document.querySelectorAll('.flippedCard');
    let flippedCardBackImage = document.querySelectorAll('.flippedCard .cardImages');
    
    if (flippedCardBackImage[0].classList.value === flippedCardBackImage[1].classList.value){

        flippedCard[0].classList.add('checked')
        flippedCard[1].classList.add('checked')

        checkedCounter++
    } 
        moves++;
        moveCounter.innerHTML = moves;

    for(i = 0; i < flippedCard.length; i++){
        flippedCard[i].classList.remove('flippedCard')
    }
    flippedCardsCounter = 0;
    if (checkedCounter * 2 === numberOfCards){
        setTimeout(resetGame, 500);
    }
}
function resetGame(){
    alert(`Well Played! You won in ${moves} moves!`)
    let answer = prompt("yes or no");

    if (answer.toLowerCase() === "yes"){
        reloadPage()
    } 
    if (answer.toLowerCase() === "no"){
        alert("Thanks for playing!")
    }
}
function reloadPage() {
    location.reload();
}
