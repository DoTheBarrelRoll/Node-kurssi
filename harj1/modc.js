class Luokka {
  constructor(num1, num2, array) {
    this.num1 = num1;
    this.num2 = num2;
    this.array = array;
  }
  randomNumber() {
    var luku = 100 + Math.floor(Math.random() * (100));
    return luku;
  }
  calcAverage() {
    var lista = [0, 7];
    var summat = 0;
    for(var i = 0; i < lista.length; i++) {
      summat += lista[i];
    }
    var keskiarvo = summat / lista.length;
    return keskiarvo;
  }
}

var olio = new Luokka();

module.exports = olio;
