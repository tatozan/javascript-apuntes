/*      

    EVENTOS    

    Los eventos son la manera que tenemos en Js de controlar las acciones de los usuarios
    y definir un comportamiento de la pagina o aplicacion cuando se produzcan.

    Es posible definir que sucede cuando se produce un evento,
    por ejemplo, cuando se realiza un click en cierto elemento o se inserta un texto en un determinado campo
    js permite asignar una funcion a cada uno de los eventos, mediante funciones normales o funciones flecha
    Estos reciben el nombre de event handlers o manejadores de eventos o escuchador de eventos.
    Entonces por cada evento, ejectuamos una funcion asociada.

    Javascript nos permite escuchar eventos sobre elementos seleccionados.
    Cuando escuchamos el evento que esperamos, se ejecuta la funcion que definimos como respuesta,
    a esta escucha se lo denomina EVENT LISTENER.

 */

/*

    COMO DEFINIMOS EVENTOS EN JS

*/

/*

    //TENEMOS TRES FORMAS:
    //LA PRIMERA y mas directa es mediante un metodo, addEventListener(), es como una vieja chismosa

    //al ser un objeto del html se recomienda consultarlo mediante una constante
    const boton1 = document.getElementById('boton1');

    //creamos un evento escuchador de tipo click

    //utilizar comillas simples y comillas dobles es indistinto
    //el primer argumento es el tipo de accion que espero del usuario, el evento en si mismo
    //el segundo argumento enviamos la funcion que responde a ese evento
    boton1.addEventListener("click", () => {
        console.log("Di click en el boton");
    });

    //SEGUNDA FORMA: es mediante las propiedades del nodo html
    boton1.onclick = () => {
        console.log("Di click en el boton utilizando propiedad onclick");
    }

    //Una de las diferencias entre utilizar metodos y utilizar propiedades es que,
    //al utilizar propiedades, asigno a la propiedad onclick en este caso, una accion, y 
    //si asignamos en otra linea otra accion para la misma propiedad del elemento, se sobreescribiria debido a que el codigo se ejecuta en cascada.
    //estamos cambiando el valor, es como cambiar el valor de una variable.
    //por lo tanto puedo hacer solamente un evento del mismo tipo en un elemento, en cambio en el addEventListener()
    //puedo generar una o mas funciones sobre un mismo evento.
    //agregar mas de una funcion a un evento no es comun
    boton1.onclick = () => {
        console.log("Di click en el boton utilizando propiedad onclick otra vez");
    }

    //se ejecutarian ambos metodos, y mostraria dos resultados
    boton1.addEventListener("click", () => {
        console.log("Di click en el boton utilizando metodo");
    });

    //Fran prefiere utilizar addEventListener() porque es mas especifico, porque te genera un evento escuchador de tipo click, y no le aplico una propiedad al objeto

    //TERCERA FORMA: generar un evento mediante html, no hacerlo en un archivo aparte, sino dentro del html, en los atributos de la etiqueta
    //no se recomienda porque es inseguro, muestro el codigo en forma publica, y no es comodo para realizar una funcion tan larga
    //esto es en vanilla js, js puro
    //En react se utiliza de esta manera, pero da un plus de seguridad para abstraernos de los problemas descriptos anteriormente

*/

/*

    EVENTOS MAS COMUNES:
    EVENTOS MOUSE, EVENTOS DE TECLADO, EVENTO CHANGE, EVENTO INPUT

*/

/*

    //EVENTO INPUT: se ejecuta el evento input cada vez que el usuario ingrese o elimine texto, se ejecuta.
    //por ejemplo en un buscador de ecommerce a medida que escribo me va mostrando resultados, hace una prebusqueda
    const input1 = document.getElementById('input1');

    //el elemento color sirve para que el usuario elija un color
    const inputColor = document.getElementById('inputColor');


    input1.addEventListener('input', () => {
        //consulto el valor que estoy ingresando
        console.log(input1.value);
    });

    //con este escuchador, lo que hacemos es cambiarle el fondo al body dinamicamente con lo que va eligiendo el usuario en el input color
    inputColor.addEventListener('input', () => {
        //porque es un hijo principal, puedo consultar directamente por el body, cada html tiene una cabecera y tiene un body
        //propiedad style, todas las propiedades css las puedo agregar para documentos del dom
        //no creamos una clase para generar objetos de cada input, porque se generarian muchos y no tiene sentido
        document.body.style.backgroundColor = inputColor.value;
        console.log(inputColor.value);
    });

*/

/*

    EVENTO CHANGE: se activa cuando detecta un cambio en el valor de un elemento, un cambio en un input

*/

const input1 = document.getElementById('input1');
const botonBusqueda = document.getElementById('botonBusqueda');

//se comporta de forma similar al buscador de google
//realiza prebusqueda, busca al hacer click y busca al darle enter

//realizo prebusqueda
input1.addEventListener('input', () => {
    //consulto el valor que estoy ingresando
    console.log(input1.value);
});

//busca cuando doy enter, el usuario puede ir realizando prebusquedas con el escuchador anterior, pero una vez que le da enter, se activa el evento change
input1.addEventListener('change', () => {
    console.log(input1.value);
});

//busca una vez le de click
botonBusqueda.addEventListener('click', () => {
    console.log(input1.value);
});

/*

    EVENTO SUBMIT: 

*/