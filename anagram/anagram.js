class Anagram {
  constructor(str) {
    this.word = str.toLowerCase();
  }
  matches(arr) {
    var args = arr;
    if (typeof arr === "string") {
      args = [];
      for (let key in Object.keys(arguments)) {
        args.push(arguments[key]);
      }
    }
    var matches = [];
    var sortedWord = this.word.split("").sort().join("");
    for (let a of args) {
      if (this.word === a.toLowerCase()) {
        continue;
      }
      let sortedA = a.toLowerCase().split("").sort().join("");
      if (sortedA === sortedWord) {
        matches.push(a);
      }
    }
    return matches;
  }
}

module.exports = Anagram;
