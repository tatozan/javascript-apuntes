/*
    Ciclos por conteo: 
    -for se repite exactamente n veces
    Ciclos condicionales: se repite siempre y cuando se cumpla una condicion
    -while: se repite 0 o mas veces
    -do...while: se repite 1 o mas veces
*/
/*
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
    console.log(6);
    console.log(1000);
*/

//FOR
// INICIO       FIN         INICIO A MI FIN
/*
    for(let i = 1; i <= 1000; i = i + 1){ //puede simplificarse con i =+ 1, o i++, esto se lo llama sintaxis sugar, simplificar sintaxis de codigo existente
        
        console.log(i);
    }
*/

/*
    BREAK: corta ciclo de ejecucion
    Se recomienda cuando hay un valor de error, o hay un valor que estoy buscando y lo encontre, o hay un valor que no deberia estar y lo corto por ejemplo
*/

/*
    for(let i = 1; i <= 1000; i = i + 1){ //puede simplificarse con i =+ 1, o i++, esto se lo llama sintaxis sugar, simplificar sintaxis de codigo existente
        
        if(i === 50){
            break;
        }

        console.log(i);
}*/

//sentencia CONTINUE: continua con ciclo de ejecucion y salta a la siguiente iteracion

/*
    ejemplo usando modulo
    Para recordar: modulo es el resto de la division, y se representa con %, por ejemplo para saber si un numero es
    par, si divido a un numero entre 2, el modulo de la division o resto tiene que dar 0
    4 / 2 = 2, resto 0 numero par
    4 / 3 = 1. resto 1 numero impar
*/

//muestro numeros impares del 1 al 100 utilizando continue y modulo

for(i = 1; i <= 100; i++){

    if(i % 2 == 0){
        continue;
    }

    console.log(i);
}

//Otro ejemplo, calculo la suma de todos los numero del 0 al 10
let acumulador = 0;

for(i = 1;  i > 11; i = i +1){

    acumulador = acumulador + i; // acumulador =+ i

}

console.log(acumulador);

//------------------------------------------------------------------

//WHILE: ciclo que se ejecuta 0 a n veces, primero compruebo y luego ejecuto

//ejemplo: repito el bucle hasta que ingreso no, y palabra es igua a no

/*
    la diferencia de utilizar break o repetir = false en este ejemplo es que utilizando:
    break: es como desconectar la compu de la corriente
    repetir = false: es ir al menu inicio de windows y darle a apagar sistema, siempre se recomienda esta opcion
*/
let repetir = true;

while(repetir){
    let palabra = prompt("Ingrese NO para terminar").toLowerCase;

    if(palabra == "no"){    //no hace falta un === porque esa comprobacion el problema de valor y tipo se da cuando comparo numeros, pero cuando comparo solo string no.
        repetir = false;    //otra forma es utilizar break;  
    }
}


/*
    DO...WHILE: ciclo que se ejecuta 1 o mas veces, se ejecuta por lo menos una vez el ciclo y luego comprueba

    Ejemplo creo un ciclo que se ejecute hasta que el usuario ingrese un numero valido, validador de numeros

    Declaro ambas variables aqui con let para que en el ciclo do...while, la seccion while pueda acceder a esas 
    variables, aun estando dentro del ciclo do...while, las variables declaradas con let dentro de do, solo son locales 
    a la seccion do y al resto del programa
*/

let numero1, numero2;   //si yo escribo solamente numero1, numero2 se declaran las variables como var
//isNaN(valor): es verdadero, si no es un numero, falso si lo es

do {
    numero1 = parseFloat(prompt("Ingrese un numero"));
    numero2 = parseFloat(prompt("Ingrese otro numero"));

} while (isNaN(numero1) == true || isNaN(numero2) == true);

//solamente sale del bucle y muestra por pantalla si se trata de numeros
/*
    console.log(numero1);
    console.log(numero2);
*/



/*
    && AND solo es verdadero cuando todos son verdaderos
    || OR solo es falso cuando todos son falsos

    En el anterior ejemplo pensar que V no es un numero y F es numero. Por eso utilizo OR, cuando ambas condiciones dan falso, salgo del bucle y me aseguro que se trata de dos numeros

    TABLAS DE VERDAD DEL EJEMPLO ANTERIOR
    isNaN(numero1)  &&  isNaN(numero2)
        V           V          V
        V           F          F
        F           F          V
        F           F          F

    isNaN(numero1)  ||  isNaN(numero2)
        V           V          V
        V           V          F
        F           V          V
        F           F          F
*/

/*
    Si yo escribo el codigo con let dentro, asi: 

    do {
        let numero1 = parseFloat(prompt("Ingrese un numero"));
        let numero2 = parseFloat(prompt("Ingrese otro numero"));

    } while (isNaN(numero1) == true || isNaN(numero2) == true);

    No seria valido, porque el while no podria acceder, ni se podria mostrar por pantalla el valor por fuera 
    de la funcion, en su lugar podriamos usar var que no es recomendado. Nos damos cuenta que se leen los valores
    porque el nombre de la variable se pone de color tanto en do como en while.

    do {
        var numero1 = parseFloat(prompt("Ingrese un numero"));
        var numero2 = parseFloat(prompt("Ingrese otro numero"));

    } while (isNaN(numero1) == true || isNaN(numero2) == true);
*/

/*
    Si tenemos una variable que puede tomar diferentes valores, es recomendable usar un switch, no puedo agregar 
    rangos, solo un valor que tome la variable.

    Sin la condicion de break en cada condicion, la ejecucion del switch evaluaria todas las demas condiciones
    independientemente que una ya se haya cumplido, por eso es importante poner break por cada condicion
    
*/

//Creamos una pequeña calculador. Ejecutamos operaciones para los numeros que validamos anteriormente en el do...while

//Recordar que numero1 y numero2 estan declarados arriba

//La opcion default se ejecuta si ninguna de las anteriores condiciones coinciden, es la condicion por defecto

let operacion;

operacion = prompt("Ingrese una operacion valida (+, -, *, /)");

switch(operacion){
    case "+":
        alert(numero1 + numero2);
        break;

    case "-":
        alert(numero1 - numero2);
        break;
    
    case "*":
        alert(numero1 * numero2);
        break;

    case "/":
        alert(numero1 / numero2);
        break;

    default:
        alert("No ha ingresado una operacion valida");
        break;
}