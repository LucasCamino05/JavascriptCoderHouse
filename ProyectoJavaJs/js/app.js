total = 0;

$(document).ready(function () {
        let obtenerProductos = JSON.parse(localStorage.getItem("carrito"))
        for (const producto of obtenerProductos) {
            total += parseFloat(producto.precio);
            //Por cada producto además de los datos agregamos un botón 
            $('#carrito').append(`
                <div class="card text-center" style="width: 18rem;">
                    <img src="./multimedia/${producto.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                    <div class="card-body">
                        <input type="hidden" id="idProd" value="${producto.id}">
                        <h2 class="card-title" id="${producto.id}">${producto.nombre}</h2>
                        <h5 class="card-subtitle mb-2 text-muted">${producto.descripcion}</h5>
                        <p class="card-text">$ ${producto.precio}</p>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                            <button type="button" class="btn btn-danger" id="btn${producto.id}" onclick="agregarCarrito(${producto.id})">Eliminar</button>
                        </div>
                    </div>
                </div>
            `);
        }
        console.log(total)
        $("#carrito").append(`<p>Precio final: $${total}</p>`)
});