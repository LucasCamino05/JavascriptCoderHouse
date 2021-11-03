
////////////////////// alertas de bienvenida 
alert("Bienvenido a la web de Mercadona !")
confirm ("Queres ver nuestros productos seleccionados para vos?")
/////////////////////// array con los productos de la gondola 
const productos = []

//////////////////////////constructor de productos en gondola
class gondola {
    constructor(nombre, precio, marca) {

    this.nombre = nombre.toLowerCase();
     this.precio = parseInt(precio)  ; 
    this.marca = marca.toLowerCase();
    }
 }
 ///////////////////////////// ingresamos productos al objeto gondola 
 productos.push(new gondola("yerba", 400 , "playadito"));
 productos.push(new gondola("fideos", 42, "marolio"));
 productos.push(new gondola("pan", 80 , "mipan"));
 productos.push(new gondola("azucar", 68 , "ledesma"));
 productos.push(new gondola("queso", 380, "punta del agua"));
 productos.push(new gondola("aceite", 155 , "cocinero"));


console.log(productos)
////////////////////////// el usuario elije como filtrar

function elejirfiltro ( ) {

/*     let orden = prompt( "Elegi, queres ordenarlos por precio o alfabeticamente?").toLowerCase() */
    let orden = parseInt (prompt(" Elegi, queres ordenarlos por precio (1) o alfabeticamente (2)? *Ingresa el numero "))
 //////////////////////// condicional segun eleccion del usuario 
    if ( orden == 1) {

        console.log("Elegiste por precio") 
        
        productos.sort(  function (precio1,precio2  ) {

            if (precio1.precio > precio2.precio) { /////////////////// compara 2 precios 

              return 1;
            } else if (precio1.precio < precio2.precio) {
              return -1;
            } else {
                return 0;
            }

          }); console.log(productos);


    } else if ( orden == 2) {

        console.log("Elegiste alfabeticamente")

        productos.sort(function (a, b) {
            if ( a.nombre > b.nombre ) //////////////////// compara 2 nombres 
              return 1;
            if ( a.nombre < b.nombre )
              return -1;
            return 0
        });  console.log(productos);

    } else {
        console.log("error")
    }
}


 elejirfiltro()
