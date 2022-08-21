
const main = document.querySelector('main')

let numberOfCards = Number(prompt('How many cards do you want?'))
let counter = 0;

let images = ["banana", "berry", "kiwi", "orange", "strawberry", "watermelon"];
images.sort(scramble);
function scramble(){
    return Math.random() - 0.5; 
}

addingCards()
function addingCards(){

    while (isNaN(numberOfCards) || numberOfCards > 14 || numberOfCards < 4 || numberOfCards % 2 !== 0){
        numberOfCards = Number(prompt('How many cards do you want? It has to be even and beetween 4 and 14!'))
    }

    for(let i = 0; i < numberOfCards; i++){
        
        main.innerHTML += `
        <div class="card" onclick="turningCards(this)"> 
            <div class="card-inner">
                <div class="flip-card-front">
                    <img class="parrot" src="./archives/parrot.png" alt=""></img>
                </div>
                <div class="flip-card-back">
                    <img class="${images[i]}" src="./archives/${images[i]}.png" alt=""></img>
                </div>
            </div>
        </div>
        `;
    }
}

function turningCards(element){
    console.log(element);
    if (element.classList.contains('flippedCard')){
        element.classList.remove('flippedCard');
        counter--;
    } else {
        element.classList.add('flippedCard');
        counter++;
    }    
    console.log(counter)
}

function maxNumberOfTurnedCards(){
    if (counter === 2){
        
    }
}