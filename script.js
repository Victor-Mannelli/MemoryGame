let counter = 0;

let numberOfCards = Number(prompt('How many cards do you want?'))
while (isNaN(numberOfCards) || numberOfCards > 14 || numberOfCards < 4 || numberOfCards % 2 !== 0){
    
    numberOfCards = Number(prompt('How many cards do you want? It has to be even and beetween 4 and 14!'))

}

addingCards()
function addingCards(){

    let images = ["banana", "berry", "kiwi", "orange", "strawberry", "watermelon", "avocado"];
    let chosenCards = [];

    for(let i = 0; i < (numberOfCards / 2); i++){
        chosenCards.push(images[i])
        chosenCards.push(images[i])
    }
    chosenCards.sort(scramble);
    function scramble(){
        return Math.random() - 0.5; 
    }

    for(let i = 0; i < (numberOfCards); i++){
        const main = document.querySelector('main')
        main.innerHTML += `
        <div class="card" onclick="turningCards(this)"> 
            <div class="card-inner">
                <div class="flip-card-front">
                    <img class="parrot" src="./archives/parrot.png" alt=""></img>
                </div>
                <div class="flip-card-back">
                    <img class="fruits ${chosenCards[i]}" src="./archives/${chosenCards[i]}.png" alt=""></img>
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
    } 
    if (counter === 2){
        setTimeout(hidingCards, 1000);
    }
}

function hidingCards(){
    let flippedCard = document.querySelectorAll('.flippedCard');
    let flippedCardBackImage = document.querySelectorAll('.flippedCard .fruits');
    
    console.log(flippedCardBackImage[0].classList)
    console.log(flippedCardBackImage[1].classList)

    if (flippedCardBackImage[0].classList === flippedCardBackImage[1].classList){

        flippedCard[0].classList.add('checked')
        flippedCard[1].classList.add('checked')
    } 
    for(i = 0; i < flippedCard.length; i++){
        flippedCard[i].classList.remove('flippedCard')
    }
    counter = 0;
}
