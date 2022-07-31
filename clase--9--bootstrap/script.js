

/*

    EVENTO SUBMIT

*/
/*
    //no se consulta por el estado del boton del formulario, esta explicado en el html en detalle
    //si lo realizo de la manera siguiente no serviria.

    const botonForm = document.getElementById('idBoton');
    botonForm.addEventListener('click', () => {
        console.log("Holaaaaa");
    });

*/

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

/*
    //no importa que cada objeto tenga el mismo nombre porque consulto por el indice del arreglo
    const personas = [];

    //un formulario se consulta por el id del formulario
    const form = document.getElementById('idForm');

    //nunca se consulta por el boton, haya o no una base de datos detras
    form.addEventListener('submit', (event) => {
        //al no tener un servidor detras, prevenimos el comportamiento por defecto
        //el metodo preventDefault() no se utiliza en otro elemento en el dom, salvo en el submit
        event.preventDefault();

        //consulto al contenido de los elementos del formulario, no antes, ni despues, porque estarian vacios, solamente cuando el usuario da click en el boton
        let username = document.getElementById('idUser').value;
        let email = document.getElementById('idEmail').value;
        let password = document.getElementById('idPassword').value;

        const user = new User(username, email, password);
        personas.push(user);
        console.log(personas);

        //limpio el formulario
        form.reset();
    });

*/

//agrego la funcionalidad mostrarUsuarios, lo copie y pegue todo el codigo para saber diferenciarlo del codigo original

const users = [];

const form = document.getElementById('idForm');
const divUsers = document.getElementById('divUsers');
const botonUsers = document.getElementById('botonUsers');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('idUser').value;
    let email = document.getElementById('idEmail').value;
    let password = document.getElementById('idPassword').value;

    const user = new User(username, email, password);
    users.push(user);
    console.log(users);

    form.reset();
});

//recorro todo el arreglo de objetos y voy creando el html para mostrar los datos de cada uno
botonUsers.addEventListener('click', () => {
    users.forEach(user => {
        divUsers.innerHTML += `
        <div class="card" style="width: 18rem; margin:3px;">
            <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.email}</p>
            </div>
        </div>
        
        `
    })
})
