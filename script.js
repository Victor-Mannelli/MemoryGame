
const main = document.querySelector('main')

let numberOfCards = Number(prompt('How many cards do you want?'))
let counter = 0;

let images = ["banana", "berry", "kiwi", "orange", "strawberry", "watermelon", "avocado"];
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

    if (counter !== 2 && element.classList.contains('flippedCard') === false){
        element.classList.add('flippedCard');
        counter++;
        console.log(counter)
    } 
    if (counter === 2){
        setTimeout(hidingCards, 1000);
    }
}

function hidingCards(){
    const flipped = document.querySelectorAll('.flippedCard')
    for (let i = 0; i < flipped.length; i++){
        flipped[i].classList.remove('flippedCard')
    }
    counter = 0;
}
