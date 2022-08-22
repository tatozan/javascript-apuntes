//el metodo fetch lo utilizo para pedir informacion a un servidor, mediante una api, y como generalmente se hace de forma asincronica, se utilizan las promesas
//no es que yo creo las promesas, sino que las utilizo

const divDolar = document.getElementById("divDolar");
const divClima = document.getElementById("divClima");
const formClima = document.getElementById("formClima");

const API_KEY = "bfd1b980aa5416c251b43fb2f1ba6c22";
/*

    //cuando se ejecuto la peticion ejecuto .then()
    fetch("https://criptoya.com/api/dolar")
    //consulto lo que me devolvio el servidor
    //con esta linea le estoy diciendo pasame el archivo json del servidor que me devolvio en la peticion al formato array de objetos
    //no se cuanto me va a llevar esta conversion de json a array de objetos...
    .then(response => response.json())
    //entonces cuando mi info ya este lista, recibo en consola lo que traje del servidor
    //data es el parametro de la funcion flecha y es un objeto
    .then(data => console.log(data))

    //En resumen, utilizo el metodo fetch() para obtener informacion del servidor de forma asincronica mediante promesas a esa url, utilizando la api.
    //EL primer then() lo utilizo para que cuando finalice la peticion al servidor, se ejecute la conversion del objeto obtenido, de json a formato objeto.
    //Como no se cuanto va a demorar esa conversion, utilizo el segundo then(), para cuando, ya este listo el primer then() con el json ya convertido, mostrar por pantalla ese objeto.

*/
/*

    //podemos solamente traernos algunas propiedades del objeto, desestructarndolo, solo nos quedamos con los atributos que queremos
    //desestructuramos en los parametros de una funcion
    fetch("https://criptoya.com/api/dolar")
    .then(response => response.json())
    .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
        console.log(oficial, solidario, blue, mep, ccb, ccl)
    });

*/

    function consultarDolar(){
        fetch("https://criptoya.com/api/dolar")
        .then(response => response.json())
        .then(({oficial, solidario, blue, mep, ccb, ccl}) => {
            divDolar.innerHTML = "";
            divDolar.innerHTML += `
            <div> 
                <h2> Cotizaciones del dolar </h2>
                <p> Oficial :$${oficial} </p>
                <p> Solidario :$${solidario} </p>
                <p> Blue :$${blue} </p>
                <p> MEP :$${mep} </p>
                <p> CCB :$${ccb} </p>
                <p> CCL :$${ccl} </p>    
            </div>
            `
        });
    }

    //Primero traigo los datos del servidor
    consultarDolar();

    //Aqui refresco la informacion cada 30 segundos
    setInterval(() => {
    consultarDolar();
    }, 30000);


/*
    //tengo que poner api key primero deberia registrame
    //me devuelve la geolocalizacion de Cordoba Argentina
    //en este ejemplo es un array de objetos, no es solo un objeto
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Cordoba","Cordoba","Arg"&appid={API key}`)
    .then(response => response.json())
    .then(data => console.log(data));

*/

/*
    //EJEMPLO PARA OBTENER EL CLIMA DE CORDOBA
    //Ejemplo: primero hago un pedido de datos para obtener la latitud y longitud del lugar que quiero averiguar el clima
    //Luego mediante el segundo fetch() anidado en base a las coordenadas que obtuve, hago el pedido del estado del clima de ese lugar
    //acordar que en este ejemplo es un array de objetos, no solo un objeto como los primeros ejemplos
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q="Cordoba","Cordoba","Arg"&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        //desestructuro el objeto
        let {lat, lon, name, state, country} = data[0];

        //me devuelve los datos de la localizacion que puse
        //ver que la api me devolvia los valores en kelvin y para que me lo trayera en celsius tuve que poner units=metric en la url 
        //para agregar el idioma español agrego lang=sp
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${API_KEY}`)
        .then(response => response.json())
        //obtengo el objeto main y el array weather
        //main es objeto, weather es array de objetos
        .then(({main, weather}) => {
            //hago una desestructuracion de otra desestructuracion
            //console.log(main, weather);
            //para aplicarle un alias a una variable escribo variable: alias
            let {feels_like: sensacionTermica, humidity: humedad, pressure: presion, temp: temperatura} = main;
            let descripcionClima = weather[0].description;

            //console.log(sensacionTermica, humedad, presion, temperatura);
            //console.log(descripcionClima);

            divClima.innerHTML = `
                <div>
                    <h2> Clima en ${name} </h2>
                    <p> Provincia: ${state} </p>
                    <p> Pais: ${country} </p>
                    <p> Temperatura: ${temperatura} C </p>
                    <p> Sensacion termica: ${sensacionTermica} </p>
                    <p> Humedad: ${humedad}% </p>
                    <p> Presion: ${presion} hPa </p>
                    <p> Descripcion: ${descripcionClima} </p>
            `
        });
    });

*/

//EJEMPLO PARA OBTENER DATOS DE UN LUGAR QUE ELIGAMOS EN UN FORMULARIO

//creamos un formulario para poder consultar el clima para los diferentes lugares que se ingresen
formClima.addEventListener("submit", (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target);

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${dataForm.get("ciudad")},${dataForm.get("provincia")},${dataForm.get("pais")}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        //desestructuro el objeto
        let {lat, lon, name, state, country} = data[0];

        //me devuelve los datos de la localizacion que puse
        //ver que la api me devolvia los valores en kelvin y para que me lo trayera en celsius tuve que poner units=metric en la url 
        //para agregar el idioma español agrego lang=sp
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=sp&appid=${API_KEY}`)
        .then(response => response.json())
        //obtengo el objeto main y el array weather
        //main es objeto, weather es array de objetos
        .then(({main, weather}) => {
            //hago una desestructuracion de otra desestructuracion
            //console.log(main, weather);
            //para aplicarle un alias a una variable escribo variable: alias
            let {feels_like: sensacionTermica, humidity: humedad, pressure: presion, temp: temperatura} = main;
            let descripcionClima = weather[0].description;

            //console.log(sensacionTermica, humedad, presion, temperatura);
            //console.log(descripcionClima);

            divClima.innerHTML = `
                <div>
                    <h2> Clima en ${name} </h2>
                    <p> Provincia: ${state} </p>
                    <p> Pais: ${country} </p>
                    <p> Temperatura: ${temperatura} C </p>
                    <p> Sensacion termica: ${sensacionTermica} </p>
                    <p> Humedad: ${humedad}% </p>
                    <p> Presion: ${presion} hPa </p>
                    <p> Descripcion: ${descripcionClima} </p>
            `
        });
    });


    });