class Words {
  count(str) {
    let counts = {}
    let words = str.replace('\n', ' ').replace('\t',' ').replace('\t', ' ').split(" ");
    let ws = [];
    for (let word of words) {
      if (word !== " " && word !== "") ws.push(word);
    }
    for (let w of ws) {
      let word = w.toLowerCase();
      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        if (typeof counts[word] === 'function') {
          counts[word] = 1;
        } else {
          counts[word] += 1;
        }
      }
    }
    return counts;
  }
}

module.exports = Words;
