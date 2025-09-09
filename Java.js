
//rock,paper,scissors


//escribir una funcion que almacene una variable aleatoria
let computerResult = ""
let getComputerChoice = (Math.random()*100) + 1
if (getComputerChoice <= 33) {
      computerResult = ("Rock")
      
}
else if (getComputerChoice > 33 && getComputerChoice <= 66){
     computerResult =("Paper")

}
    else {  computerResult =("Scissors")
          
    }
console.log(getComputerChoice)
console.log(computerResult)


//solicitar un input al usuario que contenga una de las 3 posibles variables
let userInput = prompt("Ingrese una opcion para jugar: 'Rock', 'Paper', 'Scissors'")
console.log(" su respuesta fue: ", userInput)



//escribir una funcion que compare la variable aleatoria con la variable recibida por input

if (userInput === computerResult) {
 console.log("Empate!")
}
else if ((userInput === "Rock") &&(computerResult ==="Scissors")){
    console.log("Gano!")
}
else if ((userInput === "Scissors")&&(computerResult ==="Paper")){
    console.log("Gano!")
}
else if ((userInput === "Paper") &&(computerResult ==="Rock")){
    console.log("Gano!")
} 
else console.log("Perdio")


//retornar resultado y mostrar en consola
//segun resultado, escribir "Ganaste!", "Perdiste!", o "Empate!".