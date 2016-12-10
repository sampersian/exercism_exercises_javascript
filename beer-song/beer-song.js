class BeerSong {
  verse(n) {
    if (n === 1) {
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
    } else if (n === 2) {
      return String(n)+' bottles of beer on the wall, '+String(n)+' bottles of beer.\nTake one down and pass it around, '+String(n-1)+' bottle of beer on the wall.\n';
    } else if (n === 0) {
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    } else {
      return String(n)+' bottles of beer on the wall, '+String(n)+' bottles of beer.\nTake one down and pass it around, '+String(n-1)+' bottles of beer on the wall.\n';
    }

  }
  sing(start, end) {
    let bs = '';
    if (end) {
      for (var i = start; i >= end; i--) {
        if (i === end) {
          bs += this.verse(i)
        } else {
          bs += this.verse(i)+"\n";
        }
      }
    } else {
      for (var i = start; i >= 0; i--) {
        if (i === 0) {
          bs += this.verse(i)+"\n";
          bs = bs.split("").reverse().join("").replace("\n","").split("").reverse().join("")
        } else {
          bs += this.verse(i)+"\n";
        }
      }
    }
    return bs;
  }
}

module.exports = BeerSong;
