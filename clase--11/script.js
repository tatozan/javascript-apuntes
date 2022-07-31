/*

    CLASE 11 WORKSHOP

*/

class Tarea{
    constructor(nombre, descripcion, estado){
        this.nombre  = nombre;
        this.descripcion = descripcion;
    }
}


//siempre crear array de objetos por constante, lo hicimos asi porque queria mostrar un ejemplo que solo funciona con let
//linea 18-35 puede resumirse en una sola linea utilizando const, pero todavia no lo vemos
let tareas = [];

//comprobamos si el localStorage existe el array de tareas, por si el usuario nunca lo creo o borro el historial
//NULL si no existe o array de tareas si existe
//hago esta comprobacion porque si el localStorage existiese con un array previamente, y luego yo cargo datos, sobreescribiria esa informacion
//IMPORTANTE: hacemos esta comprobacion tambien porque nosotros si solo trabajamos con un array de objetos, cada vez que se cargue la pagina, se borrarian esos datos, y para que sea persistente en el tiempo necesitamos a localStorage
if(localStorage.getItem('tareas')){
    //si existe, lo traigo, como JSON lo trae en formato texto, tengo que convertirlo
    //por eso no deberia traerlo asi, yo necesito un array de tareas, 
    //tareas = localStorage.getItem('tareas');
    //lo paso de JSON a objeto js
    tareas = JSON.parse(localStorage.getItem('tareas'));
} else {
    //convierto el array a formato texto (JSON), tareas se encuentra vacio porque todavia no agregaron tareas
    //genero el localStorage
    //si o si tengo que almacenarlo en formato JSON en el localStorage, porque no puedo almacenar objetos, solo texto
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

//consulto DOM

const formTareas = document.getElementById("formTareas");
const divTareas = document.getElementById("divTareas");
const botonTareas = document.getElementById("botonTareas");

formTareas.addEventListener("submit", (event) => {
    //prevengo el comportamiento de los formularios para que no me recarge la pagina
    event.preventDefault();
    //hay dos formas de consultar los valores del input, una de ellas es utilizar .value
    //la segunda es mediante un objeto de js
    //genera un objeto con todos los datos del formulario, sean 1 o mas
    
    //IMPORTANTE: Podemos crear varios input sin necesidad de crear un formulario, y luego una vez que se de click en un boton, tomar ese evento y cargar los valores de los diferentes input.
    //Por que entonces utilizamos formularios? Se utilizan los formularios por cuestion de practicidad y velocidad en la consulta de los datos, debido a,
    //que si colocamos todos los input en un formulario, podemos directamente, una vez que se crea el elemento submit al dar click en el boton, guardar todos los valores de esos input
    //en una instancia de la clase de js llamada FormData() y consultar su valor de forma mucho mas rapida.
    //Es lo que deberia utilizarse, porque en un formulario pueden haber muchos input y seria tedioso utilizar el atributo .value de los elementos del dom, uno a uno.

    //target envia todo el html del formulario cuando doy click en el boton del formulario
    //es lo mismo que hicieramos document.getElementById("formTareas");
    //la clase FormData() recibe como parametro un formulario, en este caso con target, en donde target es el elemento del dom que ejecuto el evento submit
    //el formulario se envia en el estado actual en el que esta, con los input como los envio el usuario

    //EVENT: evento
    //TARGET: el elemento que ejecuto ese evento
    //para identificar el input al que vamos 
    
    //Lo guardamos con un let, en vez de una constante, porque cada vez que se ejecute los valores se van a ir modificando
    //en realidad por ser variables de ambito local, no habria problema en utilizar let o const, pero es para evitar posibles problemas
    let dataForm = new FormData(event.target);

    console.log(dataForm.get("nombre"), dataForm.get("descripcion"));

    //es exactamente lo mismo consultar por el value, pero se recomienda el anterior
    //let nombre = document.getElementById("nombreTarea").value;
    //let descripcion = document.getElementById("descripcionTarea").value;

    let tarea = new Tarea(dataForm.get("nombre"), dataForm.get("descripcion"));

    tareas.push(tarea);

    console.log(tareas);

    //donde guardo las tareas ademas del array en el localStorage
    //porque mi localStorage voy a guardar todas las tareas que crea mi usuario
    localStorage.setItem("tareas", JSON.stringify(tareas));

    //reseteo el formulario
    formTareas.reset();

});

//como consultamos en el array global, es recomendable consultar por el localStorage
botonTareas.addEventListener("click", () => {
    let arrayStorage = JSON.parse(localStorage.getItem("tareas"));

    //borro el contenedor para cuando de clocik a mostrar tareas no me acumule las tareas.
    divTareas.Tareas.innerHTML += "";
    //forEach() puede recibir dos parametros (objeto, indice)
    //cuando no le solicitamos id al usuario, que comunmente no se hace, tenemos que generarlo, por eso consultamos el indice del array para generar un id unico. 
    arrayStorage.forEach((tarea, indice) => {
        divTareas.Tareas.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin: 4px;">
            <div class="card-header">${tarea.nombre}</div>
            <div class="card-body">
                <p class="card-title">${tarea.descripcion}</p>
                <button class="btn btn-danger"> Eliminar tarea </button>
            </div>
        </div>   
        `
    })
})

//para eliminar cada tarea debemos hacerlo dinamicamente, y eliminar la parte html generada, del localStorage y del arreglo
//por eso, una vez generada las tareas utilizamos nuevamente forEach() para identificar cada objeto con su id.

//agregamos un evento escuchador a cada elemento del dom, en realidad no es la solucion mas optima, la mas optima es utilizando herencia
//Hay dos formas de solucionar el eliminar cada tarea, la primera consultando con el id del elemento, y la segunda es agregando un id al boton,
//la primera es mas recomendada para evitar agregar id al elemento de forma innecesaria

//Ahora debemos identificar mediante DOM el boton eliminar que corresponde a cada contenedor del html que tenemos identificado con el id, para esto debemos:
//1) Buscar en nuestro html generado en botonTareas.addEventListener(), cuantos elementos hijos tiene el contenedor que posee id de la forma tarea[indice], es decir dos hijos.
//2) Vemos que, el contenedor "card" tiene dos elementos hijos, el contenedor "card-header" y contenedor "card-body", en ese orden.
//3) entonces para identificar el ultimo elemento hijo de "card" utilizamos la propiedad lastElementChild.
//4) Ahora buscamos el ultimo hijo de card-body, aplicando lastElementChild a card-body, este seria el boton con class name "btn btn-danger", boton que utilizamos para eliminar una tarea en particular
//En conclusion buscamos el ultimo elemento hijo, del ultimo elemento hijo.
arrayStorage.forEach((tarea, indice) => {
    //como generamos un contenedor por cada tarea de la forma: tarea[indice] al recorrerlo con forEach() podemos identificar cada contenedor
    //guardamos el boton particular de cada objeto
    let botonCard = document.getElementById(`tarea${indice}`).lastElementChild.lastElementChild;

    //agregamos un evento de tipo click, para cada uno de los botones eliminar

    botonCard.addEventListener("click", () => {
        //Lo recomendable siempre es eliminar el elemento primero en el DOM y luego en el localStorage
        //utilizo metodo remove(), asi elimino contenedor el contenedor "card" de la tarea en particular
        document.getElementById(`tarea${indice}`).remove();

        //ahora eliminamos el elemento del array
        //recordar que con splice() eliminamos un elemento dado su indice, con slice() copiamos
        tareas.splice(indice, 1);

        //eliminamos el objeto del localStorage
        localStorage.setItem("tareas", JSON.stringify(tareas));

        console.log(`Tarea ${tarea.nombre} eliminada`);

    })

});
