
const ul = document.querySelector('ul')
let numberOfCards = prompt('Quantas cartas você quer?')

addingCards()

function addingCards(){

    for(let i = 0; i < numberOfCards; i++){
        
        ul.innerHTML += `
        <li onclick="turningCards(this)"> 
            <img src="./archives/parrot.png"></img>
        </li>
        `;
    }
}

function turningCards(element){
    element.classList.toggle('cardBack');

}
