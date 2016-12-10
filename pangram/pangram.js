class Pangram {
  constructor(str) {
    this.sentence = str.toLowerCase();
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }
  isPangram() {
    for (let letter of this.alphabet) {
      if (this.sentence.indexOf(letter) === -1) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Pangram;
