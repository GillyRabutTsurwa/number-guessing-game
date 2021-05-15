"use strict";

const DOM = (function () {
  const elements = {
    body: document.querySelector("body"),
    header: document.querySelector("header"),
    title: document.querySelector("h1"),
    inputGuess: document.querySelector(".guess"),
    btnCheck: document.querySelector(".check"),
    correctNumber: document.querySelector(".number"),
    currentScore: document.querySelector(".score"),
    message: document.querySelector(".message"),
    allParagraphs: document.querySelectorAll("p")
  };
  return elements;
})();

let gameOver = false;


// NOTE: secret number that will be randomised upon each game
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
// NOTE: player's starting score
let score = 20;

console.log(DOM);

if (!gameOver) {
  DOM.btnCheck.addEventListener("click", () => {
    const inputValue = DOM.inputGuess.value;
  
    if (inputValue === "") {
      console.log("Nothing was typed. Réessayer à nouveau");
    } else {
      const inputValueNum = Number(Math.trunc(inputValue));
  
      console.log(inputValueNum);
      console.log(typeof inputValueNum);
  
      // I could use a simple if statement, but I'm a rogue, so I'm using switch instead
      // we using switch instead.
      // OK I see. switch is weird. it takes a value, usually variable and checks if that variable is === to the value switch takes in.
      // I'm using switch in a weird way. this post explains nicely how to use it in my intended use case. mdn docs are nice too, mais pas ce que je cherchais: http://www.dynamicdrive.com/forums/showthread.php?32038-Convert-from-If-If-Else-to-Switch-Statement-how-is-it-done
  
      if (score > 1) {
        switch (true) {
          case inputValueNum < secretNumber:
            DOM.message.textContent = "📉 Too low";
            score--;
            console.log("Je suis moins que le chiffre secret");
            break;
  
          case inputValueNum > secretNumber:
            DOM.message.textContent = "📈 Too High";
            console.log("I am more than the secret number");
            score--;
            break;
  
          case inputValueNum === secretNumber:
            console.log("Voila, tu mas trouve");
            DOM.message.textContent = "👏🏿👏🏿👏🏿 Well Done";
            DOM.correctNumber.textContent = secretNumber;
            DOM.body.style.backgroundColor = "#60b347";
            DOM.inputGuess.disabled = true;
            DOM.btnCheck.disabled = true;
            DOM.btnCheck.style.cursor = "not-allowed";
            DOM.header.style.borderBottomColor = "#222";
            DOM.correctNumber.style.border = "5px solid #222";
            DOM.inputGuess.style.borderColor = "#222";
            [DOM.title, DOM.inputGuess, ...DOM.allParagraphs].forEach((currentElement) => {
              currentElement.style.color = "#222";
            })
            gameOver = true;
            break;
  
          default:
            break;
        }
      } else {
        score = 0;
        DOM.message.textContent = `Game Over. You somehow reached to ${score} points`;
        DOM.inputGuess.disabled = true;
        gameOver = true;
        DOM.btnCheck.disabled = true;
        DOM.btnCheck.style.cursor = "not-allowed";
      }
  
      DOM.currentScore.textContent = score;
    }
  });
}


window.addEventListener("load", () => {
  gameOver = false;
  console.log("Tout a été reconfiguré");
  console.log("C'est ici ou le chiffre correque sera reinitialisé");
});