/**
 * Esta función me permite saber el valor de la carta o obtener el valor de la carta
 * @param {String} carta
 * @returns {Number} valor de la carta
 */

export const valorCarta = (carta) => {
  // el substring me permite tomar una parte de la cadena de texto y el -1 me permite tomar todo menos el último caracter
  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
