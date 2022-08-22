
/*

    //EJEMPLO 1: genero una tabla con los datos que extraigo del archivo json (array de objetos)

    const tBody = document.getElementById("tBody");

    //consulto archivo json de forma local
    fetch("./json/productos.json")
    .then(response => response.json())
    .then(productos => {
        //Como el indice de un array de objetos comienza desde 0, y yo quiero mostrarlo a partir de 1 en el html utilizo ${indice +1} en la creacion de la tabla
        productos.forEach((producto, indice) => {
            tBody.innerHTML += `  
            <tr id="producto${indice +1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.nombre}</td>
                <td>${producto.marca}</td>
                <td>${producto.modelo}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><img src="./img/${producto.nombre}"</td>
                <td><button class="btn btn-dark"> Comprar </button></td>
            </tr>
            
            `
        });
    });

*/

/*
    //EJEMPLO 2: Utilizo una funcion asincrona para mostrar los productos por el dom

    //Si yo quiero guardar los datos en variables para utilizarlos luego en una funcion de forma asincrona puedo usar la funcion async
    //Devuelve un objeto AsyncFunction

    //con async defino que la funcion puede tener codigo asincrono, no quiere decir que todo el codigo sea asincrono
    //debo definir dentro de la funcion que es asincrono y que no
    async function mostrarProductos(){
        //la llamada a fetch es asincrono, utiliza promesas para consultar valores de forma asincrona
        //utilizo await para definir que va a ser codigo asincrono, solo puedo utilizarlo dentro de una funcion asincrona, sino larga error
        const productos = await fetch("./json/productos.json");
        //tambien .json() es asincrono porque no se cuanto vaya a llevar parsear esa informacion
        const productosParseados = await productos.json();
        console.log(productosParseados);
        return productosParseados; 
    }

    //consulto la funcion mostrarProductos(), cuando este listo y obtuve mis array de productos, lo recorro y creo el html
    //mostrarProductos() retorna el array productosParseados, eso es lo que envio por parametros a la funcion flecha, utilizando el parametro productos
    mostrarProductos().then(productos => {
        productos.forEach((producto, indice) => {
            tBody.innerHTML += `  
            <tr id="producto${indice +1}">
                <th scope="row">${indice + 1}</th>
                <td>${producto.nombre}</td>
                <td>${producto.marca}</td>
                <td>${producto.modelo}</td>
                <td>${producto.precio}</td>
                <td>${producto.stock}</td>
                <td><img src="./img/${producto.nombre}"</td>
                <td><button class="btn btn-dark"> Comprar </button></td>
            </tr>
            
            `
        });
    });

*/

//EJEMPLO 3: Una forma parecida al EJEMPLO 2.

const tableId = document.getElementById("tableId");
const boton1 = document.getElementById("boton1");

async function mostrarProductos(){
    const productos = await fetch("./json/productos.json");
    const productosParseados = await productos.json();
    
    tableId.innerHTML = `
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col">Imagen</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody id="tBody">
    
            </tbody>
        </table> 
    `

    productosParseados.forEach((producto, indice) => {
        tBody.innerHTML += `  
        <tr id="producto${indice + 1}">
            <th scope="row">${indice + 1}</th>
            <td>${producto.nombre}</td>
            <td>${producto.marca}</td>
            <td>${producto.modelo}</td>
            <td>${producto.precio}</td>
            <td>${producto.stock}</td>
            <td><img src="./img/${producto.nombre}"</td>
            <td><button class="btn btn-dark"> Comprar </button></td>
        </tr>
        
        `
    });
}
/*
    //Estos dos codigos debajo hacen lo mismo
    
    boton1.addEventListener("click", () => {
        mostrarProductos();
    });

    //En esta linea, directamente invoco a la funcion mostrarProductos sin haber creado una funcion flecha
    boton1.addEventListener("click", mostrarProductos);

    //si yo escribo mostrarProductos() dentro del escuchador, lo ejecuta directamente sin esperar el click, porque yo al ponerle los () le doy a entender a js que lo ejecute inmediatamente.
    boton1.addEventListener("click", mostrarProductos());

*/

boton1.addEventListener("click", () => {
    mostrarProductos();
})


