/* for (let contador=1 ; contador<10 ; contador++) {
    alert('i =' + contador);
}
var ingresarNumero = parseInt(prompt('ingrese un numero'));
for (let i=1; i <= 10; i++){
    alert(ingresarNumero +'*'+ i + '=' + ingresarNumero*i)
}
 */
/* for(let i=1; i<=10; i++){
    if (!(i % 2 == 0)){
        continue;
    }
    alert(i);
*/
/*         alert("Bienvenido al juego de las adivinanzas, ingrese un numero del 1 al 10, tiene 3 intentos");
        let adivino = false;
        let intentos = 0;
        const numeroRandom = Math.round(Math.random() * (10 - 0) + 0); //devuelve un numero entre 1 y 10
        do {
            let n = parseInt(prompt("Ingrese un numero"));
            if (n === numeroRandom) {
                alert("Adivino el numero!! " + numeroRandom);
                adivino = true;
            } else {
                if (numeroRandom > n) {
                    alert("El numero a adivinar es mayor");
                } else {
                    alert("El numero a adivinar es menor");
                }
            }
            intentos++;
        } while ((!adivino) && (intentos < 3))

        if (!adivino) {
            alert("Game Over!!");
        }
 */
/* let numeroIngresado = prompt("Ingresa un numero del 1 al 10");
var numero = numeroIngresado ;
const numeroValido1 = 2;
const numeroValido2 = 5; 
const numeroValido3 = 9;
while (numero != 7) {
    switch(numeroIngresado){
        case numeroValido1:
            alert('hola');
            break;
        case numeroValido2:
            alert('no');
            break;
        case numeroValido3:
            alert('se');
            break;
        default:
            alert('el numero es ' + numero);
            break;    
    }
    numero = prompt("Ingrese otro valor ")
} */

//Ejercicio de Desafio: Crear un algoritmo utilizando un ciclo
//Quise hacer un contador con un for, para que sumara continuamente +1 a un valor natural ingresado.

let n = parseInt(prompt('Ingrese un número Entero'));

for(i = n ; i <= 15 ; i++){
    if (i === n){
        console.log('El nuevo valor de n es: ' + i);
        alert("El numero ingresado es: " + i);
    }
    else{
        console.log('El nuevo valor de n es: ' + i);
        alert('El valor de n + 1 es: ' + i)
    }
}
// Ejemplo 1. Tengo un pequeño problema que el primer Prompt no lo reconoce la consola como "dato guardado", pero si como valido para entrar en la condición

let nombre = prompt('Ingrese un nombre');

do{
    nombre = prompt('Ingrese otro nombre: ');
    console.log(nombre);
}while(nombre);