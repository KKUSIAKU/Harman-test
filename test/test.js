

describe(" Accord de phrase singulier en genre et en nombre", function(){
 var accord = require("../src/index.js");

  // Accord sujet verbe 
  var phrase = "Le véhicule est garé dans le parking",
  phrase2 = "Ce matin, le chien est parti";

  // 
 it("Laise la phrase inchangee", function(){
    expect(accord(phrase, "moto","voiture","masc","sing")).toBe(phrase);
  })
  

  it("Accord du sujet uniquement", function(){
    // les fautes de grammaires sont expres ici pour tester uniquement mon code.
    expect(accord(phrase,"véhicule","voiture","fem","sing")).toBe("La voiture est garé dans le parking");
    expect(accord(phrase, "véhicule","voiture","fem","plur")).toBe("Les voitures est garé dans le parking");

    expect(accord(phrase2,"chien","tour","masc","sing")).toBe("Ce matin, le tour est parti");
    expect(accord(phrase2, "chien","tour","masc","plur")).toBe("Ce matin, les tours est parti")
  
  
  })


})