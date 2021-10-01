var añoNacimiento = prompt("coloque su año de nacimiento");
var añoActual = prompt("coloque el año en el que esta");

let edad = parseInt(añoActual) - parseInt(añoNacimiento) ;
console.log("Su edad es: ", edad);
alert("Usted tiene : " + edad + " años") ; 

var numeroA = prompt("ingrese el numero que quiere multiplicar") ;
var numeroB = prompt("ingrese el otro numero que quiere multiplicar") ; 
let multiplo = parseInt(numeroA) * numeroB ;

console.log("El numero resultante es: ", multiplo);
alert("El numero resultante es: " + multiplo);