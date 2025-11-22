// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };




const rules = {
  rock: ["scissors", "lizard"],
  paper: ["rock", "spock"],
  scissors: ["scissors", "paper"],
  lizard: ["paper", "spock"],
  spock: ["scissors", "rock"],
}

const options = ["rock", "paper", "scissors", "lizard", "spock"] // esta multiplicacion me permite "estirar" el numero dado por math random * cualquiera del numero dado en option.lenght.

//funcion a la antigua lvd.
function play(userChoice) {

  let randomComputerNumber = Math.floor(Math.random() * options.length)  // la opcion elegida por la computadora es alamacenada en una variiable que contiene las options pero en la posicion dada por randomcomputernumber. Aunque vi en la clase que almacenaron en una const, pues no veo la necesidad aqui.
  let computerChoice = options[randomComputerNumber]

 
//condiciones:
//elegi poner return para luego poder averiguar la opcion de computadora con el consol.log entonces aqui retorno una frase a traves de una cadena concatenada [+]

 

  if (userChoice === computerChoice) {
    return "La computadora eligió " + computerChoice + "  It's a tie!";
  }
//si no es empate anteriormente, busca la palabra elegida por computechoice dentro de el valor de la key (palabra en este caso) elegida por el usurario. 
//si la encuentra retorna que ha ganado el usuario. Esto funciona porque, esta operacion se traduce a una operacion boleana. esa palabra esta incluida? si es verdadero retorna. si no, siguente condicionante.
  else if (rules[userChoice].includes(computerChoice)) {
    return "La computadora eligió " + computerChoice + " You woooon!"
  }
  else {
    return "La computadora eligió " + computerChoice + "  So sad, you lost :(";
  }

}
console.log(play("paper"));
