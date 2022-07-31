class Producto {
    constructor(id, nombre, marca, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}


const producto1 = new Producto(1, "Yerba Mate", "La Yerbita", 400, 20);
const producto2 = new Producto(2, "Fideos", "Fidein", 100, 25);
const producto3 = new Producto(3, "Cafe", "Le Cafe", 500, 22);
const producto4 = new Producto(4, "Arroz", "Arrocin", 200, 15);
const producto5 = new Producto(5, "Lentejas", "Lentejin", 250, 30);

const productos = [producto1, producto2, producto3, producto4, producto5];

const divProductos = document.getElementById('productos');

productos.forEach(producto => {
    divProductos.innerHTML += `

    <div class="card productos" id="producto${producto.id} style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.marca}</p>
            <p class="card-text">${producto.precio}</p>
            <p class="card-text">${producto.stock}</p>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>

    </div>
    
    `
});