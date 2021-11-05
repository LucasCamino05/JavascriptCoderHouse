productos = [{id: 1, nombre:"papa" ,precio:32},
    {id: 2, nombre: "uva",precio:42},
    {id: 3, nombre: "manzana",precio:23},
    {id: 4, nombre: "perro",precio:1},
    {id: 5, nombre: "gato",precio:2}];
compra = [];

const mostrarStock = () => {
    for (let x of productos){
        $('#cuerpo').append(`
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${x.nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                <p class="card-text">$ ${x.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">             
                    <button type="button" class="btn btn-success" id="agregar">Agregar</button>
                </div>
            </div>
        </div>
        `);
    }
}

$('#agregar').on('click', function(){
    compra.push(productos);
})

function carrito() {
    for (let x of compra){
        $('#cuerpo').append(`
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <h2 class="card-title">${x.nombre}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                <p class="card-text">$ ${x.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">             
                    <button type="button" class="btn btn-success" id="agregar" onclick="">Agregar</button>
                </div>
            </div>
        </div>
        `);}
    }
