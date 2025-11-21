// import "bootstrap";
// import "./style.css";


// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };




const rules = {
  piedra: ["tijera", "lagarto"],
  papel: ["piedra", "spock"],
  tijera: ["lagarto", "papel"],
  lagarto: ["papel", "spock"],
  spock: ["tijera", "rock"],
}

const options = ["piedra", "papel", "tijera", "lagarto", "spock"] //esta multiplicacion me permite "estirar" el numero dado por math random * cualquiera del numero dado en option.lenght.

//funcion ala antigua lvd.
function Jugar(userChoice) {

  const randomComputerNumber = Math.floor(Math.random() * options.length)  //la opcion elegida por la computadora es alamacenada en una variiable que contiene las options pero en la posicion dada por randomcomputernumber. 
  const computerChoice = options[randomComputerNumber]

 //elegi poner return para luego poder averiguar la opcion de computadora, porque hacerlo con el prompt me pedia que instalara algo y bueno... entonces aqui retorno 
 //lo que la computadora eligio/
  if (userChoice === computerChoice) {
    return "La computadora eligió " + computerChoice + " — Empate!";
  }

  else if (rules[userChoice].includes(computerChoice)) {
    return "La computadora eligió " + computerChoice + " — ¡Ganaste!"
  }
  else {
    return "La computadora eligió " + computerChoice + " — Perdiste.";
  }

}
console.log(Jugar("piedra"));
