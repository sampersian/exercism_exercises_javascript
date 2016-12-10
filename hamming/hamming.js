class Hamming {
  compute(a, b) {
    if (a.length !== b.length) {
      throw new Error('DNA strands must be of equal length.');
    }
    let dist = 0;
    for (var i = 0; i < a.length; i++) {
      if (a[i] === b[i]) {
        continue;
      } else {
        dist += 1;
      }
    }
    return dist;
  }
}

module.exports = Hamming;
