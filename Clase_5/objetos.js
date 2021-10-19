// Desafio Objetos

// Arrays de Objetos

let reino = prompt("Que esta buscando? Animal o Planta?");
reino = reino.toLowerCase() ;

const animales = [];
const plantas = [];

class reinoAnimal{
    constructor(reino,phylum,clase,orden,familia,genero,especie,descripcion){
        this.reino = reino;
        this.phylum = phylum;
        this.clase = clase;
        this.orden = orden;
        this.familia = familia;
        this.genero = genero;
        this.especie = especie;
        this.descripcion = descripcion;
    }
}
class reinoPlantae{
    constructor(reino,orden,genero,especie,descripcion){
        this.reino = reino;
        this.orden = orden;
        this.genero = genero;
        this.especie = especie;
        this.descripcion = descripcion;
    }
}
// Dominions de Peces

let pezBlueDempsey = new reinoAnimal("Animalia","Chordata","Actinopterygii","Perciformes","Cichlidae","Rocio","R.Octofasciata","Es un pez hibridado a partir del Jack Dempsey, que es un ciclido muy agresivo y territorial, pero este nuevo pez , no presenta ese carácter tan agresivo, por eso se le llama también ciclido pacifico.");

let pezRamirezzi = new reinoAnimal("Animalia","Chordata","Actinopterygii","Perciformes","Cichlidae","Microgeophagus","M.Ramirezi","Es un cíclido enano que tiene un cuerpo comprimido y alargado lateralmente aunque algo mas redondeado si comparamos con otros otros ciclidos enanos. Posee una aleta dorsal en forma de cresta con los tres primeros radios de color negro y mas altos que el resto, los cuales son de color anaranjado");

let pezLebiste = new reinoAnimal("Animalia","Chordata","Actinopterygii","Cyprinodontiformes","Poeciliidae","Poecilia","P.Reticulata","Guppy, lebiste o pez millón (Poecilia reticulata) es un pez ovovivíparo de agua dulce procedente de Sudamérica que habita en zonas de corriente baja de ríos, lagos y charcas. Es muy conocido en el mundo de la acuariofilia puesto que su cuidado no ofrece grandes dificultades y se reproduce con muchísima facilidad.");

let pezBetta = new reinoAnimal("Animalia","Chordata","Actinopterygii","Perciformes","Osphronemidae","Betta","B.Splenders","Uno de los más conocidos por sus colores y su llamativa cola. Elegante y estilizado, también muy territorial, y no dudará en luchar si hay otros machos en el acuario.");

// Ingreso a array

animales.push(pezRamirezzi);
animales.push(pezLebiste);
animales.push(pezBlueDempsey);
animales.push(pezBetta);


// Dominions de Peces 

let  plantaPotus = new reinoPlantae("Plantae","Alismatales","Epipremnum","Epipremnum.Sp","Conocido como potus, pothos o potos es una especie de la familia Araceae nativa del sudeste asiático (Malasia, Indonesia) y Nueva Guinea. En ocasiones es confundida con philodendron en las floristerías");

let  plantaOrquidea = new reinoPlantae("Plantae","Asparagales u Orchidales","Orchidaceae","Orchidaceae.Sp","Son una familia de plantas monocotiledóneas que se distinguen por la complejidad de sus flores y por sus interacciones ecológicas con los agentes polinizadores y con los hongos con los que forman micorrizas. La familia comprende aproximadamente 25 000 especies");

let  plantaAzalea = new reinoPlantae("Plantae","Ericales","Rhododendron","Rhododendron.Sp","Es un género de plantas angiospermas perteneciente a la familia Ericaceae, que contiene más de 1000 especies conocidas. Dado que es un género muy extenso, las plantas se organizan en subgéneros, secciones, subsecciones y series.");

let  plantaSantaRita = new reinoPlantae("Plantae","Caryophyllales","Bougainvillea","Bougainvillea.Sp","Es un género de la familia Nyctaginaceae, con 18 especies aceptadas de las 35 descritas. Es nativo de Sudamérica y ampliamente cultivado en regiones tropicales y subtropicales.");

// Ingreso a array

plantas.push(plantaPotus);
plantas.push(plantaOrquidea);
plantas.push(plantaAzalea);
plantas.push(plantaSantaRita);

if (reino == "animal"){
    let especie = prompt('Que especie busca? Ramirezzi, Lebiste, BlueDempsey, Betta');
    especie = especie.toLowerCase();

    switch (especie) {
        case "ramirezzi" :
            alert(animales[0].reino);
            alert(animales[0].phylum);
            alert(animales[0].clase);
            alert(animales[0].orden);
            alert(animales[0].familia);
            alert(animales[0].genero);
            alert(animales[0].especie);
            alert(animales[0].descripcion);
            break;
        case "lebiste":
            alert(animales[1].reino);
            alert(animales[1].phylum);
            alert(animales[1].clase);
            alert(animales[1].orden);
            alert(animales[1].familia);
            alert(animales[1].genero);
            alert(animales[1].especie);
            alert(animales[1].descripcion);
            break;
        case "bluedempsey" :
            alert(animales[2].reino);
            alert(animales[2].phylum);
            alert(animales[2].clase);
            alert(animales[2].orden);
            alert(animales[2].familia);
            alert(animales[2].genero);
            alert(animales[2].especie);
            alert(animales[2].descripcion);
            break;
        case "betta" :
            alert(animales[3].reino);
            alert(animales[3].phylum);
            alert(animales[3].clase);
            alert(animales[3].orden);
            alert(animales[3].familia);
            alert(animales[3].genero);
            alert(animales[3].especie);
            alert(animales[3].descripcion);
            break;
        default: alert('No hay datos sobre esa especie');
            break;
    }
    console.log(animales.length);
}
else{
    if (reino == "planta"){

        let genero = prompt('Seleccion el genero de la planta. Potus, Orquidea, Azalea, Santarita');
        genero = genero.toLowerCase();

        switch(genero) {
            case "potus": 
                alert(plantas[0].reino);
                alert(plantas[0].orden);
                alert(plantas[0].genero);
                alert(plantas[0].descripcion);
                break;
            case "orquidea": 
                alert(plantas[1].reino);
                alert(plantas[1].orden);
                alert(plantas[1].genero);
                alert(plantas[1].descripcion);
                break;
            case "azalea": 
                alert(plantas[2].reino);
                alert(plantas[2].orden);
                alert(plantas[2].genero);
                alert(plantas[2].descripcion);
                break;
            case "santarita": 
                alert(plantas[3].reino);
                alert(plantas[3].orden);
                alert(plantas[3].genero);
                alert(plantas[3].descripcion);
                break;
            default: alert('No hay datos sobre el genero de esa planta');
                break;
        }
    }
    else{
        alert('Seguro pusiste un Hongo ¬.¬');
    }
}