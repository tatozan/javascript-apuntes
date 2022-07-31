/* AFTER CLASS DE OBJETOS*/

/*

    Modularizacion: significa dividir el codigo en dos o mas partes
    
    Fran recomienda tres archivos generalmente:
    -script general: codigo general
    -script para clases: poner clases y objetos
    -script eventos: eventos y cuestiones mas complejas

*/

/*

    Herencia: crear una clase que es hija de otra clase.
    Tengo un padre, y de ese padre heredan varios hijos.
    El concepto "es un", "puede ser".

    No se puede hacer herencia multiple:
    No puede haber mas de un padre para cada hijo, pero si un padre puede tener varios hijos, es herencia simple

    Utilizando funciones constructoras no se puede heredar.

*/


const pikachu1 = new Pikachu("Pika pika", "Electrico", 32, 10);
const charmander1 = new Charmander("Fueguito", "Fuego", 30, 8);
const eevee1 = new Eevee("Fatiga", "Normal", 12, 6);

//el do...while lo hacemos para que se peleen hasta que uno se le acabe la vida
//pero para evitar que algun pokemon siga atacando despues de haber perdido, colocamos el if dentro del do..while
do{
    pikachu1.impactrueno(charmander1);
    if(charmander1.vidas <= 0){
        break;
    }

    charmander1.llamarada(pikachu1);
} while(pikachu1.vidas > 0 && charmander1.vidas > 0)


do{
    eevee1.melee(pikachu1);
    if(pikachu1.vidas <= 0){
        break;
    }

    pikachu1.impactrueno(eevee);
} while(pikachu1.vidas > 0 && eevee1.vidas > 0)


