"use strict";

const DOM = (function () {
  const elements = {
    inputGuess: document.querySelector(".guess"),
    btnCheck: document.querySelector(".check"),
    correctNumber: document.querySelector(".number"),
    message: document.querySelector(".message"),
  };
  return elements;
})();

console.log(DOM);

DOM.btnCheck.addEventListener("click", () => {
  const inputValue = DOM.inputGuess.value;

  if (inputValue === "") {
    console.log("Nothing was typed. Réessayer à nouveau");
  } else {
    const inputValueNum = Number(Math.trunc(inputValue));

    console.log(inputValueNum);
    console.log(typeof inputValueNum);

    DOM.message.textContent = `The number ${inputValueNum} was submitted`;
  }
});

window.addEventListener("load", () => {
  console.log("Tout a été reconfiguré");
  console.log("C'est ici ou le chiffre correque sera reinitialisé");
});