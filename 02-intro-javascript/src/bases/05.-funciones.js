
/*****************************/
// Funciones
/*****************************/

//recomendado
const saludar = function (nombre){
    return `Hola ${nombre}`;
}

// const saludar2 =  (nombre) => {
//     return `Hola ${nombre}`;
// }

const saludar3 =  (nombre) => `Hola ${nombre}`;
const saludar4 =  () => `Hola Mundo`;

const getUser = () =>(
    {
        uid: 'ABVSCA',
        username: 'Angel'
    }
);


// console.log(saludar("Angel"));

console.log(saludar());
console.log(saludar3("Angel"));
console.log(saludar4());
// console.log(getUser())


//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas
// function getUsuarioActivo(nombre){
//     return {
//         uid: 'BASDADAS',
//         username: nombre
//     }
// }

const getUsuarioActivo = (nombre) =>(
    {
        uid: 'BASDADAS',
        username: nombre
    }
);

const usuarioActivo = getUsuarioActivo("Angel");
console.log(usuarioActivo);