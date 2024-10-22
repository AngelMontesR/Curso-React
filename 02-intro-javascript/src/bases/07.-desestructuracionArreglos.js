/*****************************/
// Desestructuracion de Arreglos
/*****************************/

const personajes = ['Goku','Vegeta','Pikoro'];
const [,,p3] = personajes;
console.log(p3);

const retornaArreglo = () =>{
    return ['ABC',123]
}
const [p1,p2] = retornaArreglo();
console.log(p1,p2)


const functionState = (valor) =>{
    return [valor, function setNombre(){
       console.log('Hola')
    }];
}
const [nombre,setNombre] = functionState( 'Pepe' );
console.log(nombre);

setNombre();