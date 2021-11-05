// Array de objetos para agregar información al DOM.
const productos = [{ id: 1,  nombre: "Arroz", precio: 125 },
{  id: 2,  nombre: "Fideo", precio: 70 },
{  id: 3,  nombre: "Pan"  , precio: 50},
{  id: 4,  nombre: "Flan" , precio: 100}];
// Asociamos el evento click en ready luego del DOM Generado
let carrito = [];
$(document).ready(function () {
    $(".btnComprar").click(function (e) { 
        //Obtenemos hijos del padre <div> desde el target
        let hijos = $(e.target).parent().children();
        //Primer input, valor de ID oculto
        console.log(hijos[0].value);
        carrito.push(productos[(hijos[0].value - 1)])
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
});
// Recorremos el array con for..of
for (const producto of productos) {
    //Por cada producto además de los datos agregamos un botón 
    $("#app").append(`<div>
                        <input value="${producto.id}" type="hidden">
                        <h4>  Producto: ${producto.nombre}</h4>
                        <b> $ ${producto.precio}</b>
                        <button class="btnComprar">Comprar</button>
                    </div>`);
}

total = 0;

$(document).ready(function () {
    $("#boton").click(function (e) { 
        let obtenerProductos = JSON.parse(localStorage.getItem("carrito"))
        for (const producto of obtenerProductos) {
            total += parseFloat(producto.precio);
            //Por cada producto además de los datos agregamos un botón 
            $("#carritos").append(`<div>
                                <h4>  Producto: ${producto.nombre}</h4>
                                <b> $ ${producto.precio}</b>
                            </div>`);
        }
        console.log(total)
        $("#carritos").append(`<p>Precio final: $${total}</p>`)
    });
});


