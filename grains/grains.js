var bigInt = require("./big-integer");

class Grains {
  square(n) {
    return String(bigInt(2).pow(n - 1))
  }
  total() {
    return String(bigInt(2).pow(64).prev())
  }

}

module.exports = Grains;
