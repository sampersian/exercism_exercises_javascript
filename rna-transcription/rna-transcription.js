class dnaTranscriber {
  toRna(dna) {
    let rna = "";
    for (var i = 0; i < dna.length; i++) {
      let letter = dna[i];
      switch (letter) {
        case "G":
          rna += "C";
          break;
        case "C":
          rna += "G"
          break;
        case "T":
          rna += "A";
          break;
        case "A":
          rna += "U"
          break;
        default:
          break;
      }
    }
    return rna;
  }
}

module.exports = dnaTranscriber;
