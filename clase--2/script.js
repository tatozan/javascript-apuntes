//JAVASCRIPT ES CASE SENSITIVE
//Condicionales
//if
let desayuno = "Cafe"; //operado de asignacion, desayuno es igual a cafe

if(desayuno == "Cafe"){ //operador de comparacion, desayuno es igual a Cafe?
    console.log("Desayuno cafe con leche");
}

//Una asignacion en javascript siempre da verdadero, por lo tanto esta condicion seria verdadero
//tener cuidado!

/*if(desayuno = "Te"){ 
    console.log("Desayuno cafe con leche");
}
Es lo mismo que poner:
if(true){ 
    console.log("Desayuno cafe con leche");
}
*/
//Condicional if / else
let desayuno2 = "Te"; //operador de asignacion, desayuno es igual a cafe

if(desayuno2 == "Cafe"){ //operador de comparacion, desayuno es igual a Cafe?
    console.log("Desayuno cafe con leche");
} else{
    console.log("No desayuno cafe con leche");
}

//prompt(): es una alerta que toma lo que escribe el usuario por argumento, toma tanto string como null.
let desayuno3 = prompt("Ingrese su desayuno"); //Muestra un mensaje por pantalla en forma de alerta "Ingrese su desayuno" y lo escrito, lo asigna a la variable desayuno3.
let desayuno4 = prompt("Ingrese su desayuno").toLowerCase(); //el input lo paso a minuscula

//toLowerCase(): retorna el valor ingresado como string a minuscula
//toUpperCase(): retorna el valor ingresado como string en mayusculas
//ambos se utilizan generalmente para la entrada de datos y comparaciones

//Multiples condicionales

if(desayuno == "cafe"){
    console.log("Desayuno cafe con leche");
} else if(desayuno == "cafe"){
    console.log("Desayuno te con leche");
} else if(desayuno == "chocolate"){
    console.log("Desayuno chocolatada");
} else{                                              //se llama else de descarte
    console.log("Desayuno mate mirando la pared");
}

//-----------------------------------------------------------------------
let numero2  = 5;

//esta condicion da verdadero
if(numero2 == 5){
    console.log("V");
} else{
    console.log("F");
}

//esta condicion da verdadero 5 == "5", porque javascript es debilmente tipado,  al colocar 5 entre comillas estamos asumiendo que 5 es un string, compara el valor y no el tipo.
if(numero2 == "5"){
    console.log("V");
} else{
    console.log("F");
}

/*Por lo anterior, javascript y solo en este caso utiliza el operador + tanto para concatenar string, como para sumar numeros, entonces:
5 == "5"; compara y da que es el mismo valor
"5" + "5" = "55"; concatena strings
5 + 5 = 10; suma dos valores enteros
"5" + 5 = "55"; javascript como es debilmente tipado concatena ambos tipos de dato.
*/
//Como la funcion prompt solo devuelve string, podemos utilizar la funciona parseFloat() para pasar en contenido a numeros
let numero3 = parseFloat(prompt("Ingrese un numero"));

//parseFloat(): paso string a numero flotante lo que ingresa como argumento
//parseInt(): paso string a numero entero, sin decimales, no redondea nunca, solo quita parte decimal


//---------------------------------------------------
/*== comparo si los valores coinciden
=== compara si tanto el valor como el tipo coinciden, siempre que se pueda usar este

La siguiente condicion dara falso, porque si bien tiene el mismo valor son de diferente tipo
if(5 === "5"){
    console.log("V");
} else{
    console.log("F");
}

Dara verdadero porque comparo solamente valor
if(5 == "5"){
    console.log("V");
} else{
    console.log("F");
}
*/

//convierto lo que pasen por teclado a entero
let numero = parseInt(("Ingrese un numero"));
console.log(numero);

//si por ejemplo tengo lo siguiente, e ingreso una palabra, me devolveria la consola NaN (not a number)
let numero4 = parseInt(prompt("Ingrese un numero"));
console.log(numero4);

//funcion isNaN(): is not a number, devuelve verdadero si el dato que ingreso no es un numero
//funcion parseInt(): convierte lo que paso de argumento a valor entero.

//en este ejmplo, si ingreso un string, me dira numero no valido, y si es numero, le suma 5
if(isNaN(numero4)){
    alert("Numero no valido");
}else{
    console.log(numero + 5);
}


//Ejemplo de operador && (OR)

/*let numero1 = 5;
let numero2 = 10;

if(numero1 === 5 && numero2 === 10){
    console.log("V");
}else{
    console.log("F");
}*/

/*
    numero1     &&      numero2
        V        V         V
        V        F         F
        F        F         V
        F        F         F

*/

//Ejemplo de operador || (OR)

/*let numero1 = 5;
let numero2 = 10;

if(numero1 === 5 || numero2 === 10){
    console.log("V");
}else{
    console.log("F");
}*/

/*
    numero1      ||      numero2
        V        V         V
        V        V         F
        F        V         V
        F        F         F

*/

/*
1 a 5 "Desaprobado"
6 a 7 "Aprobado bien"
8 a 9 "Aprobado muy bien"
10 "Aprobado excelente"
*/
let nota = parseInt(prompt("Ingrese una nota"));

//comienzo por este rango porque al ser mas amplio, es mas probable que caiga dentro, se hace por cuestiones de rendimiento
//Valido que sea valida la nota al final
//en este caso seria mejor porque es mas probable que un profesor ingrese una nota que sea valida
if (nota >= 1 && nota <= 5){
    alert("Alumno/a desaprobado");
} else if(nota === 6 || nota === 7){ //podria escribirlo nota >= 6 && nota <= 7, pero por solo dos valores no conviene
    alert("Alumno/a aprobado con nota de Bien");
} else if (nota === 8 || nota === 9){
    alert("Alumno/a aprobado con nota de Muy Bien");
} else if(nota === 10){
    alert("Alumno/a aprobado con nota excelente");
} else{
    alert("Nota no valida");
}



//primero valido, que el valor este dentro del rango
if(nota >= 1 && nota <= 10){
    if(nota <= 5){
        alert("Alumno/a desaprobado");
    } else if (nota <= 7){
        alert("Alumno/a aprobado con nota de Bien");
    } else if (nota <= 9){
        alert("Alumno/a con nota de Muy Bien");
    } else ("Alumno/a con nota de Excelente");

} else{
    alert("Numero no valido");
}

//otra forma de comparar, en este ejemplo 
//podemos almacenar un condicional logico en una variable booleana y consultamos por esa variable directamente en el condicional if
//si lo uso muy seguido a ese conicional es preferible, sino, se utiliza colocar la condicion completa en el if
let desaprobado = (nota >= 1 && nota <= 5);
let bien = (nota === 6 || nota === 7);
let muyBien = (nota === 8 || nota === 9);
let excelente = (nota === 10);

if (nota >= 1 && nota <= 5){
    alert(desaprobado);
} else if(bien){ //podria escribirlo nota >= 6 && nota <= 7, pero por solo dos valores no conviene
    alert("Alumno/a aprobado con nota de Bien");
} else if (muyBien){
    alert("Alumno/a aprobado con nota de Muy Bien");
} else if(excelente){
    alert("Alumno/a aprobado con nota excelente");
} else{
    alert("Nota no valida");
}
