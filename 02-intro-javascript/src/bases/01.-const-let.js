console.log("Hello, World!");

//Variables y constantes

const nombre = "Angel";
const apellido = "Montes";
let valorDado = 5;
console.log(nombre, apellido, valorDado);

//var no se debe de usar, se usa let y const para declarar variables
//ya que var tiene un alcance global y let y const tienen un alcance de bloque
if (true) {
    const nombre = "Peter";
    console.log(nombre);
}
