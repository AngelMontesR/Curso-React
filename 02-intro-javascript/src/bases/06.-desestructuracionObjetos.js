
/*****************************/
// Desestructuracion de Objetos
/*****************************/

const persona = {
    nombre: 'Angel',
    edad: 25,
    clave: 'SuperMan'
};

//renombrar propiedad
// const {nombre:nombre2} = persona;

const {nombre,clave,edad} = persona;

const userContext = ({ edad,nombre,clave,rango = "Mayor"}) =>{
    // console.log( `Hola ${nombre} ${rango} ${edad}`)
    return {
        nombreClave: clave,
        anios:edad,
        coordenadas:{
            lat: 23231,
            long: 23131
        }
    }
};

const {nombreClave,anios,coordenadas:{lat,long}} = userContext(persona);

console.log(nombreClave);
console.log(anios);
console.log(lat);
console.log(long);