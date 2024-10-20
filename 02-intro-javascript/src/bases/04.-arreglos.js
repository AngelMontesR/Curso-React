
/*****************************/
// Arreglos en JS
// Es una collection de informacion que se encuentra en una variable
//
/*****************************/

// const arreglo = new Array();
const arreglo = [];

arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);

let arreglo2 = [...arreglo];
arreglo2.push(5);

const arreglo3 = arreglo2.map(
    function(numero){
        return numero;
    }
);

arreglo3.push(6);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
