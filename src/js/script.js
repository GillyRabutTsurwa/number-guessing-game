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


// ==================================== FUNCTIONS ====================================
const gameDone = (gameMsg, bgColour, lineAndFontColour) => {
  gameOver = true;
  DOM.message.textContent = gameMsg;
  DOM.body.style.backgroundColor = bgColour;
  DOM.inputGuess.disabled = true;
  DOM.btnCheck.disabled = true;
  DOM.btnCheck.style.cursor = "not-allowed";
  DOM.header.style.borderBottomColor = lineAndFontColour;
  DOM.correctNumber.style.border = `5px solid ${lineAndFontColour}`;
  DOM.inputGuess.style.borderColor = lineAndFontColour;
  [DOM.title, DOM.inputGuess, ...DOM.allParagraphs].forEach((currentElement) => {
    currentElement.style.color = lineAndFontColour;
  });
}


let gameOver = false;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


if (!gameOver) {
  DOM.btnCheck.addEventListener("click", () => {
    const inputValue = DOM.inputGuess.value;
  
    if (inputValue === "") {
      console.log("Nothing was typed. Réessayer à nouveau");
    } else {
      const inputValueNum = Number(Math.trunc(inputValue));
  
      if (score > 1) {
        switch (true) {
          case inputValueNum < secretNumber:
            DOM.message.textContent = "📉 Too low";
            score--;
            break;
  
          case inputValueNum > secretNumber:
            DOM.message.textContent = "📈 Too High";
            score--;
            break;
  
          case inputValueNum === secretNumber:
            DOM.correctNumber.textContent = secretNumber;
            gameDone("👏🏿👏🏿👏🏿 Well Done", "#60b347", "#222");
            break;
   
          default:
            break;
        }
      } else {
        score = 0;
        const gameOverMsg = `Game Over. The secret number that escaped you was ${secretNumber}`;
        gameDone(gameOverMsg, "#b347af", "#222");
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