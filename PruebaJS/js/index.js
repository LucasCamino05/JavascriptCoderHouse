const URLJSON = './json/datos.json';
const productos = [];
const carrito = [];

$(document).ready(() => {
    $.getJSON(URLJSON,(respuesta) => {
        for (let z of respuesta){
            productos.push(z);
        }
        //console.log(productos);
        for (let x of productos){
            /* console.log(respuesta); */
            $('#cuerpo').append(`
                <div class="card text-center" style="width: 18rem;" id='btnBorrarCarrito'>
                    <img src="./multimedia/${x.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                    <div class="card-body">
                        <input type="hidden" id="idProd" value="${x.id}">
                        <h2 class="card-title" id="${x.id}">${x.nombre}</h2>
                        <h5 class="card-subtitle mb-2">${x.descripcion}</h5>
                        <p class="card-text">$ ${x.precio}</p>
                        <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                            <button type="button" class="btn btn-success" onclick="agregarCarrito(${x.id})">Agregar</button>
                        </div>
                    </div>
                </div>
            `);
        }
        $('#cuerpo').fadeIn('5000');
    })
});

const agregarCarrito = (idProd) => {
    if(carrito.some(elemento => elemento == productos[idProd])){
        productos[idProd].caja = productos[idProd].caja + 1;
        //console.log(productos[idProd].caja)
    }
    else{
        productos[idProd].caja = productos[idProd].caja + 1;
        carrito.push(productos[idProd]);
    }
    //carrito.push(productos[idProd]);
    $('#carrito_cantidad').html(`${carrito.length}`);
    //console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
};