//rock,paper,scissors
//escribir una funcion que almacene una variable aleatoria
//solicitar un input al usuario que contenga una de las 3 posibles variables
//escribir una funcion que compare la variable aleatoria con la variable recibida por input
//mostrar mensaje en consola
//segun resultado, escribir "Ganaste!", "Perdiste!", o "Empate!".
//Almacenar puntaje de computadora en una variable.
//Almacerna puntaje de jugador en una variable.

let cpuScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let random = Math.random() * 100 + 1;
  console.log(random);

  if (random <= 33) {
    return "Rock";
  } else if (random <= 66) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(usCh, cpuCh) {
  if (usCh === cpuCh) {
    console.log("Tie!");
  } else if (usCh === "Rock" && cpuCh === "Scissors") {
    console.log("The player wins!");
    humanScore = humanScore + 1;
    console.log(humanScore);
  } else if (usCh === "Scissors" && cpuCh === "Paper") {
    console.log("The player wins!");
    humanScore = humanScore + 1;
    console.log(humanScore);
  } else if (usCh === "Paper" && cpuCh === "Rock") {
    humanScore = humanScore + 1;
    console.log("The Player Wins!");
    console.log(humanScore);
  } else {
    cpuScore = cpuScore + 1;
    console.log("The CPU wins... :C");
    console.log(cpuScore);
  }
}
function playGame() {
  for (i = 0; i < 5; i++) {
    let userInput = prompt(
      "Ingrese una opcion para jugar: 'Rock', 'Paper', 'Scissors'"
    );
    console.log(" su respuesta fue: ", userInput);
    let computerChoice = getComputerChoice();
    playRound(userInput, computerChoice);
  }
  if (humanScore > cpuScore) {
    console.log("¡Felicitaciones! Ganaste el juego.");
  } else if (cpuScore > humanScore) {
    console.log("La computadora ganó el juego.");
  } else {
    console.log("¡Empate!");
  }
}
playGame();
