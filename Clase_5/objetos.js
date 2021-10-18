class Fruta{
    constructor(nombre,color,cantidad,descripcion){
        this.nombre=nombre;
        this.color=color;
        this.cantidad=cantidad;
        this.descripcion=descripcion;
    }
}

let manzana = new Fruta("manzana","rojo",5,"manzana");
let pera = new Fruta("pera","amarillo",5,"pera");
let frutilla = new Fruta("frutilla","rojo",10,"frutilla");

console.log(Fruta);