
describe(" Accord de phrase singulier en genre et en nombre", function () {
  var getDeterminant = require("../src/getDeterminant");

  // Accord sujet verbe 
  var phrase1 = "Le véhicule est garé dans la parking",
    phrase2 = "Je regarde l'enfant partir",
    phrase3 = " Je crois que cette garage reste suberbe malgre tout!",
    concept1 = "véhicule",
    concept2 = "enfant",
    concept3 = "garage",
    concept4 = "montagne";

  it("Sujet avec verbe", function () {
    expect(getDeterminant(phrase1, concept1)).toBe("le");
    expect(getDeterminant(phrase2, concept2)).toBe("l'");
    expect(getDeterminant(phrase3, concept3)).toBe("cette");
  })


})