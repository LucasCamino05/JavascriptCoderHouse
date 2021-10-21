class Producto{
    constructor(id,nombre,precio,stock){
        this.id = id;
        this.producto = nombre;
        this.precio = precio;
        this.stock = stock ; 
    }
    sumaIva(){
        this.precio =  this.precio * 1.21 ;
    }
    vender(cantidad){
        this.stock = this.stock - cantidad ;
    }
}

let producto1 = new Producto(1,'Arroz',100,20);
let producto2 = new Producto(2,'Fideos',200,20);
producto1.sumaIva();

localStorage.setItem('1',JSON.stringify(producto1));
localStorage.setItem('2',JSON.stringify(producto2));

producto1.vender(3);
producto2.vender(10);

localStorage.setItem('1',JSON.stringify(producto1));
localStorage.setItem('2',JSON.stringify(producto2));