$(document).ready(
    $('#btnFiltrar').on('click', () => {
        //console.log($('#buscar').val());
        let prodFilt = $('#buscar').val();
        prodFilt = prodFilt.toLowerCase();
        //console.log(prodFilt);
        if (prodFilt != ''){
            borrarHTML();
            //console.log('Su producto es ', prodFilt);
            let prodFiltrado = productos.filter(a => a.nombre.includes(prodFilt) || a.descripcion.includes(prodFilt));
            for (let x of prodFiltrado){
                /* console.log(respuesta); */
                $('#cuerpo').append(`
                    <div class="card text-center" style="width: 18rem;">
                        <img src="./multimedia/${x.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                        <div class="card-body">
                            <input type="hidden" id="idProd" value="${x.id}">
                            <h2 class="card-title" id="${x.id}">${x.nombre}</h2>
                            <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                            <p class="card-text">$ ${x.precio}</p>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                                <button type="button" class="btn btn-success" onclick="agregarCarrito(${x.id})">Agregar</button>
                            </div>
                        </div>
                    </div>
                `);
            }
            $('#cuerpo').fadeIn('5000');
        }
        else{
            borrarHTML();
            for (let x of productos){
                /* console.log(respuesta); */
                $('#cuerpo').append(`
                    <div class="card text-center" style="width: 18rem;">
                        <img src="./multimedia/${x.imagen}" class="card-img-top" id="imagen" alt="Img Not found">
                        <div class="card-body">
                            <input type="hidden" id="idProd" value="${x.id}">
                            <h2 class="card-title" id="${x.id}">${x.nombre}</h2>
                            <h5 class="card-subtitle mb-2 text-muted">${x.descripcion}</h5>
                            <p class="card-text">$ ${x.precio}</p>
                            <div class="btn-group" role="group" aria-label="Basic mixed styles example">            
                                <button type="button" class="btn btn-success" onclick="agregarCarrito(${x.id})">Agregar</button>
                            </div>
                        </div>
                    </div>
                `);
            }
            $('#cuerpo').fadeIn('5000');
        }
    })
)

const filtro = (prodFilt) => {
    console.log(prodFilt);
}

const borrarHTML = () => {
    let header = $('#cuerpo');
    header.empty();
}