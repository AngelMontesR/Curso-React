

/*****************************/
// Objetos Literales
// 1.Se pueden crear objetos dentro de objetos
// 2.Se pueden crear metodos dentro de objetos
/*****************************/

const persona = {
    nombre: 'Angel',
    ap: 'Montes',
    edad: '26',
    direccion:{
        ciudad: "Mexico",
        municipio: "Neza",
        colonia: "OP"
    }
};

// console.table( persona );
console.log( persona );


const persona2 = {...persona};
persona2.nombre = "Peter";


console.log( persona2 );
console.log( persona );