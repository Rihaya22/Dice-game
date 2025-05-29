const diceImg = ["./img/dice1.png",
             "./img/dice2.png",
             "./img/dice3.png",
             "./img/dice4.png", 
             "./img/dice5.png",
             "./img/dice6.png"];

const diceAlt = ["dice-number-one",
                 "dice-number-two",
                 "dice-number-three",
                 "dice-number-four",
                 "dice-number-five",
                 "dice-number-six"]

const diceOne = document.querySelectorAll("img")[0];
const diceTwo = document.querySelectorAll('img')[1];
const buttonPlay = document.querySelector('button');
const resultText = document.querySelector('p');
const headerText = document.querySelector('h1');
var diceOneResult;
var diceTwoResult;

function result() {
    diceOneResult = Math.floor(Math.random() * 6);
    diceTwoResult = Math.floor(Math.random() * 6);
    diceOne.src = diceImg[diceOneResult];
    diceOne.alt = diceAlt[diceOneResult];
    diceTwo.src = diceImg[diceTwoResult];
    diceTwo.alt = diceAlt[diceTwoResult];

    if (diceOneResult > diceTwoResult) {
        resultText.textContent = "Player 1 Wins";
        headerText.textContent = "Congratulations";
    } else if (diceOneResult == diceTwoResult) {
        resultText.textContent = "Draw";
        headerText.textContent = "Try Again";
    } else {
        resultText.textContent = "Player 2 Wins";
        headerText.textContent = "Congratulations";
    };
}

buttonPlay.addEventListener('click', result);