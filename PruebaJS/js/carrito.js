let total = 0;

$(document).ready(function imprimirCarrito() {
    //Carga todas las Cards cargadas en "carrito" que esta en LocalStorage.
    let obtenerProductos = JSON.parse(localStorage.getItem("carrito"));
    for (const producto of obtenerProductos) {
        total += parseFloat(producto.precio * producto.caja);
        //Por cada producto además de los datos agregamos un botón 
        $('#carrito').append(`
            <div class="card text-center" style="width: 18rem;">
                <img src="../multimedia/${producto.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                <div class="card-body">
                    <input type="hidden" id="idProd" value="${producto.id}">
                    <h2 class="card-title" id="${producto.id}">${producto.nombre}</h2>
                    <h5 class="card-subtitle mb-2 text-muted">${producto.descripcion}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <p> ${producto.caja} </p>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                        <button type="button" class="btn btn-dark" id="btnBorrar" onclick="btnBorrar('${producto.nombre}')">Eliminar</button>
                    </div>
                </div>
            </div>
        `);
    }
    if (obtenerProductos != ""){
        $("#carrito").append(`
            <div class="card text-center">
                <div class="card-header">
                    Total a Pagar:
                </div>
                <div class="card-body">
                    <h5 class="card-title">Precio final</h5>
                    <p class="card-text">$${total}</p>
                    <button class="btn btn-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Pagar</button>
                </div>
            </div>
         `);
    }
    else{
        $('#carrito').append(`
            <div class="card text-center"> No posee productos en el carrito</div>
        `);
    };
    $('#carrito').fadeIn('5000');
});

$('#vaciarCarrito').on('click', () =>{ // vacio el carrito creando un nuevo array "carrito" y subiendolo al localStorage con la misma key.
    const carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    location.reload();
});

const btnBorrar= (idProd) => {
    let obtenerProductos = JSON.parse(localStorage.getItem("carrito")); // Cargo el array desde el JSON 
    // lo guardo como variable LET seria "efimero".
    //console.log(obtenerProductos);
    //console.log(idProd);
    let indice = obtenerProductos.indexOf(obtenerProductos.find(elemento => elemento.nombre == idProd)); // En una variable encuentro el producto (objeto completo.)
    //console.log(indice);
    //indice = obtenerProductos.indexOf(indice); // Renombro la variable "indice", obteniendo el indice del objeto en el array.
    //console.log(indice);
    if (obtenerProductos[indice].caja == 1){
        obtenerProductos.splice(indice,1);
    } // Le digo que, si .caja es 1 ELIMINE del array el objeto.
    else{
        obtenerProductos[indice].caja = obtenerProductos[indice].caja - 1;
    }   // le digo que si .caja es distinto de 1 le reste 1.
    //console.log(obtenerProductos);
    //console.log(obtenerProductos);
    localStorage.setItem("carrito",JSON.stringify(obtenerProductos)); // Cargo en el LocalStorage el Nuevo arreglo con el cambio
    location.reload(); // Recargo la pagina.
};

$('#pagarCompra').on('click', () => {
    nombreApellido = $('#nombreApellido').val();
    pinCheck = $('#pinCheck').val();
    emailCheck = $('#emailCheck').val();
    tarjetaCheck = $('#tarjetaCheck').val()
    console.log(nombreApellido);
    console.log(pinCheck);
    console.log(emailCheck);
    console.log(tarjetaCheck);
    if ((nombreApellido == '') || (pinCheck == '') || (emailCheck == '') || (tarjetaCheck == '')){
        alert('Complete Todos los campos')
    }
    else{
        let obtenerProductos = [];
        localStorage.setItem("carrito",JSON.stringify(obtenerProductos))
        location.reload();
    }
})