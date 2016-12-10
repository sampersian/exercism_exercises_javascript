class ETL {
  transform(a) {
    let b = {}
    for (let i in a) {
      for (let c of a[i]) {
        b[c.toLowerCase()] = Number(i);
      }
    }
    return b;
  }
}

module.exports = ETL;
