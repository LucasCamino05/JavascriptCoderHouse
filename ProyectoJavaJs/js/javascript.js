let boton = document.getElementById("btnFiltrar");

boton.onclick = () => {
    borrarHTML();
    filtroProductos();
}

let btnAgregar = $('#agregar'); //Agregaria el producto al carrito, o almenos cambiaria el nro del carrito.
btnAgregar.onclick = () => {
    agregarBtn();
}

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
                <h2 class="card-title">${x.nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                <p class="card-text">$ ${x.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">             
                    <button type="button" class="btn btn-success" id="agregar" onclick="">Agregar</button>
                </div>
            </div>
        </div>
        `);
    }
}
const prodEncontrado = (x) =>{
    $('#cuerpo').append(`
        <div class="card text-center" style="width: 18rem;">
            <img src="./multimedia/${arrayProductos[x].imagen}" class="card-img-top" id="imagen" alt="Img Not found">
            <div class="card-body">
                <h2 class="card-title">${arrayProductos[x].nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${arrayProductos[x].descripcion}</h5>
                <p class="card-text">$ ${arrayProductos[x].precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">             
                    <button type="button" class="btn btn-success" id="agregar" onclick="">Agregar</button>
                </div>
            </div>
        </div>
        `);
}

let prodFiltro = arrayProductos;

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

const agregarBtn = (idProducto) => {
    console.log(idProducto);
    let elemento = $('span');
    console.log(elemento)
    let cantidad = elemento.val() + 1;
    $('.carrito').append(cantidad);
}
