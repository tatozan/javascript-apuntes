/* FUNCIONES DE ORDEN SUPERIOR O HIGHER ORDER FUNCTIONS*/

/*

    Son funciones que retornan una funcion o recibe una funcion como parametro, 
    y no sabemos bien como funciona, al ser complejas. No es necesario conocer como funciona,
    si esta bueno porque hace al entendimiento pero no es necesario, si es importante saber que recibe y que devuelve.
    
    Las funciones de orden superior puedo verlas como una caja en donde se lo que envio, se lo que recibo, pero internamente no se como funciona, tenemos que saber el que hace pero no como.

    Funcion orden superior:
    -Recibe
        Input y/o funcion
    -Devuelve
        Output y/o funcion

*/
/*

    //NOTA: si a un valor por ejemplo 1000
    //1000 * 0.3 = 300 Devuelvo solamente el 30% de 1000
    //1000 * 1.3 = 1300 Devuelvo el 30% del valor sumado al valor que es el 100%

    //funcion llamada impuestoPais, que retorna el producto * 0.30 (30% del precio de producto)
    const impuestoPais = (producto) => producto * 0.30;
    const impuestoRetenciones = (producto) => producto * 0.35;
    const impuestoIVA = (producto) => producto * 0.21;
    const impuestoX = (producto) => producto * 0.10;

    //funcion que recibe el precio de un producto y devuelve el precio, sumando todos los impuestos que devuelven las otras funciones
    //es una funcion de orden superior, se su 
    function calcularImpuestos(producto){
        return producto + impuestoPais(producto) + impuestoRetenciones(producto)
        + impuestoIVA(producto) + impuestoX(producto);
    }

    //llamo a la funcion calcularImpuestos, envio como parametros 100 y devuelve el precio sumando todos los impuestos
    let precioFinal = calcularImpuestos(100);

    console.log(precioFinal);

*/
/*

    Ejemplo de como una funcion, en este caso Persona, recibe por parametros otra funcion

*/
/*

    class Persona{
        constructor(nombre, apellido, edad, sueldo){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sueldo = sueldo;
        }
    }

    //le envio al constructor de Persona, funciones por parametros, y espera a las funciones para que devuelvan los resultados
    //que significa esto, que hay formas de que yo pueda definir una funcion pidiendo funciones como parametros, se utiliza con calculos complejos
    const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), prompt("Ingrese una edad"), prompt("Ingrese un sueldo"));

    console.log(persona1);

*/

/*

    Metodos de busqueda y transformacion: metodos para trabajar con arrays de objetos
    forEach(), find(); filter(), some(), map(), reduce(), sort()
    
*/

class Persona{
        constructor(nombre, apellido, edad, sueldo){
            this.id = id;
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            this.sueldo = sueldo;
        }
    }

const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000);
const persona2 = new Persona(1, "Maria", "Martinez", 22, 15000);
const persona3 = new Persona(1, "Pedro", "Parker", 28, 12000);
const persona4 = new Persona(1, "Pedro", "Fernandez", 32, 18000);
const persona5 = new Persona(1, "Carlos", "Carles", 34, 19000);

const personas = [persona1, persona2, persona3, persona4, persona5];

/*

    //AYUDA MEMORIA:
    //FUNCION FLECHA: es un tipo de funcion anonima, especial, es exactamente lo mismo pero en su version simplificada
    //quito de la funcion anonima, {}, return y function y agrego =>
    //si la funcion flecha es de una sola linea, el return esta implicito como en este caso

    //Funcion anonima
    //const DIVIDIR = function(numero1, numero2){
    //    return numero1 / numero2;
    //}

    //Funcion flecha
    //const DIVIDIR = (numero1, numero2) => numero1 / numero2;

*/

/*
    //METODO FOREACH()
    //metodo foreach(): se utiliza para recorrer uno por uno, los objetos del array
    //recibe como parametros un objeto
    //si el array esta vacio y tratamos de recorrerlo no mostrara nada

    //creo una funcion flecha y pido como parametro el objeto a analizar
    //para cada objeto dentro del array estoy creando una funcion flecha
    //internamente dentro del foreach() hago esto:
    //const personaArray = (persona) => console.log(persona);

    //el parametro persona de la funcion flecha es una representacion de cada objeto tipo persona, dentro del array
    personas.forEach(persona => {
            persona.sueldo *= 1.30;
            console.log(persona);
        }
    );

    //esta es la funcion anonima de la funcion flecha anterior
    //const personaArray = function(persona){
    //    persona.sueldo *= 1.30;         
    //    console.log(persona);
    //}

*/
/*

    //METODO FIND(): metodo que busca elementos dentro de un array, solicita el objeto a buscar con una condicion
    //devuelve el objeto que primero cumple con la condicion de busqueda, es decir, si con mi parametro de busqueda hay mas de un elemento dentro del array, elige el primero que esta en relacion al indice del array
    //si no existe el objeto, el metodo me devuelve undefined
    console.log(personas.find(persona => persona.id == 4));

    //en este caso, find() va a devolver a Pedro Parker porque esta primero en el indice del array
    console.log(personas.find(persona => persona.nombre == "Pedro"));

    //puedo agregar otra condicion
    console.log(personas.find(persona => persona.nombre == "Pedro" && persona.apellido == "Carlez"));

    //algo un poco mas completo ingresando datos por prompt()
    let nombreABuscar = prompt("Ingrese un nombre");
    let apellidoABuscar = prompt("Ingrese un apellido");

    console.log(personas.find(persona => persona.nombre == nombreABuscar && persona.apellido == apellidoABuscar));

*/
/*

    //METODO FILTER(): me devuelve todos los objetos que cumplen con una condicion en el array, a diferencia de find() que solo retorna solo un objeto que cumple la condicion
    //devuelve la busqueda como un nuevo array
    //en el caso que filter() no encuentre resultados, devuelve un array vacio, y si mostramos en pantalla no va a mostrar nada.

    //filter devuelve un array por eso lo recibo con el array personasFiltradas
    const personasFiltradas = personas.filter(persona => persona.sueldo > 12000);
    //muestro todos los objetos que encontro filter
    personasFiltradas.forEach(persona => {
        console.log(persona);
    });

*/
/*

    //METODO SOME(): devuelve un booleano si encuentra al menos un objeto que cumple con una condicion
    //se utiliza mucho para mejorar la performance de la aplicacion, hace un simple recorrido en el array,
    //si encuentra algo, devuelve true, y luego podemos por ejemplo utilizar filter, para buscar mas objetos que cumplan con la condicion
    //filter() por ejemplo es un metodo mas complejo que requiere mas procesamiento, en cambio con some() nos ahorramos que consulte, si no esta la condicion que buscamos.
    //con some() evito ejecutar codigo innecesario, se nota mas en backend, que en el frontend
    //consulta es una variable booleana
    let consulta = personas.some(persona => persona.sueldo > 20000);

    if(consulta){
        console.log(personas.filter(persona => persona.sueldo > 20000));
    } else {
        console.log("No existen personas cuyo sueldo sea mayor a 15000");
    }

*/
/*

    //METODO MAP(): devuelve un nuevo array con los datos que yo necesito de un array, modificandolos segun una condicion.
    //no modifica el array original, solo hace una copia de los valores y lo agrega a un nuevo array
    //tengo un objeto muy grande, y necesito solo una parte de ellos.
    //se utiliza muchisimo
    //ejemplo soy el contador de una empresa y no me interesa el nombre apellido y edad solo los sueldos, 
    //entonces uso map para que me devuelva solo los sueldos en un array
    //console.log(personas.map(persona => persona.sueldo));
    //console.log(personas);

    //otro ejemplo de uso es para mostrar ciertos datos en mi frontend de un arreglo que tiene muchos otros datos que no deseo mostrar

    //puedo tambien hacer consultas, me va a retornar un array de booleanos
    //console.log(personas.map(persona => persona.sueldo > 15000));
    //console.log(personas);

    //ESTA ES LA FORMA CUANDO TRABAJO CON UN SOLO ATRIBUTO DEL OBJETO
    //creo un nuevo array con los sueldos, recorro ese nuevo arreglo y por cada iteracion voy guardando el sueldo de cada objeto.


    //const sueldos = personas.map(persona => persona.sueldo);
    //let acumulador = 0 ;

    //forEach()
    //sueldos.forEach(sueldo => {
    //    acumulador += sueldo;
    //});

    //console.log(acumulador);

    //ESTA ES LA FORMA CUANDO TENGO VARIOS ATRIBUTOS
    //creo un nuevo objeto llamado persona, con cada uno de los datos, extraigo sueldo y id
    //creo un nuevo objeto para cada una de las propiedades
    const sueldosId = personas.map(persona => persona = {sueldo: persona.sueldo, id: persona.id});

    //funcion anonima, esta mal, no entiendo la expresion de arriba
    //const arrayPersonas = function(persona = {sueldo: persona.sueldo, id: persona.id})

    console.log(sueldosId);

    //el metodo map() se aplican a arrays de objetos, puedo aplicarlo a un array de datos simples pero no tiene mucho sentido,
    //cobra relevancia cuando tengo objetos con varios atributos.

*/
/*

    //El ejemplo anterior donde utilizo el metodo map() extrayendo solamente los sueldos y luego recorrer el arreglo de sueldos con forEach()
    //para luego ir sumandolos no es tan conveniente cuando se trata de un solo atributo
    //para eso se utiliza el metodo reduce()

*/

/*

    //METODO REDUCE(): permite hacer una operacion en un array de numeros, para mostrar un unico valor, ahorrando lineas de codigo
    //reduce un array de numeros a una sola variable

    //un ejemplo es cuando agregamos productos al carrito, para sumar todos los valores de los productos y calcular un total, utilizo este metodo,
    //extraemos el valor numerico precio producto y lo sumamos como un total

    //REEMPLAZARIA A ESTE CODIGO
    //const sueldos = personas.map(persona => persona.sueldo);
    //let acumulador = 0 ;

    //forEach()
    //sueldos.forEach(sueldo => {
    //    acumulador += sueldo;
    //});

    //console.log(acumulador);

    //ESTE ES EL MISMO CODIGO ANTERIOR UTILIZANDO REDUCE()
    //tomo cada uno de los sueldos y los guardo en una variable

    const sueldos = personas.map(persona => persona.sueldo);

    console.log(sueldos);

    //tengo un valor previo y un valor actual, los voy sumando uno a uno, de principio al final del array
    //internamente y en este ejemplo:
    //0 + 10000 + 15000 + 12000 + 18000 + 19000 = 74000
    //coloco aqui que mi valor inicial es el neutro de la suma, que es el 0, si fuera multiplicacion, seria el 1
    let acumulador = sueldos.reduce((prev, act) => prev + act, 0);

    //muestro el promedio de sueldos de mis empleados
    console.log(acumulador / sueldos.length);

    //podria sumar caracteres, es decir concatenarlos
    //coloco aqui que mi valor inicial es una cadena vacia
    const caracteres  = ['h', 'o', 'l', 'a'];

    console.log(caracteres.reduce((prev, act) => prev + act, ''));

*/


//METODO SORT(): ordena un array de objetos, de mayor a menor o de menor a mayor
//modifica el array original, por eso tenemos que hacer una copia de nuestro array original previamente

const sueldos = personas.map(persona => persona.sueldo);

console.log(sueldos);

//ordeno los elementos de menor a mayor
console.log(sueldos.sort((a, b) => a - b));
//puedo cambiar el nombre de las variables y funciona igual
//console.log(sueldos.sort((sueldo1, sueldo2) => sueldo1 - sueldo2));

//como funciona internamente
//si resto dos numeros, si me da negativo, el primer numero es menor que el segundo
//si son dos numeros iguales, no hago reordenamiento
//si resto dos numeros y me da positivo, siginfica que el de la derecha es menor que el de la izquierda.


//ordeno de mayor a menor
console.log(sueldos.sort((a, b) => b - a));

//como lo utilizo en un proyecto real
//por ejemplo como filtro, mas populares, mayor precio, menor precio, novedades (tiempo en sitio web mas reciente fecha de llegada)


