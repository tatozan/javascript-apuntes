/*

    PROGRAMACION SINCRONICA: en este modelo, nuestro programa funciona de manera lineal, ejecuntado una accion y luego otra. 
    Solo podemos realizar una tarea a la vez y cada tarea es bloqueante de la siguiente.

*/

/*

    PROGRAMACION ASINCRONICA: este modelo permite que multiples tareas sucedan a la vez. 
    Al comenzar una accion, nuestro programa sigue en ejecucion; y cuando la accion termina, nuestro prograna es informado
    y consigue acceso al resultado correspondiente.
    Puedo ejecutar varias peticion a la vez, y el programa no espera a obtener resultados y sigue con la ejecucion

    Ventaja: facilita el manejo de programas que realizan multiples acciones a la vez.


*/

/*

    funcion setTimeout(): permite realizar acciones asincronicamente. La funcion recibe dos parametros:
    Una funcion de callback y un valor numerico que representa milisegundos
    setTimeout(fn, time)

    Asi, la funcion que pasamos por primer parametro se ejecuta luego de que transcurra el tiempo definido en el segundo parametro

*/

//Muestra el mensaje pasados 2 segundos
//ejemplo de esta funcion es dolarhoy, actualiza cada 5 minutos la cotizacion del dolar
setTimeout(() => {
    console.log("Hola, buenos dias!");
}, 2000);

/*

    //Como los tres tienen exactamente el mismo tiempo se ejecutan de forma sincronica, en orden.
    
    setTimeout(() => {
        console.log("Hola, buenos dias!");
    }, 2000);

    setTimeout(() => {
        console.log("Hola, buenas tardes!");
    }, 2000);

    setTimeout(() => {
        console.log("Hola, buenas noches!");
    }, 2000);


*/

/*

    //Ejemplo asincronico
    //Si cambio aunque sea minimamente el tiempo, ya se ejecutaria de forma asincronica
 
    setTimeout(() => {
        console.log("Hola, buenos dias!");
    }, 2002);

    setTimeout(() => {
        console.log("Hola, buenas tardes!");
    }, 2001);

    setTimeout(() => {
        console.log("Hola, buenas noches!");
    }, 2001);
*/
/*

    CALL STACK O PILA DE EJECUCION: es una lista donde se apilan las distintas tareas a ejecutar por nuestro programa. 
    Js es un lenguaje single threaded, o de un unico hilo, lo que significa que tiene un unico stack o pila de ejecucion. 
    De ahi que la ejecucion es implicitamente sincronica.

    EL call stack es una forma de almacenar el estado de mi aplicacion, que se esta ejecutando y en que orden, sin el callstack no puedo aplicar asincronismo porque no se el orden de ejecucion.


*/


/*

setInterval: permite ejecutar funciones de manera reiterativa tras los milisegundos indicados hasta que indiquemos su detencion o se cierre la aplicacion.

*/

/*

    //se ejecuta de forma indefinida
    //mi funcion espera 10 segundos (10000 milisegundos), para ejecutar mi funcion asincrona de 1 segundo (1000 milisegundos).
    setInterval(() => {
        setTimeout(() => {
            console.log("Hola, buenas noches!");
        }, 1000);
    }, 10000);

*/
let cont = 0;
//funcion clearInterval(): con esta funcion paro el ciclo de ejecucion de la funcion asincronica
//uso un contador para repetirlo las veces que yo quiera.
//recibe como parametro la funcion asincronica que quiero detener
const interval = setInterval(() => {
    if(cont == 2){
        clearInterval(interval);
        console.log("Intervalo terminado");
    }

    setTimeout(() => {
        console.log("Hola, buenas noches!");
        cont++;
    }, 1000);


}, 10000);

//No sirve para conectarse a un servidor, porque no sabemos cuando ira a tardar.
/*

    PROMESAS: es un objeto de js que representa un evento a futuro.
    Es una accion asincronica que se puede completar en algun momento y producit un valor y notificar cuando esto suceda.

    Una promesa cuenta con tres estados posibles:
    -pending: pendiente, la carta no llego a destino
    -fulfilled: terminada, la carta llego a destino
    -rejected: rechazada, la carta la perdio el correo y no se sabe donde esta

    Las promesas pueden ser resueltas o rechazadas.

    Un ejemplo son dos personas que se mandan cartas, el que manda la carta espera una respuesta, pero no sabe cuando llega
    Es una forma de poder conectarme a servidores, sin tener un tiempo definido de espera

    Podemos crear promesas a traves de su constructor new Promise
    Su sintaxis es algo compleja, ya que recibe una funcion por paramtero que a su vez recibe por parametros las funciones de resolve y reject

    new Promise((resolve, reject) => {
        //cuerpo de la promesa
    });

*/
class User{
    constructor(id, username, email, password){
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const user1 = new User(1, "Pablo", "pablo@gmail.com", 1234);
const user2 = new User(2, "Juanes", "juanes@gmail.com", 1234);
const user3 = new User(3, "Maria", "maria@gmail.com", 1234);
const user4 = new User(4, "Tamara", "tamara@gmail.com", 1234);
const user5 = new User(5, "Jacinto", "jacinto@gmail.com", 1234);
const user6 = new User(6, "Huberto", "huberto@gmail.com", 1234);

const users = [user1, user2, user3, user4, user5, user6];

/*

//simulacion de una promesa, no es real, cuando mi conexion al servidor se hace, me retorna el array de usuarios
const solicitarUsuarios = (estado) => {
    //resolve: si pude hacer la conexion con el servidor correctamente
    //reject: si los datos fueron rechazados y no pude hacer la conexion con el servidor
    //si no returna resolve o reject, retorna pending
    return new Promise((resolve, reject) => {
        if(estado == true){
            resolve(users);
        } else {
            reject("Conexion rechazada")
        }
    });
}

console.log(solicitarUsuarios(true));
*/


//Pregunta: una vez tengo los datos, me sigue interesando la promesa?
//me interesa el sobre de la carta una vez que tengo la carta?

/*
    THEN & CATCH:
    Al llamado de una funcion que retorne una promesa, podemos concatenar el metodo .then() o .catch(), los cuales
    reciben una funcion por parametro, con la cual se captura el valor de la promesa:

    .then(): si la promesa es resuelta, su valor de retorna se captura dentro del .then(), recibiendo por parametro de su funcion ese valor.

    .catch(): si la promesa es rechazada, su valor se captura dentro de un .catch() siguiendo la misma logica.

    Lo que queramos ejecutar cuando la promesa se resuelva o rechace, debemos definirlo dentro de un .then() o .catch() segun sea el caso

    Como una promesa puede tener varios estados posibles, se puede concatenar varios .then() o .catch() en un mismo llamado, y caeremos en el caso que corresponda segun como se haya resuelto la promesa.

*/

//simulacion de una promesa, no es real, cuando mi conexion al servidor se hace, me retorna el array de usuarios
//solicitarUsuarios es el objeto del tipo Promesa
const solicitarUsuarios = (estado) => {
    //resolve: si pude hacer la conexion con el servidor correctamente
    //reject: si los datos fueron rechazados y no pude hacer la conexion con el servidor
    //si no returna resolve o reject, retorna pending
    return new Promise((resolve, reject) => {
        if(estado == true){
            resolve(users);
        } else {
            reject("Conexion rechazada")
        }
    });
}


/*
    //representa lo que devuelve resolve en la promesa, en este caso mis usuarios

    solicitarUsuarios(false)
    .then((usuarios) => {
        console.log(usuarios);
    })

    .catch((error) => {
        console.error(error);
    });

*/

//Escrito de otra forma
solicitarUsuarios(false).then((usuarios) => {
    console.log(usuarios);
    //podemos poner console.table y muestra el contenido de un array de objetos sen una tabla
}).catch((error) => {
    //console.error indica que es un error con un mensaje en color rojo
    console.error(error);
});
