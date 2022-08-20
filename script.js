
const ul = document.querySelector('ul')
let numberOfCards = prompt('How many cards do you want?')
counter = 0;

addingCards()
function addingCards(){
    while (numberOfCards % 2 !== 0){
        numberOfCards = prompt('How many cards do you want?')
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