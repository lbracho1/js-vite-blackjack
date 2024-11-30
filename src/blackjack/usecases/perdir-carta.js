// esta funcion me permite tomar una carta 
/**
 * Esta funcion entrega una carta
 * @param {Array<string>} deck entrega una cartax      
 * @returns {String} retorna una nueva carta
 */


export const pedirCarta = ( deck ) => {
// Esta función me permite tomar una carta

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
    

}
 
