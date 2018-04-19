/**
 * @function getDeterminant Extrait le determinant de context
 * @param {string} phrase La phrase de recherche
 * @param {string} context Le mot dont on cherche le determinant dans la phrase 
 * @returns {string} le determiant de context si celui-ci est present dans la phrase, null sinon
 *
 */


module.exports = function getDeterminant(phrase,context){
  var _regxStr = new RegExp(`(\\w+)(\\s|')(?=${context})`,"g"),
  determinant = null;
 try{
  determinant = phrase.match(_regxStr)[0].toLowerCase().trim();
  return determinant;
 } catch(e){
   return null;
 }

}