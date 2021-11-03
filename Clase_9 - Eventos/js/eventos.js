let boton = document.getElementById("btnFiltrar");
boton.addEventListener("click", filtrarDatos);

let inputBusqueda = document.getElementById("busqueda");
inputBusqueda.addEventListener("keyup", busquedaPorTeclado);

function busquedaPorTeclado(){
    console.log(inputBusqueda.value);
    if (inputBusqueda.value.length > 3){
        filtrarDatos();
    }
}

/*boton.addEventListener("mousemove", mouseMove);
function mouseMove(){
    console.log('mouseeeee')
}*/
const productos = [
    {id:0, nombre:'Termo goma', descripcion:'Termo de acero que mantiene la temperatura', precio:2250.85},
    {id:1, nombre:'Mate con bombila', descripcion:'Mate de madera com bobilla de alpaca', precio:580.00},
    {id:2, nombre:'Vaso Termico', descripcion: 'Vaso de acero color azul', precio:826.80},
    {id:3, nombre:'Posa Vaso', descripcion:'Posa vaso de goma', precio:89.00}
]

let productosFiltrados = productos;

function filtrarDatos(){
    //a partir del arreglo de productos armar otro arreglo con los productos que coinciden con la busqueda
    let palabraClave = document.getElementById("busqueda");
    //console.log('Campo a buscar', palabraClave.value);
    productosFiltrados = productos.filter(elemento => elemento.descripcion.includes(palabraClave.value) || elemento.nombre.includes(palabraClave.value));
    
    limpiarHTML();
    mostrarProductos();
    console.log(productosFiltrados);

}

const limpiarHTML = () =>{
    /*eliminamos el div*/
    let fila = document.getElementById('fila');
    document.body.removeChild(fila);

    
    fila = document.createElement("div");   //volvio a crear el div
    let a = document.createAttribute("id");
    a.value='fila';
    fila.setAttributeNode(a);
    document.body.appendChild(fila);
}

const mostrarProductos = () => {
    for (const producto of productosFiltrados){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = 
        `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><b>$ ${producto.precio}</b></p>
                    <a href="#" class="btn btn-primary" onclick=obtenerCantidadProductosComprados(${producto.id})>Comprar</a>
                </div>
            </div>
               
        `
        document.getElementById('fila').appendChild(contenedor);
      
    }
}