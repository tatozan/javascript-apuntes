/*
    
    LIBRERIAS
    Son codigos pre-escritos que facilitan el desarrollo de aplicaciones.
    Podemos pensar las librerias como pequeños programas escritos por terceros que podemos 
    incorporar a nuestra aplicacion para resolver problemas determinados.

*/

/*

    La diferencia entre libreria y framework es que la libreria puedo verla como una caja de heramientas
    que solo utilizo lo que necesito y el framework es un marco de trabajo que me trae todo un codigo y lo tengo que utilizar si o si
    Ejemplo libreria es bootstrap, framework angular. React es un termino medio.

*/

/*

        Que problemas pueden resolver?
        -Validacion de datos
        -Interfaces visuales
        -Manejador de fechas
        -AJAX
        -etc

*/

/*

    Implementacion dos formas:
    -Descarga de archivos: ejemplo <script src="js/libreria.js"></script>
    -CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js">

*/

/*

    ARCHIVO MINIFICADO
    Son archivos JS cuyo contenido se encuentra escrito en una unica linea y de corrido,
    sin saltos de linea ni espacios innecesarios para achicarlos
    Es una practica comun cargar las librerias en formato minificado o minified.

*/

/*

    Las librerias mas utilizadas son Moment, React, lodash, vue, bootstrap.js, yahoo user interface, Polyfill, backbone.js, jsTimezoneDetect
    depende del pais en realidad el uso.

*/

/*

    SWEETALERT2: Libreria para crear alertas personalizadas atractivas, sencillas, customizables
    e intercativas. Reemplaza al tipico alert() tradicional. No son alertas en realidad, si no modales de bootstrap

*/
/*

    const boton1 = document.getElementById("boton1");

    boton1.addEventListener("click", () => {
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada',
            text: 'Los productos se van a enviar a la brevedad',
        });
    });

*/

/*

    Toastify JS: libreria js que muestra mensajes no tan invasivos como sweetalert2

*/

/*
const boton = document.getElementById("boton1");

boton1.addEventListener("click", () => {
    Toastify({
        text: "Producto agregado a mi carrito",
        duration: 3000,
        //enlace para el mensaje que se genera si lo toco
        //destination: "https://github.com/apvarun/toastify-js",
        //newWindow: true,
        close: true,
        //animacion del boton
        gravity: "top", // `top` or `bottom`
        //posicion dentro de la ventana
        position: "left", // `left`, `center` or `right`
        //si em detengo con el puntero del mouse dentro del mensaje, no desaparece
        stopOnFocus: true, // Prevents dismissing of toast on hover
        //modificar los estilos de css
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        //cada vez que doy click en el mensaje puedo ejecutar una funcion
        onClick: function(){
            console.log("diste click");
        } // Callback after click
      }).showToast();
});
*/

class Producto{
    constructor(nombre, marca, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    };
}

const producto1 = new Producto("Cafe", "Le cafe", 430, 10);
const producto2 = new Producto("Arroz", "Arrocin", 120, 3);
const producto3 = new Producto("Arroz", "Arrocin", 120, 3);
const producto4 = new Producto("Arroz", "Arrocin", 120, 3);
const producto5 = new Producto("Arroz", "Arrocin", 120, 3);

const productos=[producto1, producto2, producto3, producto4, producto5];

const botonCarrito = document.getElementById("carrito");
const divProductos = document.getElementById("divProductos");

productos.forEach((producto, indice) => {
    divProductos.innerHTML += `
        <div class="card border-secondary mb-3" id="producto${indice}" style="max-width: 20rem; margin: 3px">
            <div class="card-header">${producto.nombre}</div>
            <div class="card-body">
                <h4 class="card-title">${producto.marca}</h4>
                <p class="card-text">$${producto.precio}</p>
                <p class="card-text">${producto.stock}</p>
                <button class="btn btn-secondary"> <i class="fas fa-cart-plus"></i> </button>
            </div>
    </div>
    `
});

productos.forEach((producto, indice) => {
    document.getElementById(`producto${indice}`).lastElementChild.
    lastElementChild.addEventListener("click", () => {
        Toastify({
            text: "Producto agregado a mi carrito",
            duration: 3000,
            //enlace para el mensaje que se genera si lo toco
            //destination: "https://github.com/apvarun/toastify-js",
            //newWindow: true,
            close: true,
            //animacion del boton
            gravity: "top", // `top` or `bottom`
            //posicion dentro de la ventana
            position: "right", // `left`, `center` or `right`
            //si em detengo con el puntero del mouse dentro del mensaje, no desaparece
            stopOnFocus: true, // Prevents dismissing of toast on hover
            //modificar los estilos de css
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            //cada vez que doy click en el mensaje puedo ejecutar una funcion
            onClick: function(){
                console.log("diste click");
            } // Callback after click
        }).showToast();      
    });
});

botonCarrito.addEventListener("click", () => {
    Swal.fire({
        title: 'Carrito',
        showCancelButton: true,
        cancelButtonText: 'Seguir comprando',
        confirmButtonText: 'Finalizar compra',

      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Compra finalizada', '', 'success');
        }
      });
});

