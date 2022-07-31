/*

    OBJETOS

*/

//Creamos variables independientes que seran agrupadas en un objeto, referenciandolos mas adelante
let nombrePersona1 = "Francisco";
let apellidoPersona1 = "Pugh";
let edadPersona1 = 30;
let pesoPersona1 = 70;
let sueldoPersona1 = 12000;

/* 

    Creamos un objeto de la clase persona para referenciar las variables.
    A esto se le llama un objeto simple u objeto literal.
    Agrupamos varias caracteristicas en una sola variable, que es let persona1.

*/

/*

    let persona1 = {
        nombre: "Francisco", 
        apellido: "Pugh",
        edad: 30,
        peso: 70,
        sueldo: 12000
    }

*/

/* 

    /*En vez de consultar por cada variable 
    cuando no es un objeto, ejemplo:

    console.log(nombrePersona1);

    Utilizamos directamente la variable que referencia
    a todo el objeto y mostramos sus atributos:

    console.log(persona1);

    //console ordena por orden alfabetico las propiedades

    Si quiero acceder a una propiedad en particular, dos formas:
    Lo mas comun es la primera opcion.

    console.log(persona1.sueldo);
    console.log(persona1["sueldo"]);

    //puedo cambiarle el valor a un atributo
    persona1.sueldo = 2000;

    //No deberia poderse cambiar, podriamos hacer:

    const persona1 = {
        nombre: "Francisco", 
        apellido: "Pugh",
        edad: 30,
        peso: 70,
        sueldo: 12000
    }

    Pero no funcionaria, ni siendo variable let ni const
    porque los atributos en javascript no son variables
    y puede cambiarse el valor de esas propiedades.

    Lo unico que me asegura si hago const persona1 es que
    no pueden eliminar la persona en su totalidad, me asegura 
    la variable siempre tenga conexion a memoria, que no la pueda borrar,
    esta sentencia fallaria:

    persona1 = null; //esto no se deberia hacer

    //Siempre se tiene que crear un objeto de tipo const

    Podriamos consultar por un atributo que no existe
    lo que daria de tipo undefined.

    console.log(persona1.sexo);


    Podemos crear un atributo al objeto de la siguiente manera:
    por fuera de la defincion del objeto, no deberia dejarlo.

    persona1.estadoCivil = "Soltero";

    Los objetos en javascript son muy inseguros, para bloquearlo
    y que no puedan modificarse llamamos a un metodo de Object:

    Object.freeze(persona1);

    Evitamos que se pueda modificar o eliminar, no hay punto medio, 
    no podemos simplemente bloquearlo parcialmente.

*/



/**************** FUNCIONES CONSTRUCTORAS ************/
/* 
    
    Me permite crear objetos, definiendo los atributos y metodos predefinidos 
    ya cuando quiero crear un objeto llamo al constructor.

    Fueron implementadas antes de ES6, y era una adaptacion para aplicar
    clases y objetos, luego surgieron las clases constructoras
    que implementaron mucha sintaxis de java y python.

*/


/*

    Se recomienda la primera letra en mayuscula y la palabra en singular
    this es una autoreferencia al objeto que lo esta llamando,
    podriamos reemplazarlo por objeto.nombre por ejemplo, es exactamente lo mismo,
    obviamente siempre y cuando estemos dentro del objeto en el que usamos this.

*/

/*

    function Persona(pNombre, pApellido, pEdad, pSueldo){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.sueldo = pSueldo;
    }

*/

/*

    //creamos una nueva persona utilizando una funcion constructora, devuelve un objeto de tipo persona.
    const persona1 = new Persona("Francisco", "Pugh", 19, 15000);

    Object.freeze(persona1);

    console.log(persona1);

*/

/*

    Podemos crear un objeto sin pasarle todos los atributos,
    pero quedarian como undefined.

    const persona2 = new Persona("Esteban");

*/

/*

    Antes de cargar los atributos y crear el objeto persona,
    deberiamos verificar lo que se ingresa.

    En el caso que no carguemos todos sus atributos, podemos colocarle
    valores predeterminados a cada uno de sus atributos:

    function Persona(pNombre = "", pApellido = "", pEdad = 1, pSueldo = 0){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.sueldo = pSueldo;
    }

    let nombre = prompt("Ingrese un nombre");
    let apellido = prompt("Ingrese un apellido");
    let edad = parseInt(prompt("Ingrese una edad"));
    let sueldo = parseFloat(prompt("Ingrese un sueldo"));

    const persona3 = new Persona(nombre, apellido, edad, sueldo);

    Object.freeze(persona3);

    console.log(persona3);

*/

/*
    METODOS DE LOS OBJETOS
    Los metodos de los objetos son tecnicamente funciones, solo
    que se limitan a poder ser ejecutados solo desde el mismo objeto.

    Un metodo es una accion que realiza el objeto y la propiedad o atributos
    son valores que van a definir a mi objeto.

    La principal diferencia entre un metodo de un objeto y una funcion
    es que para utilizar el metodo, debemos llamar al objeto previamente,
    en cambio en la funcion no. Una funcion es de alcance global.

    En definitiva un metodo, es una funcion dentro de un objeto.

    Se muestra como ejemplo, un metodo de la clase Console, me doy cuenta por el "."
    console.log()

    Ejemplo funciones:
    alert()
    parseFloat()

*/

/*

    function Persona(pNombre = "", pApellido = "", pEdad = 1, pSueldo = 0){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
        this.sueldo = pSueldo;
        this.saludar() = () => console.log(`Hola, soy ${this.nombre} y te estoy saludando!`);
        this.aumentarSueldo = (aumento) => this.sueldo += aumento; //this.sueldo = this.sueldo + aumento

        //muestro atributos y metodos del objeto persona, el this reemplaza
        //literalmente al nombre del objeto, o sea, this = persona1
        console.log(this);
    }

    const persona1 = new Persona("Francisco", "Pugh", 19, 23000);
    const persona2 = new Persona("Ana", "Perez", 18, 25000);

    //Metodo es una funcion especial, porque se crea dentro de un objeto
    //dependiendo que objeto llama al metodo, es lo que muestra.
    persona1.saludar();
    persona2.saludar();
    persona2.aumentarSueldo(10000);

    Object.freeze(persona1);

    console.log(persona1);

*/

/*

    CLASES EN JAVASCRIPT
    Utilizando esta forma de declarar clases, como funciones, al mostrar por consola
    vemos tanto atributos como metodos del objeto, pero no seria necesario
    ver los metodos de los diferentes objetos porque siempre son iguales, no cambia 
    el valor de ese metodo, entonces lo que se creo son las clases.
    Se utilizo a partir de ES6 la sintaxis del codigo de java y python para definir clases.

    Creo los objetos mediante clases, esto me permite diferenciar los metodos de las propiedades o atributos
    Creo una funcion constructora con los atributos de la clase, y aparte declaro los metodos.

*/


/**************** CLASES CONSTRUCTORAS ************/
/*

    NOTA: diferenciar FUNCIONES CONSTRUCTORAS DE CLASES CONSTRUCTORAS,
          mientras FUNCIONES CONSTRUCTORAS no tienen separado los metodos de los atributos,
          las CLASES CONSTRUCTORAS si.


*/

/*

    class Producto{
        //comstructor de clase
        constructor(nombre, marca, precio, stock){
            //atributos clase Producto
            this.nombre = nombre;
            this.marca = marca;
            this.precio = precio;
            this.stock = stock;
        }

        //metodos clase Producto por separado de los atributos
        aumentarPrecio(porcentajeAumento){
            this.precio *= porcentajeAumento;
        }

        aplicarDescuento(porcentajeDescuento){  
            //0.3 es el 30% de descuento, aplicamos un 30% de descuento
            this.precio -= (this.precio * porcentajeDescuento); //100 = 100 -(100 * 0.3 (30))
            console.log(this.precio);
        }

        aumentarStock(nuevoStock){
            this.stock += nuevoStock;
        }

        disminuirStock(nuevoStock){
            this.stock -= nuevoStock;
        }
    }

/* 

    Relacion "es un"
    producto1 es un producto
    producto2  es un producto
    producto3  es un producto

*/
/*

    const producto1 = new Producto("Yerba Mate", "La Yerbita", 400, 20);
    const producto2 = new Producto("Cafe", "Le cafe", 500, 10);
    const producto3 = new Producto("Fideos", "Fideito", 400, 20);


    producto1.aplicarDescuento(0.25);
    producto1.aumentarPrecio(1.25);
    producto1.aumentarStock(10);
    producto1.disminuirStock(5);

    console.log(producto1);

*/

/*

    podemos congelar el objeto, y no podriamos modificarle sus atributos
    mediante los metodosxx del mismo objeto, pero si ejecutar sus metodos.
    Daria tipo de error read-only al tratar de modificar algun atributo.

*/

/*

    Object.freeze(producto1);
    producto1.aplicarDescuento(0.25);

*/