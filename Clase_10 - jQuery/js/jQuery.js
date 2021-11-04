/* console.log($("#jQuery"));
console.log(document.getElementById("jQuery"));
console.log($(".fondonegro"));
console.log($("div"))
*/
/* Realizar: Usar prepend. Hacer una lista de nombres, con un boton y darle una funcion
poner un text box para ingresar el nombre.  

Poner un boton para usar y llamar a una función, y la funcion que con 
jQuery agregue los nombres en una tabla.

Poner un textbox para ingresar el nombre, poner un botón (usar el evento de JS y llamar a una función)
La función que con JQuery agregue los nombres en una tabla
*/

let nombre = $('#nombre');

const agregarNombre = () => {
        $('#tabla').prepend(`<li>${nombre.val()}</li>`)
}

let enviar = document.getElementById("enviar").addEventListener("click", agregarNombre);