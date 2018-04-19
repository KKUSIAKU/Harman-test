var getDeterminant = require("./getDeterminant"),
  determinants = require("./determinants")();

/**
 * 
 * @param {string} phrase La phase a accordee
 * @param {string} concept 
 * @param {string} lex 
 * @param {string} genre 
 * @param {string} nombre 
 */

module.exports = function accord(phrase, concept, lex, genre, nombre) {
  var _phraseAccordee = "",
    _determinant = null,
    _conceptRegx,
    _conceptIndex,
    _newConcept;


  // laisse la phrase inchangee si le mot visee n est pas dans la phrase
  if (!phrase.includes(concept)) {
    return phrase.substring(-1);
  }

  _determinant = getDeterminant(phrase, concept);

  if (_determinant === null) {
    return phrase.substring(-1);
  }

  _phraseAccordee = phrase.substring(-1).toLowerCase();

  if (nombre === "plur") {
    // exclue les execptions a la regle de s au pluriel pour le monment
    lex = lex[lex.length - 1] === "s" ? lex : `${lex}s`;
    _newConcept = `${determinants[_determinant].pluriel()} ${lex}`;
    _phraseAccordee = _phraseAccordee.replace(`${determinants[_determinant].value} ${concept}`,
      _newConcept);

  } else if(genre != determinants[_determinant].genre) {
    _phraseAccordee = _phraseAccordee.replace(`${determinants[_determinant].value} ${concept}`,
      `${determinants[_determinant].contraire()} ${lex}`);
  } else {
    _phraseAccordee = _phraseAccordee.replace(concept, lex);
  }
  _phraseAccordee = _phraseAccordee[0].toUpperCase() + _phraseAccordee.substr(1);



  return _phraseAccordee;
}

