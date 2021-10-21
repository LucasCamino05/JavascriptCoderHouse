// Al clickear el boton añadir un objeto a un carrito y aumentar el valor del total a pagar.
let arrayProductos = [];

class productos{
    constructor(id,nombre,stock,precio){
        this.id = id;
        this.nombre = nombre;
        this.stock = stock; 
        this.precio = precio;
    }

    sumaIva(){
        this.precio =  this.precio * 1.21 ; //Sumo IVA
    }

    vender(cantidad){
        this.stock = this.stock - cantidad ;
    }
}

let arroz = new productos (1, "Arroz", 100, 60);

let fideos = new productos (2, "Fideos", 100, 80);

let lentejas = new productos (3, "Lentejas", 10, 150)

let porotos = new productos (4, "Porotos", 10, 140)

let salsaTomate = new productos (5, "Salsa Tomate", 50, 90)

let papa = new productos (6, "Papa", 15, 75);