/*  DOM */
/*

    es una representacion de la estructura jerarquica de mi html;
    como html tiene estructura de padre - hijo, puede accederse o modifcarse cada uno de esos elementos mediante dom
    No es que accedo directamente al html, utilizo al dom como un metodo de acceso al html
    como si una persona quisiera llamarme, y se fija en la guia telefonica, donde estan cada uno de mis datos

        La estructura general de un html es:

                        <html>
                           |
              -------------------------------------
              |                                   |                               
            <head>                             <body>
              |                                  |
      --------------------                      <div>               
      |       |        |                         |
    <meta>  <link>  <title>              -------------------  
                                         |        |         |
                                        <ul>     <p>       <h1>
        
                                        
    La unica etiqueta que no tiene padre es <html>, el resto por lo menos tiene un padre para poder consultar
    Siempre tenemos un metodo de acceso para cada uno de los elementos del dom, como se dijo, todos los elementos del html tienen padre, a excepcion de html,
    para dom esas etiquetas son nodos.

    Cada etiqueta html se transforma en un nodo de tipo elemento. La conversion se realiza de forma jerarquica
    Hay 12 tipos de nodos, los mas usados son:
    -nodo elemento: estructura jerarquica en html ( a este accedemos mediante dom)
    -nodo texto: texto plano
    -Document
    -Attr
    -Comment

*/  

/*
  Como acceder a los nodos:
  Los metodos mas comunes de la clase Document para acceder a los elementos del DOM son:
  -getElementById()
  -getElementByClassName()
  -getElementsByTagName()

*/

/*

  //document es el nodo raiz de un html, accedemos al elemento p, id parrafo1
  //getElementById() devuelve null si no existe, o el elemento si existe
  //me devuelve el primer elemento que cumple con el id
  //comillas simples o dobles andan indistintamente, al igual que backticks, pero es mejor usar comillas simples porque en ingles usan comilla simple para escribir y podemos poner it's por ejemplo
  //me conviene guardarlo en una constante porque se trata de un objeto
  const parrafo1 = console.log(document.getElementById('parrafo1'));

  //cuando codeabamos css nos recomendaban aplicar los estilos con clases,
  //en cambio los elementos del html accedidos por js se prefiere utilizar id, los estilos se suelen aplicar a varios elementos a las vez utilizando clases,
  //en cambio para los elementos del dom con js se suele acceder a un solo elemento por el id, porque no voy a aplicar las mismas acciones sobre los elementos
  //por ejemplo si quiero comprar un secarropa y agregarla al carrito, quiero agregar un secarropa en particular y no todos.

  //metodo getElementsByClassName(): devuelve todos los elementos que pertenecen a una clase dada
  //const parrafos = document.getElementsByClassName('parrafos');

  //devolveme el elemento con indice 0, dentro de HTMLCollection, los indices van en orden segun esten en html
  //en total serian dos consultas ('parrafos') y [0]
  //const parrafos = document.getElementsByClassName('parrafos')[0];



  console.log(parrafo1);
  //devuelve un tipo de array HTMLCollection, no comparte todos los metodos, no puedo hacer un map(), es como un html reducido
  console.log(parrafos);

  //ahora tengo un problema, del primer div parrafos, como accedo a los diferentes parrafos?
  //metodos de los elementos en html
  //childrenNodes(): me devuelve todos los elementos hijos, en el caso de la primera clase parrafos, me devuelve los parrafos y el texto, es decir todos los elementos hijos
  //children(): devuelve solamente los elementos html, los elementos hijos
  //me devuelve un html con cada uno de sus hijos en un array HTMLCollection
  //const parrafos = document.getElementsByClassName('parrafos')[0].children;

  //me devuelve la primera clase llamada parrafos, sus hijos, solo mostrando el primero
  const parrafos = document.getElementsByClassName('parrafos')[0].children[0];

  //muestro el contenido de parrafo1 mediante el atributo textContent
  console.log(parrafo1.textContent);

  //getElementsByTagName(): devuelve todos los elementos con la etiqueta propuesta
  //es el menos utilizado
  //devolveme todos los elementos con la etiqueta 'p', es decir todos los parrafos que existen en mi codigo, independientemente si tienen id o no, todos.
  const parrafosP = document.getElementsByTagName('p');
  //devuelve un array con todos los elementos parrafo
  console.log(parrafosP);

  //devuelve el primer parrafo
  const parrafosP2 = document.getElementsByTagName('p')[0];

  //devuelve el contenido del primer parrafo utilizando el atributo textContent
  const parrafosP3 = document.getElementsByTagName('p')[0];
  console.log(parrafosP3.textContent);

*/

/* MODIFICAR NODOS */

/*

  //atributo innerText() modifico el contenido del elemento p
  //este codigo se modifica segun una accion que realizo con un usuario
  //parrafo1.innerText = "Hola coders, buenos dias!";

  //un ejemplo mas completo, para saludar con variables
  //creo un objeto simple o literal, no creo la clase
  const user = {username: "Pancho", password: "123"}

  parrafo1.innerText = `Hola ${user.username}, buenos dias!`;

  //modifico el html pero no en el codigo fuente, sino cuando la muestro
  //atributo innerHTML: inserta un nuevo elemento html, en este paso <p>
  //con el = piso el contenido
  parrafos.innerHTML = "<p> Hola coders</p>"

  //con += agrego un elemento html, no piso valores previos
  //puedo agregar elementos que tienen la misma estructura y solo cambia el contenido, sirve para el contenido dinamico
  //en un ecommerce pueden ser los productos
  parrafos.innerHTML += "<p> Hola coders</p>";

*/

class Producto {
    constructor(id, nombre, marca, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.precio = precio;
        this.stock = stock;
    }
}


const producto1 = new Producto(1, "Yerba Mate", "La Yerbita", 400, 20);
const producto2 = new Producto(2, "Fideos", "Fidein", 100, 25);
const producto3 = new Producto(3, "Cafe", "Le Cafe", 500, 22);
const producto4 = new Producto(4, "Arroz", "Arrocin", 200, 15);
const producto5 = new Producto(5, "Lentejas", "Lentejin", 250, 30);

const productos = [producto1, producto2, producto3, producto4, producto5];

//consulto el elemento id Productos
const divProductos = document.getElementById('productos');

//recorro el array de objetos productos, para ir insertando contenido en js, agrego agrego un div por cada objeto producto dentro del divProductos de index.html
//estoy creando una plantilla para insertar informacion
//es hmtl dinamico
//tambien creo los div con un id unico para cada producto
productos.forEach(producto => {
    divProductos.innerHTML += `
    <div id = "producto${producto.id} class = "productos">
        <p>Nombre: ${producto.nombre}</p>
        <p>Marca: ${producto.marca}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Stock: ${producto.stock}</p>
    </div>`
});







