class Producto {
    //coloco valores por defecto por si creamos un objeto
    constructor(nombre = "predeterminado", marca = "predeterminado", precio = 1, stock = 1){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}

function buscarProducto(productos){
    let nombreProducto = prompt("Ingrese un nombre del producto");

    let productoBuscado = productos.find(producto => producto.nombre == nombreProducto);

    //si find() no encuentra resultados devuelve undefined
    if(productoBuscado == undefined){
        console.log("Producto no encontrado");
    } else {
        console.log(productoBuscado);
    }
}

function buscarProductos(productos){
    let precio = parseFloat(prompt("Ingrese un precio"));
    let productosBuscados = productos.filter(producto => producto.precio >= precio);

    if(productosBuscados.length == 0){
        console.log("No hay productos con dichas caracteristicas");
    } else {
        console.log(productosBuscados);
    }
}

function ordenarProductos(productos){

    let metodoOrdenamiento = parseInt(prompt("Ingrese 1 para ordenar de menor a mayor, 2 para ordenar de mayor a menor"))

    if(metodoOrdenamiento === 1){
        console.log(productos.sort((producto1, producto2) => producto1.precio - producto2.precio));
    } else if(metodoOrdenamiento === 2){
        console.log(productos.sort((producto1, producto2) => producto2.precio - producto1.precio));
    }
    
}

/*

    const producto1 = new Producto("Cafe", "Cafecito", 100, 20);
    const producto2 = new Producto("Te", "Tecito", 120, 25);
    const producto3 = new Producto("Arroz", "Arrocin", 200, 10);
    const producto4 = new Producto("Fideos", "Fideito", 80, 30);

    const productos = [producto1, producto2, producto3, producto4];

*/

const productos = [];

let precio, stock, nombre, marca, continua;

//solicitud datos al usuario
do {
    //evaluo que no me manden un string vacio
    do{
        nombre = prompt("Ingrese un nombre de producto").toLowerCase();
        marca = prompt("Ingrese marca del producto").toLowerCase();
        //el metodo length() sirve tambien para saber la cantidad de caracteres de un string

    } while (nombre.length == 0 || marca.length == 0);   

    //do...while de validacion, me aseguro que me pasen un precio y stock numerico, si me ingresa un valor no numerico, le pide de nuevo ingresar datos
    do {
        precio = parseFloat("Ingrese un precio del producto");
        stock = parseInt(prompt("Ingrese stock del producto"));

    } while(isNaN(precio) || isNaN(stock) || (precio <= 0 || stock <= 0));

    const producto = new Producto(nombre, marca, precio, stock);
    productos.push(producto);

    continua = prompt("Desea ingresar mas productos?").toLowerCase();
} while(continua  != "no"); //(continua) es lo mismo

let respuesta;

do{
    respuesta = parseInt(prompt(`Ingrese una opcion:
    1- Buscar producto
    2- Buscar productos por precio
    3- Ordenar de menor a mayor`));

} while (respuesta < 1 && respuesta >3);

switch (respuesta){
    case 1:
        buscarProducto(productos);
        break;
    
    case 2:
        buscarProductos(productos);
        break;
    
    case 3:
        ordenarProductos(productos);

    default:
        alert("Opcion no valida");
}