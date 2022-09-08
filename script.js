let flippedCardsCounter = 0;
let moves = 0;
let checkedCounter = 0;
let seconds = 0;
let numberOfCards = 0;

let gameName = document.querySelector('.game-name')
let gameModeScreen = document.querySelector('.choosing-game-mode')
let moveCounter = document.querySelector('.span-moves-counter')
const main = document.querySelector('main')
const overTheScreen = document.querySelector('.over-the-screen')

choosingCardsNumber()
function choosingCardsNumber(){
    overTheScreen.innerHTML = `
        <div class="game-start">
            <h1> Welcome to the Memory Card Game! </h1>
            <p> To start the game <br> Choose the number of cards! </p>
            <div class="number-of-cards">
                <button onclick="checkingSelectedCardNumber(this)"> 4 </button>
                <button onclick="checkingSelectedCardNumber(this)"> 6 </button>
                <button onclick="checkingSelectedCardNumber(this)"> 8 </button>
                <button onclick="checkingSelectedCardNumber(this)"> 10 </button>
                <button onclick="checkingSelectedCardNumber(this)"> 12 </button>
                <button onclick="checkingSelectedCardNumber(this)"> 14 </button>
            </div>
        </div>
    `
}
function checkingSelectedCardNumber(selector){
    numberOfCards = selector.innerHTML
    overTheScreen.innerHTML = ""
}

function addingCardsParrots(){
    setInterval(stopwatch, 1000)

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
    setInterval(stopwatch, 1000)

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
                    <img class="fruit-basket" src="./archives/fruit-basket.png" alt=""></img>
                </div>
                <div class="flip-card-back">
                    <img class="cardImages ${chosenCards[i]}" src="./archives/${chosenCards[i]}.png" alt=""></img>
                </div>
            </div>
        </div>
        `;
    }
    gameName.innerHTML = "FRUITS"

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
    if (checkedCounter * 2 == numberOfCards){
        setTimeout(resetGame, 1000);
    }
}
function resetGame(){
    // alert(`Well Played! You won in ${moves} moves and ${seconds} seconds!`)
    // let answer = prompt("Do you want to play again? yes or no");

    // if (answer.toLowerCase() === "yes"){
    //     reloadPage()
    // } 
    // if (answer.toLowerCase() === "no"){
    //     alert("Thanks for playing!")
    // }
    overTheScreen.innerHTML = `
    <div class="game-start">
        <h1> Well Played!</h1>
        <p> You won in ${moves} moves and ${seconds} seconds! <br> Do you want to play again? </p>
        <div class="end-game-buttons">
            <button class="yes-button" onclick="reloadPage()"> Yes! </button>
            <button class="no-button"> No </button>
        </div>
    </div>
    `
}
function reloadPage() {
    location.reload();
}

function stopwatch(){
    let stopwatchSeconds = document.querySelector('.stopwatch-seconds')
    seconds++;
    stopwatchSeconds.innerHTML = seconds;
}
