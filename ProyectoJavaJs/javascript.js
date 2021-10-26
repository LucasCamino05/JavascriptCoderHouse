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

let arroz = new productos (1, "Arroz", 100, 60, "arroz.jpg","Arroz en grano, peso neto 1kg");
let fideos = new productos (2, "Fideos", 100, 80,"fideos.jpg","Paquete Tallarines 500gr");
let lentejas = new productos (3, "Lentejas", 10, 150,"lentejas.jpg","Lentejas kg");
let porotos = new productos (4, "Porotos", 10, 140,"porotos.jpg","Porotos por kg");
let salsaTomate = new productos (5, "Salsa Tomate", 50, 90,"salsaTomate.jpg","Caja salsa de tomate, peso 520gr");
let papa = new productos (6, "Papa", 15, 75,"papa.jpg","Papas Fritas Lays, peso 226.6gr");
let = new productos (7, "", 50, 80, ".jpg", "");
let = new productos (8, "", 50, 80, ".jpg", "");

arrayProductos.push(arroz);
arrayProductos.push(fideos);
arrayProductos.push(lentejas);
arrayProductos.push(porotos);
arrayProductos.push(salsaTomate);
arrayProductos.push(papa);

const mostrarStock = () => {
    for (const producto of arrayProductos){
        let contenedor = document.createElement('div');
        contenedor.innerHTML = 
        `
        <div class="card text-center" style="width: 18rem;">
            <img src="./multimedia/${producto.imagen}" class="card-img-top" alt="Img Not found">
            <div class="card-body">
                <h2 class="card-title">${producto.nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${producto.descripcion}</h5>
                <p class="card-text">${producto.precio}</p>         
                <a href="#" class="btn btn-primary" onclick="">Añadir al Carrito</a>
            </div>
        </div>
        `
        document.getElementById('cuerpo').appendChild(contenedor);
    }
}

// ¿Necesito un orden en los arrays?

/* console.log(arrayProductos);

arrayProductos.sort (function(a,b){
    if (a.nombre > b.nombre){
        return 1;
    }
    if(a.nombre < b.nombre){
        return -1;
    }
})
console.log(arrayProductos);
 */
