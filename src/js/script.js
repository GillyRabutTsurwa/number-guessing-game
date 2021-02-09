"use strict";

const DOM = (function () {
  const elements = {
    inputGuess: document.querySelector(".guess"),
    btnCheck: document.querySelector(".check"),
  };
  return elements;
})();

DOM.btnCheck.addEventListener("click", (e) => {
  console.log(e);
});
