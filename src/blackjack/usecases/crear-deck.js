import _ from "underscore";

/**
 * Esta función me permite crear un deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array} retorna un deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  if (!tiposDeCarta || tiposDeCarta.length === 0 ) {
    throw "Se necesitan los tipos de carta como un arreglo de string.";
  }
  
  if (!tiposEspeciales || tiposEspeciales.length === 0 ) {
    throw "Se necesitan los tipos especiales como un arreglo de string.";
  }
 
  let deck = [];

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // el método shuffle de underscore me permite mezclar el deck de cartas
  deck = _.shuffle(deck);
  return deck;
};
