/*****************************/
// Importaciones
/*****************************/

// import { heroes } from './data/heroes';
import {heroes,owners} from '../data/heroes';

const getHeroeById = (id) => heroes.find((elemento)=> elemento.id == id);
const getHeroesByOwner = (owner) => heroes.filter((elemento)=> elemento.owner == owner);
// console.log(getHeroeById(2))

export{
    getHeroeById,
    getHeroesByOwner
}



// console.log(getHeroesByOwner('Marvel'))
// console.log(owners)