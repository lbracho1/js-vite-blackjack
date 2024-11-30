mport   crearDeck, {miNombre}  from './usecases/crear-deck';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';

import {crearDeck, valorCarta, pedirCarta, turnoComputadora, crearCartaHTML } from './usecases';

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0;
   

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNue