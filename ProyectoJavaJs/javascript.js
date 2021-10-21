// Al clickear el boton añadir un objeto a un carrito y aumentar el valor del total a pagar.
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

