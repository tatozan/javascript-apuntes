/*

    Funciones:
        Principios:
        -DRY: don't repeat yourself - una vez y solo una
            repetir la menos cantidad posible de veces un codigo basicamente, crear las funciones lo mas genericas
            posibles para que pueda reutilizarlas.
        -KISS: Keep it Simple, Stupid! - Mantenlo sencillo, estupido
            siempre tenemos que buscar simplicidad a nivel codigo y estructura
        -YAGNI: You aren't gonna need it - no vas a necesitarlo
            Solo has el codigo que necesites y te pida tu cliente, no te adelantes
           
*/


//ejemplo de una funcion
//Declarar una funcion

/*

    function saludar(){
        console.log("Hola, te estoy saludando");
    }

*/

//llamado de la funcion
//saludar();

//puedo llamarla de nuevo y se ejecuta siempre
//saludar();

/*

    Creo una funcion para sumar dos valores
    No es muy optima porque tiene varias funcionalidades, como realizar la operacion
    y pedir datos en pantalla

*/

/*

    function sumar(){
        let numero1 = parseFloat(prompt("Ingrese un numero"));
        let numero2 = parseFloat(prompt("Ingrese otro numero"));

        console.log(numero1 + numero2);
    }

    sumar();

*/

/*

    Creo la misma funcion pero por parametros y limitando la funciona a solamente operar, es mas optimo.
    Definen como parametros a informacion que necesita la funcion para operar.
    Los nombres de los parametros de la funcion, son las variables locales que va a utilizar la funcion, no estan disponibles por fuera de ella
    Por lo tanto el nombre de variable que coloco como argumentos en el llamado a la funcion
    no tiene por que ser iguales a los nombres de los parametros de la funcion.
    Es mas comodo y legible siempre ponerle el mismo nombre.

*/

/*

    function sumar(numero1, numero2){

        console.log(numero1 + numero2); 
    }

    let numero1 = parseFloat(prompt("Ingrese un numero"));
    let numero2 = parseFloat(prompt("Ingrese otro numero"));

    sumar(numero1, numero2);
    */
    /*
        si llegase a llamar a la funcion, faltandome algun parametro, lanzara error y javascript lo interpreta como si mandaramos una variable undefined
        sumar(numero1);             faltaria un parametro
        sumar(numero1, undefined);  es lo mismo que la linea anterior y asi lo intrpreta js    

*/


//Para salvar la falta de algun parametro en este caso podriamos asignarle un valor por defecto a los parametros
//por si no le enviamos alguno, tomamos un numero neutro con el tipo de operacion.

/*

    function sumar(numero1 = 0, numero2 = 0){

    console.log(numero1 + numero2); 
    }

*/


//La anterior funcion puedo hacer que devuevla el resultado en vez de que solo lo muestre por pantalla
//returno devuelve el resultaod de una funcion

/*

    function sumar(numero1 = 0, numero2 = 0){

        return numero1 + numero2; 
    }

    let resultado = sumar(20, 30);
    console.log(resultado);

*/

/*

    Utilizo backticks o template strings o comillas hacia atras `` permite concatenar cadenas de texto de una manera mas simple
    En esta funcion se describe como anteriormente se utilizaba y era mas complejo
    Con ${} accedemos al valor de una variable con backticks
    {}: son llaves, para recordar.

    function saludar(nombre){
        "Hola, me llamo " + nombre + "y te estoy saludando";
        return `Hola, me llamo ${nombre} y te estoy saludando`;
    }

    let cadena = saludar("Francisco");
    console.log(cadena); //console.log(saludar("Lu")); se puede expresar de esta manera

*/


/*

    Scope o ambito de una variable es la zona del programa donde se define, global o local

*/

const IVA = 1.21; //defino una constante, global, no puedo cambiar nunca su valor

//escribo una funcion que le aplica IVA al precio de un producto que le pase por parametros
function calcularIVA(precioProducto){
    return precioProducto * IVA
}

console.log(calcularIVA(100));

/*

    Toda variable que sea DECLARADA (si le asigno un valor simplemente y no es constante es otro tema) dentro de una function, sea var, let, const (constante), tiene ambito local, y solo es visible alli
    En los ciclos var tiene otro comportamiento que dentro de funciones

    function calcularIVA(precioProducto){
        return precioProducto * IVA
    }

    console.log(precioProducto); //nunca se mostraria porque para javascript no esta definida, porque es una variable local a la funcion solamente
    console.log(calcularIVA(100));

*/

/*

    Tengo una variable local y una global con el mismo nombre, siempre tiene mas peso la local

    En este ejemplo declaramos una constante dentro de la funcion, y aunque se llame  de la misma manera que mi
        variable global const IVA, al ser local tiene mas peso, lo cual no sobreescribe sino que es otra variable diferente

    const IVA = 1.21;

    function calcularIVA(precioProducto){
        const IVA = 1.31;
        return precioProducto * IVA
    }

    console.log(calcularIVA(100));

*/

/*

    MALA PRACTICA: Podemos modificar el valor de una variable global que no es constante dentro de una funcion
                    en este ejemplo la variable IVA va a tomar el valor de 1.31, tanto dentro como fuera de la funcion
                    Para evitar esto, se utilizan constantes, porque no pueden modificar su valor
                    En un lenguaje que no sea js el valor de la variable let IVA, si la modifico dentro de la funcion
                    al utilizar el return y por ende finalizar la funcion, deberia volver a tener el valor inicial IVA
                    que tenia fuera de la funcion, repito en js no es asi.

    let IVA = 1.21;

    function calcularIVA(precioProducto){
        IVA = 1.31;
        return precioProducto * IVA
    }

    console.log(calcularIVA(100));

*/

//------------------------------------------------------------
    
/*

    Creo una calculadora con funciones normales

    function sumar(numero1, numero2){
        return numero1 + numero2;
    }

    function restar(numero1, numero2){
        return numero1 - numero2;
    }

    function dividir(numero1, numero2){
        return numero1 / numero2;
    }

    function multiplicar(numero1, numero2){
        return numero1 * numero2;
    }

*/


/*

    FUNCIONES ANONIMAS: las funciones anonimas no tienen nombre y si o si se tienen que almacenar en una constante para que no puedan modificar su valor
    Para el profe las funciones anonimas no tienen mucho sentido

    const SUMAR = function (numero1, numero2){
        return numero1 + numero2;
    }

    const RESTAR = function(numero1, numero2){
        return numero1 - numero2;
    }

    const MULTIPLICAR = function (numero1, numero2){
        return numero1 * numero2;
    }

    const DIVIDIR = function(numero1, numero2){
        return numero1 / numero2;
    }

*/


/*

    //FUNCION FLECHA: es un tipo de funcion anonima, especial, es exactamente lo mismo pero en su version simplificada
    //quito de la funcion anonima, {}, return y function y agrego =>
    //si la funcion flecha es de una sola linea, el return esta implicito como en este caso

    //Funcion anonima
    //const DIVIDIR = function(numero1, numero2){
    //    return numero1 / numero2;
    //}

    //Funcion flecha
    const DIVIDIR = (numero1, numero2) => numero1 / numero2;

    //si debo agregarle mas de una linea, perderia ya un poco el sentido, porque seria como una funcion normal

    const SUMAR = (numero1, numero2) => {
        return numero1 / numero2;
    }

    //La mayoria de las funciones flecha son de una sola linea

*/

/*

Ejemplo completo con llamada a funcion flecha
    const sumar = (numero1, numero2) => numero1 + numero2;
    const restar = (numero1, numero2) => numero1 - numero2;
    const dividir = (numero1, numero2) => numero1 / numero2;
    const multiplicar = (numero1, numero2) => numero1 * numero2;

    console.log(sumar(5, 10));
    console.log(restar(5, 10));
    console.log(dividir(5, 10));
    console.log(multiplicar(5, 10));

*/

/*

    //Creo la calculadora nuevamente, y utilizamos todo, variables, ciclos, funciones y condicionales
    //Creo las variables numero1, numero2, operacion para hacer ciertas comprobaciones
    //Js las divisiones por cero las resuelve, y da como resultado infinito, uan division por cero tiende a infinito

    const sumar = (numero1, numero2) => numero1 + numero2;
    const restar = (numero1, numero2) => numero1 - numero2;
    const dividir = (numero1, numero2) => numero1 / numero2;
    const multiplicar = (numero1, numero2) => numero1 * numero2;

    let numero1, numero2, operacion;

    do{
        numero1 = parseFloat(prompt("Ingrese un numero"));
        numero2 = parseFloat(prompt("Ingrese otro numero"));
        operacion = prompt("Ingrese operacion: + - / * ");

        if(isNaN(numero1) || isNaN(numero2){
            alert("Por favor ingresame numeros validos");
        }

        if(numero2 === 0 && operacion === "/"){
            alert("No se puede dividir entre 0");
        }

    } while ((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion === "/"));

    //console.log(numero1 / numero2);

    //el switch es como colocar varios if else anidados
    switch(operacion){
        case: "+":
            alert(sumar(numero1, numero2));
            break;
        case: "-":
            alert(restar(numero1, numero2));
            break;
        case: "/":
            alert(dividir(numero1, numero2));
            break;
        case: "*":
            alert(multiplicar(numero1, numero2));
            break;
        default:
            alert("Ingrese una operacion valida");
            break;
    }
*/

