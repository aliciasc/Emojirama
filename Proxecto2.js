"use strict";

let emojis = [
  "👻",
  "👻",
  "👹",
  "👹",
  "😈",
  "😈",
  "🙊",
  "🙊",
  "🤖",
  "🤖",
  "👽",
  "👽",
  "🐼",
  "🐼",
  "🐷",
  "🐷",
];
let newEmoji = [];

newEmoji = emojis.sort(() => Math.random() - 0.5);

/* MODIFICAR EL CONTENIDO DE LAS CARTAS */

let changeback = document.querySelectorAll(".back");

changeback.forEach((changeback, i) => {
  changeback.textContent = newEmoji[i];
  i++;
});

//TIMER
let minutos = 0; // Inicializador de minutos
let segundos = 1; // Inicializador de segundos
setInterval(() => {
  //Utilizamos while para que sume 1 minuto cada vez que pasen 60 segundos
  while (segundos === 60) {
    minutos++;
    segundos = 0;
  }
  const temporizadorLi = document.querySelector(".timer"); // Guarda en la variable li lo que haya en ese momento en el li del HTML
  temporizadorLi.textContent = ` ${minutos} min : ${segundos} s`; // Modifica el contenido de texto del elemento, reemplazando todo el contenido por el valor de minutos : segundos
  segundos++;
}, 1000);

/* GIRAR CARTAS Y COMPARAR EL CONTENIDO */
const cards = document.querySelectorAll(".card");
let matched = 0;
let matched1 = 0;
let card1;
let card2;
let contador = 0;
let contador1;

const reveal = (e) => {
  const currentCard = e.currentTarget;
  matched++;
  console.log(currentCard);

  if (matched === 1) {
    card1 = currentCard;
    currentCard.classList.add("flipped");
  }

  if (matched === 2) {
    card2 = currentCard;
    currentCard.classList.add("flipped");
    if (card1.textContent === card2.textContent) {
      contador++;
      matched1++;
      let contador1 = document.querySelector(".conta");
      contador1.textContent = contador;
      matched = 0;
    } else {
      setTimeout(() => {
        contador++;
        contador1 = document.querySelector(".conta");
        contador1.textContent = contador;
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        matched = 0;
      }, 1000);
    }
  }
  /* CUADRO FINAL */
  if (matched1 === 8) {
    const result = document.querySelector(".start");

    if (contador < 12) {
      result.classList.add("start1");
    }
    result.textContent = `Tus intentos fueron ${contador}. MUY BIEN 🤩🎉`;
    if (contador < 17 && contador >= 12) {
      result.classList.add("start1");
      result.textContent = `Tus intentos fueron ${contador}. ¡Buen resultado! Atrévete a mejorarlo 😁 `;
    }
    if (contador < 20 && contador >= 17) {
      result.classList.add("start1");
      result.textContent = `Tus intentos fueron ${contador}. ¡Puedes hacerlo mucho mejor! 😊`;
    }
    if (contador >= 20) {
      result.classList.add("start1");
      result.textContent = `Tus intentos fueron ${contador}. Sigue jugando para mejorar tu nota😅 `;
    }
    setTimeout(() => {
      location.reload();
    }, 70000);
  }
};

for (const card of cards) {
  card.addEventListener("click", reveal);
}
