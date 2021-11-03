const productos = [
    {id:0, nombre:'Termo Acero', descripcion:'Termo de acero que mantiene la temperatura', precio:2250.85},
    {id:1, nombre:'Mate con bombila', descripcion:'Mate de madera com bobilla de alpaca', precio:580.00},
    {id:2, nombre:'Vaso Termico', descripcion: 'Vaso de acero color azul', precio:826.80},
    {id:3, nombre:'Posa Vaso', descripcion:'Posa vaso de goma', precio:89.00}
]

const mostrarProductos = () => {
    for (const producto of productos){
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

//hacer una funcion que me traiga el texto del span, 
//lo combierta  a numero , lo incremente en 1 y luego cambiamos el 
//texto del span

const obtenerCantidadProductosComprados = (idProducto) => {
    console.log(idProducto);
    var elemento = document.getElementsByTagName('span')[0]
    var cantidad = parseFloat(elemento.innerHTML) + 1;
    elemento.innerHTML = cantidad;
    agregarProductoAlCarrito(idProducto);
}

let prod = [
    {id:0, nombre:'Termo Acero', descripcion:'Termo de acero que mantiene la temperatura', precio:2250.85}
]

localStorage.setItem('Carrito',JSON.stringify(prod));

let carrito = JSON.parse(localStorage.getItem('Carrito'));

//guardar en un arreglo de objetos el producto que compramos
const agregarProductoAlCarrito = (idProducto) => {
    //buscar en el arreglo de productos el producto que compro
    let productoComprado = productos.find(x=>x.id ==idProducto);
    carrito.push(productoComprado);
    localStorage.setItem('carrito',JSON.stringify(carrito));
}

const verCarrito = () => {
    //dibuje un un div todos los productos
    let compras = JSON.parse(localStorage.getItem('carrito'));
    let contenedor = document.createElement("div");
    
    for (const prod of compras){
        let contenedor = document.createElement("div");
        contenedor.innerHTML = 
        `
        <h2>${prod.descripcion}</h2>
        `
        document.body.appendChild(contenedor);
    }
    
}