class Isogram {
  constructor(word) {
    this.word = word;
  }
  isIsogram() {
    let word = this.word.toLowerCase();
    var lets = [];
    for (var letter in word) {
      if (word[letter] === "-" || word[letter] === " ") continue;
      if (lets.indexOf(word[letter]) === -1) {
        lets.push(word[letter]);
      } else {
        return false;
      }
    }
    return true;
  }
}

module.exports = Isogram;
