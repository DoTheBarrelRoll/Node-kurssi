class Luokka {
  constructor(num1, num2, array) {
    this.num1 = num1;
    this.num2 = num2;
    this.array = array;
  }
  randomNumber() {
    var luku = this.num1 + Math.floor(Math.random() * (this.num2 - this.num1));
    return luku;
  }
  calcAverage() {
    var summat = 0;
    for(var i = 0; i < this.array.length; i++) {
      summat += this.array[i];
    }
    var keskiarvo = summat / this.array.length;
    return keskiarvo;
  }
}

module.exports = Luokka;
