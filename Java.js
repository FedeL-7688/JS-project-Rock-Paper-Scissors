
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
    resultRound.textContent = "TIE!"
    ;
  } else if (usCh === "Rock" && cpuCh === "Scissors") {
    resultRound.textContent = "The Player wins!"
    humanScore = humanScore + 1;
    return humanScore;
  } else if (usCh === "Scissors" && cpuCh === "Paper") {
    resultRound.textContent = "The Player wins!"
    humanScore = humanScore + 1;
    return humanScore;
  } else if (usCh === "Paper" && cpuCh === "Rock") {
    humanScore = humanScore + 1;
    resultRound.textContent = "The Player wins!"
    return humanScore;
  } else {
    cpuScore = cpuScore + 1;
    resultRound.textContent = "CPU wins :C";
    return cpuScore;
  }

}


//Botones Usuario

botonPapel = document.querySelector("#papel")
botonPiedra = document.querySelector("#piedra")
botonTijera = document.querySelector("#tijera")



botonPapel.addEventListener("click",(event)=>{
  event.preventDefault()
  cpuChoice = getComputerChoice()
  playRound("Paper",cpuChoice)
   selectionUser.textContent = "El usuario elije Papel"
  resultUser.textContent = "El puntaje del jugador es: " + humanScore
  resultCPU.textContent = "El puntaje del CPU es: " + cpuScore
  selectionCPU.textContent = cpuChoice

  if (humanScore === 5) {
  matchResult.textContent ="User wins the match!";
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "green";
  matchResult.backgroundColor = "rgba(8, 220, 235, 0.39)"
}else if( cpuScore === 5){
  matchResult.textContent = "CPU wins the match!"
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "red"
  matchResult.style.backgroundColor = "rgba(8, 220, 235, 0.39)"
}
  
})
botonPiedra.addEventListener("click",()=>{
  cpuChoice = getComputerChoice()
  playRound("Rock",cpuChoice)
   
   resultUser.textContent = "El puntaje del jugador es: " + humanScore
   resultCPU.textContent = "El puntaje del CPU es: " + cpuScore
   selectionUser.textContent = "El usuario elije Piedra"
   selectionCPU.textContent = "CPU uses " + cpuChoice
   
   
    if (humanScore === 5) {
  matchResult.textContent ="User wins the match!";
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "green";
  matchResult.style.backgroundColor = "rgba(8, 220, 235, 0.39)"
}else if( cpuScore === 5){
  matchResult.textContent = "CPU wins the match!"
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "red"
  matchResult.style.backgroundColor = "rgba(8, 220, 235, 0.39)"
}
})
botonTijera.addEventListener("click",()=>{
  cpuChoice = getComputerChoice()
  playRound("Scissors",cpuChoice)
   selectionCPU.textContent = "la cpu elije" + cpuChoice
   selectionUser.textContent = "El usuario elije tijeras"
   resultUser.textContent = "El puntaje del jugador es: " + humanScore
   resultCPU.textContent = "El puntaje del CPU es: " + cpuScore

   if (humanScore === 5) {
  matchResult.textContent ="User wins the match!";
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "green";
  matchResult.style.backgroundColor = "rgba(8, 220, 235, 0.39)"
  
}else if( cpuScore === 5){
  matchResult.textContent = "CPU wins the match!";
  matchResult.style.fontSize = "30px";
  matchResult.style.color = "red"
  matchResult.style.backgroundColor = "rgba(8, 220, 235, 0.39)"
}

  
})

//Apartado de resultados
results = document.createElement("div")
document.body.appendChild(results)
results.style.backgroundColor = "#f03712ff";
results.classList.add("Poto")

//Resultado de ganador de ronda
resultRound = document.createElement("h1")
resultRound.classList.add("round")
selectionUser = document.createElement("p")
selectionUser.classList.add("round")
selectionCPU = document.createElement("p")
selectionCPU.classList.add("round")
matchResult = document.createElement("h1")
results.appendChild(matchResult)

results.appendChild(selectionUser)
results.appendChild(selectionCPU)
results.appendChild(resultRound)

//Puntaje jugador
resultUser = document.createElement("p")
resultUser.classList.add("points")
results.appendChild(resultUser)

//Puntaje Maquina

resultCPU = document.createElement("p")
results.appendChild(resultCPU)
resultCPU.classList.add("points")









// function playGame() {
//   for (i = 0; i < 5; i++) {
//     let userInput = prompt(
//       "Ingrese una opcion para jugar: 'Rock', 'Paper', 'Scissors'"
//     );
//     console.log(" su respuesta fue: ", userInput);
//     let computerChoice = getComputerChoice();
//     playRound(userInput, computerChoice);
//   }
//   if (humanScore > cpuScore) {
//     console.log("¡Felicitaciones! Ganaste el juego.");
//   } else if (cpuScore > humanScore) {
//     console.log("La computadora ganó el juego.");
//   } else {
//     console.log("¡Empate!");
//   }
// }
