const nombre = 'Angel';
const ap = 'Montes';

// const nombreCompleto = nombre + ' ' + ap;
const nombreCompleto = `${getSaludo(nombre,ap)}`;
console.log( nombreCompleto );

function getSaludo(nombre,ap){
    return nombre + " " +ap;
}