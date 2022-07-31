/*
    
    Sintaxis Sugar:
    Un nombre que se le da a los operadores avanzados cuando se los esta simplificando
    Ejemplo                 num = num + 1
    Sintaxis sugar:         num += 1; o num++;

*/

/*

    Operador ternario: es una simplificacion de la estructura if...else. Es un condicional que consta si o si de tres partes:
        -La condicion
        -El caso de ejecucion en caso que cumpla
        -El caso else si no se cumple

        Estructura:
        condicion        ?      caso1     :     caso2

        (condicion)     if      true    else    false 

        Es recomendable colocar la condicion entre parentesis para que sea de mas facil lectura
        Al final de cada instruccion no puede ir ; 

        Si o si tiene que ir la condicion de else, en el caso que no queramos escribir codigo en else, es hacer lo siguiente:
        let respuesta = (numero % 2 == 0) ? "Numero par" : "";

        No hace falta que si o si almacene los valores que retorna la funcion

        Cada instruccion, ya sea en condicion true o false, tienen un return implicito, al igual que las arrow functions o funciones flecha

        Ejemplo:
        let temperatura = 31;

        if (temperatura > 30) {
            alert("Dia caluroso!");
        } else {
            alert("Dia agradable");
        }

        temperatura > 30 ? alert("Dia caluroso!"); : alert("Dia agradable");

*/

/*

    OPERADOR TERNARIO EJEMPLOS

    //Otro ejemplo de operador ternario
    let numero = 10;

    if(numero >= 10){
        console.log("Mayor que 10");
    } else {
        console.log("Menor que 10");
    }

    //se suele agregar parentesis en el condicional para separarlo del resto del codigo
    (numero >= 10) ? console.log("Mayor que 10") : console.log("Menor que 10")

    //cada instruccion, ya sea en condicion true o false, tienen un return implicito, al igual que las arrow functions o funciones flecha
    let respuesta = (numero % 2 == 0) ? "Numero par" : "Numero impar";

    console.log(respuesta);

    let desayuno = "Cafe";
    //se puede concatenar los operadores ternarios, pero mas de dos operadores ternarios no es comun
    let desayunoFinal = (desayuno == "cafe") ? "Cafe con leche" : (desayuno == "te") ? "Te con leche" : (desayuno == "chocolatada") ? "Chocolatada con leche" : "Mate";

    console.log(desayunoFinal);

*/

/*

    OPERADOR LOGICO AND: es una reduccion de un condicional, pero trata de ejecutar (o retornar) algo solo si la condicion es verdadera,
    reduce un if sencillo con un solo bloque de ejecucion.

    if      (condicion)     {       instrucciones;      }

            (condicion)     &&      instrucciones;

    Si la condicion de la izquierda es verdadera, ejecuta la instruccion de la izquierda.

    Ejemplo:
    const carrito =[];

    if (carrito.length === 0){
        console.log("El carrito esta vacio!");
    }

    // con operador AND
    carrito.length === 0 && console.log("El carrito esta vacio!");

    IMPORTANTE: 
    -Operando: son las condiciones o expresiones que se evaluan, por ejemplo primerNombre && segundoNombre, en este caso los operandos son primerNombre y segundoNombre y el operador &&.
    -En la programacion clasica AND retorna true si ambos operandos a evaluar son valores true, y false en cualquier otro caso.
    -Es llamado valor false a:
        "" (vacio) 
        null (nulo)
        0

    El operador extendido AND (&&) en JS, realiza lo siguiente:
    -Evalua los operandos de izquierda a derecha.
    -Para cada operando, los convierte a un booleano. Si el resultado es false, se detiene y retorna el valor original de dicho operando.
    -Si todos los operandos han sido evaluados (todos fueron valores verdaderos), retorna el ultimo operando.

    EN RESUMEN:
    -AND retorna el primer valor false, o el ultimo valor si todos los operandos fueron true.

   -La diferencia entre AND y OR es que:
        AND retorna el primer valor false, mientras que OR retorna el primer valor true.
        Si todos los valores fueron false, AND devuelve el ultimo valor, si todos los valores fueron false, OR devuelve el ultimo valor.
                
*/

/*

    OPERADOR LOGICO OR: OR (||) es sintacticamente similar al operador AND, con la diferencia que consta de dos operandos
    y no de una condicion explicita: operando1 || operando2.

    IMPORTANTE: 
    -Operando: son las condiciones o expresiones que se evaluan, por ejemplo primerNombre || segundoNombre, en este caso los operandos son primerNombre y segundoNombre y el operador ||.
    -En la programacion clasica OR (||) retorna true si cualquiera de los operandos a evaluar son valores true, y false en cualquier otro caso.
    -Es llamado valor false a:
        "" (vacio) 
        null (nulo)
        0

    El operador extendido OR (||) en JS, realiza lo siguiente:
    -Evalua los operandos de izquierda a derecha.
    -Para cada operando, los convierte a un booleano. Si el resultado es true, se detiene y retorna el valor original de dicho operando.
    -Si todos los operandos han sido evaluados (todos fueron valores falsos), retorna el ultimo operando.

    EN RESUMEN:
    -OR retorna el primer valor true, o el ultimo valor si todos los operandos fueron false.

    -La diferencia entre OR y AND es que:
        OR retorna el primer valor true, mientras que AND retorna el primer valor false.
        Si todos los valores fueron false, OR devuelve el ultimo valor, si todos los valores fueron true, AND devuelve el ultimo valor.
    
*/

/*

    OPERADOR NULLISH COALESCING: este operador (??) funciona igual que el operador OR (||), con la diferencia que admite mas valores como 'verdaderos'. En este caso, solo obtenemos nullish en dos casos:
    El operador nullish toma como verdadero cualquier valor que no sea null ni undefined.
    Es un validador que retorna el valor de la derecha o izquierda si alguna de los dos operandos son null o undefined

    Ejemplo:

    //Para nullish lo unico que hay falso es null y undefined, si hay un null o undefined te devuelve el valor de la derecha, sin importar que lo de la derecha sea falso
    console.log(null ?? true); //devolveria true
    console.log(null ?? false); //devolveria false

    Ejemplo 2:

    let nombre = undefined;

    //Si el valor de nombre es undefined, mostrame el valor de la derecha
    console.log(nombre ?? "Nombre no valido");

    Ejemplo 3:

    El localStorage me devuelve null si no encuentra la key que busco

    //consulto un valor en mi localStorage que no existe, si no existe, creo mi array vacio, si existe ejecuto la primera instruccion
    const productos = JSON.parse(localStorage.getItem("aaa")) ?? [];
    console.log(productos);

    Ejemplo 4:
    
    localStorage.setItem("aaa", JSON.stringify([{hola: "Hola"}]));
    
    //retorna mi objeto
    const productos = JSON.parse(localStorage.getItem("aaa")) ?? [];

    console.log(productos);


    Ejemplo 5:

    //Creamos 4 objetos, donde uno de los objetos tiene precio undefined.
    //Si nosotros quisieramos sumar numeros con un undefined, me apareceria NaN.
    //Entonces si yo tengo un array de productos donde se guarda cada uno de esos productos con su precio, y el resultado no lo se hasta que sume los mismos, no puedo usar isNaN(), porque isNaN() seria mi numero final,
    //lo que se utiliza es nullish.

    const producto1 = {
        nombre: "Arroz",
        precio: 100;
    }

        const producto2 = {
        nombre: "Cafe",
        precio: 400;
    }
        const producto3 = {
        nombre: "Te",
        precio: 200;
    }
        const producto4 = {
        nombre: "Fideos",
        precio: undefined;
    }

    const productos = [producto1, producto2, producto3, producto4];

    let acumulador = 0;

    productos.forEach(productos) => {
        //si sumo con un valor undefined, lo reemplazo por 0
        acumulador += producto.precio ?? 0;
    }
*/

/*

    //Si consulto una propiedad de un objeto null, en vez de dar undefined como hace comunmente js, dice TypeError: el objeto es null
    //Si trabajo con mil personas de una base de datos se me corta el codigo
    const persona1 = null;

    console.log(persona1.nombre);

    //lo que utilizo es un acceso condicional, me diria undefined, sin largar mensaje de error, si puedo acceder me muestra el atributo, sino undefined:
    console.log(persona1?.nombre);

    //entonces si me devuelve undefined puedo utilizar operador nullish, si es undefined, es 0, y si existe muestro el sueldo de la persona1:
    //son formas de validar la informacion que lleva mi proyecto
    console.log(persona1?.sueldo ?? 0);

*/

/*

    DESESTRUCTURACION DE OBJETOS: saco de un objeto sus atributos y metodos y lo vuelvo mas simple, solamente extraigo lo que necesito
    ESTRUCTURACION: de valores simples, creamos uno mas complejo, por ejemplo creando un objeto, tiene atributos y metodos
*/

class Gato{
    constructor(nombre, color, raza, edad){
        this.nombre = nombre;
        this.color = color;
        this.raza = raza;
        ehis.edad = edad;
    }

    maullar(){
        console.log("miau miau");
    }

}

const gato1 = new Gato("Stray", "Naranja", "Naranjoso", 2);

//desestructuro los atributos del gato
//creo variables con los valores
//let {nombre, color, raza, edad, maullar} = gato1;

//console.log(nombre, color, raza, edad);

//si yo saco el metodo del objeto y lo puedo llamar sin el objeto, es una funcion tipo flecha
maullar();

//generalmente se utiliza cuando hay objetos muy grandes y necesito ciertas funcionalidades del objeto.
//el objeto queda intacto, solo extraigo datos
console.log(gato1);

//es muy usual en backend



/*

    ALIAS: para que la desetructuracion funcione debe haber coincidencia con los nombres de las propiedades del objeto.
        Sin embargo a veces puede que los nombres de las propiedades no sean muy descriptivos para el uso que queremos darle,
        y por ello podemos desestructurarlas con un alias, es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto
        Agrego una referencia a como se va a llamar la variable n, no se modifica la propiedad original
    Ejemplo:
    //nosotros para extraer elementos de un objeto, necesitamos llamar a los atributos o metodos exactamente como fueron creados.
    //ejemplo:
    class Gato1{
        constructor(nombre, color, raza, edad){
            this.n = nombre;
            this.c = color;
            this.r = raza;
            ehis.e = edad;
        }

        maullar(){
            console.log("miau miau");
        }

    }
    const gato2 = new Gato1("Brown", "Solid", "Chino", 2);

    //como vemos es muy poco entendible la variable n, para eso existe lo que se llama alias
    let {n, c, r, edad, maullar} = gato2;
        let {n: nombre} = gato2;

*/

/*

    DESESTRUCTURACION EN PARAMETROS: si en una funcion recibimos objetos por parametros, tambien es posible desestructurarlos directamente en el llamado,
    definiendo esto al declarar la funcion.

    ejemplo:
    function mostrarNombre(){
        console.log();
    }

    function mostrarRazaColor(){
        console.log();
    }

    function mostrarEdad(){
        console.log();
    }

    //si yo tengo un objeto grande o con multiples propiedades, lo que deberia enviar para cada una de las funciones, las propiedades del objeto por parametro
    
    mostrarEdad(gato1.e);
    mostrarNombre(gato1.n);
    mostrarRazaColor(gato1.c, gato1.r)

    //si quiero consultar varias propiedades de ese objeto pero no quiero consultar todo el objeto, tengo que definir muchos parametros para ese objeto,
    //lo que hacemos es enviar todo el objeto por parametros, pero solo traigo lo que voy a utilizar

    //cuando muestro el nombre, solo haga referencia al nombre del gato
    function mostrarNombre({n: nombre}){
        console.log(nombre);
    }

    //
    function mostrarRazaColor({r: raza, c: color}){
        console.log(raza, color);
    }

    //envio siempre el mismo objeto, completo, pero en los parametros de la funcion desestructuro el mismo y obtengo solamente la informacion que voy a necesitar
    function mostrarEdad(e: edad){
        console.log(edad);
    }

    //no necesariamente tengo que utilizar alias para desestructurar, si el objeto gato2 tenia atributo edad, en vez de e, podriamos haber escrito la funcion anterior de esta forma:
    function mostrarEdad(e){
        console.log(e);
    }

*/

/*

    OPERADOR SPREAD (...): es una herramienta que nos permite, como su nombre lo indica,
    desparramar un array u objeto. En otras palabras, cambiar la forma en la que presentamos este array u objeto.
    Lo utilizo para traer solo los valores que me interesan de un objeto.

    SPREAD elimina la referencia al objeto (elimino al objeto) y me quedo solo con los valores que quiero.

    Ejemplo:

    //tengo un objeto gato
    const gato1 = new Gato("Stray", "Naranja", "Naranjoso", 2);

    //si a ese objeto gato, lo elimino, me quedarian solo propiedades con sus valores, valores guardados sin referencia, eliminamos la referencia al objeto
    
   //sirve para hacer copia de elementos
   //guardamos cada una de las variables en el array gatito, las separamos
   const gatitos = gato1;




    EJEMPLO 2:
   //creo el objeto persona1 sin el constructor
   const persona1 = {
    nombre: "pancho",
    apellido: "Perez",
    edad: 43,
    peso: 80
   }

   //persona1 va a ser copia de un objeto persona2
   const persona2 = persona1;

   //Pregunta: son dos objetos diferentes con las mismas propiedades, o son el mismo objeto?
   console.log(persona1);
   console.log(persona2);

   //Respuesta: son dos objetos con las mismas propiedades

   //si yo modifico el apellido de la persona2 y vuelvo a consultar los mismos objetos, se cambia el valor en los dos objetos

   persona2.apellido = "Sanchez";

   console.log(persona1);
   console.log(persona2);

   //Pregunta: Por que se cambia el valor de los dos objetos, cuando le cambio uno de los atributos?
   //Respuesta:
   //cuando nostros hacemos una copia de objetos de esta forma:
   //const persona2 = persona1; lo que estamos haciendo es que persona2 apunte a la misma direccion de memoria que apunta persona1
   //en otras palabras persona1 le pasa la direccion de memoria (referencia a memoria) a persona2

   //Entonces para hacer copias de objetos, utilizo SPREAD
   //hago copia de objetos, sin hacer referencia a memoria
   //me quedo solo con sus valores, no con su referencia a memoria

    const persona2 = {...persona1};

   //en este ejemplo son dos objetos diferentes con los mismos valores, si modifico uno, no se modifica el otro
    console.log(persona1);
    console.log(persona2);

    //agrego un atributo adicional a persona2 sin modificar persona1, porque persona2 es una copia
    const persona2 = {
        ...persona1,
        sueldo: 7000
    } 


    EJEMPLO 3:
    //Un objeto puede guardar propiedades simples, pero tambien un objeto, puede contener 1 o mas objetos

    //Creo un objeto persona1
    const persona1 = {
    nombre: "pancho",
    apellido: "Perez",
    edad: 43,
    peso: 80,
    //mi objeto contiene otros objetos, mi propiedad animales es un array.
    animales : [
        {nombre: "pelusa", raza: "Naranjoso"},
        {nombre: "copito de nieve", raza: "blanco"}
    ]
   }

   //creo un objeto persona2, que copia el contenido de persona1 y añade un atributo sueldo
   const persona2 = {
        ...persona1,
        sueldo: 7000
    } 

    console.log(persona1);
    console.log(persona2);
    
    //modifico un atributo a persona2, sin modificar a persona1
    persona2.apellido = "Sanchez";

    //igualo a null el objeto que esta en el indice 1 del array animalitos, que es "copito de nieve"
    persona2.animales[1] = null;

    //modifica ambos objetos, es decir, el objeto almacenado en el array animales que se encuentra en indice 1, es null tanto en persona1, como persona2
    //el operador spread hace una copia de valores simples, cuando yo tengo un objeto dentro de otro objeto, el objeto (en este caso Animales) sigue referenciando a la misma posicion de memoria que persona1
    console.log(persona1);
    console.log(persona2);

    //PARA EVITAR ESTE COMPORTAMIENTO Y QUE REALMENTE SE COPIE LA TOTALIDAD DEL OBJETO SIN REFERENCIARLO ES:
    -Utilizar una libreria ( es decir un codigo externo que haga una copia del objeto completo)
    -Utilizar JSON, ya que JSON rompe la referencia al objeto y sus metodos y solo copio valores
    -Y la mejor y mas utilizada es usar el metodo structuredClone(objeto);

    //Cuando yo tengo objetos dentro de otros objetos y quiero copiarlo utilizo este metodo
    const persona2 = structuredClone(persona1);

*/
