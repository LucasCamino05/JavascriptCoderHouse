const app = new ProductoController(new ProductoModel(), new ProductoView());

const routes = [
    {path: '/agregar', action: 'agregar'},
    {path: '/pagina1', action: 'listar'},
    {path: '/pagina2', action:'buscar'}
]

const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';

const findActionByPath = (path, routes) => routes.find( r => r.path == path || undefined);

const router = () => {
    const path = parseLocation();
    const {action = 'error'} = findActionByPath(path, routes) || {} ;

    switch(action){
        case 'agregar':
            app.agregar('#app');
            break;
        case 'listar':
            app.listar('#app');
            break;
        case 'buscar':
            app.buscar('#app');
            break;
        default:
            ErrorComponent('#app');
            break;
    }
}

$(window).on('load', function(){
        router();
    }
);

$(window).on('haschange', function(){
        router()
    }
);

const ErrorComponent = (padre) => {
    $(padre).html("<h2>Error 404</h2>");
}