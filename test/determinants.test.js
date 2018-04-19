describe("Validation du registre des determinants", function(){
  
  var determinants = require("../src/determinants")();

 it("Devrait retourne le registre de determinants", function(){
   expect(determinants).toBeTruthy();

    expect(determinants.un.value).toBe("un");
    expect(determinants.une.contraire()).toBe("un");
    expect(determinants.un.genre).toBe("masc");


    expect(determinants.la.value).toBe("la");
    expect(determinants.la.contraire()).toBe("le");
    expect(determinants.la.genre).toBe("fem");


    expect(determinants.un.tranform({cont: true})).toBe("une");
    expect(determinants.un.tranform({plur: true, cont: true})).toBe("des");

    expect(determinants.une.tranform({cont: true})).toBe("un");
    expect(determinants.une.tranform({plur: true, cont: true})).toBe("des");


    expect(determinants.le.tranform({cont: true})).toBe("la");
    expect(determinants.le.tranform({plur: true, cont: true})).toBe("les");

    expect(determinants.la.tranform({cont: true})).toBe("le");
    expect(determinants.la.tranform({plur: true, cont: true})).toBe("les");



    expect(determinants.un.tranform({plur: true, cont: true})).toBe(determinants.une.tranform({plur: true, cont: true}))

    expect(determinants.le.tranform({plur: true, cont: true})).toBe(determinants.la.tranform({plur: true, cont: true}))

  })

})