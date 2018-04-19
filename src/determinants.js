/**
 * @function getListDeterminants fournit une function qui permet d'avoir access a la liste des determinantss
 * possible
 */

var getListDeterminants = (function () {
  var _determinant = {};

  /**
  * @function Determinant 
  * @param {string} det Le determinant a ajouter au registre
  * @param {string} cont Le contraire du deterimant
  * @param {string} genre Le genre du determinant
  *
  */

  function Determinant(det, cont,plur,nombre) {
    this.value = det;
    this.cont = cont;
    this.plur = plur;
    this.nombre = nombre;
  }

  Determinant.prototype.contraire = function contraire() {
    return this.cont;
  }

  Determinant.prototype.pluriel = function pluriel(){
    return this.plur;
  }

  Determinant.prototype.tranform = function tranform(options){
    var { plur, cont } = options;
    if(plur) { 
      return this.pluriel();
    } else if(cont){
      return this.contraire();
    }
    return this.value;
  }

  
  function DeterminantPrototype() { }
  DeterminantPrototype.prototype = Determinant.prototype;


  function Masculin(det, cont,plur,nombre) {
    Determinant.call(this, det, cont,plur,nombre);
  }
  Masculin.prototype = new DeterminantPrototype();
  Masculin.prototype.constructor = Masculin;
  Masculin.prototype.genre = "masc";

  function Feminin(det,cont,plur,nombre) {
    Determinant.call(this,det,cont,plur);
   }
  Feminin.prototype = new DeterminantPrototype();
  Feminin.prototype.constructor = Feminin;
  Feminin.prototype.genre = "fem";


  _determinant.un = new Masculin("un", "une","des","sing");
  _determinant.le = new Masculin("le", "la","les","sing");

  _determinant.une = new Feminin("une", "un","des","sing");
  _determinant.la = new Feminin("la", "le","les","sing" );

  return function () {
    return _determinant
  };

})()

module.exports = getListDeterminants;

