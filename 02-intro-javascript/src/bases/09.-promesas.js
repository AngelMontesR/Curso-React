/*****************************/
// Promesas
// Una promesa es un objeto que representa la eventual finalización o fracaso de una operación asíncrona.
/*****************************/

// Estado de la promesa:
// Pending (pendiente): La operación aún no ha terminado (ni éxito ni error).
// Fulfilled (completada): La operación ha sido completada exitosamente.
// Rejected (rechazada): La operación ha fallado.

import {getHeroeById} from './bases/08.-importExport';

// const promesa = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const buscar = getHeroeById(2)
//         resolve(buscar)
//         //reject('No se encontro el heroe')
//     },2000);
// });


// promesa.then((heroe)=>{
//     console.log("Then de la promesa",heroe);
// }).catch(error => console.error("Error: ",error))

const getHeroeByIdAsync =  (id) =>{
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const buscar = getHeroeById(id);
            if(buscar == undefined){
                reject('No se encontro el heroe');
            }
            resolve(buscar);
        },2000);
    });
};

getHeroeByIdAsync(1)
.then(console.log)
.catch(console.error);



