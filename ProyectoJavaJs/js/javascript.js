/* let boton = document.getElementById("btnFiltrar");

boton.onclick = () => {
    borrarHTML();
    filtroProductos();
} */

//let btnAgregar = $('#agregar'); //Agregaria el producto al carrito, o almenos cambiaria el nro del carrito.
/* btnAgregar.onclick = () => {
    agregarBtn();
} */

// Al clickear el boton añadir un objeto a un carrito y aumentar el valor del total a pagar.

let arrayProductos = [];

class productos{
    constructor(id,nombre,stock,precio,imagen,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock; 
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
    sumaIva(){
        this.precio =  this.precio * 1.21 ; //Sumo IVA
    }
    vender(cantidad){
        this.stock = this.stock - cantidad;
    }
}

// en un futuro se borra todo.

arrayProductos.push(new productos (0, "Arroz", 100, 60, "arroz.jpg","arroz en grano, peso neto 1kg. pepe"));
arrayProductos.push(new productos (1, "Fideos", 100, 80,"fideos.jpg","Paquete de fideos tallarines de 500gr, pepe"));
arrayProductos.push(new productos (2, "Lentejas", 10, 150,"lentejas.jpg","lentejas kg"));
arrayProductos.push(new productos (3, "Porotos", 10, 140,"porotos.jpg","porotos por kg"));
arrayProductos.push(new productos (4, "Salsa Tomate", 50, 90,"salsaTomate.jpg","Caja salsa de tomate, peso 520gr"));
arrayProductos.push(new productos (5, "Papa", 15, 75,"papa.jpg","papas Fritas Lays, peso 226.6gr"));

/* HTML Agregado con DOM y jQuery */

const mostrarStock = () => {
    for (let x of arrayProductos){
        $('#cuerpo').append(`
            <div class="card text-center" style="width: 18rem;">
                <img src="./multimedia/${x.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                <div class="card-body">
                    <input type="hidden" id="idProd" value="${x.id}">
                    <h2 class="card-title" id="${x.id}">${x.nombre}</h2>
                    <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                    <p class="card-text">$ ${x.precio}</p>
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                        <button type="button" class="btn btn-success" id="btn${x.id}" onclick="agregarCarrito(${x.id})">Agregar</button>
                    </div>
                </div>
            </div>
        `);
    }
}

const prodEncontrado = (x) => {
    $('#cuerpo').append(`
        <div class="card text-center" style="width: 18rem;">
            <img src="./multimedia/${arrayProductos[x].imagen}" class="card-img-top" id="imagen" alt="Img Not found">
            <div class="card-body">
                <h2 class="card-title">${arrayProductos[x].nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${arrayProductos[x].descripcion}</h5>
                <p class="card-text">$ ${arrayProductos[x].precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" class="btn btn-success" id="btn${arrayProductos[x].id}" onclick="agregarCarrito(${arrayProductos[x].id})">Agregar</button>
                </div>
            </div>
        </div>
        `);
}

const filtroProductos = () => {
    let ingresoBuscador = $('#buscar').val();
    ingresoBuscador = ingresoBuscador.toLowerCase();
    // console.log(ingresoBuscador);
    let prodFiltrado = arrayProductos.filter(a => a.nombre.includes(ingresoBuscador) || a.descripcion.includes(ingresoBuscador));
    //console.log(prodFiltrado[0].id);
    if (prodFiltrado != ""){
        let x = prodFiltrado[0].id;
        prodEncontrado(x);
        return;
    }
    else{
        alert('Producto '+ ingresoBuscador + ' no encontrado');
        mostrarStock();
    }
}

const borrarHTML = () => {
    let header = $('#cuerpo');
    header.empty();
}

let agregarCarro = [];

const agregarCarrito = (idProd) => {
    agregarCarro.push(arrayProductos[idProd]);
    localStorage.setItem("carrito", JSON.stringify(agregarCarro));
    //console.log(agregarCarro);
}

/* const carrito = ()=>{
    for(let i = 0; i < localStorage.length; i++){
        $('#cuerpo').append(`
        <div class="card text-center" style="width: 18rem;">
            <img src="./multimedia/${i.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
            <div class="card-body">
                <input type="hidden" id="idProd" value="${i.id}">
                <h2 class="card-title" id="${i.id}">${i.nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${i.descripcion}</h5>
                <p class="card-text">$ ${i.precio}</p>
            </div>
        </div>
        `);
    }
} */

total = 0;

$(document).ready(function () {
    $("#carro").click(function (e) {
        let obtenerProductos = JSON.parse(localStorage.getItem(agregarCarro))
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
                            <button type="button" class="btn btn-success" id="btn${producto.id}" onclick="agregarCarrito(${producto.id})">Agregar</button>
                        </div>
                    </div>
                </div>
            `);
        }
        console.log(total)
        $("#carrito").append(`<p>Precio final: $${total}</p>`)
    });
});