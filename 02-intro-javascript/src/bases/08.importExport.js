/*****************************/
// Importaciones
/*****************************/

// import { heroes } from './data/heroes';
import {heroes,owners} from '../data/heroes';

const getHeroeById = (id) => heroes.find((elemento)=> elemento.id == id);
// console.log(getHeroeById(2))

const getHeroesByOwner = (owner) => heroes.filter((elemento)=> elemento.owner == owner);

console.log(getHeroesByOwner('Marvel'))
console.log(owners)