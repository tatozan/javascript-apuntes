class Pokemon{
    //constructor de la clase 
    constructor(nombre, tipo, vidas){
        this.nombre = nombre;
        this.tipo = tipo;
        this.vidas = vidas;
        this.nivel = 1; //creo un atributo sin haber sido pasado parametros
    }

    //metodos de la clase
    recibirDaño(dañoAtaque){
        console.log(`${this.nombre} esta recibiendo un ataque de ${dañoAtaque}`);
        this.vidas -= dañoAtaque;

        if(this.vidas <= 0){
            console.log(`${this.nombre} se fue a dormir con los MagiKarp`);

        } else {
            console.log(`${this.nombre} sigue vivo con ${this.vidas} de vidas y con ganas de pelear`);
        }
    }
}


//El concepto "es un", "puede ser".
//La clase Pikachu es un Pokemon, un Pokemon puede ser Pikachu.
//extends denota que la clase Pikachu hereda tanto atributos y metodos de Pokemon
class Pikachu extends Pokemon{
    //override del constructor, agregamos parametro dañoImpactrueno
    constructor(nombre, tipo, vidas, dañoImpactrueno){
        //utilizamos la palabra reservada super, para llamar al constructor de la clase padre
        super(nombre, tipo, vidas);

        //literalmente super hace esto:
        /*constructor(nombre, tipo, vidas){
            this.nombre = nombre;
            this.tipo = tipo;
            this.vidas = vidas;
            this.nivel = 1;
        }*/

        this.dañoImpactrueno = dañoImpactrueno;
    }

    //metodos de la clase
    impactTrueno(pokemonAtacado){ //envio objeto por parametros, puedo mandar cualquiera
        console.log(`${this.nombre} lanzo impactrueno a ${pokemonAtacado.nombre} con un daño de ${this.dañoImpactrueno}`);

        //ejecuto un metodo de un objeto, dentro del metodo de otro objeto
        //al pedir el objeto por parametros, en este caso pokemonAtacado,
        //puedo ejecutar los atributos y cualquier de sus metodos. 
        pokemonAtacado.recibirDaño(this.dañoImpactrueno);
    }
}

class Charmander extends Pokemon{
    //constructor
    constructor(nombre, tipo, vidas, dañoLlamarada){
        super(nombre, tipo, vidas);
        this.dañoLlamarada = dañoLlamarada;
    }

    //metodos
    llamarada(pokemonAtacado){
        console.log(`${this.nombre} lanzo llamarada a ${pokemonAtacado.nombre} con un daño de ${this.dañoLlamarada}`);

        pokemonAtacado.recibirDaño(this.dañoLlamarada);
    }

}

class Eevee extends Pokemon{
    constructor(nombre, tipo, vidas, dañoMelee){
        super(nombre, tipo, vidas);
        this.dañoMelee = dañoMelee;
    }

    //metodos
    melee(pokemonAtacado){
        console.log(`${this.nombre} lanzo melee a ${pokemonAtacado.nombre} con un daño de ${this.dañoMelee}`);

        pokemonAtacado.recibirDaño(this.dañoMelee);
    }
}
