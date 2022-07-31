/*

    ARRAYS: es un tipo de dato u objeto especial que nos permite almacenar valores en forma de lista
    Lista se refiere a que todos los elementos van a estar ordenados dentro del array
    Puedo guardar cualquier tipo de dato y cada elemento tiene un indice
    El primer elemento tiene indice 0.

*/

/*

    //declaro un array vacio
    //podriamos crear un array vacio o uno ya inicializado
    //en los carritos de compra se suele crear un array vacio para luego agregarle valores
    const valores = [];
    const cosas = [true, 1, "Hola", false, "Chau"];

    //muestro array por pantalla
    console.log(cosas);

    //consultamos el elemento con indice 2, en este caso Hola
    console.log(cosas[2]);

    //js tira undefinded porque no existe
    console.log(cosas[10]);

    //recorremos el arreglo con un ciclo for
    //esta forma no se suele utilizar
    for(let i = 0; i < 5; i++){
        console.log(cosas[i]);
    }

    //si se utiliza con la propiedad length de array
    //length: es una propiedad de los arrays que muestra la cantidad de elementos de un array
    for(let i = 0; i < cosas.length; i++){
        console.log(cosas[i]);
    }

    //se puede modificar sus elementos a pesar que es del tipo const porque es un objeto
    cosas[0] = "Saludos";

    //lo unico que me garantiza es que no se pueda eliminar el arreglo de memoria
    cosas = null; //js no le permite

    //los arrays no se suelen congelar como las clases

    //puedo guardar un valor en una posicion de indice, independientemente que en los indices anteriores no hayan elementos
    //javascript rellena los indices anteriores con valores vacios, es decir, undefined
    //otros lenguajes como es normal, no permiten hacerlo
    cosas[10] = "Hola gente";

    //devuelve la cantidad de elementos del array
    console.log(cosas.length); //devuelve 10

    const alumnos = ["Camilo", "Julieta", "Santiago", "Luca"];

    //metodo push(): agrega un nuevo elemento
    //agrega el elemento al final del arreglo
    //es conveniente usar push porque no hace falta saber cual es la ultima posicion del array donde hay un valor
    alumnos.push("Brandon");

    console.log(alumnos);


    //metodo unshift(): agrego un nuevo elemento al principio de array y modifica los indices de los demas elementos
    //no es tan recomendado por eso mismo por modificar los indices
    //y si hay un array enorme, moveria todos los valores un lugar
    alumnos.unshift("Francisco");

    //metodo shift(): elimino el primer elemento del array
    //modifica los indices, no es muy recomendado
    //Retorna el elemento eliminado
    alumnos.shift(alumnos);
    
    //metodo pop(): eliminamos el elemento del ultimo indice
    //Retorna el elemento eliminado
    let alumnoBrandon = alumnos.pop();

    // si tengo un array vacio y llamo al metodo pop() para eliminar un elemento
    //me retorna undefined
    const tutores = [];
    console.log(tutores.pop());

    //tanto shift() como pop() realizan la misma funcion aqui de eliminar
    //porque solo hay un valor en el arreglo
    
    const tutores2 =["Samuel"];
    console.log(tutores.shift());
    console.log(tutores);

    //tanto metodo shift() como pop() tienen la limitante de borrar elementos al principio y al final,
    //existe el metodo splice()
    //metodo splice(): me permite eliminar uno o mas elementos del array sin importar la posicion en donde esten los elementos
    //me devuelve un array con los elementos eliminados

    const alumnos3 = ["Camilo", "Julieta", "Santiago", "Luca"];
    //el primer parametro es el indice a eliminar, 
    //el segundo parametro la cantidad de elementos a eliminar contiguamente a ese indice
    alumnos.splice(3, 1); //elimino Luca

    const alumnosEliminados = alumnos.splice(0, 2); //elimino Camilo y Julieta y devuelve los elementos eliminados en un array

    //para eliminar todos los elementos podemos usar splice y length
    alumnos3.splice(0, alumnos.length);

*/

    /*

        //metodo indexOf: me permite obtener el indice de un elemento en un array dado el valor del elemento
        const alumnos4 = ["Camilo", "Julieta", "Santiago", "Luca"];

        let nombreEliminar = prompt("Ingrese un nombre a eliminar");
        let indice = alumnos4.indexOf(nombreEliminar);

        //se compara con -1 porque es una condicion de error del metodo indexOf, por si no encuentra el elemento buscado
        if(indice != -1){
            alumnos4.splice(indice, 1);
        } else {
            alert("Usuario no encontrado");
        }

        console.log(alumnos4);

    */



    //metodo join(): transforma todos los elementos de un array en string
    //no es muy utilizado en frontend
    //tengo que indicarle el separador de cada uno de los elementos
    //se suele utilizar en el backend
    const alumnos4 = ["Camilo", "Julieta", "Santiago", "Luca"];

    console.log(alumnos4.join(","));

    //metodo concat: me concatena dos arrays colocandolos en un nuevo array.
    const alumnos5 = ["Esteban", "Juan", "Ricardo", "John"];

    //la forma en que se ponen los arrays es el orden en el que se concatenan
    //en este ejemplo digo que alumnos5 se concatene a alumnos4
    const alumnosTotales = alumnos4.concat(alumnos5);
    console.log(alumnosTotales);

    //si yo utilizo el operador + entre dos arrays los concateno pero como string
    //y js utiliza la coma para separar cada elemento
    //en la posicion que termina el primer array y comienza el otro array no hay espacios
    //seria similar a utilizar join, solamente que join separa todos los elementos por el signo que le enviemos
    //y no deja pegado el ultimo elemento del primer array con el inicio del segundo array

    const alumnosTotales2 = alumnos4 + alumnos5;
    console.log(alumnosTotales2);


//puedo concatenar mas de un arreglo utilizando el metodo concat
//este tipo de concatenacion se suele utilizar en ecommerce cuando pongo la opcion mostrar todos
    const alumnos6 = ["Camilo", "Julieta", "Santiago", "Luca"];
    const alumnos7 = ["Esteban", "Juan", "Ricardo", "John"];
    const alumnos8 = ["Rodrigo"];

    const alumnosTotales3 = alumnos6.concat(alumnos7.concat(alumnos8));

    console.log(alumnosTotales3);

    //metodo slice(): devuelve una copia de una parte del array dentro de un nuevo array
    //se utiliza para hacer consultas de un array
    //tiene dos parametros, el primero le indico el indice desde donde extraigo los elementos
    //el segundo el indice hasta donde quiero llegar, pero el fin no esta incluido,
    //quiere decir que si indico slice (0, 3), no me va a tomar
    //elemento0, elemento1, elemento2, elemento3, sino
    //elemento0, elemento1, elemento2

    console.log(alumnosTotales3.slice(0,3));

    //metodo includes(): indica si existe un elemento dentro de un arreglo, devolviendo true si si, y false si no
    //al contrario de indexOf() que me devuelve el indice
    console.log(alumnosTotales3.includes("Ricardo"));

    //un ejemplo en ecommerce cuando envio una propiedad de un objeto, por ejemplo categoria  = electronica
    //y consulto si existe un elemento de esa categoria
    //si me devuelve true, consulto, sino no.
    //determina para optimizar si realizo una consulta o no


    //metodo reverse(): invierte el orden de los elementos de un array
    //se suele utilizar en ecommerce, si los elementos de una tienda estan ordenados de mayor a menor en precio,
    //podriamos consultarlos al reves, de menor a mayor
    console.log(alumnosTotales2.reverse());
    console.log(alumnosTotales);

/*

    Los metodos que mas vamos a utilizar son:
    length, push, splice, concat a veces e indexOf.

*/

/************ARRAYS DE OBJETOS ************/

//Es un array que puede almacenar objetos

class Perro{
    constructor(id, nombre, color, raza, cachorros){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.raza = raza; //propiedad simple
        this.cachorros = cachorros; //este atributo recibe un array por parametros
    }
}

//instancio la clase perro y creo 4 objetos
//puedo guardar un atributo o propiedad como array de elementos, el caso de atributo cachorros
//cuando utilizo un array como atributo de un objeto, cuando los datos de un usuario por ejemplo son muy complejos, por ejemplo, atributo cursosRealizados
const perro1 = new Perro(1, "Cual", "Negro", "Ovejero", ["Cualcito", "Pirata", "Firulais", "Hector", "Tarzan"]);
const perro2 = new Perro(2, "Copito de nieve", "Blanco", "Chihuahua", ["Negrito", "Azulcito"]);
const perro3 = new Perro(3, "Fatiga", "Indefinido", "Indefinida", []);
const perro4 = new Perro(4, "Hercules", "Dorada", "Golden", ["Marroncito", "Pepito"]);

//creo el array de objetos
const perros = [perro1, perro2, perro3, perro4];

//muestro el array de objetos
console.log(perros);

//accedo a una propiedad consultando el indice del array de objetos,
//en este caso mostraria el atributo de perro3, raza indefinida
console.log(perros[2].raza);














    
