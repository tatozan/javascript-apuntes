/*

    STORAGE O ALMACENAMIENTO

*/

/*

    El objeto storage (API de almacenamiento web),
    permite almacenar datos de manera local en el navegador 
    sin necesidad de realizar ninguna conexion con el servidor.

    De esta manera, cada cliente puede preservar informacion de la aplicacion

    El navegador nos ofrece dos tipos de storage: localStorage y sessionStorage

    Storage se diferencia de cookies, porque va a tener que ver con la conexion de un servidor

    Cuando uds. aceptan cookies, estan aceptando que se almacene informacion en un servidor

    Storage es informacion que no es necesario enviar al servidor, nos facilita la tarea de almacenamiento de informacion

    En localStorage no se deberia almacenar datos sensibles, porque se guarda en un archivo dentro de la computadora local y es facil acceder

*/

/*

    El navegador nos ofrece dos formas de guardar la informacion:
    
    LocalStorage: se guarda de forma indefinida (persistente) en mi navegador por defecto ( o hasta que se borren los datos de navegacion del browser)
    Ejemplo de localStorage, cuando agregamos productos al carrito y si reiniciamos la pc, siguen estando,
    esto se hace asi por un tema de experiencia del usuario, persisten un par de dias generalmente

    sessionStorage: guardamos informacion en la sesion del navegador, cada vez que el usuario sale o cierra pagina web, se elimina la informacionñ
    Normalmente se guardan datos de aplicaciones web con datos que se le envian desde el servidor que solamente sirven en la sesion del usuario, y sirven cada vez que ingresa.

    Solo existe dentro de la pestaña actual del navegador. Otra pestaña con la misma pagina tendra otro sessionStorage distinto,
    pero se comprarte entre iframes en la pestaña (asumiendo que tengan el mismo origen)

*/

/*
    LOCAL STORAGE
*/

/*

    //crear un valor en local storage metodo setItem()
    //son como pequeños objetos, guardo una clave para identificar al objeto, se guarda en el navegador
    //de la forma (clave, valor)
    localStorage.setItem('saludar', "Hola");

    //consultar informacion metodo getItem()
    console.log(localStorage.getItem('saludar'));

    //por ejemplo el darkmode de los navegadores se guarda en localStorage

*/

const botonDarkMode = document.getElementById('botonDarkMode');
const botonLightMode = document.getElementById('botonLightMode');

/*
//no esta bien hacer los estilos en js, es a modo de practicidad
botonDarkMode.addEventListener('click', () => {
    document.body.style.backgroundColor = "#000";
    document.body.style.color = "#fff";
});

botonLightMode.addEventListener('click', () => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
});

*/
//consultamos si existe el item,es decir, una key llamada theme, para saber si el usuario es la primera vez que entra al sitio web
//un if de un null me devuelve falso
//si existe guardo en la variable darkMode, el modo que habia elegido el usuario previamente, indistintamente si era light o dark

let darkMode;


if(localStorage.getItem('theme')) {
    darkMode = localStorage.getItem('theme');
} else {
    localStorage.setItem('theme', "light");
}

//el modo que me interesa saber si eligio el usuario es dark, porque por defecto es light y ya esta configurado
if(darkMode == "dark") {
    document.body.classList.add("darkMode");

}
//Hago el mismo ejemplo de mas arriba para utilizando un archivo de estilos de css
botonDarkMode.addEventListener('click', () => {
    //con classList.add() añado una clase al body llamada darkMode
    document.body.classList.add("darkMode");
    localStorage.setItem('theme', "dark");
});

botonLightMode.addEventListener('click', () => {
    //removemos la clase creada en darKMode, para que se aplique el estilo por defecto
    document.body.classList.remove("darkMode");
    // siempre utilizando localStorage piso los valores, no tengo variables
    //me sirve para guardar los valores que asigno mi usuario
    localStorage.setItem('theme', "light");
});

/*

    SESSIONSTORAGE: se utiliza generalmente cuando tenemos un servidor con una base de datos.
    Se guarda permisos de usuario, de sesion.

*/

/*

    JSON: JavaScript Object Notation es un formato basado en texto plano, para representar datos estructurados con la sintaxis de objetos de JavaScript.
    Es comunmente utilizado para enviar y almacenar datos en aplicaciones web.
    Nos permite representar objetos en formato de texto.
    Como se envian y almacenan datos dentro de las aplicaciones web y son siempre en formato texto, necesito un conversor, una forma de guardarlo, para eso existe json
    Json es un tipo de formato de texto.

*/

class User {
    constructor(username, email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    loguearse() {
        console.log("Hola, estoy logueado");
    }
}

const user1 = new User("fran", "f@f.com", 123);
const user2 = new User("pepe", "p@p.com", 456);
const user3 = new User("juan", "j@j.com" , 789);

const users = [user1, user2, user3];

//convierto los usuarios (objetos) a formato json con el metodo stringify()
localStorage.setItem('users', JSON.stringify(users));

//json es un tipo de formato de texto, es un string pero en formato json
//Pregunta: a mi me sirve este texto en formato json en mi codigo? No, necesito un array de objetos, entonces utilizo JSON.parse()
console.log(localStorage.getItem('users'));

//utilizo el metodo parse() de json
console.log(JSON.parse(localStorage.getItem('users')));

//ahora si yo quiero recuperar y almacenar en un array los objetos, podria guardar solo sus atributos y no los metodos, porque son acciones, no valores.
//por lo que se utilizan comunmente para los objetos que no tienen metodos
const array2 = JSON.parse(localStorage.getItem('users'));
console.log(array2);

//este metodo no funcionaria porque cuando yo hago la conversion a json, pierdo todos los metodos de la clase, porque pierdo la referencia a la clase,
//cuando hago al conversion ya no estoy creando objetos de la clase usuario, los paso a texto, por lo cual siempre pierdo los metodos.
array[0].loguearse();

//los productos es un ejemplo de objetos sin metodos, porque los metodos pueden calcularse con sus atributos
