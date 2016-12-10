class PhoneNumber {
  constructor(str) {
    this.num = str;
  }
  number() {
    let num = ''
    for (let n of this.num) {
      if (Number(n) >= 0 && n !== " ") {
        num += n;
      }
    }
    if (num.length === 11 && num[0] === '1') {
      return num.substring(1,11);
    } else if (num.length === 11 && num[0] !== '1') {
      return '0000000000'
    } else if (num.length < 10) {
      return '0000000000'
    } else {
      return num;
    }
  }
  areaCode() {
    let num = this.number();
    return num.substring(0,3);
  }
  toString() {
    let num = this.number();
    let area = num.substring(0,3);
    let middle = num.substring(3,6);
    let end = num.substring(6,10);
    return "("+area+") "+middle+"-"+end;
  }
}

module.exports = PhoneNumber;
