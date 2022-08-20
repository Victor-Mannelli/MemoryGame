
const ul = document.querySelector('ul')
let numberOfCards = Number(prompt('How many cards do you want?'))
counter = 0;

addingCards()
function addingCards(){
    
    while (isNaN(numberOfCards) || numberOfCards > 14 || numberOfCards < 4 || numberOfCards % 2 !== 0){
        numberOfCards = Number(prompt('How many cards do you want? It has to be even and beetween 4 and 14!'))
    }

    for(let i = 0; i < numberOfCards; i++){
        
        ul.innerHTML += `
        <li onclick="turningCards(this)"> 
            <img src="./archives/parrot.png"></img>
        </li>
        `;
    }
}

function turningCards(element){
    if (element.classList.contains('cardBack')){
        element.classList.remove('cardBack');
        counter--;
    } else {
        element.classList.add('cardBack');
        counter++;
    }    
}

function maxNumberOfTurnedCards(){
    if (counter === 2){
        
    }
}