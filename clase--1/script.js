//Comentario de una linea

/*
Comentario multi-linea
*/

/**
 * Comentario multi-linea
 */

//javascript es debilmente tipado lo que quiere decir que una variable puede ser de diferentes tipos de variable y valor en un momento determinado
//no hace falta agregar ;  al final de la linea
var nombre = 'Francisco'; //string o texto, puede ir con comillas simples o dobles, si pongo esto "" es uan cadena vacia, si pongo esto " " la cadena contiene un espacio
var apellido = "Pugh";
var sueldo = 1050; //number o numero. Las comas va con .
var esProfesor = true; //Boolean o logicas, utilizar camel case para variables o guion bajo para separar palabras
esPropietario = null; //null o vacio
var esPadre = undefined; //todos los datos en algun momento son indefinidos
var numero; //creo la variable sin asignarlo en memoria

//Para mostrar el contenido por pantalla puedo usar tres formas
//1) Por consola
console.log(nombre); //muestro el valor de la variable nombre
nombre = "Pancho";  //puedo cambiar el valor de la variable
console.log(nombre);
nombre = 1488181881 //debilmente tipado, puedo reescribir el tipo de dato
console.log(nombre);
nombre = null;
console.log(nombre);
nombre = undefined;
console.log(nombre);

//2) Alerta: las alertas dejan esperando al codigo hasta que le doy a aceptar
alert(esPadre)

//Otra forma de definir variables es utilizar let en vez de var que no es muy utilizado
//var:
var apellido = "Pugh"; //creamos una variable string llamada apellido
apellido = "Rodriguez"; //elimino la variable apellido de memoria y creo una nueva variable denominada apellido
var apellido = "Rodriguez;" //tanto esta forma como la anterior eliminan la variable apellido y crean una nueva denominada apellido

//En el siguiente ejemplo, creo una variable nombre, luego cambio el contenido y el tipo de variable sin reemplazar la variable
let nombre = "Francisco";
console.log(apellido); 
//usando var, cambio el tipo de variable y le reasigno un valor, pero no elimino la variable y la vuelvo a crear como var.
nombre = 12321; //aqui cambio el tipo de variable y reasingo un valor pero no la elimino
//si hiciera ahora let nombre = 12321 en vez de nombre = 12321, el sistema no me lo permitiria. No puedo redeclarar una variable que fue declarada anteriormente, con var si me lo permitia.
console.log(nombre);

//defino una variable que no quiero que se modifique

const IVA = 1.21 //se escribe en mayusculas, no puedo reasignar otro valor a la variable, si luego escribo IVA = 1.30 no seria viable